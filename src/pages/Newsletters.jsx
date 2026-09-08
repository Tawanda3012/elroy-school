import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';
import { useState } from 'react';

const newsletters = [
  { title: 'Newsletter - Sept 2026', desc: 'Welcome Back Edition', year: '2026' },
  { title: 'Newsletter - Aug 2026', desc: 'Summer Highlights', year: '2026' },
  { title: 'Newsletter - July 2026', desc: 'End of Term Report', year: '2026' },
  { title: 'Sports Day Letter', desc: 'June 2026', year: '2026' },
  { title: 'Newsletter - June 2026', desc: 'Achievements Special', year: '2026' },
  { title: 'Year 6 Trip Letter', desc: 'May 2026', year: '2026' },
  { title: 'Newsletter - May 2025', desc: 'Spring Edition', year: '2025' },
  { title: 'Parent Meeting Letter', desc: 'April 2025', year: '2025' },
];

export default function Newsletters() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? newsletters : newsletters.filter((n) => n.year === filter);

  return (
    <>
      <Hero title="Newsletters & Letters" breadcrumb="Newsletters" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <OurSchoolSidebar />

        <main className="md:col-span-3">
          <h2 className="text-3xl font-bold text-primary mb-3">School Newsletters & Letters</h2>
          <p className="text-gray-600 mb-8">Stay updated with all our latest newsletters and important letters.</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {['All', '2026', '2025'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full border-2 border-primary font-medium transition ${
                  filter === f ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {filtered.map((n, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-xl text-center border-2 border-transparent hover:border-accent hover:-translate-y-2 hover:shadow-xl transition">
                <div className="w-16 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded mx-auto mb-4 flex items-center justify-center text-white font-bold">PDF</div>
                <h4 className="text-primary font-bold mb-1 text-sm">{n.title}</h4>
                <p className="text-gray-500 text-xs mb-3">{n.desc}</p>
                <a href="#" className="inline-block bg-accent hover:bg-accentDark text-white px-4 py-2 rounded-full text-xs">Download</a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}