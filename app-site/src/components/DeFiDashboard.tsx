import React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { usePortfolioData } from '../hooks/usePortfolioData'
import VaultCard from './VaultCard'
import { base } from 'wagmi/chains'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const VAULTS = [
  {
    name: 'USDC Vault',
    symbol: 'USDC',
    address: '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F',
    icon: '💵',
    tokenAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  },
  {
    name: 'wETH Vault',
    symbol: 'wETH',
    address: '0x21e0d366272798da3A977FEBA699FCB91959d120',
    icon: '⚡',
    tokenAddress: '0x4200000000000000000000000000000000000006',
  },
  {
    name: 'cbBTC Vault',
    symbol: 'cbBTC',
    address: '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9',
    icon: '🟠',
    tokenAddress: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
  },
]

const DashboardHeader = () => (
  <div className="bg-gradient-to-br from-stone-50 to-stone-100 border-b border-stone-200">
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
        Muscadine DeFi Dashboard
      </h1>
      <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
        Secure, self-custodial vault infrastructure on Base.
      </p>
    </div>
  </div>
)

const BetaBanner = () => (
  <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
    <div className="max-w-7xl mx-auto flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <span className="text-amber-800">🚧</span>
        <span className="text-sm font-medium text-amber-800">
          This app is currently in beta. Use at your own discretion.
        </span>
      </div>
    </div>
  </div>
)

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-400"></div>
  </div>
)

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
    <p className="text-red-700 font-medium">{message}</p>
  </div>
)

const WalletButton: React.FC = () => {
  const { address, isConnected, chain } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  if (!isConnected) {
    return (
      <button
        onClick={() => connect({ connector: connectors[0] })}
        className="bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm"
        disabled={isPending}
      >
        {isPending ? 'Connecting...' : 'Connect Wallet'}
      </button>
    )
  }

  if (chain && chain.id !== base.id) {
    return (
      <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg border border-red-200">
        Please switch to Base network
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="font-mono text-sm bg-stone-100 px-3 py-2 rounded-lg border border-stone-200 text-stone-700">
        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Unknown'}
      </span>
      <button
        onClick={() => disconnect()}
        className="bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 border border-stone-300"
      >
        Disconnect
      </button>
    </div>
  )
}

const PortfolioOverview: React.FC<ReturnType<typeof usePortfolioData>> = ({
  totalValue,
  totalGrowth,
  tokenBalances,
  vaultBalances,
  isLoading,
  error
}) => {
  // Generate dummy chart data for now (replace with real historical data if available)
  const chartData = Array.from({ length: 12 }, (_, i) => ({
    date: `2024-${(i + 1).toString().padStart(2, '0')}`,
    value: totalValue * (0.85 + 0.03 * i) // Simulate growth
  }))
  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Portfolio Overview</h2>
        {error && <ErrorMessage message={error} />}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-200 hover:shadow-md transition-shadow duration-200">
                <p className="text-sm text-stone-600 mb-2 font-medium">Total Value</p>
                <p className="text-2xl font-bold text-stone-900">
                  ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-200 hover:shadow-md transition-shadow duration-200">
                <p className="text-sm text-stone-600 mb-2 font-medium">Total Growth</p>
                <p className="text-2xl font-bold text-green-600">
                  {totalGrowth > 0 ? '+' : ''}${totalGrowth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-200 hover:shadow-md transition-shadow duration-200">
                <p className="text-sm text-stone-600 mb-2 font-medium">Growth %</p>
                <p className="text-2xl font-bold text-stone-700">
                  {totalValue > 0 && totalGrowth > 0 ? '+' : ''}{totalValue > 0 ? ((totalGrowth / (totalValue - totalGrowth)) * 100).toFixed(1) : '0.0'}%
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-200 hover:shadow-md transition-shadow duration-200">
                <p className="text-sm text-stone-600 mb-2 font-medium">Last Updated</p>
                <p className="text-sm font-medium text-stone-700">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">💵</span>
                  <span className="font-serif font-semibold text-stone-800 text-lg">USDC</span>
                </div>
                <p className="text-3xl font-bold text-stone-900 mb-2">
                  {tokenBalances.USDC.balance.toFixed(2)}
                </p>
                <p className="text-sm text-stone-600 mb-3">
                  ≈ ${tokenBalances.USDC.value.toFixed(2)}
                </p>
                <p className="text-xs text-stone-500 bg-white px-3 py-2 rounded-lg border border-stone-200">
                  Vault: {vaultBalances.USDC.balance.toFixed(4)} (${vaultBalances.USDC.value.toFixed(2)})
                </p>
              </div>
              <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">⚡</span>
                  <span className="font-serif font-semibold text-stone-800 text-lg">wETH</span>
                </div>
                <p className="text-3xl font-bold text-stone-900 mb-2">
                  {tokenBalances.wETH.balance.toFixed(4)}
                </p>
                <p className="text-sm text-stone-600 mb-3">
                  ≈ ${tokenBalances.wETH.value.toFixed(2)}
                </p>
                <p className="text-xs text-stone-500 bg-white px-3 py-2 rounded-lg border border-stone-200">
                  Vault: {vaultBalances.wETH.balance.toFixed(4)} (${vaultBalances.wETH.value.toFixed(2)})
                </p>
              </div>
              <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🟠</span>
                  <span className="font-serif font-semibold text-stone-800 text-lg">cbBTC</span>
                </div>
                <p className="text-3xl font-bold text-stone-900 mb-2">
                  {tokenBalances.cbBTC.balance.toFixed(6)}
                </p>
                <p className="text-sm text-stone-600 mb-3">
                  ≈ ${tokenBalances.cbBTC.value.toFixed(2)}
                </p>
                <p className="text-xs text-stone-500 bg-white px-3 py-2 rounded-lg border border-stone-200">
                  Vault: {vaultBalances.cbBTC.balance.toFixed(6)} (${vaultBalances.cbBTC.value.toFixed(2)})
                </p>
              </div>
            </div>
            <div className="h-80 bg-stone-50 rounded-xl p-6 border border-stone-200">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']} labelFormatter={(label) => `Date: ${label}`} />
                  <Line type="monotone" dataKey="value" stroke="#57534e" strokeWidth={3} dot={{ fill: '#57534e', strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

const DeFiDashboard: React.FC = () => {
  const portfolio = usePortfolioData()
  const { isConnected } = useAccount()

  return (
    <div className="min-h-screen bg-stone-50">
      <DashboardHeader />
      <BetaBanner />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div />
          <WalletButton />
        </div>
        {isConnected ? (
          <>
            <PortfolioOverview {...portfolio} />
            <section className="grid md:grid-cols-3 gap-8">
              {VAULTS.map((vault) => {
                const apy = portfolio.vaultAPYs.find(v => v.vaultAddress.toLowerCase() === vault.address.toLowerCase())?.apy || 0
                const symbol = vault.symbol as 'USDC' | 'wETH' | 'cbBTC'
                const balance = (portfolio.vaultBalances as Record<string, { balance: number; value: number }>)[symbol]?.balance || 0
                const value = (portfolio.vaultBalances as Record<string, { balance: number; value: number }>)[symbol]?.value || 0
                return (
                  <VaultCard
                    key={vault.address}
                    vault={{ ...vault, symbol, apy, balance, value, tvl: '$-', address: vault.address || '' }}
                  />
                )
              })}
            </section>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-12 max-w-md mx-auto">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Connect Your Wallet</h2>
              <p className="text-stone-600 mb-8 text-lg">
                Connect your wallet to access the Muscadine Finance DeFi dashboard
              </p>
              <WalletButton />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DeFiDashboard 