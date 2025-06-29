import React, { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'
import { VAULT_ABI, TOKEN_ABI } from '../config/base'

interface Vault {
  name: string
  symbol: 'USDC' | 'wETH' | 'cbBTC'
  address: string
  apy: number
  tvl: string
  icon: string
  tokenAddress: string
  balance: number
  value: number
}

interface VaultCardProps {
  vault: Vault
}

const VaultCard: React.FC<VaultCardProps> = ({ vault }) => {
  const { address } = useAccount()
  const [amount, setAmount] = useState('')
  const [action, setAction] = useState<'approve' | 'supply' | 'withdraw'>('supply')
  const [inputError, setInputError] = useState<string | null>(null)

  // Contract write hooks
  const { writeContract: approveWrite, data: approveData, isPending: isApprovePending } = useWriteContract()
  const { writeContract: depositWrite, data: depositData, isPending: isDepositPending } = useWriteContract()
  const { writeContract: withdrawWrite, data: withdrawData, isPending: isWithdrawPending } = useWriteContract()

  // Wait for transactions
  const { isLoading: isApproveLoading } = useWaitForTransactionReceipt({ hash: approveData })
  const { isLoading: isDepositLoading } = useWaitForTransactionReceipt({ hash: depositData })
  const { isLoading: isWithdrawLoading } = useWaitForTransactionReceipt({ hash: withdrawData })

  const isLoading = isApproveLoading || isDepositLoading || isWithdrawLoading ||
                   isApprovePending || isDepositPending || isWithdrawPending

  // Input validation
  const validateInput = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setInputError('Enter a valid amount')
      return false
    }
    if (action === 'supply' && Number(amount) > vault.balance) {
      setInputError('Insufficient wallet balance')
      return false
    }
    if (action === 'withdraw' && Number(amount) > vault.balance) {
      setInputError('Insufficient vault balance')
      return false
    }
    setInputError(null)
    return true
  }

  const handleAction = () => {
    if (!address || !validateInput()) return
    switch (action) {
      case 'approve':
        approveWrite({
          address: vault.tokenAddress as `0x${string}`,
          abi: TOKEN_ABI,
          functionName: 'approve',
          args: [vault.address as `0x${string}`, parseEther(amount)]
        })
        break
      case 'supply':
        if (!address) return
        depositWrite({
          address: vault.address as `0x${string}`,
          abi: VAULT_ABI,
          functionName: 'deposit',
          args: [parseEther(amount), address]
        })
        break
      case 'withdraw':
        if (!address) return
        withdrawWrite({
          address: vault.address as `0x${string}`,
          abi: VAULT_ABI,
          functionName: 'withdraw',
          args: [parseEther(amount), address, address]
        })
        break
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-3xl">{vault.icon}</span>
          <div>
            <h3 className="font-serif font-semibold text-stone-900 text-xl">{vault.name}</h3>
            <p className="text-sm text-stone-500">{vault.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">{vault.apy.toFixed(2)}%</p>
          <p className="text-sm text-stone-500">APY</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm text-stone-600">TVL: {vault.tvl}</p>
          <p className="text-sm text-stone-600">Your Balance: {vault.balance.toFixed(4)} {vault.symbol}</p>
          <p className="text-sm text-stone-600">Value: ${vault.value.toFixed(2)}</p>
          <p className="text-xs text-stone-400 font-mono bg-stone-50 px-3 py-2 rounded-lg border border-stone-200">{vault.address}</p>
        </div>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent bg-stone-50"
            min="0"
            step="any"
            disabled={isLoading}
          />
          {inputError && <p className="text-xs text-red-600 mb-1">{inputError}</p>}
          <div className="flex space-x-2">
            <button
              onClick={() => setAction('approve')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                action === 'approve'
                  ? 'bg-stone-800 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
              disabled={isLoading}
            >
              Approve
            </button>
            <button
              onClick={() => setAction('supply')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                action === 'supply'
                  ? 'bg-green-600 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
              disabled={isLoading}
            >
              Supply
            </button>
            <button
              onClick={() => setAction('withdraw')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                action === 'withdraw'
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
              disabled={isLoading}
            >
              Withdraw
            </button>
          </div>
          <button
            onClick={handleAction}
            disabled={!amount || isLoading || !!inputError || !address}
            className="w-full bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {isLoading ? 'Processing...' : `${action.charAt(0).toUpperCase() + action.slice(1)} ${vault.symbol}`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VaultCard 