import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Formation from './pages/Formation';
import TiktokFormation from './pages/TiktokFormation';
import LienIa from './pages/LienIa';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  // Afficher un loader pendant que l'état d'authentification est en cours de vérification
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si l'utilisateur est authentifié, afficher les composants enfants
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow xs:m-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tiktokformation" element={
              <PrivateRoute> 
                <TiktokFormation />
              </PrivateRoute>
            } 
          />
          <Route path="/LienIa" element={
            <PrivateRoute>
              <LienIa />
            </PrivateRoute>
          }/>
          <Route path="/formation" element={
              <PrivateRoute>
                <Formation />
              </PrivateRoute>
            }
          />
          <Route path="/contact" element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Empêcher le défilement horizontal
    document.body.style.overflowX = 'hidden';

    return () => {
      // Réactiver si nécessaire
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
