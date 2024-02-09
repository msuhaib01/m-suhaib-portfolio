import React from "react";

type BoldProps = {
  childern: React.ReactNode;
};

export default function Bold({ childern }: BoldProps) {
  return <span className="font-extrabold">{childern}</span>;
}
