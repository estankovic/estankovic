import React from "react";
import Glitch from "../Glitch/Glitch";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.heading}>
        <Glitch><h2>{title}</h2></Glitch>
      </div>
      {children}
    </section>
  );
}
