import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-8"> {/* Reduced padding */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="text-center mb-8"> {/* Reduced margin bottom */}
          {/* Logo and Description */}
          <h2 className="text-4xl font-extrabold text-yellow-400">clipperCall</h2>
          <p className="mt-2 text-lg text-gray-400">Grooming at its finest – Your barber at home or the salon</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-between items-center mb-6"> {/* Reduced margin bottom */}
          <div className="text-center md:text-left w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
            <p className="text-gray-400">Call us: <a href="tel:+123456789" className="text-yellow-400">+1 (234) 567-89</a></p>
            <p className="text-gray-400">Email: <a href="mailto:info@clipperCall.com" className="text-yellow-400">info@clipperCall.com</a></p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center"> {/* Reduced padding-top */}
          <p className="text-gray-400 text-sm mb-4">© 2024 clipperCall. All rights reserved.</p>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-400"><FaFacebookF size={20} /></a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-400"><FaInstagram size={20} /></a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-400"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-yellow-400"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
