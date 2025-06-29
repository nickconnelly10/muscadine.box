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

// Dashboard Header component
const DashboardHeader = () => (
  <div className="text-center py-8 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
      🔷 Muscadine DeFi Dashboard
    </h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      View vaults, connect your wallet, and manage your assets.
    </p>
  </div>
)

// Beta Banner component
const BetaBanner = () => (
  <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3 mb-6">
    <div className="max-w-7xl mx-auto flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <span className="text-yellow-800">🚧</span>
        <span className="text-sm font-medium text-yellow-800">
          This app is currently in beta. Use at your own discretion.
        </span>
      </div>
    </div>
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
    } else {
      // If no value, show empty chart
      setPortfolioData([])
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
      {/* Dashboard Header */}
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 pb-8">
        {!isConnected ? (
          <div className="text-center py-12">
            {/* Beta Banner */}
            <BetaBanner />
            
            <div className="card max-w-md mx-auto">
              <h2 className="section-title">Connect Your Wallet</h2>
              <p className="text-gray-600 mb-8">
                Connect your wallet to access the Muscadine Finance DeFi dashboard
              </p>
              <button
                onClick={handleConnectWallet}
                className="btn-primary w-full hover:scale-105 transition-transform duration-200"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Beta Banner */}
            <BetaBanner />
            
            {/* Portfolio Overview */}
            <section className="mb-10">
              <div className="card">
                <h2 className="section-title">Portfolio Overview</h2>
                
                {error && <ErrorMessage message={error} />}
                
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-md transition-shadow duration-200">
                        <p className="text-sm text-gray-600 mb-1">Total Value</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:shadow-md transition-shadow duration-200">
                        <p className="text-sm text-gray-600 mb-1">Total Growth</p>
                        <p className="text-2xl font-bold text-green-600">
                          {totalGrowth > 0 ? '+' : ''}${totalGrowth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-md transition-shadow duration-200">
                        <p className="text-sm text-gray-600 mb-1">Growth %</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {totalValue > 0 && totalGrowth > 0 ? '+' : ''}{totalValue > 0 ? ((totalGrowth / (totalValue - totalGrowth)) * 100).toFixed(1) : '0.0'}%
                        </p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <p className="text-sm text-gray-600 mb-1">Last Updated</p>
                        <p className="text-sm font-medium text-gray-700">
                          {new Date().toLocaleTimeString()}
                        </p>
                      </div>
                    </div>

                    {/* Token Balances */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-200 hover:scale-105">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">💵</span>
                          <span className="font-semibold text-gray-800">USDC</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mb-1">
                          {tokenBalances.USDC.balance.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          ≈ ${tokenBalances.USDC.value.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded">
                          Vault: {vaultBalances.USDC.balance.toFixed(4)} (${vaultBalances.USDC.value.toFixed(2)})
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-200 hover:scale-105">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">🔷</span>
                          <span className="font-semibold text-gray-800">wETH</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mb-1">
                          {tokenBalances.wETH.balance.toFixed(4)}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          ≈ ${tokenBalances.wETH.value.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded">
                          Vault: {vaultBalances.wETH.balance.toFixed(4)} (${vaultBalances.wETH.value.toFixed(2)})
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-200 hover:scale-105">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">🟠</span>
                          <span className="font-semibold text-gray-800">cbBTC</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mb-1">
                          {tokenBalances.cbBTC.balance.toFixed(6)}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          ≈ ${tokenBalances.cbBTC.value.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded">
                          Vault: {vaultBalances.cbBTC.balance.toFixed(6)} (${vaultBalances.cbBTC.value.toFixed(2)})
                        </p>
                      </div>
                    </div>
                    
                    {/* Portfolio Chart - Only show if there's data */}
                    {portfolioData.length > 0 ? (
                      <div className="h-80 bg-white rounded-xl p-4 border border-gray-200">
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
                    ) : (
                      <div className="h-80 bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
                        <p className="text-gray-500 text-lg">No portfolio data available</p>
                      </div>
                    )}
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