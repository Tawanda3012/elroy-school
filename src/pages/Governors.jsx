import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';

const governors = [
  { name: 'Prof. Adaeze Okonkwo', role: 'Chair of Governors', category: 'Community Governor', initials: 'AO' },
  { name: 'Dr. Kunle Adebayo', role: 'Vice Chair', category: 'Parent Governor', initials: 'KA' },
  { name: 'Mrs. Bola Adeyinka', role: 'Governor', category: 'Staff Governor', initials: 'BA' },
  { name: 'Mr. Chinedu Okafor', role: 'Governor', category: 'Foundation Governor', initials: 'CO' },
  { name: 'Mrs. Halima Musa', role: 'Governor', category: 'Parent Governor', initials: 'HM' },
  { name: 'Mr. Emeka Nnaji', role: 'Governor', category: 'Community Governor', initials: 'EN' },
];

export default function Governors() {
  return (
    <>
      <Hero title="Governors" breadcrumb="Governors" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <OurSchoolSidebar />

        <main className="md:col-span-3">
          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <h2 className="text-3xl font-bold text-primary mb-3">Our Governing Body</h2>
            <p className="text-gray-600 mb-4">
              The Governing Body of Elroy Foundation School plays a vital role in providing strategic leadership and accountability. Our governors bring diverse skills and experience to support the school's vision.
            </p>
            <p className="text-gray-600">
              <strong>Key responsibilities include:</strong> setting the strategic direction, holding the Head Teacher to account, and ensuring financial performance and legal compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {governors.map((g) => (
              <div key={g.name} className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {g.initials}
                </div>
                <div>
                  <h4 className="text-primary font-bold">{g.name}</h4>
                  <p className="text-accent text-sm font-medium">{g.role}</p>
                  <p className="text-gray-500 text-xs">{g.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-3">📩 Contact the Governors</h3>
            <p className="mb-4">To contact the Chair of Governors, please email:</p>
            <a href="mailto:governors@elroyfoundation.edu" className="inline-block bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition">
              governors@elroyfoundation.edu
            </a>
          </div>
        </main>
      </div>
    </>
  );
}