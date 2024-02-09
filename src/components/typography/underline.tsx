import React from "react";

type UnderlineProps = {
  childern: React.ReactNode;
};

export default function Underline({ childern }: UnderlineProps) {
  return <span className="underline">{childern}</span>;
}
