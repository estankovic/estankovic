import React, { isValidElement, cloneElement } from "react";
import styles from "./Glitch.module.scss";

interface GlitchProps {
  children: React.ReactNode;
  className?: string;
}

export default function Glitch({ children, className }: GlitchProps) {
  const child = React.Children.only(children);

  const titled = isValidElement(child)
    ? cloneElement(child as React.ReactElement<{ className?: string }>, {
        className: [styles.title, (child.props as { className?: string }).className]
          .filter(Boolean)
          .join(" "),
      })
    : <span className={styles.title}>{child}</span>;

  return (
    <div className={[styles.glitch, className].filter(Boolean).join(" ")}>
      {titled}
    </div>
  );
}
