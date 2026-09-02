import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-accent font-bold mb-4">Elroy Foundation School</h4>
          <p className="text-gray-300 text-sm">Nurturing young minds through excellence in education, creativity, and character-building.</p>
        </div>
        <div>
          <h4 className="text-accent font-bold mb-4">Quick Links</h4>
          <Link to="/our-school" className="block text-gray-300 hover:text-accent py-1">About Us</Link>
          <Link to="/admissions" className="block text-gray-300 hover:text-accent py-1">Admissions</Link>
          <Link to="/curriculum" className="block text-gray-300 hover:text-accent py-1">Curriculum</Link>
        </div>
        <div>
          <h4 className="text-accent font-bold mb-4">Parents</h4>
          <Link to="/parents" className="block text-gray-300 hover:text-accent py-1">Term Dates</Link>
          <Link to="/newsletters" className="block text-gray-300 hover:text-accent py-1">Newsletters</Link>
        </div>
        <div>
          <h4 className="text-accent font-bold mb-4">Contact</h4>
          <p className="text-gray-300 text-sm">
            123 Education Road<br />
            Learning City<br />
            📞 +234 800 123 4567<br />
            ✉️ info@elroyfoundation.edu
          </p>
        </div>
      </div>
      <div className="text-center pt-8 mt-8 border-t border-white/10 text-sm">
        © 2026 Elroy Foundation School. All Rights Reserved.
      </div>
    </footer>
  );
}