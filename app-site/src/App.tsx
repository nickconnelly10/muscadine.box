import { useState } from 'react';
import './App.css';

function App() {
  const [selectedBranch, setSelectedBranch] = useState<'bitcoin' | 'defi' | null>(null);

  const handleBitcoinClick = () => {
    setSelectedBranch(selectedBranch === 'bitcoin' ? null : 'bitcoin');
  };

  const handleDeFiClick = () => {
    setSelectedBranch(selectedBranch === 'defi' ? null : 'defi');
  };

  const openMempool = () => {
    window.open('https://mempool.space', '_blank');
  };

  const navigateToMainSite = () => {
    window.location.href = 'https://muscadine.box';
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
            <div className="leaf-card work-card">
              <span className="work-text">Work in progress</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App; 