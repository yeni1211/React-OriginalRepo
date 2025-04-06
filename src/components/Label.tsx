import React, { useState } from 'react';

interface LabelProps {
  name: string;
  hoverStyle?: React.CSSProperties;
}

export function Label({ name, hoverStyle }: LabelProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <label
      style={{
        ...labelStyles,
        ...(isHovered && hoverStyle),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </label>
  );
}

const labelStyles: React.CSSProperties = {
  cursor: "pointer",
  transition: "color 0.3s ease",
};