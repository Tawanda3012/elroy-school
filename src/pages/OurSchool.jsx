import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';

export default function OurSchool() {
  return (
    <>
      <Hero title="Our School" breadcrumb="Our School" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <OurSchoolSidebar />

        <main className="md:col-span-3 bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Our School</h2>
          <p className="text-gray-600 mb-6">
            Elroy Foundation School is a vibrant, inclusive learning environment where every child is valued, challenged and supported.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To create a dynamic learning community where children develop academically, socially, and emotionally.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            We provide exceptional education through innovative teaching, personalised care, and strong partnerships.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Our Values</h3>
          <ul className="text-gray-600 space-y-2 ml-4">
            <li>✨ Excellence in everything we do</li>
            <li>💜 Respect for ourselves and others</li>
            <li>🌟 Resilience and perseverance</li>
            <li>🌍 Global citizenship</li>
            <li>🎨 Creativity and curiosity</li>
          </ul>
        </main>
      </div>
    </>
  );
}