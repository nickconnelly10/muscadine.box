import React, { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { usePortfolioData } from '../hooks/usePortfolioData'
import VaultCard from './VaultCard'

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
)

// Error message component
const ErrorMessage = ({ message }: { message: string }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
    <p className="text-red-700 font-medium">{message}</p>
  </div>
)

// Portfolio chart data generator
const generatePortfolioData = (initialValue: number) => {
  const data = []
  let currentValue = initialValue
  
  for (let i = 1; i <= 12; i++) {
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
  
  // Use the dynamic portfolio data hook
  const {
    totalValue,
    totalGrowth,
    tokenBalances,
    vaultBalances,
    vaultAPYs,
    isLoading,
    error
  } = usePortfolioData()

  // Generate chart data when total value changes
  React.useEffect(() => {
    if (totalValue > 0) {
      setPortfolioData(generatePortfolioData(totalValue * 0.85))
    }
  }, [totalValue])

  const vaults = [
    {
      name: 'USDC Vault',
      symbol: 'USDC',
      address: '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F',
      apy: vaultAPYs.find(apy => apy.vaultAddress === '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F')?.apy || 0,
      tvl: '$2.4M',
      icon: '💵',
      tokenAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      balance: vaultBalances.USDC.balance,
      value: vaultBalances.USDC.value
    },
    {
      name: 'wETH Vault',
      symbol: 'wETH',
      address: '0x21e0d366272798da3A977FEBA699FCB91959d120',
      apy: vaultAPYs.find(apy => apy.vaultAddress === '0x21e0d366272798da3A977FEBA699FCB91959d120')?.apy || 0,
      tvl: '$1.8M',
      icon: '🔷',
      tokenAddress: '0x4200000000000000000000000000000000000006',
      balance: vaultBalances.wETH.balance,
      value: vaultBalances.wETH.value
    },
    {
      name: 'cbBTC Vault',
      symbol: 'cbBTC',
      address: '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9',
      apy: vaultAPYs.find(apy => apy.vaultAddress === '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9')?.apy || 0,
      tvl: '$3.2M',
      icon: '🟠',
      tokenAddress: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
      balance: vaultBalances.cbBTC.balance,
      value: vaultBalances.cbBTC.value
    }
  ]

  const handleConnectWallet = () => {
    if (connectors.length > 0) {
      connect({ connector: connectors[0] })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Muscadine Finance
            </h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              DeFi Dashboard
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://muscadine.box" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 font-mono">
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
              <p className="text-gray-600 mb-6">
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
                <h2 className="section-title">Portfolio Overview</h2>
                
                {error && <ErrorMessage message={error} />}
                
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Total Value</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Total Growth</p>
                        <p className="text-2xl font-bold text-green-600">
                          +${totalGrowth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Growth %</p>
                        <p className="text-2xl font-bold text-blue-600">
                          +{totalValue > 0 ? ((totalGrowth / (totalValue - totalGrowth)) * 100).toFixed(1) : '0.0'}%
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                        <p className="text-sm font-medium text-gray-700">
                          {new Date().toLocaleTimeString()}
                        </p>
                      </div>
                    </div>

                    {/* Token Balances */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">💵</span>
                          <span className="font-semibold">USDC</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          {tokenBalances.USDC.balance.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ≈ ${tokenBalances.USDC.value.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Vault: {vaultBalances.USDC.balance.toFixed(4)} (${vaultBalances.USDC.value.toFixed(2)})
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">🔷</span>
                          <span className="font-semibold">wETH</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          {tokenBalances.wETH.balance.toFixed(4)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ≈ ${tokenBalances.wETH.value.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Vault: {vaultBalances.wETH.balance.toFixed(4)} (${vaultBalances.wETH.value.toFixed(2)})
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">🟠</span>
                          <span className="font-semibold">cbBTC</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          {tokenBalances.cbBTC.balance.toFixed(6)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ≈ ${tokenBalances.cbBTC.value.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Vault: {vaultBalances.cbBTC.balance.toFixed(6)} (${vaultBalances.cbBTC.value.toFixed(2)})
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
                            stroke="#3B82F6" 
                            strokeWidth={3}
                            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Vaults Section */}
            <section>
              <h2 className="section-title">Available Vaults</h2>
              {isLoading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="card">
                      <LoadingSpinner />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vaults.map((vault) => (
                    <VaultCard key={vault.address} vault={vault} />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default DeFiDashboard 