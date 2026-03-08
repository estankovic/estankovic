import ExperienceCard, { ExperienceCardProps } from "@/components/ui/ExperienceCard";
import Glitch from "@/components/ui/Glitch";

const experiences: ExperienceCardProps[] = [
  {
    title: "Uniqa.at",
    jobTitle: "Lead Frontend Developer",
    duration: "OCT 2020 – Present",
    description:
      "At Uniqa.at I had a chance to work on their customer portal MyUniqa. Later I was transferred to work on transforming their internal applications. I work in a frontend team of 3 FE developers, where I am the lead developer. Our goal is to introduce new sustainable technology and improve UX and UI.",
    items: [],
  },
  {
    title: "Revolt.city",
    jobTitle: "Frontend Developer",
    duration: "DEC 2020 – JUL 2021",
    description:
      "For Revolt.city I had a chance to develop a mobile application for their servicemen. It was built using the latest trends in hybrid development — Angular, Ionic 5 and Capacitor. Usage of those technologies allowed fast delivery and reduced cost of development and maintenance compared to native counterparts.",
    items: [],
  },
  {
    title: "USU Software s.r.o.",
    jobTitle: "Lead Frontend Developer / Design System",
    duration: "JUL 2017 – JUL 2020",
    description:
      "USU is a large corporation that develops many different products and solutions. I had a chance to work on a BI tool that helped improve ETL processes, built with Angular using Angular Material components. Later I initiated a movement to introduce WebComponents to unify the UI and became lead developer for the Design System, built with Stencil.js.",
    items: [],
  },
  {
    title: "FlowUp s.r.o.",
    jobTitle: "Frontend Developer",
    duration: "JUL 2019 – JUN 2020",
    description:
      "FlowUp focused on developing cloud-based applications as a Google Partner. The project I worked on was UK-based fintech startup Dashly, which aims to give people a better understanding of their mortgage or help find a better deal. I was mostly responsible for removing technical debt and developing new features, gaining practical knowledge of Firebase-related tools.",
    items: [],
  },
  {
    title: "Pindex.sk",
    jobTitle: "Full Stack Developer",
    duration: "MAR 2014 – JUL 2016",
    description:
      "Pindex.sk is a professional network for students and teachers of universities and high schools in Slovakia. I rewrote their platform to new standards using an up-to-date version of Laravel with performance in mind, implementing a pixel-perfect design given by a very skilled designer.",
    items: [],
  },
];

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
      <Glitch><h2>Experience</h2></Glitch>
      <div style={{ marginBottom: "2rem" }} />
      {experiences.map((exp) => (
        <ExperienceCard key={exp.title} {...exp} />
      ))}
    </section>
  );
}
