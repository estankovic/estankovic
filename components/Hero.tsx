const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eduard-stankovi%C4%8D-9449649b/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eduard.stankovic',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@eduardstankovic',
  },
]

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Eduard Stankovič</h1>
      <p className="text-lg text-gray-600 mb-6">Frontend Engineer</p>
      <div className="flex gap-4 flex-wrap">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
