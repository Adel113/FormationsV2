import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, DollarSign } from 'lucide-react';
import LogoTikTok from '../images/tiktoklogo.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <img className="h-44 w-44 mx-auto mb-4" src={LogoTikTok} alt="" />
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-4xl font-bold mb-6">
              Devenez un Créateur TikTok Professionnel
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Apprenez à créer du contenu viral et monétisez votre audience avec notre formation complète
            </p>
            <button 
              onClick={() => navigate('/formation')}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Découvrir la Formation
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </div>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-pink-600" />
              <h3 className="font-semibold text-xl mb-2">Formation Complète</h3>
              <p className="text-gray-600">Guide étape par étape pour créer du contenu viral</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-pink-600" />
              <h3 className="font-semibold text-xl mb-2">Communauté Active</h3>
              <p className="text-gray-600">Échangez avec d'autres créateurs TikTok</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-pink-600" />
              <h3 className="font-semibold text-xl mb-2">Monétisation</h3>
              <p className="text-gray-600">Transformez vos abonnés en revenus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à Commencer ?</h2>
          <button 
            onClick={() => navigate('/formation')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Accéder à la Formation
          </button>
        </div>
      </section>
    </div>
  );
}