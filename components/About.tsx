import AboutContent from '@/content/about.mdx'

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
      <h2 className="text-2xl font-semibold mb-6">About</h2>
      <div className="prose prose-gray max-w-none">
        <AboutContent />
      </div>
    </section>
  )
}
