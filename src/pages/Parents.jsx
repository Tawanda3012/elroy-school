import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const items = [
  { icon: '📅', title: 'Term Dates', desc: 'Key academic dates.', to: '#' },
  { icon: '📰', title: 'Newsletters', desc: 'Weekly updates.', to: '/newsletters' },
  { icon: '👕', title: 'School Uniform', desc: 'Policy and suppliers.', to: '#' },
  { icon: '🍎', title: 'School Meals', desc: 'Menus and diets.', to: '#' },
  { icon: '🚌', title: 'Transport', desc: 'Bus routes and safety.', to: '#' },
  { icon: '💊', title: 'Health & Safety', desc: 'Medical procedures.', to: '#' },
  { icon: '📋', title: 'Policies', desc: 'School documents.', to: '#' },
  { icon: '💰', title: 'Fees', desc: 'Payment schedules.', to: '#' },
];

export default function Parents() {
  return (
    <>
      <Hero title="Parent Information" breadcrumb="Parents" />
      <div className="max-w-7xl mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Information for Parents</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(i => (
            <div key={i.title} className="bg-white p-6 rounded-xl text-center border-t-4 border-accent shadow-md hover:-translate-y-2 hover:shadow-xl transition">
              <div className="text-5xl mb-3">{i.icon}</div>
              <h3 className="text-primary font-bold mb-2">{i.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{i.desc}</p>
              <Link to={i.to} className="inline-block bg-accent hover:bg-accentDark text-white px-4 py-2 rounded-full text-xs">View</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}