import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';

const ratings = [
  { area: 'Overall Effectiveness', rating: 'Outstanding' },
  { area: 'Quality of Education', rating: 'Outstanding' },
  { area: 'Behaviour and Attitudes', rating: 'Outstanding' },
  { area: 'Personal Development', rating: 'Outstanding' },
  { area: 'Leadership and Management', rating: 'Outstanding' },
  { area: 'Early Years Provision', rating: 'Outstanding' },
];

const reports = [
  { title: 'Ofsted Inspection Report 2025', date: 'March 2025', rating: 'Outstanding' },
  { title: 'Ofsted Inspection Report 2022', date: 'November 2022', rating: 'Outstanding' },
  { title: 'Ofsted Inspection Report 2018', date: 'June 2018', rating: 'Good' },
];

export default function OfstedReports() {
  return (
    <>
      <Hero title="Ofsted Reports" breadcrumb="Ofsted Reports" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <OurSchoolSidebar />

        <main className="md:col-span-3">
          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <h2 className="text-3xl font-bold text-primary mb-3">Ofsted Reports & Inspections</h2>
            <p className="text-gray-600">
              We are proud of our consistent record of outstanding inspection outcomes. Our reports reflect the dedication of our staff, pupils, and families.
            </p>
          </div>

          {/* Latest Rating Highlight */}
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 mb-8 text-center shadow-xl">
            <div className="text-6xl mb-3">🏆</div>
            <p className="text-lg mb-2">Our Latest Ofsted Rating</p>
            <h3 className="text-4xl font-bold mb-2">OUTSTANDING</h3>
            <p className="opacity-90">Last inspected: March 2025</p>
          </div>

          {/* Ratings Breakdown */}
          <h3 className="text-2xl font-bold text-primary mb-5">Latest Inspection Ratings</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {ratings.map((r) => (
              <div key={r.area} className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center border-l-4 border-accent">
                <span className="text-primary font-medium">{r.area}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  {r.rating}
                </span>
              </div>
            ))}
          </div>

          {/* Past Reports */}
          <h3 className="text-2xl font-bold text-primary mb-5">Download Past Reports</h3>
          <div className="space-y-3">
            {reports.map((r) => (
              <div key={r.title} className="bg-white p-5 rounded-xl shadow-md flex items-center justify-between hover:shadow-xl transition">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📊</div>
                  <div>
                    <h4 className="text-primary font-bold">{r.title}</h4>
                    <p className="text-gray-500 text-sm">{r.date} • Rating: {r.rating}</p>
                  </div>
                </div>
                <a href="#" className="bg-accent hover:bg-accentDark text-white px-6 py-2 rounded-full text-sm font-bold transition">
                  Download
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 border-l-4 border-primary p-6 rounded-xl">
            <p className="text-gray-700">
              🔗 <strong>Visit the official Ofsted website</strong> to see our full inspection history:
              <a href="https://reports.ofsted.gov.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
                reports.ofsted.gov.uk
              </a>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}