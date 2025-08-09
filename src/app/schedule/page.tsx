const dummySchedule = [
  {
    date: '2025-08-23',
    opponent: 'Futsal Club Tokyo',
    score: 'Upcoming',
    location: 'Home',
    status: 'Upcoming',
  },
  {
    date: '2025-08-16',
    opponent: 'Chiba Futsal Club',
    score: '5 - 3',
    location: 'Away',
    status: 'Win',
  },
  {
    date: '2025-08-09',
    opponent: 'Saitama Reds',
    score: '2 - 4',
    location: 'Home',
    status: 'Loss',
  },
  {
    date: '2025-08-02',
    opponent: 'Kanagawa Blues',
    score: '3 - 3',
    location: 'Away',
    status: 'Draw',
  },
];

const SchedulePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gold mb-8 text-center [text-shadow:0_0_8px_rgba(255,215,0,0.8)]">Schedule & Results</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black border border-gold/30">
          <thead>
            <tr className="border-b border-gold/30">
              <th className="p-4 text-left text-gold">Date</th>
              <th className="p-4 text-left text-gold">Opponent</th>
              <th className="p-4 text-left text-gold">Score</th>
              <th className="p-4 text-left text-gold">Location</th>
            </tr>
          </thead>
          <tbody>
            {dummySchedule.map((match, index) => (
              <tr key={index} className={`border-b border-gray-700 ${
                match.status === 'Win' ? 'bg-gold/10' : ''
              }`}>
                <td className="p-4">{match.date}</td>
                <td className="p-4">{match.opponent}</td>
                <td className={`p-4 font-bold ${
                  match.status === 'Win' ? 'text-gold' : 
                  match.status === 'Loss' ? 'text-red-500' : 'text-white'
                }`}>
                  {match.score}
                </td>
                <td className="p-4">{match.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePage;
