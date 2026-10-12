"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

const vertexShader = `
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
`;

const fragmentShader = `
  precision lowp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_intensity;

  vec3 hash3(vec2 p) {
    vec3 q = vec3(dot(p, vec2(127.1, 311.7)),
                  dot(p, vec2(269.5, 183.3)),
                  dot(p, vec2(419.2, 371.9)));
    return fract(sin(q) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    return mix(
      mix(dot(hash3(i + vec2(0.0, 0.0)).xy, f - vec2(0.0, 0.0)),
          dot(hash3(i + vec2(1.0, 0.0)).xy, f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash3(i + vec2(0.0, 1.0)).xy, f - vec2(0.0, 1.0)),
          dot(hash3(i + vec2(1.0, 1.0)).xy, f - vec2(1.0, 1.0)), u.x),
      u.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for(int i = 0; i < 6; i++) {
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  float voronoi(vec2 p) {
    vec2 n = floor(p);
    vec2 f = fract(p);
    float md = 50.0;
    for(int i = -1; i <= 1; i++) {
      for(int j = -1; j <= 1; j++) {
        vec2 g = vec2(i, j);
        vec2 o = hash3(n + g).xy;
        o = 0.5 + 0.41 * sin(u_time * 1.5 + 6.28 * o);
        vec2 r = g + o - f;
        float d = dot(r, r);
        md = min(md, d);
      }
    }
    return sqrt(md);
  }

  vec2 curl(vec2 p) {
    float eps = 0.1;
    float n1 = fbm(p + vec2(eps, 0.0));
    float n2 = fbm(p - vec2(eps, 0.0));
    float n3 = fbm(p + vec2(0.0, eps));
    float n4 = fbm(p - vec2(0.0, eps));
    return vec2((n3 - n4) / (2.0 * eps), (n2 - n1) / (2.0 * eps));
  }

  float grain(vec2 uv, float time) {
    vec2 seed = uv * time;
    return fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = (uv - 0.5) * 2.0;
    st.x *= u_resolution.x / u_resolution.y;

    float time = u_time * 0.25;

    vec2 curlForce = curl(st * 2.0) * 0.6;
    vec2 flowField = st + curlForce;

    float dist = fbm(flowField * 2.0 + time) * 0.6;

    float cells = voronoi(flowField * 2.5 + time * 0.5);
    cells = smoothstep(0.1, 0.7, cells);

    float intensity = (1.0 - abs(st.x + dist)) * (1.0 + cells * 0.2) * u_intensity;

    vec3 baseColor = mix(vec3(1.0, 0.1, 0.6), vec3(0.1, 0.5, 1.0), uv.y);

    vec3 color = baseColor * intensity;

    float grainVal = grain(uv, time * 0.5) * 0.2 - 0.1;
    color += grainVal;

    // Vignette
    float vignette = smoothstep(0.7, 0.0, length(uv - 0.5));
    color *= vignette;

    // Gamma correction
    color = pow(color, vec3(0.8));

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function VirusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const bufferRef = useRef<WebGLBuffer | null>(null);
  const positionLocationRef = useRef<number>(0);
  const timeLocationRef = useRef<WebGLUniformLocation | null>(null);
  const resolutionLocationRef = useRef<WebGLUniformLocation | null>(null);
  const mouseLocationRef = useRef<WebGLUniformLocation | null>(null);
  const intensityLocationRef = useRef<WebGLUniformLocation | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const intensityRef = useRef<{ current: number }>({ current: 1.0 });
  const animatingRef = useRef<boolean>(false);

  const createShader = useCallback(
    (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    },
    [],
  );

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;
    glRef.current = gl;

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }
    programRef.current = program;

    const buffer = gl.createBuffer();
    if (!buffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    bufferRef.current = buffer;

    positionLocationRef.current = gl.getAttribLocation(program, "position");
    timeLocationRef.current = gl.getUniformLocation(program, "u_time");
    resolutionLocationRef.current = gl.getUniformLocation(
      program,
      "u_resolution",
    );
    mouseLocationRef.current = gl.getUniformLocation(program, "u_mouse");
    intensityLocationRef.current = gl.getUniformLocation(
      program,
      "u_intensity",
    );

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (
        canvas.width !== rect.width * dpr ||
        canvas.height !== rect.height * dpr
      ) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current.x = (e.clientX - rect.left) * dpr;
      mouseRef.current.y = (rect.height - (e.clientY - rect.top)) * dpr;

      if (!animatingRef.current) {
        animatingRef.current = true;
        gsap.to(intensityRef.current, {
          value: 1.15,
          duration: 0.3,
          ease: "power2.out",
          onUpdate: () => {},
          onComplete: () => {
            gsap.to(intensityRef.current, {
              value: 1.0,
              duration: 1.0,
              ease: "power2.out",
              onComplete: () => {
                animatingRef.current = false;
              },
            });
          },
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [createShader]);

  useEffect(() => {
    const cleanup = initGL();

    let animationFrameId: number;

    const render = () => {
      const time = (Date.now() - startTimeRef.current) * 0.001;
      const gl = glRef.current;
      const program = programRef.current;
      const buffer = bufferRef.current;

      if (gl && program && buffer) {
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(positionLocationRef.current);
        gl.vertexAttribPointer(
          positionLocationRef.current,
          2,
          gl.FLOAT,
          false,
          0,
          0,
        );

        gl.uniform1f(timeLocationRef.current!, time);
        gl.uniform2f(
          resolutionLocationRef.current!,
          gl.canvas.width,
          gl.canvas.height,
        );
        gl.uniform2f(
          mouseLocationRef.current!,
          mouseRef.current.x,
          mouseRef.current.y,
        );
        gl.uniform1f(
          intensityLocationRef.current!,
          intensityRef.current.current ?? 1.0,
        );

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (cleanup) cleanup();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [initGL]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#000510" }}
      />
    </section>
  );
}
