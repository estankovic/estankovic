const technologies = [
  'TypeScript',
  'React',
  'Angular',
  'Next.js',
  'Node.js',
  'NestJS',
  'Ionic',
  'Stencil.js',
  'Firebase',
  'GCP',
  'RxJS',
  'Redux',
  'Sass',
  'PWA',
  'Git',
]

export default function Technologies() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Technologies</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
