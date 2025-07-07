import './App.css';
// import USDCIcon from './usdc.svg'; // Placeholder SVGs to be added
// import BitcoinIcon from './bitcoin.svg';
import React from 'react';

interface AccountCardProps {
  icon: string;
  name: string;
  symbol: string;
  balance: string;
  balanceUSD: string;
  earnings: string;
  earningsUSD: string;
  apy: string;
  tokenSymbol: string;
}

function AccountCard({
  icon,
  name,
  symbol,
  balance,
  balanceUSD,
  earnings,
  earningsUSD,
  apy,
  tokenSymbol
}: AccountCardProps) {
  const [tab, setTab] = React.useState<'deposit' | 'withdraw'>('deposit');
  return (
    <div className="bg-gradient-to-br from-stone-50 via-gold-50 to-green-50 rounded-2xl premium-shadow card-vine-bg flex flex-row p-8 mb-8 max-w-4xl w-full mx-auto border-l-8 border-gold-400">
      {/* Left: Icon and stats */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center mb-4">
          <span className="w-10 h-10 mr-3 text-3xl flex items-center justify-center">{icon}</span>
          <span className="text-xl mr-2">🍇</span>
          <div>
            <div className="font-serif font-bold text-2xl text-stone-800">{name} Account</div>
            <div className="text-xs text-stone-500 font-medium">{symbol}</div>
          </div>
        </div>
        <div className="flex space-x-8 mb-4">
          <div>
            <div className="text-xs text-stone-500 font-medium mb-1">Total Balance</div>
            <div className="font-mono text-lg text-stone-900">{balance}</div>
            <div className="text-xs text-stone-400">${balanceUSD}</div>
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium mb-1">Lifetime Earnings</div>
            <div className="font-mono text-lg text-stone-900">{earnings}</div>
            <div className="text-xs text-stone-400">${earningsUSD}</div>
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium mb-1">APY</div>
            <div className="font-mono text-lg text-stone-900">{apy}%</div>
          </div>
        </div>
        {/* Placeholder for chart */}
        <div className="w-full h-32 bg-gradient-to-t from-green-200 to-green-50 rounded-lg mt-2 flex items-end">
          {/* Simulated chart bar */}
          <div className="w-3/4 h-4/5 bg-green-400 rounded-b-lg mx-auto" style={{height: '70%', width: '90%'}}></div>
        </div>
        <div className="flex justify-between text-xs text-stone-400 mt-1">
          <span>July 1, 2025</span>
          <span>July 7, 2025</span>
        </div>
      </div>
      {/* Right: Tabbed panel */}
      <div className="w-80 ml-8">
        <div className="flex border-b border-gold-200 mb-4">
          <button className={`flex-1 py-2 font-semibold text-sm rounded-t-lg ${tab==='deposit' ? 'border-b-4 border-gold-500 text-gold-700 bg-gold-50 shadow-sm' : 'text-stone-400 hover:text-gold-700'}`} onClick={()=>setTab('deposit')}>Deposit</button>
          <button className={`flex-1 py-2 font-semibold text-sm rounded-t-lg ${tab==='withdraw' ? 'border-b-4 border-gold-500 text-gold-700 bg-gold-50 shadow-sm' : 'text-stone-400 hover:text-gold-700'}`} onClick={()=>setTab('withdraw')}>Withdraw</button>
        </div>
        <div className="mb-4">
          <div className="text-xs text-stone-500 mb-1">Amount</div>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-stone-50">
            <input className="flex-1 bg-transparent outline-none text-stone-900 font-mono" placeholder="0.00" type="number" min="0" />
            <button className="ml-2 px-2 py-1 text-xs border rounded font-semibold text-stone-700">MAX</button>
          </div>
          <div className="text-xs text-stone-400 mt-1">Wallet balance: 0 {tokenSymbol}</div>
        </div>
        <button className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-lg transition">Add funds</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-muscadine-light flex flex-col items-center py-12">
      {/* Top nav */}
      <nav className="w-full flex items-center justify-between px-12 py-4 mb-8 bg-transparent">
        <div className="flex items-center space-x-8">
          <span className="text-3xl font-bold text-green-700">🍇</span>
          <a href="#" className="text-lg font-semibold text-stone-700 hover:text-green-700">Dashboard</a>
          <a href="#" className="text-lg font-semibold text-stone-700 hover:text-green-700">Documentation</a>
          <a href="#" className="text-lg font-semibold text-stone-700 hover:text-green-700">Support</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-lg">Get Muscadine</button>
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">Add funds</button>
          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700">NC</div>
        </div>
      </nav>
      {/* Account cards */}
      <AccountCard
        icon="🪙"
        name="USDC"
        symbol="USDC"
        balance="10.01"
        balanceUSD="10.00"
        earnings="0.01"
        earningsUSD="0"
        apy="6.49"
        tokenSymbol="USDC"
      />
      <AccountCard
        icon="₿"
        name="Bitcoin"
        symbol="cbBTC"
        balance="0.00371"
        balanceUSD="484.26"
        earnings="0.00000028"
        earningsUSD="0.03"
        apy="0.84"
        tokenSymbol="cbBTC"
      />
    </div>
  );
}

export default App; 