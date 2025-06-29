import React, { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import VaultCard from './VaultCard'

// Placeholder portfolio data
const portfolioData = [
  { date: '2024-01', value: 10000 },
  { date: '2024-02', value: 10500 },
  { date: '2024-03', value: 11200 },
  { date: '2024-04', value: 11800 },
  { date: '2024-05', value: 12500 },
  { date: '2024-06', value: 13200 },
  { date: '2024-07', value: 14000 },
  { date: '2024-08', value: 14800 },
  { date: '2024-09', value: 15600 },
  { date: '2024-10', value: 16500 },
  { date: '2024-11', value: 17400 },
  { date: '2024-12', value: 18400 },
]

const DeFiDashboard: React.FC = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const vaults = [
    {
      name: 'USDC Vault',
      symbol: 'USDC',
      address: '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F',
      apy: '8.5%',
      tvl: '$2.4M',
      icon: '💵'
    },
    {
      name: 'wETH Vault',
      symbol: 'wETH',
      address: '0x21e0d366272798da3A977FEBA699FCB91959d120',
      apy: '12.3%',
      tvl: '$1.8M',
      icon: '🔷'
    },
    {
      name: 'cbBTC Vault',
      symbol: 'cbBTC',
      address: '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9',
      apy: '15.7%',
      tvl: '$3.2M',
      icon: '🟠'
    }
  ]

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
              <div className="flex space-x-2">
                {connectors.map((connector) => (
                  <button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    className="btn-primary text-sm"
                  >
                    Connect {connector.name}
                  </button>
                ))}
              </div>
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
              <div className="space-y-3">
                {connectors.map((connector) => (
                  <button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    className="btn-primary w-full"
                  >
                    Connect {connector.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Portfolio Overview */}
            <section className="mb-8">
              <div className="card">
                <h2 className="section-title">Portfolio Overview</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-stone-500 mb-1">Total Value</p>
                    <p className="text-2xl font-bold text-stone-900">$18,400</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-stone-500 mb-1">24h Change</p>
                    <p className="text-2xl font-bold text-green-600">+$800</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-stone-500 mb-1">Total Yield</p>
                    <p className="text-2xl font-bold text-gold-600">$2,400</p>
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