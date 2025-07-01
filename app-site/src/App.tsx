import { useState, useCallback, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

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

// Memoized DeFi Card Component
const DeFiCard = memo(({ 
  title, 
  subtitle, 
  className = "", 
  onClick 
}: { 
  title: string; 
  subtitle?: string; 
  className?: string; 
  onClick: () => void; 
}) => (
  <motion.button 
    className={`defi-card ${className}`}
    onClick={onClick}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
    layout
  >
    <span className="defi-title">{title}</span>
    {subtitle && <span className="defi-subtitle">{subtitle}</span>}
  </motion.button>
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
        <h1 
          className="dashboard-title"
          onClick={navigateToMainSite}
        >
          Muscadine Dashboard
        </h1>
        
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
                        subtitle="Wallet watcher"
                        className="zerion-card"
                        onClick={openZerion}
                      />
                      
                      <DeFiCard 
                        title="Lending / Borrowing"
                        className="lending-card"
                        onClick={openLending}
                      />
                      
                      <DeFiCard 
                        title="Swap Coins"
                        className="swap-card"
                        onClick={openSwap}
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
                      />
                      
                      <DeFiCard 
                        title="Moonwell"
                        className="moonwell-card"
                        onClick={openMoonwell}
                      />
                      
                      <DeFiCard 
                        title="Morpho"
                        className="morpho-card"
                        onClick={openMorpho}
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
                      />
                      
                      <DeFiCard 
                        title="Uniswap"
                        className="uniswap-card"
                        onClick={openUniswap}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

export default App; 