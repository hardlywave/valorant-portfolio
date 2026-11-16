import React from "react";

interface MaskIconProps {
  src: string;
  size: number;
  label?: string;
}

// Renders a monochrome API icon in the current text colour.
const MaskIcon = ({ src, size, label }: MaskIconProps) => (
  <span
    className="mask-icon"
    role={label ? "img" : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
    style={{
      width: size,
      height: size,
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
    }}
  />
);

export default MaskIcon;
