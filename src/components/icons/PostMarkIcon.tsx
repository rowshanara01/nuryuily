import { cn } from "@/lib/utils";

const PostMarkIcon = ({
  className,
  isAnimation = true,
  reSize,
}: {
  className?: string;
  isAnimation?: boolean;
  reSize?: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={reSize ? "80px" : "75px"}
      height={reSize ? "80px" : "75px"}
      viewBox="0 0 28 28"
      className={cn(isAnimation && "social-icon-animation", className)}
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAWpJREFUSEvtla9Pw1AQxz+dWOaHQpCAAIHkL5haCIYNRYLBkEyNoEGREAwBxw+BQg+QS5AgcRjMEgTJEtbMLgi6HK/NSGl7r11HEHuqeXnvPve9u/et43Xw+MPlTIF5V/uflrQUo/PT3/+yr4Oq0O3DzV10wLlZs1+rApLUQAcnAwvgujCzogc6O4BmQ4daKzy+gO4HLM7DWsUk8PYOrfYoGRuoqvA7XBH29uH0GnY24fLkh+IBbDRG4N4zlMtATF9VhRRigEG/QmVvnUNtdRygiClFKAwNiLNgVE8OGDyJItzeQ10GBnhpw/JSjgrrVbg6gm7PAB4eYffQfMtAvT4lT6rew1BJkx6INjByd2ygKN5a9x+/DJjiOqmBv56FpJ3C4rIDLWwsqvzZgRItA1R1GvFSMe/A2oQjFiarua17bPiEFTDOvL3OhIBxv6f8FYoA30sjteTew/QVU2/YTakaxv7AFGhfK8uTQ9IlxS3SfEEQAAAAAElFTkSuQmCC"
        x={0}
        y={0}
        width={28}
        height={28}
      />
    </svg>
  );
};

export default PostMarkIcon;
