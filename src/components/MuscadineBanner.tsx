export default function MuscadineBanner() {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-neutral-900"><a href="https://www.muscadine.box" target="_blank" rel="noopener noreferrer" className="hover:underline">Muscadine</a></div>
        <div className="flex items-center space-x-6">
          <a href="https://health.muscadine.box" className="btn-secondary text-sm px-6 py-3" target="_blank" rel="noopener noreferrer">Health AI</a>
          <a href="https://defi.muscadine.box" className="btn-primary text-sm px-6 py-3" target="_blank" rel="noopener noreferrer">Launch DeFi</a>
        </div>
      </div>
    </nav>
  );
} 