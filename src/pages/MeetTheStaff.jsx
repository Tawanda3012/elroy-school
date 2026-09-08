import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';

const leadership = [
  { name: 'Dr. Sarah Johnson', role: 'Head Teacher', initials: 'SJ', color: 'from-blue-500 to-purple-600' },
  { name: 'Mr. David Okafor', role: 'Deputy Head', initials: 'DO', color: 'from-orange-500 to-red-500' },
  { name: 'Mrs. Amina Bello', role: 'Assistant Head', initials: 'AB', color: 'from-green-500 to-teal-500' },
];

const teachers = [
  { name: 'Miss Chioma Nwosu', role: 'Reception Teacher', initials: 'CN', color: 'from-pink-500 to-rose-500' },
  { name: 'Mr. James Adeyemi', role: 'Year 1 Teacher', initials: 'JA', color: 'from-indigo-500 to-blue-500' },
  { name: 'Mrs. Grace Ibrahim', role: 'Year 2 Teacher', initials: 'GI', color: 'from-yellow-500 to-orange-500' },
  { name: 'Mr. Daniel Eze', role: 'Year 3 Teacher', initials: 'DE', color: 'from-teal-500 to-cyan-500' },
  { name: 'Miss Fatima Hassan', role: 'Year 4 Teacher', initials: 'FH', color: 'from-purple-500 to-pink-500' },
  { name: 'Mr. Michael Obi', role: 'Year 5 Teacher', initials: 'MO', color: 'from-red-500 to-orange-500' },
  { name: 'Mrs. Elizabeth Umeh', role: 'Year 6 Teacher', initials: 'EU', color: 'from-emerald-500 to-green-500' },
  { name: 'Mr. Peter Okon', role: 'PE & Sports', initials: 'PO', color: 'from-sky-500 to-blue-500' },
];

const support = [
  { name: 'Mrs. Ruth Adamu', role: 'Office Administrator', initials: 'RA', color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Mr. Samuel Nnamdi', role: 'IT Coordinator', initials: 'SN', color: 'from-blue-500 to-indigo-500' },
  { name: 'Mrs. Joy Ekene', role: 'School Nurse', initials: 'JE', color: 'from-rose-500 to-red-500' },
  { name: 'Mr. Ibrahim Yusuf', role: 'Facilities Manager', initials: 'IY', color: 'from-slate-500 to-gray-600' },
];

function StaffCard({ member }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition">
      <div className={`h-40 bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-5xl font-bold`}>
        {member.initials}
      </div>
      <div className="p-5 text-center">
        <h4 className="text-primary font-bold">{member.name}</h4>
        <p className="text-gray-600 text-sm">{member.role}</p>
      </div>
    </div>
  );
}

export default function MeetTheStaff() {
  return (
    <>
      <Hero title="Meet the Staff" breadcrumb="Meet the Staff" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <OurSchoolSidebar />

        <main className="md:col-span-3">
          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <h2 className="text-3xl font-bold text-primary mb-3">Meet Our Amazing Team</h2>
            <p className="text-gray-600">
              Our dedicated staff are the heart of Elroy Foundation School. Each brings passion, expertise, and warmth to help every child flourish.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-5">Senior Leadership</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {leadership.map((m) => <StaffCard key={m.name} member={m} />)}
          </div>

          <h3 className="text-2xl font-bold text-primary mb-5">Teaching Staff</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {teachers.map((m) => <StaffCard key={m.name} member={m} />)}
          </div>

          <h3 className="text-2xl font-bold text-primary mb-5">Support Staff</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {support.map((m) => <StaffCard key={m.name} member={m} />)}
          </div>
        </main>
      </div>
    </>
  );
}