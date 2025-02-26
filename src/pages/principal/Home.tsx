import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, DollarSign} from 'lucide-react';
import LogoApp from '../../images/logoApp.png';
import slider1 from '../../images/tiktokbw.png';
import slider2 from '../../images/shop.png';
import slider3 from '../../images/Shopify_logo.png';
import slider4 from '../../images/EBay_logo.png';
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
            onClick={() => navigate('/formation')}
            className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-orange-500 hover:to-coral-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 duration-300 group"
          >
            Explorer les Formations
            <span className="ml-4 inline-block group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>

      

      

      {/* 🔹 Features Section */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            key: 'feature1',
            icon: <BookOpen className="h-16 w-16 mx-auto mb-4 text-coral-400" />,
            title: "Contenu Premium",
            description: "Modules créés par des experts du secteur"
          },
          {
            key: 'feature2',
            icon: <Users className="h-16 w-16 mx-auto mb-4 text-orange-300" />,
            title: "Réseau Global",
            description: "Connectez-vous avec des passionnés mondiaux"
          },
          {
            key: 'feature3',
            icon: <DollarSign className="h-16 w-16 mx-auto mb-4 text-amber-400" />,
            title: "Carrière Boostée",
            description: "Accélérez votre progression professionnelle"
          }
        ].map((feature) => (
          <div key={feature.key} className="bg-stone-800/40 p-8 rounded-2xl shadow-xl hover:shadow-orange-500/20 transition-all transform hover:scale-[1.02] border border-amber-900/30 hover:border-amber-800/50 backdrop-blur-sm">
            {feature.icon}
            <h3 className="font-semibold text-2xl mb-2 text-amber-100">{feature.title}</h3>
            <p className="text-amber-100/70">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* 🔹 Image Slider */}
      <section className="w-full overflow-hidden bg-orange-400 py-10">
        <div className="relative w-full">
          <div className="flex animate-scroll w-full">
            <div className="flex whitespace-nowrap space-x-4 px-4 sm:px-8 lg:px-16">
              {[
                { slide: slider1, key: "slider1" },
                { slide: slider2, key: "slider2" },
                { slide: slider3, key: "slider3" },
                { slide: slider4, key: "slider4" },
                { slide: slider2, key: "slider123" },
                { slide: slider1, key: "slider43" },
                { slide: slider2, key: "slider84" },
                { slide: slider1, key: "slider95" },
              ].map((item) => (
                <div key={item.key} className="flex-shrink-0 mx-4 sm:mx-8 lg:mx-12">
                  <img
                    src={item.slide}
                    alt={`Slide ${item.key}`}
                    className="w-full h-28 object-cover shadow-lg"
                  />
                </div>
              ))}
              {/* Duplicate the slides for continuous effect */}
              {[
                { slide: slider1, key: "slider1" },
                { slide: slider2, key: "slider2" },
                { slide: slider3, key: "slider3" },
                { slide: slider4, key: "slider4" },
                { slide: slider2, key: "slider123" },
                { slide: slider1, key: "slider43" },
                { slide: slider2, key: "slider84" },
                { slide: slider1, key: "slider95" },
              ].map((item) => (
                <div key={item.key + "-duplicate"} className="flex-shrink-0 mx-4 sm:mx-8 lg:mx-12">
                  <img
                    src={item.slide}
                    alt={`Slide ${item.key} duplicate`}
                    className="w-full h-28 object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .animate-scroll {
            display: flex;
            animation: scroll 15s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* 🔹 Timeline Section */}
      <section className="min-h-screen flex flex-col items-center px-4 sm:px-8 lg:px-16 mt-8">
        <div className="max-w-7xl w-full rounded-2xl p-6 relative overflow-hidden">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-coral-400 to-orange-400 bg-clip-text">
            Notre Approche Innovante 🌟
          </h1>
          <p className="text-lg sm:text-2xl lg:text-4xl text-amber-100/80 text-center mb-6 max-w-2xl mx-auto">
            Un parcours pédagogique conçu pour maximiser votre potentiel créatif
          </p>
          <div className="relative z-10 flex flex-col items-start sm:items-center">
            <div className="absolute left-4 sm:left-1/2 w-1 bg-gradient-to-b from-coral-500/80 to-orange-500/80 h-full sm:h-[90%] transform rounded-full"></div>

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
                key={section.title}
                className={`relative flex items-start sm:items-center w-full mb-6 flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-coral-500 to-orange-500 rounded-full absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20 shadow-xl border-2 border-amber-200/20"></div>

                <div
                  className={`w-11/12 sm:w-5/12 p-4 sm:p-6 rounded-xl shadow-lg hover:bg-gradient-to-r transition-all duration-300 ${section.color} ${
                    index % 2 === 0 ? "sm:ml-16" : "sm:mr-16"
                  } hover:border border-amber-500/30 text-left sm:text-left ml-12 sm:ml-0`}
                >
                  <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-amber-100">{section.title}</h2>
                  <p className="text-base sm:text-xl lg:text-4xl text-amber-100/70 mt-2">{section.text}</p>
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
        id: "active-learners",
        value: "15K+",
        label: "Apprenants Actifs"
          }, {
        id: "satisfaction",
        value: "98%",
        label: "Satisfaction"
          }, {
        id: "completed-projects",
        value: "1K+",
        label: "Projets Réalisés"
          }].map((stat) => (
        <div key={stat.id} className="bg-stone-800/30 p-8 rounded-xl border border-amber-900/30 hover:border-amber-800/50 backdrop-blur-sm transform hover:scale-105 transition-all">
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