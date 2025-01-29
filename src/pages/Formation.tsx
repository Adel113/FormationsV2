import React from "react";
import tiktok from '../images/tiktoklogo.png';
import ia from '../images/ia.png';
import Ebay from '../images/EBay_logo.png';
import Shopify from '../images/Shopify_logo.png';
import { useNavigate } from 'react-router-dom'; 

interface FormationProps {
  title: string;
  description: string;
  advantages: string[];
  image: string;
  comingSoon?: boolean; // Ajouter une nouvelle propriété pour savoir si la formation est en attente
}

const formations: FormationProps[] = [
  {
    title: "Formation tiktok 10k",
    description: "Jusqu'à 100% finançable",
    advantages: [
      "Financement partiel ou intégral",
      "Choix de votre date de début de formation",
    ],
    image: tiktok,
  },
  {
    title: "IA",
    description: "IA",
    advantages: [
      "Tous les liens des IA ",
      "Descritption de ce que tu peux faire avec ",
    ],
    image: ia,

  },
  {
    title: "Dropshipping shopify",
    description: "Jusqu'à 100% finançable",
    advantages: [
      "Facilité de paiement / mensualité",
      "Choix de votre date de début de formation",
      
    ],
    image: Shopify,
    comingSoon: true,
  },
  {
    title: "Dropshipping Ebay",
    description: "Dropshipping Ebay",
    advantages: [
      "Facilité de paiement / mensualité",
      "Choix de votre date de début de formation",
      
    ],
    image: Ebay,
    comingSoon: true,
  },
];

const FormationCard: React.FC<FormationProps> = ({ title, description, advantages, image, comingSoon }) => {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-md text-center flex flex-col items-center h-[450px]">
      {comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-800 bg-opacity-50 text-white text-3xl font-bold">
          Coming Soon
        </div>
      )}
      
      {/* Section Image */}
      <div className={`w-full h-40 mb-4 ${comingSoon ? 'filter blur-sm' : ''}`}>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>
      
      {/* Section Contenu */}
      <div className="flex flex-col items-center justify-between h-full">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-green-600 mt-1">{description}</p>
        <hr className="my-4 w-full" />
        
        {/* Avantages */}
        <div className="flex-grow">
          <h3 className="font-semibold">Les avantages</h3>
          <ul className="text-left mt-2 space-y-2">
            {advantages.map((adv: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                ✅ {adv}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default function FormationPage() {
  const navigate = useNavigate(); // Initialiser useNavigate pour la redirection

  const handleClickFirstCard = () => {
    navigate("/tiktokformation"); // Redirige vers /tiktokformations lorsque la première carte est cliquée
  };
  const handleClickSecondCard = () => {
    navigate("/ia"); // Redirige vers /tiktokformations lorsque la première carte est cliquée
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-teal-200 flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {formations.map((formation, index) => (
            <div key={index} onClick={index === 0 ? handleClickFirstCard : index === 1 ? handleClickSecondCard : undefined}> {/* Ajout de l'événement de clic pour les cartes */}
            <FormationCard {...formation} />
            </div>
        ))}
      </div>
    </div>
  );
}
