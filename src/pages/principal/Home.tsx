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

      {/* Timeline Section */}
      <section className="bg-gray-100 flex justify-center items-center ">
        <ol className="relative py-20 border-s-2  border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark">Achetez votre accès prenium !</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-700">Accédez dès maintenant à nos formations exclusives et maîtrisez le Community Management, la Crypto et le Dropshipping pour propulser votre succès en ligne ! 🚀🔥</p>
                <a href="/formations" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#DB2777] border border-[#DB2777] rounded-lg hover:bg-[#be1e65] hover:border-[#be1e65] focus:z-10 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-[#DB2777] dark:text-white dark:border-[#DB2777] dark:hover:bg-[#be1e65] dark:focus:ring-pink-800">Explorez les formations<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg></a>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark">Formez-vous !</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-700">Formez-vous sur le Community Management, la Crypto et le Dropshipping pour bâtir votre succès en ligne ! 🚀📈</p>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark">Boostez-votre carrière !</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-700">Boostez votre carrière et atteignez vos objectifs avec le 100% digital : 1 vision, 2 stratégies, 3 fois plus d’opportunités ! 🚀</p>
            </li>
        </ol>
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