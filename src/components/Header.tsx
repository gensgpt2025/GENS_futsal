import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full p-4 border-b border-gold/30 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold transition-all duration-300 hover:text-white hover:[text-shadow:0_0_8px_rgba(255,215,0,0.8)]">
          GENS ICHIHARA
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="transition-all duration-300 hover:text-gold hover:[text-shadow:0_0_4px_rgba(255,215,0,0.5)]">Home</Link>
          <Link href="/news" className="transition-all duration-300 hover:text-gold hover:[text-shadow:0_0_4px_rgba(255,215,0,0.5)]">News</Link>
          <Link href="/team" className="transition-all duration-300 hover:text-gold hover:[text-shadow:0_0_4px_rgba(255,215,0,0.5)]">Team</Link>
          <Link href="/schedule" className="transition-all duration-300 hover:text-gold hover:[text-shadow:0_0_4px_rgba(255,215,0,0.5)]">Schedule</Link>
          <Link href="/contact" className="transition-all duration-300 hover:text-gold hover:[text-shadow:0_0_4px_rgba(255,215,0,0.5)]">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
