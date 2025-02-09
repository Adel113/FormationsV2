import React, { useState } from 'react';
import { Video, Target, Clock, ChevronDown, Youtube, Download, PlaySquare, Mic, Film, Subtitles, Eye, CheckCheckIcon, UserPlus, DollarSign } from 'lucide-react';
import InspirationImage from '../../images/inspiration.png';
import CuriositeImage from '../../images/curiosite.png';
import ChoqueImage from '../../images/choque.png';
import ObjectifImage from '../../images/objectif.png';
import CompteImage from '../../images/sidentifier.png';
import ImageGallery from '../../components/ImageGallery';
import t1 from '../../images/t1.png'; 
import t2 from '../../images/t2.png';
import t3 from '../../images/t3.png';
import t4 from '../../images/t4.png';
import chatgpt1 from '../../images/chatgpt1.png';
import chatgpt2 from '../../images/chatgpt2.png';
import eleven from '../../images/eleven.png';


export default function TiktokFormation() {
  const [showVideoGuide, setShowVideoGuide] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">

      {/* Presentation Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 py-24 md:py-0 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                  {/* Left Side: Company Info */}
                  <div className="w-full md:w-1/2 mb-12 md:mb-0">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                          Innovate.<br />Transform.<br />Succeed.
                      </h1>
                      <p className="text-xl mb-8 text-gray-300">Empowering businesses with cutting-edge solutions for a digital future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt amet dolore aliquam vitae alias possimus nesciunt? Cupiditate, architecto blanditiis illo necessitatibus ex commodi ut, deserunt eaque, possimus tempore harum!</p>
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          {/*<a href="#" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center">Get Started</a>
                          <a href="#" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center">Learn More</a>*/}
                      </div>
                  </div>


                  <div className="w-full md:w-1/2 md:pl-12 mb-5">
                      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                          <h2 className="text-2xl font-semibold mb-6">Why MyCompany?</h2>
                          <ul className="space-y-4">
                              <li className="flex items-center text-xl">
                                  <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                  <span>Lightning-fast Performance</span>
                              </li>
                              <li className="flex items-center text-xl">
                                  <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                  <span>Bank-grade Security</span>
                              </li>
                              <li className="flex items-center text-xl">
                                  <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                  <span>AI-powered Insights</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </div> 

      {/* Objectif section  */}
      <section className="py-20">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
            <div
                className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1
                    className="text-4xl font-extrabold leading-9 tracking-tight mb-3 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                    Objectif
                </h1>
                <p className="text-xl mb-8 md:pl-0  pl-2 pr-2 leading-relaxed ">
                  Notre but est de vous accompagner pour transformer votre compte en une véritable source de revenus réguliers et fiables.
                </p>
                <h3 className=" font-bold  sm:text-xl sm:leading-10  mb-3">Qu’est-ce que cela signifie concrètement ?</h3>

                <div className="flex justify-center">
                <ul>
                  <li className="flex items-center text-xl">
                    <UserPlus className="h-6 w-6 text-pink-600 mr-2" /> {/*<UserPlus size={48} strokeWidth={3} /> */}
                    <span>Augmenter votre nombre d’abonnés</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <DollarSign className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Augmenter votre chiffre d’affaires annuel</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Augmenter votre revenu annuel</span>
                  </li>
                </ul>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <img className="object-cover object-center rounded" alt="hero" src={ObjectifImage} />
            </div>
        </div>
      </section>

      {/*Création de compte */}
      <section className="py-20">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          
            {/* Contenu texte */}
            <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight mb-3 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Étape 1 : Créer un compte TikTok
              </h1>
              
              <ul>
                <li className="flex items-center text-xl mb-4">
                  <CheckCheckIcon className="h-6 w-6 text-pink-600 mr-2" />
                  <span className="text-xl">Utilisez une nouvelle adresse email professionnelle.</span>
                </li>
                <li className="flex items-center text-xl mb-4">
                  <CheckCheckIcon className="h-6 w-6 text-pink-600 mr-2" />
                  <span className="text-xl">Photo de profil attrayante et biographie claire et engageante.</span>
                </li>
                <li className="flex items-center text-xl mb-4">
                  <CheckCheckIcon className="h-6 w-6 text-pink-600 mr-2" />
                  <span className="text-xl">Utilisez des mots-clés pertinents dans votre nom d'utilisateur.</span>
                </li>
                <li className="flex items-center text-xl mb-4">
                  <CheckCheckIcon className="h-6 w-6 text-pink-600 mr-2" />
                  <span className="text-xl">Assurez-vous que votre contenu est cohérent avec votre niche.</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
              <img className="object-cover object-center rounded" alt="hero" src={CompteImage} />
            </div>

          </div>
        </section>




      {/* Objectif section  */}
      <section className="py-20">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
            <div
                className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1
                    className="text-4xl font-extrabold leading-9 tracking-tight mb-3 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                    Étape 2 : Trouver une niche rentable
                </h1>
                <p className="text-xl mb-8 md:pl-0  pl-2 pr-2 leading-relaxed ">
                  Trouvez une niche qui vous plaît et qui vous permette d'augmenter votre revenu annuel.
                </p>
                <h3 className=" font-bold  sm:text-xl sm:leading-10  mb-3">Exemples de niches rentables :</h3>
                <div className="flex justify-center">
                <ul>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>ASMR cuisine.</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Jeux vidéo.</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Quiz.</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Histoire.</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Culture générale.</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Politique et actualités.</span>
                  </li>
                  <li className="flex items-center text-xl">
                    <PlaySquare className="h-6 w-6 text-pink-600 mr-2" />
                    <span>Vues de paysages</span>
                  </li>
                </ul>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <img className="object-cover object-center rounded" alt="hero" src={ObjectifImage} />
            </div>
        </div>
      </section>

      {/* Pourquoi ces niches Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Pourquoi ces niches Section
          </h1>
          <p className="text-xl text-center mb-12">
            Maîtrisez les stratégies pour atteindre 10k abonnés et monétiser votre compte
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Colonne 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <img className="w-40 h-40 object-cover p-1" alt="Curiosité icone" src={CuriositeImage} />
                </div>
                <h3 className="text-center text-xl font-bold mb-2">Curiosité</h3>
                <p className="text-xl text-center">
                  Des thèmes comme les quiz ou l'histoire intriguent les spectateurs et les incitent à rester.
                </p>
              </div>
            </div>
            {/* Colonne 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <img
                    src={ChoqueImage}
                    alt="Suspense icone"
                    className="w-40 h-40 object-cover p-1"
                  />
                </div>
                <h3 className="text-center text-xl font-bold mb-2">Suspense</h3>
                <p className="text-xl text-center">
                  Les vidéos qui suscitent l'attente exemple : “Vous ne devinerez jamais ce qui se passe ensuite”.
                </p>
              </div>
            </div>
            {/* Colonne 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <img
                    src={InspirationImage}
                    alt="Action immersive icone"
                    className="w-40 h-40 object-cover p-1"
                  />
                </div>
                <h3 className="text-center text-xl font-bold mb-2">Action immersive</h3>
                <p className="text-xl text-center">
                  Les visuels captivants, comme les paysages ou les scènes de cuisine, tiennent les spectateurs accrochés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Inspirez-vous  */}

      <section className="relative">
        {/* Dégradé en haut */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-purple-50 to-transparent z-10"></div>

        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Inspirez-vous avec ces exemples concrets
            </h2>
            <p className="text-xl text-center mb-12">
              Pour vous aider à démarrer, voici quatre exemples de vidéos dans des niches populaires. Chaque exemple illustre une approche spécifique pour captiver votre audience et augmenter vos abonnés.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-96 object-cover rounded-xl"
                  src="https://www.youtube.com/embed/tWMwwA6rE-Y?rel=0"
                  title="Tutoriel Création Vidéo ASMR"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">ASMR Cuisine</h3>
                  <p className="text-xl">
                    Une vidéo montrant la découpe précise de légumes avec un fond sonore apaisant de couteaux et d'ustensiles.
                  </p>
                </div>
              </div>

              {/* Les autres vidéos */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-96 object-cover rounded-xl"
                  src="https://www.youtube.com/embed/LofyMQts7hY?rel=0"
                  title="Gameplay"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Gameplay</h3>
                  <p className="text-xl">
                    Une séquence rapide et dynamique montrant un joueur accomplissant un exploit ou un moment hilarant dans un jeu populaire.
                  </p>
                </div>
              </div>

              <div className=" bg-white rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-96 object-cover rounded-xl"
                  src="https://www.youtube.com/embed/hvdcZZvwXWA?rel=0"
                  title="Quiz"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Quiz</h3>
                  <p className="text-xl">
                    Une vidéo interactive où vous posez une question captivante et révélez la réponse après un court suspense.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-96 object-cover rounded-xl"
                  src="https://www.youtube.com/embed/s4IWXO-qLQI?rel=0"
                  title="Histoire"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Histoire</h3>
                  <p className="text-xl">
                    Une vidéo racontant un fait historique méconnu, accompagné de visuels immersifs et d'une narration engageante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dégradé en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50 to-transparent z-10"></div>
      </section>

      {/* Strategies Section */}
      <section id="strategies" className="py-20 m">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Stratégies Gagnantes</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Video className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Créativité</h3>
              <p className="text-gray-600 text-xl">Développez un contenu unique qui se démarque et captive votre audience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Discipline</h3>
              <p className="text-gray-600 text-xl">Maintenez une régularité dans vos publications pour fidéliser vos abonnés</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Timing</h3>
              <p className="text-gray-600 text-xl">Publiez au bon moment pour maximiser votre visibilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Creation Guide Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Guide Complet ASMR Cuisine</h1>
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setShowVideoGuide(!showVideoGuide)}
              className="flex items-center justify-between w-full bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors mb-6"
            >
              <Eye className="h-8 w-8 text-pink-600" />
              <span className="font-semibold">Voir le Guide Détaillé</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${showVideoGuide ? 'transform rotate-180' : ''}`} />
            </button>
            
            {showVideoGuide && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-12">
                {/* Étape 1 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Youtube className="h-8 w-8 text-pink-600" />
                    <h3 className="text-2xl font-semibold">Étape 1 : Trouver une vidéo prête</h3>
                  </div>
                  <div className="ml-11 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Accéder à YouTube ou TikTok</h4>
                      <p className="text-gray-600 text-xl">Utilisez des mots-clés spécifiques comme :</p>
                      <ul className="list-disc ml-5 mt-2 text-gray-600">
                        <li className=' text-xl'>"ASMR cooking"</li>
                        <li className=' text-xl'>"Cuisine en forêt"</li>
                        <li className=' text-xl'>"Outdoor cooking ASMR"</li>
                      </ul>
                      <ImageGallery images={[t1]} />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Critères de sélection</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li className=' text-xl'>Résolution minimale de 1080p</li>
                        <li className=' text-xl'>Son clair et distinct</li>
                        <li className=' text-xl'>Bonne luminosité</li>
                        <li className=' text-xl'>Cadrage stable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Download className="h-8 w-8 text-pink-600" />
                    <h3 className="text-2xl font-semibold">Étape 2 : Télécharger la vidéo</h3>
                  </div>
                  <div className="ml-11 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Depuis YouTube</h4>
                      <ol className="list-decimal ml-5 text-gray-600 space-y-2">
                        <li className=' text-xl'>Copiez l'URL de la vidéo YouTube</li>
                        <li className=' text-xl'>Accédez à y2meta.tube</li>
                        <li className=' text-xl'>Collez l'URL et sélectionnez la qualité 1080p</li>
                        <li className=' text-xl'>Cliquez sur "Télécharger"</li>
                      </ol>
                    </div>
                    <ImageGallery images={[t1,t2,t3,t4]} />
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Depuis TikTok</h4>
                      <ol className="list-decimal ml-5 text-gray-600 space-y-2">
                        <li className=' text-xl'>Copiez l'URL de la vidéo TikTok</li>
                        <li className=' text-xl'>Visitez SnapTik.app</li>
                        <li className=' text-xl'>Collez l'URL et téléchargez en HD</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <PlaySquare className="h-8 w-8 text-pink-600" />
                    <h3 className="text-2xl font-semibold">Étape 3 : Analyser la vidéo</h3>
                  </div>
                  <div className="ml-11 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Observer la vidéo</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li className=' text-xl'>Identifiez les étapes clés de la recette</li>
                        <li className=' text-xl'>Notez les sons importants (découpe, cuisson, etc.)</li>
                        <li className=' text-xl'>Repérez les moments de transition</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Créer le script avec ChatGPT</h4>
                      <div className="bg-white p-3 rounded border border-gray-200 text-gray-600 mt-2 text-xl">
                        "Génère un script de recette pour une vidéo ASMR cuisine, comprenant les étapes suivantes : découpe de légumes, cuisson dans une poêle, bruits de cuisson, présentation du plat final."
                      </div>
                    <ImageGallery images={[chatgpt1,chatgpt2]} />

                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mic className="h-8 w-8 text-pink-600" />
                    <h3 className="text-2xl font-semibold">Étape 4 : Créer la voix off</h3>
                  </div>
                  <div className="ml-11 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Utiliser ElevenLabs</h4>
                      <ol className="list-decimal ml-5 text-gray-600 space-y-2">
                        <li className=' text-xl' >Créez un compte sur ElevenLabs</li>
                        <li className=' text-xl' >Choisissez une voix calme et naturelle</li>
                        <li className=' text-xl' >Collez votre script</li>
                        <li className=' text-xl' >Ajustez le ton et le débit</li>
                        <li className=' text-xl' >Générez et téléchargez l'audio</li>
                      </ol>
                    </div>
                    <ImageGallery images={[eleven]} />
                  </div>
                </div>

                {/* Étape 5 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Film className="h-8 w-8 text-pink-600" />
                    <h3 className="text-2xl font-semibold">Étape 5 : Montage sur CapCut</h3>
                  </div>
                  <div className="ml-11 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Montage vidéo</h4>
                      <ol className="list-decimal ml-5 text-gray-600 space-y-2">
                        <li className=' text-xl' >Créez un nouveau projet</li>
                        <li className=' text-xl' >Importez la vidéo et l'audio</li>
                        <li className=' text-xl' >Synchronisez l'audio avec les actions</li>
                        <li className=' text-xl' >Ajustez le volume des deux pistes</li>
                        <li className=' text-xl' >Vérifiez la synchronisation</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Étape 6 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Subtitles className="h-8 w-8 text-pink-600" />
                    <h3 className="text-2xl font-semibold">Étape 6 : Ajouter les sous-titres</h3>
                  </div>
                  <div className="ml-11 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Sous-titres avec CapCut</h4>
                      <ol className="list-decimal ml-5 text-gray-600 space-y-2">
                        <li className=' text-xl' >Utilisez la fonction "Sous-titres automatiques"</li>
                        <li className=' text-xl' >Vérifiez et corrigez le texte généré</li>
                        <li className=' text-xl' >Personnalisez la police et la taille</li>
                        <li className=' text-xl' >Ajustez le timing des sous-titres</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Vidéo démonstrative */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Tutoriel Vidéo Complet</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-[400px] rounded-xl"
                      src="https://drive.google.com/file/d/1NWZsesMw72tazLGCGof8Hrc-lLn48KdK/view?usp=sharing"
                      title="Tutoriel Création Vidéo ASMR"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Bonus : Prompts ChatGPT</h1>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">ASMR Cuisine</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Écris un texte court et apaisant pour accompagner une vidéo ASMR de préparation de [plat]."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Jeux vidéo</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Rédige un script captivant pour une vidéo de gameplay sur [nom du jeu], avec des explications et des anecdotes intéressantes."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quiz</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Crée un quiz interactif de 10 questions sur [thème], avec 4 choix de réponses et des explications après chaque réponse."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Histoire</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Raconte une histoire fascinante de 60 secondes sur un événement historique peu connu."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Culture générale</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Explique un concept de culture générale en 2 minutes de manière simple et engageante."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Politique et actualités</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Analyse un sujet d'actualité politique en expliquant les enjeux, les acteurs impliqués et les conséquences possibles."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Vues de paysages</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Écris un texte poétique et immersif pour accompagner une vidéo de paysages magnifiques."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Science et Mystères</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg text-xl">
                "Explique un phénomène scientifique mystérieux ou une théorie fascinante en 3 minutes."
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}