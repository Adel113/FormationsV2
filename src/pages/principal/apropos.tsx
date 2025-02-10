import React from 'react';

export default function apropos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">À Propos de Nous</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Notre mission est de fournir des formations de qualité pour vous aider à acquérir de nouvelles compétences et à réussir dans votre carrière.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section>
      <div className="min-h-screen  flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 transform rotate-6 scale-150"></div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 relative z-10">Notre Histoire</h1>
        <p className="text-gray-600 text-lg text-center mb-6 relative z-10">
          Découvrez comment notre entreprise a vu le jour et évolué au fil des années.
        </p>
        <div className="relative z-10 flex flex-col items-center">
          <div className="absolute left-1/2 w-1 bg-blue-500 h-full transform -translate-x-1/2 rounded-full"></div>
          {[
            { title: "Les Débuts", text: "Tout a commencé en 2010, dans un petit garage avec une grande idée : révolutionner notre secteur." },
            { title: "La Croissance", text: "Grâce à notre équipe passionnée et à nos clients fidèles, nous avons connu une croissance fulgurante." },
            { title: "Aujourd’hui", text: "Aujourd’hui, nous sommes une référence dans notre domaine, avec une mission toujours intacte : innover et satisfaire nos clients." }
          ].map((section, index) => (
            <div key={index} className={`relative flex items-center w-full mb-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-5/12 p-4 bg-gray-50 rounded-lg shadow hover:bg-blue-100 transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-700">{section.title}</h2>
                <p className="text-gray-600 mt-2">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="font-semibold text-2xl mb-2">Excellence</h3>
            <p className="text-gray-600">Nous nous efforçons de proposer des cours de la plus haute qualité.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="font-semibold text-2xl mb-2">Innovation</h3>
            <p className="text-gray-600">Nous utilisons des outils modernes pour enrichir l’expérience d’apprentissage.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="font-semibold text-2xl mb-2">Accessibilité</h3>
            <p className="text-gray-600">Nos formations sont disponibles pour tous, partout dans le monde.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Rejoignez Notre Communauté</h2>
        <p className="text-lg opacity-80 max-w-3xl mx-auto mb-6">
          Découvrez nos formations et commencez votre apprentissage dès aujourd’hui.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all">
          Explorer les Formations
        </button>
      </section>

      
    </div>
  );
}

