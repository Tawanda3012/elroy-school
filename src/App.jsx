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
// New "Our School" sub-pages
import VisionValues from './pages/VisionValues';
import MeetTheStaff from './pages/MeetTheStaff';
import Governors from './pages/Governors';
import SchoolPolicies from './pages/SchoolPolicies';
import TermDates from './pages/TermDates';
import OfstedReports from './pages/OfstedReports';

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
          {/* Our School sub-pages */}
          <Route path="/vision-values" element={<VisionValues />} />
          <Route path="/meet-the-staff" element={<MeetTheStaff />} />
          <Route path="/governors" element={<Governors />} />
          <Route path="/school-policies" element={<SchoolPolicies />} />
          <Route path="/term-dates" element={<TermDates />} />
          <Route path="/ofsted-reports" element={<OfstedReports />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;