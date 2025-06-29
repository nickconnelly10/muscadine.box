import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { injected, walletConnect } from 'wagmi/connectors'
import DeFiDashboard from './components/DeFiDashboard'

// Create wagmi config
const config = createConfig({
  chains: [base],
  connectors: [
    injected(),
    walletConnect({ projectId: 'your-project-id' })
  ],
  transports: {
    [base.id]: http()
  }
})

// Create query client
const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen">
          <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-gray-900">
                  Muscadine Finance
                </div>
                <a 
                  href="https://muscadine.box" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </div>
            </div>
          </nav>
          <main>
            <DeFiDashboard />
          </main>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App 