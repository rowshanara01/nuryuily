import Image from "next/image";
import React from "react";

interface IPros {
  src: string;
  className?: string;
  alt?: string;
}

const ImageComponent: React.FC<IPros> = ({ src, className, alt }) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt || ""}
      height={0}
      width={0}
      unoptimized
    />
  );
};

export default ImageComponent;
