import { cn } from "@/lib/utils";
import React from "react";

const ProtonMailIcon = ({
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
      x="0px"
      y="0px"
      width={reSize ? "80px" : "75px"}
      height={reSize ? "80px" : "75px"}
      viewBox="0 0 48 48"
      className={cn(isAnimation && "social-icon-animation", className)}
    >
      <linearGradient
        id="ZNqYm4G6EytizOfIqnhpwa_82aYkgJax8kO_gr1"
        x1="24"
        x2="24"
        y1="2.782"
        y2="42.377"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#6d75d6"></stop>
        <stop offset=".123" stopColor="#8189de"></stop>
        <stop offset=".384" stopColor="#a7adec"></stop>
        <stop offset=".625" stopColor="#c3c7f6"></stop>
        <stop offset=".838" stopColor="#d3d6fd"></stop>
        <stop offset="1" stopColor="#d9dcff"></stop>
      </linearGradient>
      <path
        fill="url(#ZNqYm4G6EytizOfIqnhpwa_82aYkgJax8kO_gr1)"
        d="M42.462,9.254L26.355,22.089c-1.405,1.12-3.399,1.115-4.8-0.01L5.535,9.198	C4.909,8.721,4,9.161,4,9.941v5.603V36c0,1.657,1.343,3,3,3h34c1.657,0,3-1.343,3-3V9.995C44,9.201,43.083,8.759,42.462,9.254z"
      ></path>
      <linearGradient
        id="ZNqYm4G6EytizOfIqnhpwb_82aYkgJax8kO_gr2"
        x1="19.714"
        x2="19.714"
        y1="15.228"
        y2="39.139"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#7b83eb"></stop>
        <stop offset="1" stopColor="#5961c3"></stop>
      </linearGradient>
      <path
        fill="url(#ZNqYm4G6EytizOfIqnhpwb_82aYkgJax8kO_gr2)"
        d="M35.429,14.858l-13.79,10.988c-1.404,1.119-3.395,1.116-4.796-0.007L4,15.545v20.459	c0,1.656,1.341,2.998,2.997,3l28.432,0.031V14.858z"
      ></path>
    </svg>
  );
};

export default ProtonMailIcon;
