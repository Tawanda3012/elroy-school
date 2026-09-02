import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurSchool from './pages/OurSchool';
import Curriculum from './pages/Curriculum';
import Parents from './pages/Parents';
import News from './pages/News';
import Admissions from './pages/Admissions';
import Newsletters from './pages/Newsletters';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-school" element={<OurSchool />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/news" element={<News />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;