// Morpho API service for fetching live APY data

export interface VaultAPY {
  vaultAddress: string
  apy: number
  strategy: string
  lastUpdated: string
}

export interface TokenPrice {
  symbol: string
  price: number
  lastUpdated: string
}

// Fetch APY for a specific vault
export const fetchVaultAPY = async (vaultAddress: string): Promise<VaultAPY | null> => {
  try {
    // In a real implementation, you'd call Morpho's API
    // For now, we'll simulate with realistic Base APY data
    const mockAPYData: Record<string, VaultAPY> = {
      '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F': {
        vaultAddress: '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F',
        apy: 8.47,
        strategy: 'USDC Yield Strategy',
        lastUpdated: new Date().toISOString()
      },
      '0x21e0d366272798da3A977FEBA699FCB91959d120': {
        vaultAddress: '0x21e0d366272798da3A977FEBA699FCB91959d120',
        apy: 12.34,
        strategy: 'wETH Yield Strategy',
        lastUpdated: new Date().toISOString()
      },
      '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9': {
        vaultAddress: '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9',
        apy: 15.78,
        strategy: 'cbBTC Yield Strategy',
        lastUpdated: new Date().toISOString()
      }
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return mockAPYData[vaultAddress] || null
  } catch (error) {
    console.error('Error fetching vault APY:', error)
    return null
  }
}

// Fetch current token prices
export const fetchTokenPrices = async (): Promise<TokenPrice[]> => {
  try {
    // In a real implementation, you'd call a price API like CoinGecko
    const mockPrices: TokenPrice[] = [
      {
        symbol: 'USDC',
        price: 1.00,
        lastUpdated: new Date().toISOString()
      },
      {
        symbol: 'wETH',
        price: 2547.32,
        lastUpdated: new Date().toISOString()
      },
      {
        symbol: 'cbBTC',
        price: 45234.67,
        lastUpdated: new Date().toISOString()
      }
    ]

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    return mockPrices
  } catch (error) {
    console.error('Error fetching token prices:', error)
    return []
  }
}

// Fetch all vault APYs
export const fetchAllVaultAPYs = async (): Promise<VaultAPY[]> => {
  const vaultAddresses = [
    '0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F',
    '0x21e0d366272798da3A977FEBA699FCB91959d120',
    '0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9'
  ]

  const apyPromises = vaultAddresses.map(address => fetchVaultAPY(address))
  const results = await Promise.allSettled(apyPromises)
  
  return results
    .filter((result): result is PromiseFulfilledResult<VaultAPY | null> => 
      result.status === 'fulfilled' && result.value !== null
    )
    .map(result => result.value!)
} 