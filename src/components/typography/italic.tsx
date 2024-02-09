import React, { HTMLAttributes } from "react";

type ItalicProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export default function Italic({ children, className, ...props }: ItalicProps) {
  return (
    <span className={`italic ${className}`} {...props}>
      {children}
    </span>
  );
}
