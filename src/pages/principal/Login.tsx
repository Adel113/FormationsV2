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
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
  {/* Modal pour le code d'accès */}
  {showCodeModal && (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="bg-white bg-opacity-10 border border-orange-500 rounded-2xl shadow-2xl max-w-md w-full p-6 relative backdrop-blur-lg">
        <button
          onClick={() => setShowCodeModal(false)}
          className="absolute top-4 right-4 p-1 hover:bg-orange-500 hover:bg-opacity-30 rounded-full transition"
        >
          <X className="h-6 w-6 text-orange-500" />
        </button>
        
        <h3 className="text-2xl font-bold text-white text-center mb-6">
          Code d'accès requis
        </h3>
        
        <form onSubmit={handleCodeSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">
              Code d'accès
            </label>
            <input
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setModalError('');
              }}
              className="w-full px-4 py-3 border border-orange-500 bg-black text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Entrez le code fourni"
            />
          </div>
          
          {modalError && (
            <p className="text-red-500 text-sm">{modalError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-black py-3 rounded-xl font-semibold hover:bg-orange-400 transition-all"
          >
            Vérifier le code
          </button>

          <button
            type="button"
            className="w-full bg-white text-orange-500 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            onClick={() => window.location.href = 'https://shop.beacons.ai/formationsv2/946843ca-83f0-4fa7-80c5-2c9c7d8abefd'}
          >
            Acheter le code
          </button>
        </form>
      </div>
    </div>
  )}

  {/* Formulaire de connexion principal */}
  <div className="w-full max-w-md bg-white bg-opacity-10 border border-orange-500 rounded-3xl shadow-xl p-8 backdrop-blur-lg">
    <div className="flex justify-center mb-6">
      <Lock className="h-14 w-14 text-orange-500" />
    </div>
    <h2 className="text-3xl font-extrabold text-center text-white mb-6">
      Connexion
    </h2>

    {error && (
      <div className="bg-red-600 text-white p-3 rounded-lg mb-4 text-center">
        {error}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-orange-500 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-orange-500 bg-black text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-orange-500 mb-1">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-orange-500 bg-black text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-black py-3 rounded-xl font-semibold hover:bg-orange-400 transition-all"
      >
        Se connecter
      </button>
    </form>

    <div className="mt-6">
      <button
        onClick={() => setShowCodeModal(true)}
        className="w-full bg-white text-orange-500 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
      >
        Créer un compte
      </button>
    </div>
  </div>
</div>

  );
}