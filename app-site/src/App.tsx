import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import DeFiDashboard from './components/DeFiDashboard'

// Create wagmi config
const config = createConfig({
  chains: [base],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Muscadine Finance' }),
    walletConnect({ 
      projectId: 'c4f79cc821944d9680842e34466bfbd9' // Using a public project ID for demo
    })
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
          <main>
            <DeFiDashboard />
          </main>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App 