import React from "react";
import styles from "../../Styles/Components/Shared/SocialButton.module.scss";
interface btnProps {
  name?: string;
  provider?: string;
}
export default function SocialButton({ name, provider }: btnProps) {
  return (
    <button
      type='button'
      className={`${styles.socialBtn} ${provider == "google" && styles.bgClr}`}
    >
      {name}
    </button>
  );
}
