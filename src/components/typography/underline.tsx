import React, { HTMLAttributes } from "react";
type UnderlineProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export default function Underline({
  children,
  className,
  ...props
}: UnderlineProps) {
  return (
    <span className={`underline ${className}`} {...props}>
      {children}
    </span>
  );
}
