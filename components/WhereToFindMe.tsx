import Section from "@/components/ui/Section";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eduard-stankovi%C4%8D-9449649b/", description: "Professional profile" },
  { label: "Instagram", href: "https://www.instagram.com/eduard.stankovic", description: "Photography & life" },
  { label: "Medium", href: "https://medium.com/@eduardstankovic", description: "Writing & articles" },
];

export default function WhereToFindMe() {
  return (
    <Section title="Where to find me">
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-3 group"
            >
              <span className="font-bold group-hover:underline">{link.label}</span>
              <span className="text-sm opacity-50">{link.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
