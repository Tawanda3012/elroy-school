import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';

const policies = [
  { name: 'Safeguarding Policy', category: 'Safety', updated: 'Sept 2026' },
  { name: 'Behaviour Policy', category: 'Conduct', updated: 'Aug 2026' },
  { name: 'Anti-Bullying Policy', category: 'Safety', updated: 'Aug 2026' },
  { name: 'Attendance Policy', category: 'Academic', updated: 'July 2026' },
  { name: 'SEND Policy', category: 'Inclusion', updated: 'July 2026' },
  { name: 'Health & Safety Policy', category: 'Safety', updated: 'June 2026' },
  { name: 'Equality & Diversity Policy', category: 'Inclusion', updated: 'June 2026' },
  { name: 'Data Protection Policy', category: 'Legal', updated: 'May 2026' },
  { name: 'Complaints Policy', category: 'Legal', updated: 'May 2026' },
  { name: 'Homework Policy', category: 'Academic', updated: 'April 2026' },
  { name: 'Online Safety Policy', category: 'Safety', updated: 'April 2026' },
  { name: 'Uniform Policy', category: 'Conduct', updated: 'March 2026' },
];

const categoryColors = {
  Safety: 'bg-red-100 text-red-700',
  Conduct: 'bg-blue-100 text-blue-700',
  Academic: 'bg-green-100 text-green-700',
  Inclusion: 'bg-purple-100 text-purple-700',
  Legal: 'bg-yellow-100 text-yellow-700',
};

export default function SchoolPolicies() {
  return (
    <>
      <Hero title="School Policies" breadcrumb="School Policies" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <OurSchoolSidebar />

        <main className="md:col-span-3">
          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <h2 className="text-3xl font-bold text-primary mb-3">School Policies</h2>
            <p className="text-gray-600">
              All our school policies are available to download below. If you would like a paper copy of any policy, please contact the school office.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left p-4">Policy Name</th>
                  <th className="text-left p-4 hidden md:table-cell">Category</th>
                  <th className="text-left p-4 hidden md:table-cell">Last Updated</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {policies.map((p, i) => (
                  <tr key={p.name} className={`${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-accent/10 transition`}>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">📄</span>
                        <span className="font-medium text-primary">{p.name}</span>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[p.category]}`}>
                        {p.category}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600 text-sm hidden md:table-cell">{p.updated}</td>
                    <td className="p-4 text-center">
                      <a href="#" className="inline-block bg-accent hover:bg-accentDark text-white px-4 py-2 rounded-full text-xs font-bold">
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}