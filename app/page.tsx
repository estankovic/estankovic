import Hero from '@/components/Hero'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <Technologies />
      <Experience />
    </main>
  )
}
