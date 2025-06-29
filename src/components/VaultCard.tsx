import React, { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'

interface Vault {
  name: string
  symbol: string
  address: string
  apy: string
  tvl: string
  icon: string
}

interface VaultCardProps {
  vault: Vault
}

// ERC-4626 ABI for vault interactions
const vaultABI = [
  {
    inputs: [
      { name: 'assets', type: 'uint256' },
      { name: 'receiver', type: 'address' }
    ],
    name: 'deposit',
    outputs: [{ name: 'shares', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { name: 'shares', type: 'uint256' },
      { name: 'receiver', type: 'address' },
      { name: 'owner', type: 'address' }
    ],
    name: 'withdraw',
    outputs: [{ name: 'assets', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

const VaultCard: React.FC<VaultCardProps> = ({ vault }) => {
  const { address } = useAccount()
  const [amount, setAmount] = useState('')
  const [action, setAction] = useState<'approve' | 'supply' | 'withdraw'>('supply')

  // Contract write hooks
  const { writeContract: approveWrite, data: approveData, isPending: isApprovePending } = useWriteContract()
  const { writeContract: depositWrite, data: depositData, isPending: isDepositPending } = useWriteContract()
  const { writeContract: withdrawWrite, data: withdrawData, isPending: isWithdrawPending } = useWriteContract()

  // Wait for transactions
  const { isLoading: isApproveLoading } = useWaitForTransactionReceipt({ hash: approveData })
  const { isLoading: isDepositLoading } = useWaitForTransactionReceipt({ hash: depositData })
  const { isLoading: isWithdrawLoading } = useWaitForTransactionReceipt({ hash: withdrawData })

  const handleAction = () => {
    if (!amount || !address) return

    const args = {
      address: vault.address as `0x${string}`,
      abi: vaultABI,
    }

    switch (action) {
      case 'approve':
        approveWrite({
          ...args,
          functionName: 'approve',
          args: [vault.address as `0x${string}`, parseEther(amount)]
        })
        break
      case 'supply':
        depositWrite({
          ...args,
          functionName: 'deposit',
          args: [parseEther(amount), address]
        })
        break
      case 'withdraw':
        withdrawWrite({
          ...args,
          functionName: 'withdraw',
          args: [parseEther(amount), address, address]
        })
        break
    }
  }

  const isLoading = isApproveLoading || isDepositLoading || isWithdrawLoading || 
                   isApprovePending || isDepositPending || isWithdrawPending

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{vault.icon}</span>
          <div>
            <h3 className="font-semibold text-stone-900">{vault.name}</h3>
            <p className="text-sm text-stone-500">{vault.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">{vault.apy}</p>
          <p className="text-sm text-stone-500">APY</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-stone-600 mb-2">TVL: {vault.tvl}</p>
          <p className="text-xs text-stone-500 font-mono">{vault.address}</p>
        </div>

        <div className="space-y-3">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          />

          <div className="flex space-x-2">
            <button
              onClick={() => setAction('approve')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                action === 'approve'
                  ? 'bg-gold-600 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Approve
            </button>
            <button
              onClick={() => setAction('supply')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                action === 'supply'
                  ? 'bg-green-600 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Supply
            </button>
            <button
              onClick={() => setAction('withdraw')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                action === 'withdraw'
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
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
        </div>
      </div>
    </div>
  )
}

export default VaultCard 