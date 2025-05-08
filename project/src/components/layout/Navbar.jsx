import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { doSignOut } from '../../firebase/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { name: 'Нүүр', href: '/' },
    { name: 'Онцлог', href: '/features' },
    { name: 'Түгээмэл асуултууд', href: '#faq' },
    { name: 'Холбоо барих', href: '#contact' }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">HubSite</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            {userLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {currentUser?.displayName || currentUser?.email}
                </span>
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
                >
                  Гарах
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Нэвтрэх
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Бүртгүүлэх
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {userLoggedIn ? (
                <>
                  <div className="px-3 py-2 text-gray-600">
                    {currentUser?.displayName || currentUser?.email}
                  </div>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                    className="block w-full mt-4 bg-red-600 text-white text-center px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
                  >
                    Гарах
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    Нэвтрэх
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block w-full mt-4 bg-blue-600 text-white text-center px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Бүртгүүлэх
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 