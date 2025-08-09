import Button from '@/components/Button';

const dummyNews = [
  {
    id: 1,
    title: 'New Player Signing Announcement',
    date: '2025-08-16',
    excerpt: 'We are thrilled to announce the signing of a new star player who will join our ranks for the upcoming season.',
  },
  {
    id: 2,
    title: 'Recap of Last Match vs Tokyo United',
    date: '2025-08-02',
    excerpt: 'A tough battle on the court ended in a draw. Read the full match report and analysis here.',
  },
  {
    id: 3,
    title: 'Official Merchandise Now Available',
    date: '2025-07-25',
    excerpt: 'Get your official GENS ICHIHARA gear! The new online store is now open for all fans.',
  },
];

const NewsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gold mb-8 text-center [text-shadow:0_0_8px_rgba(255,215,0,0.8)]">News</h1>
      <div className="space-y-8">
        {dummyNews.map((article) => (
          <div key={article.id} className="p-6 border border-gold/30 rounded-lg transition-all duration-300 hover:border-gold hover:shadow-neon">
            <h2 className="text-2xl font-bold text-gold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{article.date}</p>
            <p className="text-gray-300 mb-6">{article.excerpt}</p>
            <Button href={`/news/${article.id}`}>Read More</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
