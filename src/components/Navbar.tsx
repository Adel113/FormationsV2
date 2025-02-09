import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-pink-600" />
            <span className="text-xl font-bold">FormationV2Pro</span>
          </Link>

          {/* Menu Hamburger pour mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Liens de navigation pour grands écrans */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="hover:text-pink-600">Accueil</Link>
            <Link to="/apropos" className='hover:text-pink-600'>A propos</Link>
            {user ? (
              <>
                <Link to="/formation" className="hover:text-pink-600">Formation</Link>
                <Link to="/contact" className="hover:text-pink-600">Contact</Link>
                <button onClick={logout} className="flex items-center space-x-2 hover:text-pink-600">
                  <LogOut className="h-5 w-5" />
                  <span>Déconnexion</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-pink-600">Connexion</Link>

            )}
          </div>
        </nav>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" className="hover:text-pink-600" onClick={toggleMenu}>Accueil</Link>
              {user ? (
                <>
                  <Link to="/apropos" className='hover:text-pink-600'>A propos</Link>
                  <Link to="/formation" className="hover:text-pink-600" onClick={toggleMenu}>Formation</Link>
                  <Link to="/contact" className="hover:text-pink-600" onClick={toggleMenu}>Contact</Link>
                  <button onClick={() => { logout(); toggleMenu(); }} className="flex items-center space-x-2 hover:text-pink-600">
                    <LogOut className="h-5 w-5" />
                    <span>Déconnexion</span>
                  </button>
                </>
              ) : (
                <Link to="/login" className="hover:text-pink-600" onClick={toggleMenu}>Connexion</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
