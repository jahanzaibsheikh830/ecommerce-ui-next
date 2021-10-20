import React from "react";
interface btnProps {
  name?: string;
  provider?: string;
}
export default function SocialButton({ name, provider }: btnProps) {
  return (
    <button
      type='button'
      className={`socialBtn ${provider == "google" && "bgClr"}`}
    >
      {name}
    </button>
  );
}
