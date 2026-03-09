import React from "react";
import Card from "../Card/Card";
import styles from "./ExperienceCard.module.scss";

export interface ExperienceItem {
  label: string;
}

export interface ExperienceCardProps {
  title: string;
  jobTitle: string;
  duration: string;
  description: string;
  image?: string;
  items?: ExperienceItem[];
  className?: string;
}

export default function ExperienceCard({
  title,
  jobTitle,
  duration,
  description,
  image,
  items = [],
  className,
}: ExperienceCardProps) {
  const header = (
    <div className={styles.header}>
      <div className={styles.imagePlaceholder}>
        {image && <img src={image} alt={title} />}
      </div>
      <div className={styles.meta}>
        <span className={styles.title}>{title}</span>
        <span className={styles.jobTitle}>{jobTitle}</span>
        <span className={styles.duration}>{duration}</span>
      </div>
    </div>
  );

  const content = (
    <>
      <p className={styles.description}>{description}</p>
      {items.length > 0 && (
        <div className={styles.items}>
          {items.map((item, i) => (
            <span key={i} className={styles.item}>
              {item.label}
            </span>
          ))}
        </div>
      )}
    </>
  );

  return <Card variant="glitch" title={header} content={content} className={className} />;
}
