import Section from "@/components/ui/Section";
import { technologies } from "@/content/technologies.mdx";

export default function Technologies() {
  return (
    <Section title="Technologies">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech: string) => (
          <span key={tech} className="px-3 py-1 text-sm bg-gray-100 text-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </Section>
  );
}

