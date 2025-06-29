import React from 'react'

const MarketingSite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <header className="text-center py-20 px-4">
        <h1 className="font-serif text-6xl font-bold text-stone-900 mb-6">
          Muscadine Finance
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Professional DeFi solutions and Bitcoin self-sovereignty
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        {/* About Section */}
        <section className="mb-16">
          <div className="card bg-white/90 shadow-lg border border-stone-200">
            <h2 className="section-title flex items-center gap-2">
              <span className="text-3xl">🏛️</span>
              <span>About Muscadine Finance</span>
            </h2>
            <div className="prose prose-stone max-w-none font-serif text-lg leading-relaxed">
              <p>
                At Muscadine Finance, we believe Bitcoin and crypto are transforming the world—returning power to individuals through decentralization, financial sovereignty, and censorship-resistant technology. We began as a Bitcoin security consultancy, helping family and friends deploy nodes, establish non-custodial key management, and secure their assets with best-in-class privacy and resilience.
              </p>
              <p>
                We see DeFi as an extension of this mission—a system that can democratize finance at a global scale. While our roots are in Bitcoin, we embrace the innovation of Ethereum's infrastructure, using it to build Bitcoin-aligned tools and vaults on scalable, composable protocols like Base.
              </p>
              <p>
                Our mission is to empower individuals and institutions with secure, self-sovereign crypto infrastructure—built for a decentralized future.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16">
          <div className="card bg-white/90 shadow-lg border border-stone-200">
            <h2 className="section-title flex items-center gap-2">
              <span className="text-2xl">💼</span>
              <span>What We Do</span>
            </h2>
            <div className="prose prose-stone max-w-none font-serif text-lg leading-relaxed">
              <p>
                Muscadine Finance curates vaults on Morpho Blue, a modular peer-to-peer lending protocol deployed on the Base network. Morpho enables decentralized, capital-efficient lending through permissionless vault creation and dynamic interest rate markets.
              </p>
              <p>
                As Coinbase expands access to Bitcoin-backed loans on Base—leveraging Morpho as the backend protocol—Muscadine Finance plays a critical role by supplying liquidity to these vaults. Our capital helps power secure, decentralized loans where Bitcoin holders can borrow against wrapped Bitcoin collateral (like cbBTC) without giving up custody.
              </p>
              <p>
                By aligning with Coinbase's vision and Bitcoin's original ethos, we build trust-minimized infrastructure that bridges Bitcoin's sound money principles with the composability of DeFi—delivering secure, efficient yield opportunities that uphold self-sovereignty.
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
                    <span className="text-stone-700">nickconnelly10@icloud.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <span className="text-stone-700">@nicklutk</span>
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
                  href="https://app.muscadine.finance" 
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch App
                </a>
              </div>
            </div>
            
            {/* Bitcoin & Crypto Services Section */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <div className="bg-gradient-to-r from-stone-50 to-gold-50 p-6 rounded-lg border border-stone-200">
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔐</span>
                  Bitcoin & Crypto Services
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Get in touch with us for professional Bitcoin and crypto handling in privacy, security, and proper setups. 
                  Our expertise spans from secure node deployment to institutional-grade custody solutions, 
                  ensuring your digital assets are protected with best-in-class security practices.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm">Node Deployment</span>
                  <span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm">Key Management</span>
                  <span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm">Security Audits</span>
                  <span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm">Privacy Solutions</span>
                </div>
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
              Join hundreds of users already earning competitive yields on Base network. 
              Start with as little as $1 and watch your portfolio grow.
            </p>
            <a 
              href="https://app.muscadine.finance" 
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
          <p>&copy; 2025 Muscadine Finance. All rights reserved.</p>
          <p className="text-sm mt-2 text-stone-400">
            Built on BITCOIN • Secure • Transparent • Professional
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MarketingSite 