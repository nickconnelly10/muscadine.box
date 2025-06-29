import { useState, useEffect } from 'react'
import { useAccount, useBalance, useReadContract } from 'wagmi'
import { formatEther } from 'viem'
import { fetchTokenPrices, fetchAllVaultAPYs, VaultAPY, TokenPrice } from '../services/morphoApi'
import { TOKENS, VAULTS, VAULT_ABI } from '../config/base'

export interface PortfolioData {
  totalValue: number
  totalGrowth: number
  tokenBalances: {
    USDC: { balance: number; value: number }
    wETH: { balance: number; value: number }
    cbBTC: { balance: number; value: number }
  }
  vaultBalances: {
    USDC: { balance: number; value: number }
    wETH: { balance: number; value: number }
    cbBTC: { balance: number; value: number }
  }
  vaultAPYs: VaultAPY[]
  tokenPrices: TokenPrice[]
  isLoading: boolean
  error: string | null
}

export const usePortfolioData = () => {
  const { address, isConnected } = useAccount()
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    totalValue: 0,
    totalGrowth: 0,
    tokenBalances: {
      USDC: { balance: 0, value: 0 },
      wETH: { balance: 0, value: 0 },
      cbBTC: { balance: 0, value: 0 }
    },
    vaultBalances: {
      USDC: { balance: 0, value: 0 },
      wETH: { balance: 0, value: 0 },
      cbBTC: { balance: 0, value: 0 }
    },
    vaultAPYs: [],
    tokenPrices: [],
    isLoading: true,
    error: null
  })

  // Fetch token balances
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

  // Fetch vault balances
  const { data: usdcVaultBalance } = useReadContract({
    address: VAULTS.USDC as `0x${string}`,
    abi: VAULT_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { enabled: !!address }
  })

  const { data: wethVaultBalance } = useReadContract({
    address: VAULTS.wETH as `0x${string}`,
    abi: VAULT_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { enabled: !!address }
  })

  const { data: cbbtcVaultBalance } = useReadContract({
    address: VAULTS.cbBTC as `0x${string}`,
    abi: VAULT_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { enabled: !!address }
  })

  // Fetch prices and APYs
  useEffect(() => {
    const fetchData = async () => {
      if (!isConnected || !address) {
        setPortfolioData(prev => ({ ...prev, isLoading: false }))
        return
      }

      try {
        setPortfolioData(prev => ({ ...prev, isLoading: true, error: null }))

        // Fetch prices and APYs in parallel
        const [tokenPrices, vaultAPYs] = await Promise.all([
          fetchTokenPrices(),
          fetchAllVaultAPYs()
        ])

        // Calculate token balances and values
        const tokenBalances = {
          USDC: {
            balance: usdcBalance ? parseFloat(formatEther(usdcBalance.value)) : 0,
            value: 0
          },
          wETH: {
            balance: wethBalance ? parseFloat(formatEther(wethBalance.value)) : 0,
            value: 0
          },
          cbBTC: {
            balance: cbbtcBalance ? parseFloat(formatEther(cbbtcBalance.value)) : 0,
            value: 0
          }
        }

        // Calculate vault balances and values
        const vaultBalances = {
          USDC: {
            balance: usdcVaultBalance && typeof usdcVaultBalance === 'bigint' 
              ? parseFloat(formatEther(usdcVaultBalance)) : 0,
            value: 0
          },
          wETH: {
            balance: wethVaultBalance && typeof wethVaultBalance === 'bigint'
              ? parseFloat(formatEther(wethVaultBalance)) : 0,
            value: 0
          },
          cbBTC: {
            balance: cbbtcVaultBalance && typeof cbbtcVaultBalance === 'bigint'
              ? parseFloat(formatEther(cbbtcVaultBalance)) : 0,
            value: 0
          }
        }

        // Calculate values using prices
        const priceMap = new Map(tokenPrices.map(p => [p.symbol, p.price]))
        
        Object.keys(tokenBalances).forEach(symbol => {
          const price = priceMap.get(symbol) || 0
          tokenBalances[symbol as keyof typeof tokenBalances].value = 
            tokenBalances[symbol as keyof typeof tokenBalances].balance * price
          vaultBalances[symbol as keyof typeof vaultBalances].value = 
            vaultBalances[symbol as keyof typeof vaultBalances].balance * price
        })

        // Calculate total value
        const totalValue = Object.values(tokenBalances).reduce((sum, token) => sum + token.value, 0) +
                          Object.values(vaultBalances).reduce((sum, vault) => sum + vault.value, 0)

        // Calculate growth (simplified - in real app you'd track historical data)
        const totalGrowth = totalValue * 0.12 // 12% growth placeholder

        setPortfolioData({
          totalValue,
          totalGrowth,
          tokenBalances,
          vaultBalances,
          vaultAPYs,
          tokenPrices,
          isLoading: false,
          error: null
        })

      } catch (error) {
        console.error('Error fetching portfolio data:', error)
        setPortfolioData(prev => ({
          ...prev,
          isLoading: false,
          error: 'Unable to load portfolio data'
        }))
      }
    }

    fetchData()
  }, [
    isConnected,
    address,
    usdcBalance,
    wethBalance,
    cbbtcBalance,
    usdcVaultBalance,
    wethVaultBalance,
    cbbtcVaultBalance
  ])

  return portfolioData
} 