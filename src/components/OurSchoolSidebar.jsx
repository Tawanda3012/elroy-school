import { NavLink } from 'react-router-dom';

const links = [
  { to: '/our-school', label: 'Welcome' },
  { to: '/vision-values', label: 'Vision & Values' },
  { to: '/meet-the-staff', label: 'Meet the Staff' },
  { to: '/governors', label: 'Governors' },
  { to: '/newsletters', label: 'Newsletters & Letters' },
  { to: '/school-policies', label: 'School Policies' },
  { to: '/term-dates', label: 'Term Dates' },
  { to: '/ofsted-reports', label: 'Ofsted Reports' },
];

export default function OurSchoolSidebar() {
  return (
    <aside className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-28">
      <h3 className="text-primary font-bold border-b-4 border-accent pb-2 mb-4">Our School</h3>
      <ul>
        {links.map((l) => (
          <li key={l.to} className="border-b py-3 last:border-b-0">
            <NavLink
              to={l.to}
              end
              className={({ isActive }) =>
                `block transition ${
                  isActive
                    ? 'text-accent font-bold pl-2 border-l-4 border-accent'
                    : 'text-gray-600 hover:text-accent hover:pl-2'
                }`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}