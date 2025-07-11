import MarketingSite from './components/MarketingSite'

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white/90 backdrop-blur-md border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="font-serif text-2xl font-bold text-neutral-900">
              Muscadine
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://defi.muscadine.box" 
                className="btn-primary text-sm px-6 py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <MarketingSite />
      </main>
    </div>
  )
}

export default App 