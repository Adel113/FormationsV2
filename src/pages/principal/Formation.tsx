import { useNavigate } from "react-router-dom";
import tiktok from "../../images/tiktoklogo.jpg";
import ia from "../../images/ia.png";
import Ebay from "../../images/EBay_logo.png";
import Shopify from "../../images/Shopify_logo.png";

interface FormationProps {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}

const formationsBySection: FormationProps[][] = [
  [
    { title: "Formation TikTok 10k", description: "Maîtrisez TikTok, gagnez 10k abonnés et monétisez rapidement votre audience.", image: tiktok },
    { title: "IA", description: "Découvrez les meilleures IA et leurs usages concrets en entreprise.", image: ia },
    { title: "Formation TikTok 10k", description: "Maîtrisez TikTok, gagnez 10k abonnés et monétisez rapidement votre audience.", image: tiktok },
    { title: "IA", description: "Découvrez les meilleures IA et leurs usages concrets en entreprise.", image: ia },
  ],
  [
    { title: "Dropshipping Shopify", description: "Créez et développez votre boutique Shopify en dropshipping rentable.", image: Shopify, comingSoon: true },
    { title: "Dropshipping Ebay", description: "Apprenez à vendre en dropshipping sur Ebay et maximisez vos profits.", image: Ebay, comingSoon: true },
  ],
  [
    { title: "Dropshipping Shopify", description: "Créez et développez votre boutique Shopify en dropshipping rentable.", image: Shopify, comingSoon: true },
  ],
];

const FormationCard: React.FC<FormationProps> = ({ title, description, image, comingSoon }) => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col p-4 w-72">
      <div className="relative w-full h-44 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
        {comingSoon && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-xl font-bold">
            Coming Soon
          </div>
        )}
      </div>
      <div className="text-center text-white mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default function FormationTimeline() {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    if (index === 0) navigate("/tiktokformation");
    if (index === 1) navigate("/LienIa");
  };

  return (
    <div className="min-h-screen bg-black flex justify-center p-10">
      <div className="relative flex flex-col items-center w-full max-w-5xl gap-y-12">
        
        {/* Timeline Line */}
        <div className="absolute left-2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white"></div>

        {/* Sections */}
        {formationsBySection.map((section, sectionIndex) => (
          <div key={sectionIndex} className="relative flex items-center w-full">
            {/* Timeline Point */}
            <div className="absolute left-2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full"></div>

            {/* Formation Cards */}
            <div className="ml-12 flex gap-6 flex-wrap">
              {section.map((formation, index) => (
                <div key={index} onClick={() => handleClick(index)} className="cursor-pointer">
                  <FormationCard {...formation} />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
