import React from "react";
import styles from "./Glitch.module.scss";

interface GlitchProps {
  children: React.ReactNode;
  className?: string;
}

export default function Glitch({ children, className }: GlitchProps) {
  return (
    <div className={[styles.glitch, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
