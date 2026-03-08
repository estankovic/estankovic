import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  variant?: "default" | "glitch";
  className?: string;
}

export default function Card({ title, content, variant = "default", className }: CardProps) {
  return (
    <div
      className={[
        styles.card,
        variant === "glitch" && styles.glitch,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
