import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 justify-evenly flex-col md:flex-row">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About BlogNook</h4>
            <p className="text-sm text-gray-400 max-w-sm">
              BlogNook is your go-to platform for insightful articles, trending topics, and engaging content. Stay updated with us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61562114424481" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-xl hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-xl hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a href="https://www.instagram.com/its_huzi_4u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-xl hover:text-pink-500 transition-colors duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/huzaifa-nazeer-b969632b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-xl hover:text-blue-600 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 BlogNook. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Made with ❤️ by Huzaifa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
