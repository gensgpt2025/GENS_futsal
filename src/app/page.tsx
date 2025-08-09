import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-8 py-20">
        
        <h1 className="text-[100px] leading-tight font-bold text-gold [text-shadow:0_0_20px_rgba(255,248,231,0.9)] animate-pulse">
          GENS ICHIHARA
        </h1>
        <p className="text-[6rem] text-gold [text-shadow:0_0_20px_rgba(255,248,231,0.9)]">Futsal Official Website</p>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Next Match Section */}
        <div className="border border-gold/50 rounded-lg p-6 shadow-neon">
          <h2 className="text-2xl font-bold text-gold mb-4">NEXT MATCH</h2>
          <div className="text-left">
            <p><span className="font-bold">Date:</span> 2025.08.16 (Sat)</p>
            <p><span className="font-bold">Opponent:</span> Chiba Futsal Club</p>
            <p><span className="font-bold">Location:</span> Ichihara City Arena</p>
            <p><span className="font-bold">Kick-off:</span> 19:00</p>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="border border-gold/50 rounded-lg p-6 shadow-neon">
          <h2 className="text-2xl font-bold text-gold mb-4">LATEST NEWS</h2>
          <ul className="text-left space-y-2">
            <li><a href="#" className="hover:underline">New Player Signing Announcement</a> - 2025.08.08</li>
            <li><a href="#" className="hover:underline">Recap of Last Match vs Tokyo United</a> - 2025.08.02</li>
            <li><a href="#" className="hover:underline">Official Merchandise Now Available</a> - 2025.07.25</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

