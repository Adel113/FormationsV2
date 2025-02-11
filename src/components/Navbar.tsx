import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-stone-900/80 backdrop-blur-md border-b border-amber-900/30 text-amber-50 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo avec dégradé */}
          <Link to="/" className="flex items-center space-x-2 group">
            <TrendingUp className="h-7 w-7 " />
            <span className="text-xl font-bold bg-gradient-to-r from-coral-400 to-orange-400 bg-clip-text ">
              FormationV2Pro
            </span>
          </Link>

          {/* Menu Hamburger pour mobile */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg hover:bg-amber-900/20 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-amber-100" />
              ) : (
                <Menu className="h-6 w-6 text-amber-100" />
              )}
            </button>
          </div>

          {/* Liens de navigation pour grands écrans */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-amber-100/90 hover:text-orange-300 transition-colors px-3 py-2 rounded-lg hover:bg-amber-900/20"
            >
              Accueil
            </Link>
            <Link 
              to="/apropos" 
              className="text-amber-100/90 hover:text-orange-300 transition-colors px-3 py-2 rounded-lg hover:bg-amber-900/20"
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className="text-amber-100/90 hover:text-orange-300 transition-colors px-3 py-2 rounded-lg hover:bg-amber-900/20"
            >
              Contact
            </Link>

            {user ? (
              <>
                <Link 
                  to="/formation" 
                  className="text-amber-100/90 hover:text-orange-300 transition-colors px-3 py-2 rounded-lg hover:bg-amber-900/20"
                >
                  Formation
                </Link>
                <button 
                  onClick={logout} 
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-amber-900/20 group"
                >
                  <LogOut className="h-5 w-5 text-amber-100/90 group-hover:text-orange-300" />
                  <span className="text-amber-100/90 group-hover:text-orange-300">Déconnexion</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-2 bg-gradient-to-r from-coral-500 to-orange-500 hover:from-orange-500 hover:to-coral-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/20"
              >
                Connexion
              </Link>
            )}
          </div>
        </nav>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col items-center space-y-3 bg-stone-800/95 backdrop-blur-lg rounded-xl p-4 border border-amber-900/30">
              <Link 
                to="/" 
                onClick={toggleMenu}
                className="w-full text-center py-2 text-amber-100/90 hover:text-orange-300 rounded-lg hover:bg-amber-900/20"
              >
                Accueil
              </Link>
              <Link 
                to="/apropos" 
                onClick={toggleMenu}
                className="w-full text-center py-2 text-amber-100/90 hover:text-orange-300 rounded-lg hover:bg-amber-900/20"
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                onClick={toggleMenu}
                className="w-full text-center py-2 text-amber-100/90 hover:text-orange-300 rounded-lg hover:bg-amber-900/20"
              >
                Contact
              </Link>

              {user ? (
                <>
                  <Link 
                    to="/formation" 
                    onClick={toggleMenu}
                    className="w-full text-center py-2 text-amber-100/90 hover:text-orange-300 rounded-lg hover:bg-amber-900/20"
                  >
                    Formation
                  </Link>
                  <button 
                    onClick={() => { logout(); toggleMenu(); }} 
                    className="w-full py-2 flex items-center justify-center space-x-2 text-amber-100/90 hover:text-orange-300 rounded-lg hover:bg-amber-900/20"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Déconnexion</span>
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  onClick={toggleMenu}
                  className="w-full py-2 text-center bg-gradient-to-r from-coral-500 to-orange-500 hover:from-orange-500 hover:to-coral-600 rounded-lg font-semibold transition-all"
                >
                  Connexion
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}