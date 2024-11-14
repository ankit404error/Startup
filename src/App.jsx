import AdminDashboard from './pages/AdminDashboard'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Authpage from './pages/Authpage';
import BookAppointment from './pages/BookAppointment'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/authpage" element={<Authpage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
      </Routes>
    </div>
  );
};

export default App; // Ensure this is in place!
