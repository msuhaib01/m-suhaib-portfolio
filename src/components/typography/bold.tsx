import React, { HTMLAttributes } from "react";

type BoldProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export default function Bold({ children, className, ...props }: BoldProps) {
  return (
    <span className={`font-bold ${className}`} {...props}>
      {children}
    </span>
  );
}
