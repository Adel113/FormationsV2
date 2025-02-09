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

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Notre Histoire</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Fondée par des experts passionnés, notre plateforme a été créée pour offrir un accès facile et efficace à l’apprentissage en ligne.
          Nous nous engageons à fournir des formations actualisées et pertinentes pour permettre à chacun de se développer professionnellement.
        </p>
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

