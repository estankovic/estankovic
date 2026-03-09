import Section from "@/components/ui/Section";
import TechChip from "@/components/ui/TechChip/TechChip";
import { brandColors, hexToHue } from "@/components/ui/TechChip/brandColors";
import { technologies } from "@/content/technologies.mdx";

const START_HUE = 185;

function sortBySecondColorHue(items: string[]): string[] {
  return [...items].sort((a, b) => {
    const hueA = (hexToHue(brandColors[a]?.[1] ?? "#888888") - START_HUE + 360) % 360;
    const hueB = (hexToHue(brandColors[b]?.[1] ?? "#888888") - START_HUE + 360) % 360;
    return hueA - hueB;
  });
}

export default function Technologies() {
  const sorted = sortBySecondColorHue(technologies);

  return (
    <Section title="Technologies">
      <div className="flex flex-wrap gap-3">
        {sorted.map((tech: string) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>
    </Section>
  );
}
