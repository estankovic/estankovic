import ExperienceContent from '@/content/experience.mdx'

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="prose prose-gray max-w-none">
        <ExperienceContent />
      </div>
    </section>
  )
}
