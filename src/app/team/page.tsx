import Image from 'next/image';

const dummyPlayers = [
  {
    id: 1,
    name: 'Taro Yamada',
    position: 'Pivo',
    number: 10,
    imageUrl: 'https://placehold.co/400x400/000000/FFD700?text=Player',
  },
  {
    id: 2,
    name: 'Jiro Tanaka',
    position: 'Ala',
    number: 7,
    imageUrl: 'https://placehold.co/400x400/000000/FFD700?text=Player',
  },
  {
    id: 3,
    name: 'Saburo Sato',
    position: 'Fixo',
    number: 4,
    imageUrl: 'https://placehold.co/400x400/000000/FFD700?text=Player',
  },
  {
    id: 4,
    name: 'Shiro Suzuki',
    position: 'Goleiro',
    number: 1,
    imageUrl: 'https://placehold.co/400x400/000000/FFD700?text=Player',
  },
];

const TeamPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gold mb-8 text-center [text-shadow:0_0_8px_rgba(255,215,0,0.8)]">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyPlayers.map((player) => (
          <div key={player.id} className="border border-gold/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-neon text-center">
            <div className="relative w-full h-60 bg-black">
              <Image
                src={player.imageUrl}
                alt={`Photo of ${player.name}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-gold">#{player.number}</p>
              <h2 className="text-xl font-semibold mt-1">{player.name}</h2>
              <p className="text-md text-gray-400">{player.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
