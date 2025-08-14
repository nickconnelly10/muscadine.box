

export default function MobileNav() {
  const items = [
    { label: 'Home', icon: '🏠', href: '#' },
    { label: 'Health', icon: '🧘', href: 'https://health.muscadine.box' },
    { label: 'DeFi', icon: '💰', href: 'https://defi.muscadine.box' },
    { label: 'Articles', icon: '📚', href: 'https://nicholasconnelly.substack.com/' },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t backdrop-blur bg-white/95 border-stone-200"
      aria-label="Mobile Navigation"
    >
      <ul className="flex justify-around items-stretch py-2">
        {items.map(({ label, icon, href }) => (
          <li key={label} className="flex-1">
            <a
              href={href}
              className="mx-auto flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="text-base" aria-hidden>
                {icon}
              </span>
              <span className="leading-none">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
