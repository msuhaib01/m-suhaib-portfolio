import React from "react";

type BoldProps = {
  children: React.ReactNode;
};

export default function Bold({ children }: BoldProps) {
  return <span className="font-extrabold">{children}</span>;
}
