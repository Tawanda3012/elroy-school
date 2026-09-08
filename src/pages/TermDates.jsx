import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';

const terms = [
  {
    name: 'Autumn Term 2026',
    color: 'from-orange-500 to-red-500',
    dates: [
      { event: 'Term Starts', date: 'Monday, 7 September 2026' },
      { event: 'Half Term Break', date: '26 - 30 October 2026' },
      { event: 'Term Ends', date: 'Friday, 18 December 2026' },
    ],
  },
  {
    name: 'Spring Term 2027',
    color: 'from-green-500 to-teal-500',
    dates: [
      { event: 'Term Starts', date: 'Monday, 4 January 2027' },
      { event: 'Half Term Break', date: '15 - 19 February 2027' },
      { event: 'Term Ends', date: 'Friday, 26 March 2027' },
    ],
  },
  {
    name: 'Summer Term 2027',
    color: 'from-yellow-500 to-orange-500',
    dates: [
      { event: 'Term Starts', date: 'Monday, 12 April 2027' },
      { event: 'Half Term Break', date: '31 May - 4 June 2027' },
      { event: 'Term Ends', date: 'Friday, 16 July 2027' },
    ],
  },
];

const inset = [
  'Friday, 4 September 2026',
  'Monday, 3 January 2027',
  'Monday, 12 April 2027',
  'Monday, 19 July 2027',
  'Tuesday, 20 July 2027',
];

export default function TermDates() {
  return (
    <>
      <Hero title="Term Dates" breadcrumb="Term Dates" />
      <div className="grid gap-8 px-6 mx-auto my-12 max-w-7xl md:grid-cols-4">
        <OurSchoolSidebar />

        <main className="md:col-span-3">
          <div className="p-8 mb-8 bg-white shadow-md rounded-xl">
            <h2 className="mb-3 text-3xl font-bold text-primary">Term Dates 2026 - 2027</h2>
            <p className="text-gray-600">
              Please find below our academic year term dates. INSET days are staff training days when the school is closed to pupils.
            </p>
          </div>

          <div className="grid gap-6 mb-8 md:grid-cols-3">
            {terms.map((term) => (
              <div key={term.name} className="overflow-hidden bg-white shadow-md rounded-xl">
                <div className={`bg-gradient-to-r ${term.color} text-white p-5 text-center`}>
                  <h3 className="text-xl font-bold">{term.name}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {term.dates.map((d) => (
                    <div key={d.event} className="pb-3 border-b last:border-b-0">
                      <p className="text-sm font-bold text-primary">{d.event}</p>
                      <p className="text-sm text-gray-600">📅 {d.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 text-white bg-gradient-to-r from-primary to-accent rounded-xl">
            <h3 className="mb-4 text-2xl font-bold">📚 INSET Days (School Closed to Pupils)</h3>
            <ul className="space-y-2">
              {inset.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span>▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a href="#" className="inline-block px-8 py-3 font-bold text-white transition rounded-full bg-accent hover:bg-accentDark">
              📥 Download Term Dates PDF
            </a>
          </div>
        </main>
      </div>
    </>
  );
}