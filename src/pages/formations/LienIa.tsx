import React from "react";

const aiTools = [
  // Image IA
  {
    name: "Deep Dream Generator",
    description:
      "Utilise l'IA pour générer des images créatives à partir de tes propres photos.",
    link: "https://deepdreamgenerator.com/",
    category: "Image IA",
  },
  {
    name: "Artbreeder",
    description:
      "Crée des œuvres d'art génératives en combinant des images grâce à l'IA.",
    link: "https://www.artbreeder.com/",
    category: "Image IA",
  },
  {
    name: "Pexels AI",
    description:
      "Recherche des photos et vidéos libres de droits générées par IA pour enrichir ton contenu.",
    link: "https://www.pexels.com/ai/",
    category: "Image IA",
  },
  {
    name: "NightCafe",
    description:
      "Génère des œuvres d'art AI à partir de texte ou d'images existantes.",
    link: "https://creator.nightcafe.studio/",
    category: "Image IA",
  },
  {
    name: "DALL·E 2 (OpenAI)",
    description:
      "Génère des images uniques à partir de descriptions textuelles, idéal pour la création d'illustrations et de visuels pour TikTok.",
    link: "https://openai.com/dall-e",
    category: "Image IA",
  },
  {
    name: "Fotor AI Image Generator",
    description:
      "Crée des images et des illustrations réalistes à partir de descriptions textuelles.",
    link: "https://www.fotor.com/features/ai-image-generator/",
    category: "Image IA",
  },

  // Vidéo IA
  {
    name: "Runway ML",
    description:
      "Une plateforme IA pour créer des vidéos génératives, des effets visuels et plus encore.",
    link: "https://runwayml.com/",
    category: "Vidéo IA",
  },
  {
    name: "Lumen5",
    description:
      "Transforme des textes ou des articles en vidéos pour créer du contenu engageant.",
    link: "https://www.lumen5.com/",
    category: "Vidéo IA",
  },
  {
    name: "Synthesia",
    description:
      "Crée des vidéos avec des avatars générés par IA à partir de texte.",
    link: "https://www.synthesia.io/",
    category: "Vidéo IA",
  },
  {
    name: "Pictory",
    description:
      "Crée des vidéos à partir de texte et améliore ton contenu avec des vidéos captivantes.",
    link: "https://pictory.ai/",
    category: "Vidéo IA",
  },
  {
    name: "Descript",
    description:
      "Édite des vidéos à partir de texte, facilite la transcription et l'ajout de sous-titres automatiquement.",
    link: "https://www.descript.com/",
    category: "Vidéo IA",
  },

  // Texte IA
  {
    name: "ChatGPT (OpenAI)",
    description:
      "Utilise l'IA pour générer du texte créatif, des scripts ou des idées pour tes vidéos TikTok.",
    link: "https://chat.openai.com/",
    category: "Texte IA",
  },
  {
    name: "Copy.ai",
    description:
      "Crée des textes et des copies publicitaires rapidement, idéal pour générer des descriptions accrocheuses pour TikTok.",
    link: "https://www.copy.ai/",
    category: "Texte IA",
  },
  {
    name: "Jasper AI",
    description:
      "Génère des contenus textuels adaptés à différents besoins marketing, y compris pour les vidéos TikTok.",
    link: "https://www.jasper.ai/",
    category: "Texte IA",
  },
  {
    name: "Writesonic",
    description:
      "Utilise l'IA pour générer des scripts, des articles et des descriptions adaptées à TikTok.",
    link: "https://writesonic.com/",
    category: "Texte IA",
  },

  // Audio IA
  {
    name: "Mubert",
    description:
      "Génère de la musique et des effets sonores à l’aide de l’IA, parfait pour les vidéos TikTok.",
    link: "https://mubert.com/",
    category: "Audio IA",
  },
  {
    name: "Aiva",
    description:
      "Crée de la musique originale à partir de l'IA pour enrichir tes vidéos TikTok.",
    link: "https://www.aiva.ai/",
    category: "Audio IA",
  },
  {
    name: "LALAL.AI",
    description:
      "Sépare les pistes audio (chant, instruments) dans une chanson pour créer des remix ou ajouter des effets dans tes vidéos.",
    link: "https://www.lalal.ai/",
    category: "Audio IA",
  },

  // Voix IA
  {
    name: "Murf AI",
    description:
      "Génère des voix off réalistes avec des intonations et des émotions, idéale pour narrer tes vidéos TikTok.",
    link: "https://murf.ai/",
    category: "Voix IA",
  },
  {
    name: "Descript Overdub",
    description:
      "Crée des voix artificielles personnalisées à partir d'échantillons audio, idéal pour générer des voix off à utiliser dans des vidéos.",
    link: "https://www.descript.com/overdub",
    category: "Voix IA",
  },
  {
    name: "Replica Studios",
    description:
      "Utilise l'IA pour créer des voix réalistes, parfait pour les vidéos TikTok avec narration ou dialogues.",
    link: "https://replicastudios.com/",
    category: "Voix IA",
  },
  {
    name: "Play.ht",
    description:
      "Génère des voix off réalistes à partir de texte, idéal pour des narrations captivantes dans tes vidéos.",
    link: "https://play.ht/",
    category: "Voix IA",
  },
  {
    name: "iSpeech",
    description:
      "Convertit du texte en voix réaliste avec différentes options de voix et d'intonations.",
    link: "https://www.ispeech.org/",
    category: "Voix IA",
  },

  // Gestion de contenu
  {
    name: "Hootsuite",
    description:
      "Un outil pour programmer, gérer et suivre la performance de tes publications TikTok et autres réseaux sociaux.",
    link: "https://hootsuite.com/",
    category: "Gestion de contenu",
  },
  {
    name: "SocialBee",
    description:
      "Planifie et automatise tes publications sur TikTok, crée un calendrier de contenu.",
    link: "https://socialbee.io/",
    category: "Gestion de contenu",
  },
  {
    name: "Buffer",
    description:
      "Outil pour planifier et gérer tes publications TikTok, analyse les performances.",
    link: "https://buffer.com/",
    category: "Gestion de contenu",
  },
  {
    name: "Canva",
    description:
      "Crée des visuels accrocheurs pour TikTok, utilise des templates IA pour accélérer le processus.",
    link: "https://www.canva.com/",
    category: "Création visuelle",
  },

  // Autres outils
  {
    name: "D-ID",
    description:
      "Transforme n'importe quel texte en vidéo avec des avatars réalistes générés par IA.",
    link: "https://www.d-id.com/",
    category: "Vidéo IA",
  },
  {
    name: "Veed.io",
    description:
      "Édite facilement tes vidéos avec des outils AI pour ajouter des sous-titres, effets et autres.",
    link: "https://www.veed.io/",
    category: "Vidéo IA",
  },
  {
    name: "Kinemaster",
    description:
      "Éditeur vidéo avec des fonctionnalités AI pour rendre tes vidéos TikTok plus dynamiques.",
    link: "https://www.kinemaster.com/",
    category: "Vidéo IA",
  },
  {
    name: "Remove.bg",
    description:
      "Supprime automatiquement les arrière-plans des images pour rendre tes visuels TikTok plus propres.",
    link: "https://www.remove.bg/",
    category: "Image IA",
  },
];

const Ia = () => {
  const categories = [...new Set(aiTools.map(tool => tool.category))];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Les meilleures IA pour booster ton contenu TikTok</h1>
      
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aiTools
              .filter((tool) => tool.category === category)
              .map((tool, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">{tool.name}</h3>
                  <p className="mb-4">{tool.description}</p>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Découvrir {tool.category}
                  </a>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ia;
