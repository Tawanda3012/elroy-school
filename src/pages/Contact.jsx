import Hero from '../components/Hero';

export default function Contact() {
  return (
    <>
      <Hero title="Contact Us" breadcrumb="Contact" />
      <div className="max-w-7xl mx-auto my-12 px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-6">We'd love to hear from you.</p>

          {[
            { icon: '📍', title: 'Address', text: '123 Education Road, Learning City' },
            { icon: '📞', title: 'Phone', text: '+234 800 123 4567' },
            { icon: '✉️', title: 'Email', text: 'info@elroyfoundation.edu' },
            { icon: '🕐', title: 'Hours', text: 'Mon - Fri: 7:30 AM - 5:00 PM' },
          ].map(c => (
            <div key={c.title} className="flex gap-4 mb-5 items-start">
              <div className="text-3xl">{c.icon}</div>
              <div>
                <h4 className="text-primary font-bold">{c.title}</h4>
                <p className="text-gray-600">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-10 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none" />
              <input type="email" placeholder="Email" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none" />
            <textarea placeholder="Message" rows="6" className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent outline-none"></textarea>
            <button type="submit" className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full font-bold w-full">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}