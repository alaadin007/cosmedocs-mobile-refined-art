
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">COSMEDOCS</h3>
            <p className="text-gray-400 text-sm mb-4">Cosmetic Doctors</p>
            <p className="text-gray-400 text-sm">since 2007, 1M+ Injections</p>
          </div>
          
          <nav aria-label="Footer Navigation">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/treatments" className="text-gray-400 hover:text-white text-sm">Treatments</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-white text-sm">Book Appointment</Link></li>
            </ul>
          </nav>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-gray-400 text-sm">
              <p className="mb-2">Cosmedocs Clinic</p>
              <p className="mb-2">10 Harley Street</p>
              <p className="mb-2">London, W1G 9PF</p>
              <p className="mb-2">United Kingdom</p>
              <div className="pt-2">
                <a href="mailto:info@cosmedocs.com" className="block mb-2 hover:text-white">
                  info@cosmedocs.com
                </a>
                <a href="tel:+03330551503" className="block mb-2 hover:text-white">
                  0333 0551 503
                </a>
                <a href="tel:+08008600178" className="block hover:text-white">
                  0800 860 0178
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Cosmedocs Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
