import React, { useState, useEffect } from 'react'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { formatEther } from 'viem'
import VaultCard from './VaultCard'

// Token addresses on Base
const TOKENS = {
  USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  wETH: '0x4200000000000000000000000000000000000006',
  cbBTC: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22'
}

// Placeholder portfolio data - in real app, this would come from API
const generatePortfolioData = (initialValue: number) => {
  const data = []
  let currentValue = initialValue
  
  for (let i = 1; i <= 12; i++) {
    // Simulate some growth
    const growth = Math.random() * 0.1 - 0.02 // -2% to +8% monthly
    currentValue *= (1 + growth)
    data.push({
      date: `2024-${i.toString().padStart(2, '0')}`,
      value: Math.round(currentValue)
    })
  }
  return data
}

const DeFiDashboard: React.FC = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [portfolioData, setPortfolioData] = useState<any[]>([])
  const [totalValue, setTotalValue] = useState(0)
  const [totalGrowth, setTotalGrowth] = useState(0)
  const [totalRewards, setTotalRewards] = useState(0)

  // Get wallet balances
  const { data: usdcBalance } = useBalance({
    address,
    token: TOKENS.USDC as `0x${string}`
  })

  const { data: wethBalance } = useBalance({
    address,
    token: TOKENS.wETH as `0x${string}`
  })

  const { data: cbbtcBalance } = useBalance({
    address,
    token: TOKENS.cbBTC as `0x${string}`
  })

  const vaults = [
    {
      name: 'USDC Vault',
      symbol: 'USDC',
      address: '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F',
      apy: '8.5%',
      tvl: '$2.4M',
      icon: '💵',
      tokenAddress: TOKENS.USDC
    },
    {
      name: 'wETH Vault',
      symbol: 'wETH',
      address: '0x21e0d366272798da3A977FEBA699FCB91959d120',
      apy: '12.3%',
      tvl: '$1.8M',
      icon: '🔷',
      tokenAddress: TOKENS.wETH
    },
    {
      name: 'cbBTC Vault',
      symbol: 'cbBTC',
      address: '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9',
      apy: '15.7%',
      tvl: '$3.2M',
      icon: '🟠',
      tokenAddress: TOKENS.cbBTC
    }
  ]

  // Calculate portfolio value and growth
  useEffect(() => {
    if (isConnected && address) {
      let total = 0
      
      // Add token balances (simplified pricing)
      if (usdcBalance) total += parseFloat(formatEther(usdcBalance.value)) * 1 // USDC = $1
      if (wethBalance) total += parseFloat(formatEther(wethBalance.value)) * 2500 // ETH ≈ $2500
      if (cbbtcBalance) total += parseFloat(formatEther(cbbtcBalance.value)) * 45000 // BTC ≈ $45000
      
      // Add vault positions (simplified)
      // In real app, you'd read vault balances here
      total += 5000 // Placeholder vault value
      
      setTotalValue(total)
      setTotalGrowth(total * 0.15) // 15% growth placeholder
      setTotalRewards(total * 0.08) // 8% rewards placeholder
      
      // Generate portfolio chart data
      setPortfolioData(generatePortfolioData(total * 0.85)) // Start from 85% of current value
    }
  }, [isConnected, address, usdcBalance, wethBalance, cbbtcBalance])

  const handleConnectWallet = () => {
    // Try to connect with the first available connector (usually MetaMask)
    if (connectors.length > 0) {
      connect({ connector: connectors[0] })
    }
  }

  const handleClaimRewards = () => {
    // In real app, this would call the reward contract
    alert('Claiming rewards... (This would interact with reward contracts)')
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="font-serif text-2xl font-bold text-stone-900">
              Muscadine Finance
            </h1>
            <span className="text-sm text-stone-500 bg-stone-100 px-2 py-1 rounded">
              DeFi Dashboard
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-stone-600">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <button
                  onClick={() => disconnect()}
                  className="btn-secondary text-sm"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={handleConnectWallet}
                className="btn-primary text-sm"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!isConnected ? (
          <div className="text-center py-20">
            <div className="card max-w-md mx-auto">
              <h2 className="section-title">Connect Your Wallet</h2>
              <p className="text-stone-600 mb-6">
                Connect your wallet to access the Muscadine Finance DeFi dashboard
              </p>
              <button
                onClick={handleConnectWallet}
                className="btn-primary w-full"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Portfolio Overview */}
            <section className="mb-8">
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="section-title">Portfolio Overview</h2>
                  <button
                    onClick={handleClaimRewards}
                    className="btn-primary"
                  >
                    Claim Rewards
                  </button>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-stone-500 mb-1">Total Value</p>
                    <p className="text-2xl font-bold text-stone-900">
                      ${totalValue.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-stone-500 mb-1">Total Growth</p>
                    <p className="text-2xl font-bold text-green-600">
                      +${totalGrowth.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-stone-500 mb-1">Available Rewards</p>
                    <p className="text-2xl font-bold text-gold-600">
                      ${totalRewards.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-stone-500 mb-1">Growth %</p>
                    <p className="text-2xl font-bold text-blue-600">
                      +{((totalGrowth / (totalValue - totalGrowth)) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Token Balances */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">💵</span>
                      <span className="font-semibold">USDC</span>
                    </div>
                    <p className="text-2xl font-bold text-stone-900">
                      {usdcBalance ? parseFloat(formatEther(usdcBalance.value)).toFixed(2) : '0.00'}
                    </p>
                    <p className="text-sm text-stone-500">
                      ≈ ${usdcBalance ? parseFloat(formatEther(usdcBalance.value)).toFixed(2) : '0.00'}
                    </p>
                  </div>
                  
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">🔷</span>
                      <span className="font-semibold">wETH</span>
                    </div>
                    <p className="text-2xl font-bold text-stone-900">
                      {wethBalance ? parseFloat(formatEther(wethBalance.value)).toFixed(4) : '0.0000'}
                    </p>
                    <p className="text-sm text-stone-500">
                      ≈ ${wethBalance ? (parseFloat(formatEther(wethBalance.value)) * 2500).toFixed(2) : '0.00'}
                    </p>
                  </div>
                  
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">🟠</span>
                      <span className="font-semibold">cbBTC</span>
                    </div>
                    <p className="text-2xl font-bold text-stone-900">
                      {cbbtcBalance ? parseFloat(formatEther(cbbtcBalance.value)).toFixed(6) : '0.000000'}
                    </p>
                    <p className="text-sm text-stone-500">
                      ≈ ${cbbtcBalance ? (parseFloat(formatEther(cbbtcBalance.value)) * 45000).toFixed(2) : '0.00'}
                    </p>
                  </div>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis 
                        dataKey="date" 
                        stroke="#6b7280"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#6b7280"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                        labelFormatter={(label) => `Date: ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#f59e0b" 
                        strokeWidth={3}
                        dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            {/* Vaults Section */}
            <section>
              <h2 className="section-title">Available Vaults</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vaults.map((vault) => (
                  <VaultCard key={vault.address} vault={vault} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default DeFiDashboard 