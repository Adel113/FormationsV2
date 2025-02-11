import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, DollarSign } from 'lucide-react';
import LogoApp from '../../images/logoApp.png';
import imageAccueil from '../../images/AdobeStock_965828195_Preview.jpeg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-black to-stone-900 text-amber-50">

      {/* 🔹 Hero Section */}
      <div className="relative bg-cover bg-center text-white py-32 text-center" style={{ backgroundImage: `url(${imageAccueil})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xl"></div>
        <div className="relative container mx-auto px-6 py-12 rounded-lg">
          <img className="w-auto h-32 mx-auto mb-6 animate-float" src={LogoApp} alt="Platform Logo" />
          <h1 className="text-6xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-coral-400 to-orange-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            L'Éducation Redéfinie
          </h1>
          <p className="text-xl opacity-90 mb-8 font-light max-w-2xl mx-auto">
            Plongez dans l'apprentissage du futur avec nos programmes immersifs et évolutifs
          </p>
          <button 
            onClick={() => navigate('/formations')}
            className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-orange-500 hover:to-coral-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 duration-300 group"
          >
            Explorer les Formations
            <span className="ml-2 inline-block group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>

      

      

      {/* 🔹 Features Section */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {[{
          icon: <BookOpen className="h-16 w-16 mx-auto mb-4 text-coral-400" />,
          title: "Contenu Premium",
          description: "Modules créés par des experts du secteur"
        }, {
          icon: <Users className="h-16 w-16 mx-auto mb-4 text-orange-300" />,
          title: "Réseau Global",
          description: "Connectez-vous avec des passionnés mondiaux"
        }, {
          icon: <DollarSign className="h-16 w-16 mx-auto mb-4 text-amber-400" />,
          title: "Carrière Boostée",
          description: "Accélérez votre progression professionnelle"
        }].map((feature, index) => (
          <div key={index} className="bg-stone-800/40 p-8 rounded-2xl shadow-xl hover:shadow-orange-500/20 transition-all transform hover:scale-[1.02] border border-amber-900/30 hover:border-amber-800/50 backdrop-blur-sm">
            {feature.icon}
            <h3 className="font-semibold text-2xl mb-2 text-amber-100">{feature.title}</h3>
            <p className="text-amber-100/70">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* 🔹 Timeline Section */}
      <section className="min-h-screen flex flex-col items-center">
        <div className="max-w-7xl w-full rounded-2xl p-6 relative overflow-hidden">
          <h1 className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-coral-400 to-orange-400 bg-clip-text">
            Notre Approche Innovante 🌟
          </h1>
          <p className="text-4xl text-amber-100/80 text-center mb-6 max-w-2xl mx-auto">
            Un parcours pédagogique conçu pour maximiser votre potentiel créatif
          </p>
          <div className="relative z-10 flex flex-col items-center">
            <div className="absolute left-1/2 w-1 bg-gradient-to-b from-coral-500/80 to-orange-500/80 h-full transform -translate-x-1/2 rounded-full"></div>

            {[{
              title: "Immersion Digitale",
              text: "Plongez dans des environnements d'apprentissage interactifs",
              color: "bg-stone-800/60 backdrop-blur-sm"
            }, {
              title: "Expérience Collaborative",
              text: "Travaillez en synergie avec une communauté mondiale",
              color: "bg-amber-900/40 backdrop-blur-sm"
            }, {
              title: "Maîtrise Concrète",
              text: "Appliquez vos connaissances sur des projets réels",
              color: "bg-coral-900/40 backdrop-blur-sm"
            }].map((section, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full mb-6 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-20 shadow-xl border-2 border-amber-200/20"></div>

                <div
                  className={`w-5/12 p-6 rounded-xl shadow-lg hover:bg-gradient-to-r transition-all duration-300 ${section.color} ${
                    index % 2 === 0 ? "ml-16" : "mr-16"
                  } hover:border border-amber-500/30`}
                >
                  <h2 className="text-6xl font-semibold text-amber-100">{section.title}</h2>
                  <p className="text-4xl text-amber-100/70 mt-2">{section.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 🔹 Statistics Section */}
      <section className="py-20 bg-orange-400">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-coral-400 to-orange-400 bg-clip-text">
          Découvrez les résultats de nos apprenants et les avantages
        </h2>
          </div>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
        value: "15K+",
        label: "Apprenants Actifs"
          }, {
        value: "98%",
        label: "Satisfaction"
          }, {
        value: "1K+",
        label: "Projets Réalisés"
          }].map((stat, index) => (
        <div key={index} className="bg-stone-800/30 p-8 rounded-xl border border-amber-900/30 hover:border-amber-800/50 backdrop-blur-sm transform hover:scale-105 transition-all">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-2 text-white">{stat.value}</h2>
          <p className="text-xl md:text-2xl lg:text-4xl text-amber-100/80">{stat.label}</p>
        </div>
          ))}
        </div>
      </section>

      {/* 🔹 Call to Action */}
      <section className="bg-stone-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-coral-400 to-orange-400 bg-clip-text ">
            Prêt à Transformer Votre Avenir ?
          </h2>
          <p className="text-amber-100/80 text-lg mb-8">
            Rejoignez la nouvelle génération d'apprenants et donnez vie à vos ambitions
          </p>
          <button 
            onClick={() => navigate('/formations')}
            className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-orange-500 hover:to-coral-600 text-white px-12 py-5 rounded-xl font-bold shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
          >
            Commencer Mon Parcours
          </button>
        </div>
      </section>

    </div>
  );
}