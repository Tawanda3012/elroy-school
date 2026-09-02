import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function OurSchool() {
  const sidebarLinks = [
    { label: 'Welcome', to: '/our-school', active: true },
    { label: 'Vision & Values', to: '#' },
    { label: 'Meet the Staff', to: '#' },
    { label: 'Governors', to: '#' },
    { label: 'Newsletters & Letters', to: '/newsletters' },
    { label: 'School Policies', to: '#' },
    { label: 'Term Dates', to: '#' },
    { label: 'Ofsted Reports', to: '#' },
  ];

  return (
    <>
      <Hero title="Our School" breadcrumb="Our School" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <aside className="bg-white p-6 rounded-xl shadow-md h-fit">
          <h3 className="text-primary font-bold border-b-4 border-accent pb-2 mb-4">Our School</h3>
          <ul>
            {sidebarLinks.map(l => (
              <li key={l.label} className="border-b py-3">
                <Link to={l.to} className={`block hover:text-accent hover:pl-2 transition ${l.active ? 'text-accent font-bold' : 'text-gray-600'}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="md:col-span-3 bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Our School</h2>
          <p className="text-gray-600 mb-6">Elroy Foundation School is a vibrant, inclusive learning environment where every child is valued, challenged and supported.</p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Our Vision</h3>
          <p className="text-gray-600">To create a dynamic learning community where children develop academically, socially, and emotionally.</p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Our Mission</h3>
          <p className="text-gray-600">We provide exceptional education through innovative teaching, personalised care, and strong partnerships.</p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Our Values</h3>
          <ul className="text-gray-600 space-y-2 ml-4">
            <li>✨ Excellence in everything we do</li>
            <li>💜 Respect for ourselves and others</li>
            <li>🌟 Resilience and perseverance</li>
            <li>🌍 Global citizenship</li>
            <li>🎨 Creativity and curiosity</li>
          </ul>
        </main>
      </div>
    </>
  );
}