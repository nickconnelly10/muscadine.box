import React from 'react'

const MarketingSite: React.FC = () => {
  const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  const appUrl = isLocalhost ? 'http://localhost:3002' : 'https://app.muscadine.box'

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50/50"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-hero gradient-text mb-8 animate-fade-in">
            Muscadine
          </h1>
          <p className="text-display text-stone-700 max-w-4xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Professional DeFi solutions and Bitcoin self-sovereignty
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a 
              href={appUrl}
              className="btn-primary text-lg px-12 py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
            <a 
              href="https://nicholasconnelly.substack.com/"
              className="btn-secondary text-lg px-12 py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our Articles
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* About Section */}
        <section className="mb-16">
          <div className="card-elevated animate-slide-in-left">
            <h2 className="section-title">
              About Muscadine
            </h2>
            <div className="space-y-8 text-body">
              <p>
                At Muscadine, we believe Bitcoin and crypto are transforming the world—returning power to individuals through decentralization, financial sovereignty, and censorship-resistant technology. We began as a Bitcoin security consultancy, helping family and friends deploy nodes, establish non-custodial key management, and secure their assets with best-in-class privacy and resilience.
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
          <div className="card-elevated animate-slide-in-right">
            <h2 className="section-title">
              What is Our App
            </h2>
            <div className="space-y-8 text-body">
              <p>
                Our app is a digital home base designed to help users access trustworthy Bitcoin and DeFi tools—securely, simply, and sovereignly. Like a muscadine vine, it grows outward, linking you to the strongest parts of the decentralized ecosystem: from running a Bitcoin node, to viewing mempools, to learning about the financial revolution through DeFi. The goal is accessibility with resilience—technology that roots you in freedom.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Connect Section */}
        <section className="mb-16">
          <div className="card-elevated">
            <h2 className="section-title">Contact & Connect</h2>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-display font-semibold text-stone-800">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-caption text-stone-500">Email</p>
                      <p className="text-body font-medium text-stone-800">nickconnelly10@icloud.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-caption text-stone-500">Twitter</p>
                      <p className="text-body font-medium text-stone-800">@nicklutk</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect Section */}
              <div className="space-y-8">
                <h3 className="text-display font-semibold text-stone-800">Articles & Research</h3>
                <div className="space-y-6">
                  <p className="text-body">
                    Access Muscadine's research and articles on Bitcoin, finance, life, and more. Explore our latest thoughts, deep dives, and educational content designed to empower your journey in crypto and beyond.
                  </p>
                  <a 
                    href="https://nicholasconnelly.substack.com/"
                    className="btn-primary inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Our Articles on Substack
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bitcoin & Crypto Services Section */}
            <div className="mt-16 pt-16 border-t border-stone-200">
              <div className="bg-gradient-to-r from-stone-50 to-gold-50 p-8 border border-stone-200">
                <h3 className="text-display font-semibold text-stone-800 mb-6">
                  Bitcoin & Crypto Services
                </h3>
                <p className="text-body mb-6">
                  Get in touch with us for professional Bitcoin and crypto handling in privacy, security, and proper setups. 
                  Our expertise spans from secure node deployment to institutional-grade custody solutions, 
                  ensuring your digital assets are protected with best-in-class security practices.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Node Deployment</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Key Management</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Security Audits</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Privacy Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card-elevated bg-gradient-to-r from-gold-50 to-gold-100 border-gold-200">
            <h2 className="text-display font-bold text-stone-900 mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-body text-stone-700 mb-12 max-w-3xl mx-auto">
              Join hundreds of users already earning competitive yields on Base network. 
              Start with as little as $1 and watch your portfolio grow.
            </p>
            <a 
              href={appUrl}
              className="btn-primary text-lg px-12 py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm mb-4">&copy; 2025 Muscadine. All rights reserved.</p>
          <p className="text-xs text-stone-400">
            Built on BITCOIN • Secure • Transparent • Professional
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MarketingSite 