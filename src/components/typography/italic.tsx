import React from "react";

type ItalicProps = {
  children: React.ReactNode;
};

export default function Italic({ children }: ItalicProps) {
  return <span className="italic">{children}</span>;
}
