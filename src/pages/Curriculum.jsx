import Hero from '../components/Hero';

const subjects = [
  { icon: '🔤', title: 'English', desc: 'Reading, writing, and communication.' },
  { icon: '🔢', title: 'Mathematics', desc: 'Problem-solving and reasoning.' },
  { icon: '🔬', title: 'Science', desc: 'Exploration and inquiry.' },
  { icon: '🌍', title: 'Geography', desc: 'Understanding our world.' },
  { icon: '📜', title: 'History', desc: 'Learning from the past.' },
  { icon: '🎨', title: 'Art & Design', desc: 'Creative expression.' },
  { icon: '🎵', title: 'Music', desc: 'Musical appreciation.' },
  { icon: '⚽', title: 'PE', desc: 'Health and fitness.' },
  { icon: '💻', title: 'Computing', desc: 'Digital literacy.' },
  { icon: '🗣️', title: 'Languages', desc: 'French and Spanish.' },
  { icon: '🙏', title: 'Religious Ed', desc: 'Understanding faiths.' },
  { icon: '💚', title: 'PSHE', desc: 'Personal & social education.' },
];

export default function Curriculum() {
  return (
    <>
      <Hero title="Curriculum" breadcrumb="Curriculum" />
      <div className="max-w-7xl mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Our Curriculum</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">Designed to inspire curiosity and unlock every child's potential.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map(s => (
            <div key={s.title} className="bg-white p-6 rounded-xl text-center border-t-4 border-accent shadow-md hover:-translate-y-2 hover:shadow-xl transition">
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="text-primary font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}