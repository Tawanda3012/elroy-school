import Hero from '../components/Hero';
import OurSchoolSidebar from '../components/OurSchoolSidebar';

const values = [
  { icon: '💡', title: 'Excellence', desc: 'We aim high and celebrate every achievement, large or small.' },
  { icon: '❤️', title: 'Respect', desc: 'We value diversity and treat everyone with kindness and dignity.' },
  { icon: '🌱', title: 'Growth', desc: 'We embrace challenges as opportunities to learn and develop.' },
  { icon: '🤝', title: 'Community', desc: 'We build strong bonds between pupils, families, and staff.' },
  { icon: '🎨', title: 'Creativity', desc: 'We nurture imagination and encourage original thinking.' },
  { icon: '🌍', title: 'Global Citizenship', desc: 'We prepare children to thrive in a diverse world.' },
];

export default function VisionValues() {
  return (
    <>
      <Hero title="Vision & Values" breadcrumb="Vision & Values" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-4 gap-8">
        <OurSchoolSidebar />

        <main className="md:col-span-3 bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Vision & Values</h2>
          <p className="text-gray-600 mb-8">
            Our vision and values are the foundation of everything we do at Elroy Foundation School. They guide our teaching, shape our culture, and inspire our pupils every single day.
          </p>

          <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl mb-10">
            <h3 className="text-2xl font-bold mb-3">🌟 Our Vision</h3>
            <p className="text-lg italic">
              "To inspire every child to become a confident, curious, and compassionate learner who is ready to make a positive difference in the world."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-50 p-6 rounded-xl border-l-4 border-accent">
                <div className="text-4xl mb-2">{v.icon}</div>
                <h4 className="text-primary font-bold text-lg mb-2">{v.title}</h4>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}