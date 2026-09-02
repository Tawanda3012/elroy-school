import { Link } from 'react-router-dom';

const circleNav = [
  { icon: '🏫', label: 'Our School', to: '/our-school' },
  { icon: '📚', label: 'Curriculum', to: '/curriculum' },
  { icon: '👨‍👩‍👧', label: 'Parents', to: '/parents' },
  { icon: '📰', label: 'News', to: '/news' },
  { icon: '🎓', label: 'Admissions', to: '/admissions' },
];

const values = [
  { icon: '💡', title: 'Excellence', desc: 'Striving for the highest standards.' },
  { icon: '❤️', title: 'Respect', desc: 'Valuing every individual.' },
  { icon: '🌱', title: 'Growth', desc: 'Nurturing lifelong learning.' },
  { icon: '🤝', title: 'Community', desc: 'Building strong bonds.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="text-white text-center py-32 px-6"
        style={{
          background: `linear-gradient(rgba(26,58,108,0.75), rgba(243,156,18,0.6)), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600') center/cover`
        }}
      >
        <h2 className="text-6xl font-bold mb-4 drop-shadow-lg">Welcome to Elroy Foundation School</h2>
        <p className="text-xl mb-8">Where every child is inspired to learn, grow and achieve.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/admissions" className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full font-bold transition transform hover:-translate-y-1">
            Apply Now
          </Link>
          <Link to="/our-school" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition">
            Discover More
          </Link>
        </div>
      </section>

      {/* Circle Nav */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {circleNav.map(item => (
            <Link key={item.to} to={item.to} className="text-center group">
              <div className="w-32 h-32 rounded-full bg-primary/90 border-4 border-accent flex items-center justify-center text-5xl mx-auto mb-3 group-hover:-translate-y-2 transition">
                {item.icon}
              </div>
              <h3 className="text-primary font-bold">{item.label}</h3>
              <span className="text-accent text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="max-w-7xl mx-auto my-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="h-96 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl"></div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">A Warm Welcome from the Head</h2>
          <p className="text-gray-600 mb-4">At Elroy Foundation School, we believe every child deserves the very best start in life. Our vibrant community fosters curiosity, kindness, and confidence.</p>
          <p className="text-gray-600 mb-6">We provide a broad and balanced curriculum that inspires children to reach their full potential.</p>
          <Link to="/our-school" className="bg-accent hover:bg-accentDark text-white px-6 py-3 rounded-full font-bold inline-block">Read More</Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">Our Core Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map(v => (
            <div key={v.title} className="bg-slate-50 p-8 rounded-xl border-t-4 border-accent hover:-translate-y-2 hover:shadow-xl transition">
              <div className="text-5xl mb-3">{v.icon}</div>
              <h3 className="text-primary font-bold mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}