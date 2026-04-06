import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, BarChart3, Info, Activity, LogIn } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Struktur Pengurus', path: '/struktur', icon: Users },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    if (username === 'Keamanan' && password === 'Tersenyum') {
      window.location.href = 'https://sie-keamanan.vercel.app/';
    } else if (username === 'Menpora 015' && password === 'Tersenyum') {
      window.location.href = 'https://sie-pemuda-olah-raga.vercel.app/';
    } else {
      setLoginError('Username atau password salah');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-blue-200 shadow-lg group-hover:scale-105 transition-transform overflow-hidden p-1">
                <img src="https://cdn.phototourl.com/member/2026-03-29-34b1efb2-3ee8-40c8-816d-54bed75eee00.png" alt="Logo RW 015" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 leading-tight">RW. 015</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Pesona Gading Cibitung</span>
                <span className="text-[8px] text-blue-600 font-bold uppercase tracking-[0.2em] mt-0.5">TERSENYUM</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <LogIn size={18} />
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <LogIn size={24} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      location.pathname === link.path
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <link.icon size={20} />
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Login Pengurus</h2>
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleLogin} className="p-6">
                {loginError && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {loginError}
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Masukkan username"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Masukkan password"
                      required
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                  >
                    Masuk
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
