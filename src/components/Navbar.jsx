import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/our-school', label: 'Our School' },
    { to: '/curriculum', label: 'Curriculum' },
    { to: '/parents', label: 'Parents' },
    { to: '/news', label: 'News & Events' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-red-500 text-white flex items-center justify-center text-2xl font-bold">
            E
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">Elroy Foundation School</h1>
            <p className="text-xs text-gray-500">Nurturing Minds, Building Futures</p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium transition ${isActive ? 'text-accent' : 'text-gray-700 hover:text-accent'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t px-6 py-4 space-y-2">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium ${isActive ? 'text-accent' : 'text-gray-700'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}