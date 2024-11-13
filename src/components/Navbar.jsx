import { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/LOGO.jpg" alt="Logo" className="h-12 w-12 rounded-full" style={{ height: '50px', width: '50px' }} />
          <span className="text-white text-2xl font-bold">Clipper Call</span>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
          <Link to="/contactus" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
          <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
          <Link to="/register" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link to="/" className="block text-white hover:bg-gray-700 px-4 py-2 text-sm font-medium">Home</Link>
          <Link to="/about" className="block text-white hover:bg-gray-700 px-4 py-2 text-sm font-medium">About</Link>
          <Link to="/contactus" className="block text-white hover:bg-gray-700 px-4 py-2 text-sm font-medium">Contact Us</Link>
          <Link to="/login" className="block text-white hover:bg-gray-700 px-4 py-2 text-sm font-medium">Login</Link>
          <Link to="/register" className="block text-white hover:bg-gray-700 px-4 py-2 text-sm font-medium">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
