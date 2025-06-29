import MarketingSite from './components/MarketingSite'

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-serif text-xl font-bold text-stone-900">
              Muscadine Finance
            </div>
            <a 
              href="https://app.muscadine.box" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
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