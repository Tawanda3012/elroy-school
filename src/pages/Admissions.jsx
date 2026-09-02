import Hero from '../components/Hero';

const steps = [
  { num: 1, title: 'Visit Our School', desc: 'Book a tour to experience our environment.' },
  { num: 2, title: 'Submit Application', desc: 'Complete our online application form.' },
  { num: 3, title: 'Assessment Day', desc: 'Your child attends a friendly assessment.' },
  { num: 4, title: 'Offer & Enrolment', desc: 'Receive offer letter and documents.' },
];

export default function Admissions() {
  return (
    <>
      <Hero title="Admissions" breadcrumb="Admissions" />
      <div className="max-w-7xl mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Join Our School Family</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">We warmly welcome applications from families who share our passion for excellence.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {steps.map(s => (
            <div key={s.num} className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.num}</div>
              <h3 className="text-primary font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-6">Request Information</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Parent's Name" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none" />
              <input type="email" placeholder="Email" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none" />
            </div>
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none" />
            <select className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none">
              <option>Select Year Group</option>
              <option>Reception</option>
              <option>Year 1</option>
              <option>Year 2</option>
              <option>Year 3</option>
              <option>Year 4</option>
              <option>Year 5</option>
              <option>Year 6</option>
            </select>
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none"></textarea>
            <button type="submit" className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full font-bold w-full">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </>
  );
}