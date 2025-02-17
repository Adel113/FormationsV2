import React from 'react';

export default function apropos() {
  return (
<div className="min-h-screen bg-beige text-gray-900 pt-10 font-sans">
  {/* Hero Section */}
  <div className="bg-black text-white py-24 text-center">
    <div className="container mx-auto px-6">
      <h1 className="text-5xl font-extrabold mb-4">À Propos de Nous</h1>
      <p className="text-xl opacity-80 max-w-3xl mx-auto">
        Notre mission est de fournir des formations de qualité pour vous aider à acquérir de nouvelles compétences et à réussir dans votre carrière.
      </p>
    </div>
  </div>

  {/* Timeline Section */}
  <section className="min-h-screen flex flex-col bg-white items-center px-6 sm:px-12 lg:px-24 ">
    <div className="max-w-7xl w-full rounded-2xl p-8 relative overflow-hidden  bg-white">
      <h1 className="text-5xl font-bold text-center mb-6 text-orange-600">Notre Histoire</h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
        Découvrez comment notre entreprise a vu le jour et évolué au fil des années.
      </p>
      <div className="relative flex flex-col items-center">
        <div className="absolute right-4 sm:right-[52%] w-1 bg-gradient-to-b from-orange-500 to-orange-700 h-full rounded-full"></div>
        
        {[{
          title: "Les Débuts",
          text: "Tout a commencé en 2010, dans un petit garage avec une grande idée : révolutionner notre secteur.",
          color: "bg-orange-100"
        }, {
          title: "La Croissance",
          text: "Grâce à notre équipe passionnée et à nos clients fidèles, nous avons connu une croissance fulgurante.",
          color: "bg-orange-200"
        }, {
          title: "Aujourd’hui",
          text: "Aujourd’hui, nous sommes une référence dans notre domaine, avec une mission toujours intacte : innover et satisfaire nos clients.",
          color: "bg-orange-300"
        }].map((section, index) => (
          <div key={section.title} className={`relative flex flex-col sm:flex-row items-center w-full mb-8 ${index % 2 !== 0 ? "sm:flex-row-reverse" : ""}`}>
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-orange-600 rounded-full absolute right-4 sm:right-[52%] transform translate-x-1/2 shadow-md border-2 border-white"></div>
            
            <div className={`w-11/12 sm:w-5/12 p-6 rounded-xl shadow-lg transition-all duration-300 ${section.color} sm:ml-16 sm:mr-16 text-center sm:text-left`}> 
              <h2 className="text-2xl font-semibold text-orange-900">{section.title}</h2>
              <p className="text-lg text-gray-800 mt-2">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Values Section */}
  <section className="py-20 bg-orange-100 text-center text-white">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      {["Excellence", "Innovation", "Accessibilité"].map((value, idx) => (
        <div key={idx} className="bg-orange-600 p-8 rounded-xl shadow-md hover:scale-105 transition-transform">
          <h3 className="font-semibold text-2xl mb-2">{value}</h3>
          <p className="text-gray-200">Nous nous efforçons d’exceller dans tous les aspects de notre travail.</p>
        </div>
      ))}
    </div>
  </section>

  {/* Call to Action */}
  <section className="bg-black text-white py-20 text-center">
    <h2 className="text-4xl font-bold mb-6">Rejoignez Notre Communauté</h2>
    <p className="text-lg opacity-80 max-w-3xl mx-auto mb-6">
      Découvrez nos formations et commencez votre apprentissage dès aujourd’hui.
    </p>
    <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-semibold transition-all">
      Explorer les Formations
    </button>
  </section>
</div>

  );
}

