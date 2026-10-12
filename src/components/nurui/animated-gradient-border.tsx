"use client";
import React, {
  CSSProperties,
  ReactNode,
  HTMLAttributes,
  useEffect,
  useRef,
} from 'react';

type AnimationMode = 'auto-rotate' | 'rotate-on-hover' | 'stop-rotate-on-hover';

interface BorderRotateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  children: ReactNode;
  className?: string;
  animationMode?: AnimationMode;
  animationSpeed?: number;
  gradientColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  backgroundColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  style?: CSSProperties;
}

const defaultGradientColors = {
  primary: '#584827',
  secondary: '#c7a03c',
  accent: '#f9de90'
};

const BorderRotate: React.FC<BorderRotateProps> = ({
  children,
  className = '',
  animationMode = 'auto-rotate',
  animationSpeed = 5,
  gradientColors = defaultGradientColors,
  backgroundColor = '#1b1d2b',
  borderWidth = 2,
  borderRadius = 20,
  style = {},
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationMode !== 'auto-rotate') return;

    let angle = 0;
    let animationFrame: number;

    const rotate = () => {
      angle = (angle + 1) % 360;
      if (ref.current) {
        ref.current.style.setProperty('--gradient-angle', `${angle}deg`);
      }
      animationFrame = requestAnimationFrame(rotate);
    };

    rotate();

    return () => cancelAnimationFrame(animationFrame);
  }, [animationMode]);

  const handleMouseEnter = () => {
    if (animationMode === 'rotate-on-hover') {
      startRotation();
    } else if (animationMode === 'stop-rotate-on-hover') {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (animationMode === 'rotate-on-hover') {
      cancelAnimationFrame(animationRef.current);
    } else if (animationMode === 'stop-rotate-on-hover') {
      startRotation();
    }
  };

  const animationRef = useRef<number>(0);
  const angleRef = useRef<number>(0);

  const startRotation = () => {
    const rotate = () => {
      angleRef.current = (angleRef.current + 1) % 360;
      if (ref.current) {
        ref.current.style.setProperty('--gradient-angle', `${angleRef.current}deg`);
      }
      animationRef.current = requestAnimationFrame(rotate);
    };
    rotate();
  };

  const getAnimationClass = () => {
    return '';
  };

  const combinedStyle: CSSProperties = {
    '--gradient-primary': gradientColors.primary,
    '--gradient-secondary': gradientColors.secondary,
    '--gradient-accent': gradientColors.accent,
    '--bg-color': backgroundColor,
    '--border-width': `${borderWidth}px`,
    '--border-radius': `${borderRadius}px`,
    '--animation-duration': `${animationSpeed}s`,
    '--gradient-angle': '0deg',
    border: `${borderWidth}px solid transparent`,
    borderRadius: `${borderRadius}px`,
    backgroundImage: `
      linear-gradient(${backgroundColor}, ${backgroundColor}),
      conic-gradient(
        from var(--gradient-angle),
        ${gradientColors.primary} 0%,
        ${gradientColors.secondary} 30%,
        ${gradientColors.accent} 60%,
        ${gradientColors.primary} 100%
      )
    `,
    backgroundClip: 'padding-box, border-box',
    backgroundOrigin: 'padding-box, border-box',
    ...style,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`gradient-border-component ${getAnimationClass()} ${className}`}
      style={combinedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};

export { BorderRotate };
