import { useState } from 'react';
import './App.css';

function App() {
  const [selectedBranch, setSelectedBranch] = useState<'bitcoin' | 'defi' | null>(null);
  const [defiView, setDefiView] = useState<'main' | 'lending'>('main');

  const handleBitcoinClick = () => {
    setSelectedBranch(selectedBranch === 'bitcoin' ? null : 'bitcoin');
    setDefiView('main');
  };

  const handleDeFiClick = () => {
    setSelectedBranch(selectedBranch === 'defi' ? null : 'defi');
    setDefiView('main');
  };

  const openMempool = () => {
    window.open('https://mempool.space', '_blank');
  };

  const navigateToMainSite = () => {
    window.location.href = 'https://muscadine.box';
  };

  const openZerion = () => {
    window.open('https://app.zerion.io/portfolio/overview', '_blank');
  };

  const openLending = () => {
    setDefiView('lending');
  };

  const openAave = () => {
    window.open('https://app.aave.com/', '_blank');
  };

  const openMoonwell = () => {
    window.open('https://moonwell.fi/portfolio', '_blank');
  };

  const openMorpho = () => {
    window.open('https://app.morpho.org/base/earn', '_blank');
  };

  const goBackToDefiMain = () => {
    setDefiView('main');
  };

  return (
    <div className="vine-app">
      {/* Top Header */}
      <header className="vine-header">
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
      </header>

      {/* Main Vine Branch */}
      <main className="vine-main">
        <div className="branch-container">
          {/* Bitcoin Branch */}
          <button 
            className={`vine-branch ${selectedBranch === 'bitcoin' ? 'active' : ''}`}
            onClick={handleBitcoinClick}
          >
            <span className="branch-text">Bitcoin</span>
            <div className="vine-decoration"></div>
          </button>

          {/* DeFi Branch */}
          <button 
            className={`vine-branch ${selectedBranch === 'defi' ? 'active' : ''}`}
            onClick={handleDeFiClick}
          >
            <span className="branch-text">DeFi</span>
            <div className="vine-decoration"></div>
          </button>
        </div>

        {/* Bitcoin Leaves */}
        {selectedBranch === 'bitcoin' && (
          <div className="leaves-container bitcoin-leaves">
            <div className="leaf-card node-card">
              <h3 className="leaf-title">Connect to Node</h3>
              <div className="node-info">
                <p>Electrum server hostname:</p>
                <code className="hostname">
                  lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion
                </code>
                <p>Port: <span className="port">50001</span></p>
              </div>
            </div>
            
            <button className="leaf-card mempool-card" onClick={openMempool}>
              <span className="mempool-text">Mempool</span>
            </button>
          </div>
        )}

        {/* DeFi Leaves */}
        {selectedBranch === 'defi' && (
          <div className="leaves-container defi-leaves">
            {defiView === 'main' ? (
              <>
                <button className="defi-card zerion-card" onClick={openZerion}>
                  <span className="defi-title">Zerion</span>
                  <span className="defi-subtitle">Wallet watcher</span>
                </button>
                
                <button className="defi-card lending-card" onClick={openLending}>
                  <span className="defi-title">Lending / Borrowing</span>
                </button>
                
                <button className="defi-card swap-card">
                  <span className="defi-title">Swap Coins</span>
                </button>
              </>
            ) : (
              <>
                {/* Back button */}
                <button className="back-button" onClick={goBackToDefiMain}>
                  ← Back to DeFi
                </button>
                
                {/* Lending options */}
                <button className="defi-card aave-card" onClick={openAave}>
                  <span className="defi-title">Aave</span>
                </button>
                
                <button className="defi-card moonwell-card" onClick={openMoonwell}>
                  <span className="defi-title">Moonwell</span>
                </button>
                
                <button className="defi-card morpho-card" onClick={openMorpho}>
                  <span className="defi-title">Morpho</span>
                </button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App; 