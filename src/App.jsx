import React from 'react'
import './index.css'  // Tailwind-Styles

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center items-center text-center h-screen px-4 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-extrabold mb-4">P3X | Legacy Nexus Horizons</h1>
        <p className="text-xl max-w-2xl">
          Unser Family Office vereint Tradition und Zukunft, um Familienvermögen nachhaltig zu sichern und in starken Partnerschaften weiterzuentwickeln.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-semibold mb-6">Über uns</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          „P3X“ symbolisiert unser Versprechen, Familienwerte über die drei Säulen Vergangenheit, Gegenwart und Zukunft hinweg zu bewahren und durch strategische Allianzen nachhaltig zu multiplizieren.
        </p>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gray-50 px-6 md:px-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Unsere Werte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Legacy</h3>
            <p>Schutz und Werterhalt der Vermögenssubstanz über alle Generationen hinweg.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Nexus</h3>
            <p>Netzwerk aus Familienmitgliedern und Geschäftspartnern im Hier und Jetzt.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Horizons</h3>
            <p>Eröffnung neuer Chancen, nachhaltiges Wachstum und internationale Perspektiven.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-semibold mb-6">Kontakt</h2>
        <p className="text-lg mb-4">Interessiert an einer Partnerschaft oder Fragen? Kontaktieren Sie uns:</p>
        <a href="mailto:info@p3x.com" className="inline-block px-6 py-3 bg-navy text-white rounded-lg hover:bg-opacity-90">
          info@p3x.com
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} P3X | Legacy Nexus Horizons. Alle Rechte vorbehalten.
      </footer>
    </main>
  )
}
