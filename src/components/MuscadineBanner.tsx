import { useState } from 'react';

export default function MuscadineBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl font-bold text-neutral-900">
          <a
            href="https://www.muscadine.box"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Muscadine
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://health.muscadine.box"
            className="btn-secondary text-sm px-6 py-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Health
          </a>
          <a
            href="https://defi.muscadine.box"
            className="btn-primary text-sm px-6 py-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch DeFi
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            <a
              href="https://health.muscadine.box"
              className="btn-secondary block w-full text-center px-4 py-3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Launch Health
            </a>
            <a
              href="https://defi.muscadine.box"
              className="btn-primary block w-full text-center px-4 py-3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Launch DeFi
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}