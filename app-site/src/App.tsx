import { useState, useCallback, useMemo, memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Theme toggle component
const ThemeToggle = memo(({ 
  isDark, 
  onToggle 
}: { 
  isDark: boolean; 
  onToggle: () => void; 
}) => (
  <motion.button
    className="theme-toggle"
    onClick={onToggle}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    {isDark ? "☀️" : "🌙"}
  </motion.button>
));

// Glossary button component
const GlossaryButton = memo(({ 
  onClick 
}: { 
  onClick: () => void; 
}) => (
  <motion.button
    className="glossary-button"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    title="Glossary of terms"
  >
    ? Glossary
  </motion.button>
));

// Glossary modal component
const GlossaryModal = memo(({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  const glossaryTerms = [
    {
      term: "Bitcoin",
      definition: "A decentralized digital currency that operates on a peer-to-peer network, enabling secure transactions without intermediaries."
    },
    {
      term: "Node (Electrum)",
      definition: "A Bitcoin node that provides a lightweight interface for connecting wallets and applications to the Bitcoin network."
    },
    {
      term: "DeFi",
      definition: "Decentralized Finance - financial services built on blockchain technology that operate without traditional intermediaries."
    },
    {
      term: "Token Swap",
      definition: "The process of exchanging one cryptocurrency token for another through decentralized exchanges or protocols."
    },
    {
      term: "Earn & Borrow",
      definition: "DeFi services that allow users to earn interest on deposited assets or borrow against their collateral."
    },
    {
      term: "Aave",
      definition: "A decentralized lending protocol that allows users to lend and borrow various cryptocurrencies with variable and stable interest rates."
    },
    {
      term: "Moonwell",
      definition: "A lending and borrowing protocol built on Moonbeam that provides yield opportunities for various assets."
    },
    {
      term: "Morpho",
      definition: "A lending protocol that optimizes capital efficiency by matching borrowers and lenders peer-to-peer while maintaining the security of traditional lending pools."
    },
    {
      term: "Aerodrome",
      definition: "A decentralized exchange and liquidity protocol on Base network for efficient token trading and yield farming."
    },
    {
      term: "Uniswap",
      definition: "A decentralized exchange protocol that enables automated token trading through liquidity pools."
    },
    {
      term: "Zerion",
      definition: "A DeFi portfolio tracker and wallet interface that allows users to monitor and manage their crypto assets across multiple protocols."
    },
    {
      term: "Ethereum",
      definition: "A decentralized blockchain platform that enables smart contracts and decentralized applications (dApps)."
    },
    {
      term: "Block Explorer",
      definition: "A web tool that allows users to view and track transactions, addresses, and blocks on a blockchain network."
    },
    {
      term: "Mempool",
      definition: "A collection of unconfirmed transactions waiting to be included in the next block of a blockchain."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glossary-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Glossary</h2>
              <motion.button
                className="modal-close"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>
            <div className="glossary-content">
              {glossaryTerms.map((item, index) => (
                <motion.div
                  key={item.term}
                  className="glossary-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>{item.term}</h3>
                  <p>{item.definition}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

// Footer component
const Footer = memo(() => (
  <motion.footer
    className="vine-footer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <a
      href="mailto:nickconnelly10@gmail.com?subject=Muscadine%20App%20Feedback"
      className="feedback-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Report a bug / Feedback
    </a>
  </motion.footer>
));

// Memoized Branch Button Component
const BranchButton = memo(({ 
  text, 
  isActive, 
  onClick 
}: { 
  text: string; 
  isActive: boolean; 
  onClick: () => void; 
}) => (
  <motion.button 
    className={`vine-branch ${isActive ? 'active' : ''}`}
    onClick={onClick}
    whileHover={{ 
      y: -12, 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    whileTap={{ 
      scale: 0.98,
      transition: { duration: 0.1 }
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <span className="branch-text">{text}</span>
    <div className="vine-decoration"></div>
  </motion.button>
));

// Memoized Copy Button Component
const CopyButton = memo(({ 
  text, 
  type, 
  onClick 
}: { 
  text: string; 
  type: 'hostname' | 'port'; 
  onClick: (text: string, type: 'hostname' | 'port') => void; 
}) => (
  <motion.button 
    className="copy-button"
    onClick={() => onClick(text, type)}
    title={`Copy ${type}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.1 }}
  >
    📋
  </motion.button>
));

// Memoized Leaf Card Component
const LeafCard = memo(({ 
  children, 
  className = "", 
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void; 
}) => (
  <motion.div 
    className={`leaf-card ${className}`}
    onClick={onClick}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    whileHover={onClick ? { y: -4 } : {}}
    layout
  >
    {children}
  </motion.div>
));

// Memoized DeFi Card Component with About Link
const DeFiCard = memo(({ 
  title, 
  subtitle, 
  className = "", 
  onClick,
  aboutLink
}: { 
  title: string; 
  subtitle?: string; 
  className?: string; 
  onClick: () => void;
  aboutLink?: string;
}) => (
  <motion.div 
    className={`defi-card ${className}`}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    layout
  >
    <motion.button
      onClick={onClick}
      className="defi-card-button"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="defi-title">{title}</span>
      {subtitle && <span className="defi-subtitle">{subtitle}</span>}
    </motion.button>
    {aboutLink && (
      <motion.a
        href={aboutLink}
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        About
      </motion.a>
    )}
  </motion.div>
));

// Memoized Back Button Component
const BackButton = memo(({ onClick }: { onClick: () => void }) => (
  <motion.button 
    className="back-button" 
    onClick={onClick}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    ← Back to DeFi
  </motion.button>
));

function App() {
  const [selectedBranch, setSelectedBranch] = useState<'bitcoin' | 'defi' | null>(null);
  const [defiView, setDefiView] = useState<'main' | 'lending' | 'swap'>('main');
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('muscadine-theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('muscadine-theme', isDarkTheme ? 'dark' : 'light');
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prev => !prev);
  }, []);

  // Memoized click handlers
  const handleBitcoinClick = useCallback(() => {
    setSelectedBranch(prev => prev === 'bitcoin' ? null : 'bitcoin');
    setDefiView('main');
  }, []);

  const handleDeFiClick = useCallback(() => {
    setSelectedBranch(prev => prev === 'defi' ? null : 'defi');
    setDefiView('main');
  }, []);

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 2000);
  }, []);

  const copyToClipboard = useCallback(async (text: string, type: 'hostname' | 'port') => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${type === 'hostname' ? 'Hostname' : 'Port'} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      showToast('Failed to copy to clipboard');
    }
  }, [showToast]);

  const openMempool = useCallback(() => {
    window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  }, []);

  const navigateToMainSite = useCallback(() => {
    window.location.href = 'https://muscadine.box';
  }, []);

  const openZerion = useCallback(() => {
    window.open('https://app.zerion.io/portfolio/overview', '_blank', 'noopener,noreferrer');
  }, []);

  const openLending = useCallback(() => {
    setDefiView('lending');
  }, []);

  const openSwap = useCallback(() => {
    setDefiView('swap');
  }, []);

  const openAave = useCallback(() => {
    window.open('https://app.aave.com/', '_blank', 'noopener,noreferrer');
  }, []);

  const openMoonwell = useCallback(() => {
    window.open('https://moonwell.fi/portfolio', '_blank', 'noopener,noreferrer');
  }, []);

  const openMorpho = useCallback(() => {
    window.open('https://app.morpho.org/base/earn', '_blank', 'noopener,noreferrer');
  }, []);

  const openAerodrome = useCallback(() => {
    window.open('https://aerodrome.finance/', '_blank', 'noopener,noreferrer');
  }, []);

  const openUniswap = useCallback(() => {
    window.open('https://app.uniswap.org/', '_blank', 'noopener,noreferrer');
  }, []);

  const openBlockExplorer = useCallback(() => {
    window.open('https://basescan.org/', '_blank', 'noopener,noreferrer');
  }, []);

  const openEducationGuides = useCallback(() => {
    window.open('https://nicholasconnelly.substack.com/', '_blank', 'noopener,noreferrer');
  }, []);

  const goBackToDefiMain = useCallback(() => {
    setDefiView('main');
  }, []);

  // Memoized computed values
  const isBitcoinActive = useMemo(() => selectedBranch === 'bitcoin', [selectedBranch]);
  const isDeFiActive = useMemo(() => selectedBranch === 'defi', [selectedBranch]);

  return (
    <div className="vine-app">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div 
            className="toast-notification"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <motion.header 
        className="vine-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="header-content">
          <h1 
            className="dashboard-title"
            onClick={navigateToMainSite}
          >
            Muscadine Dashboard
          </h1>
          
          <div className="header-controls">
            <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
            <GlossaryButton onClick={() => setIsGlossaryOpen(true)} />
          </div>
        </div>
        
        {/* Intro Question */}
        <a 
          href="https://nicholasconnelly.substack.com/p/what-is-defi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="intro-question"
        >
          What is Bitcoin and DeFi?
        </a>
      </motion.header>

      {/* Main Vine Branch */}
      <main className="vine-main">
        <motion.div 
          className="branch-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {/* Bitcoin Branch */}
          <BranchButton 
            text="Bitcoin"
            isActive={isBitcoinActive}
            onClick={handleBitcoinClick}
          />

          {/* DeFi Branch */}
          <BranchButton 
            text="DeFi"
            isActive={isDeFiActive}
            onClick={handleDeFiClick}
          />
        </motion.div>

        {/* Tree-style content area */}
        <motion.div 
          className="tree-content"
          layout
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {/* Bitcoin Leaves */}
            {selectedBranch === 'bitcoin' && (
              <motion.div 
                key="bitcoin"
                className="leaves-container bitcoin-leaves"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                layout
              >
                <LeafCard className="node-card">
                  <h3 className="leaf-title">Connect to a Node</h3>
                  <div className="node-info">
                    <div className="info-row">
                      <p>Electrum Server Hostname:</p>
                      <div className="copy-container">
                        <code className="hostname">
                          lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion
                        </code>
                        <CopyButton 
                          text="lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion"
                          type="hostname"
                          onClick={copyToClipboard}
                        />
                      </div>
                    </div>
                    <div className="info-row">
                      <p>Port:</p>
                      <div className="copy-container">
                        <span className="port">50001</span>
                        <CopyButton 
                          text="50001"
                          type="port"
                          onClick={copyToClipboard}
                        />
                      </div>
                    </div>
                  </div>
                </LeafCard>
                
                <LeafCard className="mempool-card" onClick={openMempool}>
                  <span className="mempool-text">View Mempool</span>
                </LeafCard>
              </motion.div>
            )}

            {/* DeFi Leaves */}
            {selectedBranch === 'defi' && (
              <motion.div 
                key="defi"
                className="leaves-container defi-leaves"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                layout
              >
                <AnimatePresence mode="wait">
                  {defiView === 'main' ? (
                    <motion.div
                      key="defi-main"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DeFiCard 
                        title="Zerion"
                        subtitle="Track any wallet"
                        className="zerion-card"
                        onClick={openZerion}
                      />
                      
                      <DeFiCard 
                        title="Earn & Borrow"
                        className="lending-card"
                        onClick={openLending}
                      />
                      
                      <DeFiCard 
                        title="Token Swap"
                        className="swap-card"
                        onClick={openSwap}
                      />

                      <DeFiCard 
                        title="Block Explorer"
                        subtitle="Browse Base-chain blocks & transactions"
                        className="explorer-card"
                        onClick={openBlockExplorer}
                      />

                      <DeFiCard 
                        title="Education & Guides"
                        subtitle="Learn about nodes, DeFi, and self-custody"
                        className="education-card"
                        onClick={openEducationGuides}
                      />
                    </motion.div>
                  ) : defiView === 'lending' ? (
                    <motion.div
                      key="defi-lending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BackButton onClick={goBackToDefiMain} />
                      
                      <DeFiCard 
                        title="Aave"
                        className="aave-card"
                        onClick={openAave}
                        aboutLink="https://aave.com/docs"
                      />
                      
                      <DeFiCard 
                        title="Moonwell"
                        className="moonwell-card"
                        onClick={openMoonwell}
                        aboutLink="https://docs.moonwell.fi/moonwell/"
                      />
                      
                      <DeFiCard 
                        title="Morpho"
                        className="morpho-card"
                        onClick={openMorpho}
                        aboutLink="https://docs.morpho.org/overview/"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="defi-swap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BackButton onClick={goBackToDefiMain} />
                      
                      <DeFiCard 
                        title="Aerodrome"
                        className="aerodrome-card"
                        onClick={openAerodrome}
                        aboutLink="https://aerodrome.finance/docs"
                      />
                      
                      <DeFiCard 
                        title="Uniswap"
                        className="uniswap-card"
                        onClick={openUniswap}
                        aboutLink="https://docs.uniswap.org/"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Glossary Modal */}
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 