import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoApp from '../../images/etudiant.jpg';

export default function apropos() {

  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-black text-gray-900 pt-10 font-sans">
      {/* 🔹 Hero Section */}
      <div className="relative bg-cover bg-center text-white py-32 text-center" style={{ backgroundImage: `url(${LogoApp})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xl"></div>
            <div className="relative container mx-auto px-6 py-12 rounded-lg">
              <h1 className="text-6xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-coral-400 to-orange-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Notre Engagement
              </h1>
              <p className="text-xl opacity-90 mb-8 font-light max-w-2xl mx-auto">
                Découvrez l’histoire d’une entreprise née d’une vision ambitieuse : transformer l’apprentissage et façonner l’avenir.
              </p>
              <button 
                onClick={() => navigate('/notre-histoire')}
                className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-orange-500 hover:to-coral-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 duration-300 group"
              >
                En savoir plus
                <span className="ml-4 inline-block group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
    
      {/* Timeline Section */}
      <section className="min-h-screen flex flex-col bg-black items-center px-6 sm:px-12 lg:px-24 py-20">
  <div className="max-w-7xl w-full rounded-2xl p-8 relative overflow-hidden bg-black">
    <h1 className="text-5xl font-bold text-center mb-6 text-orange-600">Notre Évolution</h1>
    <p className="text-lg text-white text-center mb-12 max-w-3xl mx-auto">
      De nos premières idées à notre position actuelle, découvrez les étapes clés qui ont façonné notre entreprise.
    </p>

    <div className="relative flex flex-col items-center">
      {/* Ligne centrale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-orange-700 h-full rounded-full"></div>

      {[
        {
          title: "Une Vision Audacieuse",
          text: "En 2010, nous avons démarré avec une conviction forte : révolutionner la formation grâce à des méthodes immersives et innovantes.",
          color: "bg-orange-100",
        },
        {
          title: "Un Développement Structuré",
          text: "Année après année, notre expertise s'est affirmée, attirant des talents et consolidant nos engagements auprès de nos apprenants.",
          color: "bg-orange-200",
        },
        {
          title: "Une Référence Aujourd’hui",
          text: "Nous sommes aujourd’hui une référence dans notre domaine, toujours guidés par l’innovation et l’excellence pour répondre aux enjeux de demain.",
          color: "bg-orange-300",
        },
      ].map((section, index) => (
        <div
          key={section.title}
          className={`relative flex flex-col sm:flex-row items-center w-full mb-12 ${
            index % 2 !== 0 ? "sm:flex-row-reverse" : ""
          }`}
        >
          {/* Point de connexion */}
          <div className="w-8 h-8 bg-orange-600 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-lg border-4 border-white"></div>

          {/* Bloc de contenu */}
          <div
            className={`w-full sm:w-5/12 p-6 rounded-xl shadow-lg transition-all duration-300 ${section.color} sm:mx-16 text-center sm:text-left hover:scale-105`}
          >
            <h2 className="text-2xl font-semibold text-orange-900">{section.title}</h2>
            <p className="text-lg text-gray-800 mt-2">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    
      {/* Values Section */}
      <section className="py-20 bg-orange-600 text-center text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: "Rigueur", text: "Chaque programme est conçu avec une exigence de qualité et un souci du détail irréprochable." },
            { title: "Innovation", text: "Nous repoussons les limites de l’apprentissage avec des méthodes modernes et immersives." },
            { title: "Engagement", text: "Notre mission : accompagner chaque apprenant vers la réussite avec un suivi personnalisé." }
          ].map((value, idx) => (
            <div key={idx} className="bg-stone-800/30 p-8 rounded-xl shadow-md hover:scale-105 transition-transform">
              <h3 className="font-semibold text-2xl mb-2">{value.title}</h3>
              <p className="text-gray-200">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

    
      {/* Call to Action */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Faites Partie de l'Aventure</h2>
        <p className="text-lg opacity-80 max-w-3xl mx-auto mb-6">
          Rejoignez une communauté d’apprenants et de passionnés, et construisons ensemble l’avenir de la formation.
        </p>
        <button onClick={() => navigate('/notre-histoire')} className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-semibold transition-all">
          Découvrir Notre Histoire
        </button>
      </section>
    </div>
    );
}