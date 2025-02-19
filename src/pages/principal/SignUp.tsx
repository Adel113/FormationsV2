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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Création de compte</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        {/* Les champs du formulaire restent identiques */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Mot de passe:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirmer le mot de passe:</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default SignUp;