import React, { useState } from 'react'
import MuscadineFooter from './MuscadineFooter';

const HomeSite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'health' | 'defi'>('about');

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
              Health and Financial self-sovereignty
            </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://health.muscadine.box"
              className="btn-primary text-lg px-12 py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Health AI
            </a>
            <a 
              href="https://defi.muscadine.box"
              className="btn-primary text-lg px-12 py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch DeFi
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



      {/* Tabbed Content Section */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <section className="mb-16">
          <div className="card-elevated animate-slide-in-right">
            <div className="flex border-b border-stone-200 mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'about' 
                    ? 'text-gold-600 border-b-2 border-gold-600' 
                    : 'text-stone-500 hover:text-gold-600'
                }`}
                role="tab"
                aria-selected={activeTab === 'about'}
              >
                About Muscadine
              </button>
              <button
                onClick={() => setActiveTab('health')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'health' 
                    ? 'text-gold-600 border-b-2 border-gold-600' 
                    : 'text-stone-500 hover:text-gold-600'
                }`}
                role="tab"
                aria-selected={activeTab === 'health'}
              >
                Health AI
              </button>
              <button
                onClick={() => setActiveTab('defi')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'defi' 
                    ? 'text-gold-600 border-b-2 border-gold-600' 
                    : 'text-stone-500 hover:text-gold-600'
                }`}
                role="tab"
                aria-selected={activeTab === 'defi'}
              >
                DeFi
              </button>
            </div>
            
            {/* About Tab Content */}
            {activeTab === 'about' && (
              <div role="tabpanel" className="space-y-8 text-body">
                <p>
                  Muscadine is a free and open-source website that provides valuable information in areas where it's often hard to find—especially in finance and health. Muscadine is run by a university student studying to become a Doctor of Osteopathic Medicine, who is also deeply invested in the financial revolution.
                </p>
                <p>
                  We believe cryptocurrency and Bitcoin represent the future of finance—a future where individuals have complete control over their wealth, free from centralized intermediaries and traditional banking constraints. This vision drives everything we do at Muscadine.
                </p>
                <p>
                  We also recognize a critical challenge facing everyday Americans: widespread health issues stemming from modern lifestyles and environmental factors. Our AI searches peer-reviewed scientific research to deliver personalized, preventative lifestyle recommendations—empowering you to optimize your well-being through changes in nutrition, environment, and daily habits.
                </p>
              </div>
            )}

            {/* Health AI Tab Content */}
            {activeTab === 'health' && (
              <div role="tabpanel" className="space-y-8 text-body">
                <p>
                  We've developed an AI that exclusively analyzes peer-reviewed scientific research papers to optimize your life through preventative lifestyle changes and habits. Our AI focuses on nutrition, lifestyle factors, environmental influences, preventative care, and overall individual benefits.
                </p>
                <p>
                  The AI is currently in development and continuously learning from the latest research. We invite you to contribute additional research papers or suggest new topics to expand our AI's knowledge base and improve its recommendations.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                  <p className="text-amber-800 font-medium">
                    <strong>Important:</strong> This AI is in development and should not replace professional medical advice. Please consult with a physician for proper medical guidance and treatment.
                  </p>
                </div>
                <p>
                  Contact us for information about our AI development, to contribute research papers, or to suggest additional topics for our AI to explore. We're building this tool to make evidence-based health optimization accessible to everyone.
                </p>
              </div>
            )}

            {/* DeFi Tab Content */}
            {activeTab === 'defi' && (
              <div role="tabpanel" className="space-y-8 text-body">
                <p>
                  Our DeFi website is designed to help you venture into personal decentralized finance where you maintain complete control over your assets. We provide comprehensive resources on the essential steps you should take, recommended networks to connect to, and curated DeFi applications with clear explanations of their purposes.
                </p>
                <p>
                  We offer step-by-step guides for setting up wallets, connecting to networks, and using various DeFi protocols safely. Our platform includes detailed explanations of what each DeFi application does, helping you make informed decisions about which tools align with your financial goals.
                </p>
                <p>
                  Whether you're new to DeFi or an experienced user, our resources help you navigate the decentralized finance ecosystem with confidence. We focus on security, education, and practical implementation to ensure you can safely access the benefits of self-custody finance.
                </p>
              </div>
            )}
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-caption text-stone-500">Contact</p>
                      <p className="text-body font-medium text-stone-800">Nicholas Connelly</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-caption text-stone-500">Email</p>
                      <p className="text-body font-medium text-stone-800">nickconnelly10@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect Section */}
              <div className="space-y-8">
                <h3 className="text-display font-semibold text-stone-800">Articles & Research</h3>
                <div className="space-y-6">
                                  <p className="text-body">
                  Dive deeper into Health and DeFi with our curated Articles & Research. Subscribe to our Substack for weekly insights and exclusive content.
                </p>
                  <a 
                    href="https://nicholasconnelly.substack.com/"
                    className="btn-primary inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read and Subscribe to our substack
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

            {/* Health AI Services Section */}
            <div className="mt-8">
              <div className="bg-gradient-to-r from-stone-50 to-gold-50 p-8 border border-stone-200">
                <h3 className="text-display font-semibold text-stone-800 mb-6">
                  Health AI Services
                </h3>
                <p className="text-body mb-6">
                  Leverage our AI's peer-reviewed research engine to optimize your nutrition, lifestyle, and environment for long-term wellness.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Personalized Nutrition</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Preventive Lifestyle Optimization</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Environmental Risk Analysis</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Habit & Behavior Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Only use MuscadineFooter component for the footer */}
      <MuscadineFooter />
    </div>
  )
}

export default HomeSite 