import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { injected, coinbaseWallet } from 'wagmi/connectors'
import App from './App.tsx'
import './index.css'

const config = createConfig({
  chains: [base],
  connectors: [
    injected({ target: 'metaMask' }),
    coinbaseWallet({ 
      appName: 'Muscadine Finance',
      chainId: base.id 
    }),
  ],
  transports: {
    [base.id]: http('https://mainnet.base.org'),
  },
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
) 