import Glitch from "@/components/ui/Glitch";
import styles from "./Hero.module.scss";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eduard-stankovi%C4%8D-9449649b/" },
  { label: "Instagram", href: "https://www.instagram.com/eduard.stankovic" },
  { label: "Medium", href: "https://medium.com/@eduardstankovic" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <Glitch>
          <div className={styles.avatar}>
            <img src="/logos/me.png" alt="Eduard Stankovič" />
          </div>
        </Glitch>
        <div className={styles.identity}>
          <Glitch><h1>Eduard Stankovič</h1></Glitch>
          <p className={styles.subtitle}>Builds UIs by day 💻, paints landscapes by weekend 🎨 — somewhere between pixels, rocks 🪨, and mountain trails ⛰️.</p>
        </div>
      </div>
      <div className={styles.links}>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
