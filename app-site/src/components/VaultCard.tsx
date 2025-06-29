import React, { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'
import { VAULT_ABI, TOKEN_ABI } from '../config/base'

interface Vault {
  name: string
  symbol: string
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

  // Contract write hooks
  const { writeContract: approveWrite, data: approveData, isPending: isApprovePending } = useWriteContract()
  const { writeContract: depositWrite, data: depositData, isPending: isDepositPending } = useWriteContract()
  const { writeContract: withdrawWrite, data: withdrawData, isPending: isWithdrawPending } = useWriteContract()
  const { writeContract: claimWrite, data: claimData, isPending: isClaimPending } = useWriteContract()

  // Wait for transactions
  const { isLoading: isApproveLoading } = useWaitForTransactionReceipt({ hash: approveData })
  const { isLoading: isDepositLoading } = useWaitForTransactionReceipt({ hash: depositData })
  const { isLoading: isWithdrawLoading } = useWaitForTransactionReceipt({ hash: withdrawData })
  const { isLoading: isClaimLoading } = useWaitForTransactionReceipt({ hash: claimData })

  const handleAction = () => {
    if (!amount || !address) return

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
        depositWrite({
          address: vault.address as `0x${string}`,
          abi: VAULT_ABI,
          functionName: 'deposit',
          args: [parseEther(amount), address]
        })
        break
      case 'withdraw':
        withdrawWrite({
          address: vault.address as `0x${string}`,
          abi: VAULT_ABI,
          functionName: 'withdraw',
          args: [parseEther(amount), address, address]
        })
        break
    }
  }

  const handleClaimRewards = () => {
    if (!address) return
    
    claimWrite({
      address: vault.address as `0x${string}`,
      abi: VAULT_ABI,
      functionName: 'claimRewards'
    })
  }

  const isLoading = isApproveLoading || isDepositLoading || isWithdrawLoading || isClaimLoading ||
                   isApprovePending || isDepositPending || isWithdrawPending || isClaimPending

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{vault.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-900">{vault.name}</h3>
            <p className="text-sm text-gray-500">{vault.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">{vault.apy.toFixed(2)}%</p>
          <p className="text-sm text-gray-500">APY</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">TVL: {vault.tvl}</p>
          <p className="text-sm text-gray-600 mb-2">Your Balance: {vault.balance.toFixed(4)} {vault.symbol}</p>
          <p className="text-sm text-gray-600 mb-2">Value: ${vault.value.toFixed(2)}</p>
          <p className="text-xs text-gray-500 font-mono">{vault.address}</p>
        </div>

        <div className="space-y-3">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />

          <div className="flex space-x-2">
            <button
              onClick={() => setAction('approve')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                action === 'approve'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Approve
            </button>
            <button
              onClick={() => setAction('supply')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                action === 'supply'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Supply
            </button>
            <button
              onClick={() => setAction('withdraw')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                action === 'withdraw'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Withdraw
            </button>
          </div>

          <button
            onClick={handleAction}
            disabled={!amount || isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : `${action.charAt(0).toUpperCase() + action.slice(1)} ${vault.symbol}`}
          </button>

          <button
            onClick={handleClaimRewards}
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isClaimLoading ? 'Claiming...' : 'Claim Rewards'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VaultCard 