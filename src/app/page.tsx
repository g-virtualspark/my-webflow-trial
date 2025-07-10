export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 text-white py-20 px-6 text-center rounded-xl shadow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Smarter Pricing Starts Here
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Instantly calculate pricing, capture leads, and launch faster — powered by Webflow Cloud + Next.js.
          </p>
          <a
            href="/pricing"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Try the Calculator
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Why CloudCalc?</h2>
        <div className="grid sm:grid-cols-3 text-black gap-8">
          {[
            {
              title: 'Real-Time Pricing',
              desc: 'Instant quotes with flexible sliders and toggles.',
              icon: '⚡',
            },
            {
              title: 'Fully Customizable',
              desc: 'Tailored to your brand, workflow, and logic.',
              icon: '🎨',
            },
            {
              title: 'Webflow Native',
              desc: 'Deploys right inside your Webflow site — no hacks.',
              icon: '🚀',
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Case Section */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Perfect For...</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          {[
            'Agencies looking to automate quote generation',
            'SaaS founders with usage-based pricing',
            'Webflow devs who want native dynamic tools',
          ].map((item) => (
            <div key={item} className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
              <p className="text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 px-6 text-center rounded-xl shadow-inner">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Launch?</h2>
          <p className="text-gray-700 mb-8">
            Whether you're prototyping or scaling — this is your Webflow-native pricing toolkit.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
