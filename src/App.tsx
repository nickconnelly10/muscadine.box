import { Routes, Route } from 'react-router-dom'
import MarketingSite from './components/MarketingSite'
import DeFiDashboard from './components/DeFiDashboard'

function App() {
  // Check if we're on the app subdomain
  const isAppSubdomain = window.location.hostname === 'app.muscadine.box' || 
                        window.location.hostname === 'localhost' && window.location.port === '3000'

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/*" element={isAppSubdomain ? <DeFiDashboard /> : <MarketingSite />} />
      </Routes>
    </div>
  )
}

export default App 