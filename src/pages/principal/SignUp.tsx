import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = useAuth();

  // Vérification de l'accès au montage du composant
  useEffect(() => {
    const checkAccess = () => {
      const access = sessionStorage.getItem('signup_access');
      const expiration = sessionStorage.getItem('signup_expiration');
      
      if (!access || access !== 'true' || !expiration || Date.now() > parseInt(expiration)) {
        sessionStorage.removeItem('signup_access');
        sessionStorage.removeItem('signup_expiration');
        navigate('/login');
      }
    };

    checkAccess();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (password !== confirmPassword) {
        throw new Error('Les mots de passe ne correspondent pas.');
      }

      await signUp(email, password);
      
      // Nettoyage après inscription réussie
      sessionStorage.removeItem('signup_access');
      sessionStorage.removeItem('signup_expiration');
      
      navigate('/login');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la création du compte.');
    }
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
  <h2 className="text-3xl font-extrabold text-white mb-6">Création de compte</h2>
  
  {error && <p className="text-red-500 bg-red-800 bg-opacity-30 p-3 rounded-lg mb-4">{error}</p>}

  <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 border border-orange-500 p-6 rounded-2xl shadow-xl w-full max-w-sm backdrop-blur-lg">
    {/* Champ Email */}
    <div className="mb-4">
      <label htmlFor="email" className="block text-orange-500 font-medium">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mt-2 p-3 w-full border border-orange-500 bg-black text-white rounded-lg focus:ring-2 focus:ring-orange-500"
      />
    </div>

    {/* Champ Mot de passe */}
    <div className="mb-4">
      <label htmlFor="password" className="block text-orange-500 font-medium">Mot de passe:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mt-2 p-3 w-full border border-orange-500 bg-black text-white rounded-lg focus:ring-2 focus:ring-orange-500"
      />
    </div>

    {/* Champ Confirmation du mot de passe */}
    <div className="mb-6">
      <label htmlFor="confirmPassword" className="block text-orange-500 font-medium">Confirmer le mot de passe:</label>
      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="mt-2 p-3 w-full border border-orange-500 bg-black text-white rounded-lg focus:ring-2 focus:ring-orange-500"
      />
    </div>

    {/* Bouton de soumission */}
    <button 
      type="submit" 
      className="w-full bg-orange-500 text-black py-3 rounded-xl font-semibold hover:bg-orange-400 transition-all"
    >
      Créer un compte
    </button>
  </form>
</div>

  );
};

export default SignUp;