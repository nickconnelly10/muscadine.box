import { useState, useEffect } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    console.log('App component mounted')
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Muscadine Finance...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔷 Muscadine Finance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            DeFi Dashboard - Basic Test Version
          </p>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">App is Loading!</h2>
            <p className="text-gray-600 mb-4">
              If you can see this, the basic React app is working correctly.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700 font-medium">✅ Basic functionality confirmed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 