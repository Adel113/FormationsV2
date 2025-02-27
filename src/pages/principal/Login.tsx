import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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

  const handleBuyAccount = () => {
    window.location.href = 'https://votre-site-de-vente.com';
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
  <div className="w-full max-w-md bg-orange-500 bg-opacity-10 rounded-3xl shadow-xl p-8 border border-orange-500">
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
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
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
        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
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
        onClick={handleBuyAccount}
        className="w-full bg-white text-orange-500 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
      >
        Acheter un compte
      </button>
    </div>
  </div>
</div>

  );
}