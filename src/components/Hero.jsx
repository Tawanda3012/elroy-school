import { Link } from 'react-router-dom';

export default function Hero({ title, breadcrumb }) {
  return (
    <section
      className="text-white text-center py-20 px-6"
      style={{
        background: `linear-gradient(rgba(26,58,108,0.85), rgba(26,58,108,0.85)), url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600') center/cover`
      }}
    >
      <h2 className="text-5xl font-bold mb-3">{title}</h2>
      <div className="text-sm opacity-90">
        <Link to="/" className="text-accent hover:underline">Home</Link>
        {breadcrumb && <span> / {breadcrumb}</span>}
      </div>
    </section>
  );
}