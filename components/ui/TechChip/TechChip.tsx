import { brandColors } from "./brandColors";
import styles from "./TechChip.module.scss";

export default function TechChip({ label }: { label: string }) {
  const [c1, c2] = brandColors[label] ?? ["#ff00cc", "#34dbce"];

  return (
    <span
      className={styles.chip}
      style={{ "--chip-c1": c1, "--chip-c2": c2 } as React.CSSProperties}
    >
      <span className={styles.label}>{label}</span>
    </span>
  );
}
