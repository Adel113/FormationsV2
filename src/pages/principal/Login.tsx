import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Lock, X } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [code, setCode] = useState('');
  const [modalError, setModalError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/formation');
    } catch {
      setError('Email ou mot de passe incorrect');
    }
  };


    const handleCodeSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (code === import.meta.env.VITE_ACCESS_CODE) {
        const expirationTime = Date.now() + 300000; 
        sessionStorage.setItem('signup_access', 'true');
        sessionStorage.setItem('signup_expiration', expirationTime.toString());
        navigate('/signup');
      } else {
        setModalError('Code d\'accès incorrect');
      }
    };



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20">


      {/* Modal pour le code d'accès */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowCodeModal(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            
            <h3 className="text-xl font-bold mb-6">Code d'accès requis</h3>
            
            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Code d'accès
                </label>
                <input
                  type="password"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setModalError(''); // Reset l'erreur quand on tape
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-600"
                  placeholder="Entrez le code fourni"
                />
              </div>
              
              {modalError && (
                <p className="text-red-500 text-sm">{modalError}</p>
              )}

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
              >
                Vérifier le code
              </button>
                <button
                type="button"
                className="w-full bg-pink-300 text-black py-2 rounded-lg hover:bg-pink-100 transition"
                onClick={() => window.location.href = 'https://shop.beacons.ai/formationsv2/946843ca-83f0-4fa7-80c5-2c9c7d8abefd'}
                >
                Acheter le code
                </button>
            </form>
          </div>
        </div>
      )}

      {/* Formulaire de connexion principal */}
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-8">
              <Lock className="h-12 w-12 text-pink-600" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Connexion
            </h2>
            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-center">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Se connecter
              </button>
            </form>
            <div className="mt-6">
              <button
                onClick={() => setShowCodeModal(true)}
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Créer un compte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}