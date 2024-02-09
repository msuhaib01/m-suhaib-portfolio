import React from "react";

type UnderlineProps = {
  children: React.ReactNode;
};

export default function Underline({ children }: UnderlineProps) {
  return <span className="underline">{children}</span>;
}
