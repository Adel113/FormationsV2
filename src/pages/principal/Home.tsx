import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, DollarSign, Star } from 'lucide-react';
import LogoApp from '../../images/logoApp.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../images/ia.png';

export default function Home() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <img className="w-auto h-auto mx-auto mb-6" src={LogoApp} alt="Platform Logo" />
          <h1 className="text-5xl font-extrabold mb-4">Découvrez Nos Formations Professionnelles</h1>
          <p className="text-xl opacity-80 mb-8">
            Accédez à une variété de formations pour maîtriser les compétences essentielles et booster votre carrière.
          </p>
          <button 
            onClick={() => navigate('/formations')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all"
          >
            Explorer les Formations
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <BookOpen className="h-14 w-14 mx-auto mb-4 text-purple-600" />
          <h3 className="font-semibold text-2xl mb-2">Cours Complets</h3>
          <p className="text-gray-600">Apprenez à votre rythme avec des modules détaillés.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <Users className="h-14 w-14 mx-auto mb-4 text-purple-600" />
          <h3 className="font-semibold text-2xl mb-2">Communauté Active</h3>
          <p className="text-gray-600">Échangez et collaborez avec d'autres apprenants.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <DollarSign className="h-14 w-14 mx-auto mb-4 text-purple-600" />
          <h3 className="font-semibold text-2xl mb-2">Opportunités de Carrière</h3>
          <p className="text-gray-600">Mettez en pratique vos acquis et avancez professionnellement.</p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-gray-100 flex justify-center items-center">
        <div className="container mx-auto px-6">
          <Slider {...settings} className="flex justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <img src={image1} alt="Slide 1" className="rounded-lg mx-auto"/>
            </div>
            <div className="flex justify-center items-center w-full">
              <img src={image1} alt="Slide 2" className="rounded-lg mx-auto"/>
            </div>
            <div className="flex justify-center items-center w-full">
              <img src={image1} alt="Slide 3" className="rounded-lg mx-auto"/>
            </div>
          </Slider>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Ce Que Disent Nos Étudiants</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Star className="h-14 w-14 mx-auto mb-4 text-yellow-400" />
            <p className="text-gray-600 mb-4">"Les formations sont très complètes et les instructeurs sont très compétents."</p>
            <h4 className="font-semibold text-xl">Jean Dupont</h4>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Star className="h-14 w-14 mx-auto mb-4 text-yellow-400" />
            <p className="text-gray-600 mb-4">"J'ai pu décrocher un nouveau poste grâce à ces formations. Je recommande !"</p>
            <h4 className="font-semibold text-xl">Marie Curie</h4>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Star className="h-14 w-14 mx-auto mb-4 text-yellow-400" />
            <p className="text-gray-600 mb-4">"La communauté est très active et les supports de cours sont excellents."</p>
            <h4 className="font-semibold text-xl">Pierre Durand</h4>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-5xl font-bold mb-2">10K+</h3>
            <p className="text-xl opacity-80">Étudiants Satisfaits</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl opacity-80">Cours Disponibles</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-2">95%</h3>
            <p className="text-xl opacity-80">Taux de Réussite</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100  py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Rejoignez Nos Formations Dès Aujourd’hui</h2>
        <button 
          onClick={() => navigate('/formations')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all"
        >
          Commencer Maintenant
        </button>
      </section>
    </div>
  );
}