import React from "react";

type ItalicProps = {
  childern: React.ReactNode;
};

export default function Italic({ childern }: ItalicProps) {
  return <span className="italic">{childern}</span>;
}
