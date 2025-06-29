import React from 'react'

const MarketingSite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <header className="text-center py-20 px-4">
        <h1 className="font-serif text-6xl font-bold text-stone-900 mb-6">
          Muscadine Finance LLC
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Professional DeFi solutions built on Base network
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        {/* About Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="section-title">What We Do</h2>
            <div className="prose prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Muscadine Finance provides institutional-grade DeFi infrastructure on the Base network. 
                Our platform offers secure, efficient, and transparent yield-generating vaults designed 
                for both individual investors and institutional clients.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                We specialize in ERC-4626 vault implementations, providing standardized interfaces 
                for tokenized yield strategies. Our vaults support major assets including USDC, wETH, 
                and cbBTC, offering competitive yields while maintaining the highest security standards.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Built on Base's secure and scalable infrastructure, our solutions combine the reliability 
                of traditional finance with the innovation of decentralized protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="section-title">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-stone-700">info@muscadine.box</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <span className="text-stone-700">muscadine.box</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-4">Connect</h3>
                <p className="text-stone-700 mb-4">
                  Ready to explore our DeFi platform? Access our dashboard to start earning yield 
                  on your digital assets.
                </p>
                <a 
                  href="https://app.muscadine.box" 
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-gold-50 to-gold-100 border-gold-200">
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
              Join thousands of users already earning competitive yields on Base network. 
              Start with as little as $100 and watch your portfolio grow.
            </p>
            <a 
              href="https://app.muscadine.box" 
              className="btn-primary text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p>&copy; 2024 Muscadine Finance LLC. All rights reserved.</p>
          <p className="text-sm mt-2 text-stone-400">
            Built on Base network • Secure • Transparent • Professional
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MarketingSite 