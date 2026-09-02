import Hero from '../components/Hero';

const news = [
  { date: 'Sept 1, 2026', title: 'New Academic Year Begins', desc: 'Welcoming pupils back with excitement.', color: 'from-blue-500 to-purple-600' },
  { date: 'Aug 25, 2026', title: 'Summer Camp Highlights', desc: 'Incredible summer camp adventures.', color: 'from-orange-500 to-red-500' },
  { date: 'July 15, 2026', title: 'Sports Day Success', desc: 'Amazing sportsmanship on Sports Day.', color: 'from-green-500 to-teal-500' },
  { date: 'June 30, 2026', title: 'Year 6 Graduation', desc: 'Celebrating our Year 6 pupils.', color: 'from-red-500 to-pink-500' },
  { date: 'June 10, 2026', title: 'Science Fair', desc: 'Amazing projects from young scientists.', color: 'from-purple-500 to-blue-500' },
  { date: 'May 20, 2026', title: 'World Book Day', desc: 'Pupils dressed as book characters.', color: 'from-teal-500 to-cyan-500' },
];

export default function News() {
  return (
    <>
      <Hero title="News & Events" breadcrumb="News" />
      <div className="max-w-7xl mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Latest News & Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition">
              <div className={`h-48 bg-gradient-to-br ${n.color}`}></div>
              <div className="p-6">
                <span className="text-accent text-sm font-bold">{n.date}</span>
                <h3 className="text-primary font-bold my-2">{n.title}</h3>
                <p className="text-gray-600 mb-3">{n.desc}</p>
                <a href="#" className="text-accent font-medium">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}