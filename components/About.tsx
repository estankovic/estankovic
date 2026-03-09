import React from "react";
import Section from "@/components/ui/Section";

export default function About({ children }: { children: React.ReactNode }) {
  return <Section title="About">{children}</Section>;
}
