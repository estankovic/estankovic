import Section from "@/components/ui/Section";
import { hobbies } from "@/content/hobbies.mdx";

export default function Hobbies() {
  return (
    <Section title="Hobbies">
      <ul className="flex flex-col gap-3">
        {hobbies.map((hobby) => (
          <li key={hobby.label} className="flex items-baseline gap-3">
            <span>{hobby.emoji}</span>
            <span className="font-bold">{hobby.label}</span>
            <span className="text-sm opacity-50">{hobby.description}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
