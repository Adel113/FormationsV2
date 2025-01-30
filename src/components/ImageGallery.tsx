import { useState } from "react"; // Importation du hook useState de React

// Définition des propriétés attendues par le composant ImageGallery
interface ImageGalleryProps {
  images: string[]; // Un tableau de chaînes de caractères représentant les URLs des images
}

// Définition du composant fonctionnel ImageGallery
const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  // Déclaration d'un état local pour l'image sélectionnée
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-4"> {/* Conteneur principal avec espacement vertical entre les éléments */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 "> {/* Grille avec 2 colonnes et un espace entre les éléments */}
        {images.map((src, index) => (
          <img
            key={index} // Clé unique pour chaque élément de la liste
            className="object-cover object-center rounded cursor-pointer transition-transform duration-300 hover:scale-105" // Classes CSS pour le style
            alt={`Image ${index + 1}`} // Texte alternatif pour l'image
            src={src} // Source de l'image
            
            onClick={() => setSelectedImage(src)} // Définir l'image sélectionnée lors du clic
          />
        ))}
      </div>

      {selectedImage && ( // Si une image est sélectionnée, afficher l'aperçu agrandi
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" // Classes CSS pour le style de l'aperçu
          onClick={() => setSelectedImage(null)} // Réinitialiser l'image sélectionnée lors du clic
        >
          <img src={selectedImage} alt="Agrandie" className="max-w-full max-h-full rounded-lg" /> {/* Image agrandie */}
        </div>
      )}
    </div>
  );
};

export default ImageGallery; // Exportation du composant pour utilisation dans d'autres fichiers
