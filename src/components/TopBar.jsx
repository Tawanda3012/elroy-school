export default function TopBar() {
  return (
    <div className="bg-primary text-white px-10 py-2 flex justify-between items-center text-sm">
      <span>📞 +234 800 123 4567 | ✉️ info@elroyfoundation.edu</span>
      <div className="space-x-4 hidden md:block">
        <a href="#" className="hover:text-accent">Parent Portal</a>
        <a href="#" className="hover:text-accent">Staff Login</a>
      </div>
    </div>
  );
}