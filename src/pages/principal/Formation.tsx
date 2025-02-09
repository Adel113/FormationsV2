import { useNavigate } from "react-router-dom";
import tiktok from "../../images/tiktoklogo.jpg";
import ia from "../../images/ia.png";
import Ebay from "../../images/EBay_logo.png";
import Shopify from "../../images/Shopify_logo.png";
import Shopify2 from "../../images/Shopify_logo.png";


interface FormationProps {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}

const formations: FormationProps[] = [
  {
    title: "Formation TikTok 10k",
    description:
      "Maîtrisez TikTok, gagnez 10k abonnés et monétisez rapidement votre audience.",
    image: tiktok,
  },
  {
    title: "IA",
    description: "Découvrez les meilleures IA et leurs usages concrets en entreprise.",
    image: ia,
  },
  {
    title: "Dropshipping Shopify",
    description: "Créez et développez votre boutique Shopify en dropshipping rentable.",
    image: Shopify,
    comingSoon: true,
  },
  {
    title: "Dropshipping Ebay",
    description: "Apprenez à vendre en dropshipping sur Ebay et maximisez vos profits.",
    image: Ebay,
    comingSoon: true,
  },
  {
    title: "Dropshipping Shopify",
    description: "Créez et développez votre boutique Shopify en dropshipping rentable.",
    image: Shopify2,
    comingSoon: true,
  },
  {
    title: "Dropshipping Shopify",
    description: "Créez et développez votre boutique Shopify en dropshipping rentable.",
    image: Shopify2,
    comingSoon: true,
  },
  {
    title: "Dropshipping Shopify",
    description: "Créez et développez votre boutique Shopify en dropshipping rentable.",
    image: Shopify2,
    comingSoon: true,
  },
];

const FormationCard: React.FC<FormationProps> = ({
  title,
  description,
  image,
  comingSoon,
}) => {
  return (
    <a
      href="#"
      className="block bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col h-full"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {comingSoon && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-xl font-bold">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-6 text-center text-white flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-2 flex-grow">{description}</p>
      </div>
    </a>
  );
};

export default function FormationPage() {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    if (index === 0) navigate("/tiktokformation");
    if (index === 1) navigate("/LienIa");
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {formations.map((formation, index) => (
          <div key={index} onClick={() => handleClick(index)} className="cursor-pointer h-full">
            <FormationCard {...formation} />
          </div>
        ))}
      </div>
    </div>
  );
}