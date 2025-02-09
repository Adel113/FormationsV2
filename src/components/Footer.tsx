import { TrendingUp, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <TrendingUp className="h-6 w-6" />
          <span className="text-xl font-bold">TikTok Pro</span>
        </div>
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6 text-sm opacity-80">
            <li><a href="/about" className="hover:underline">À propos</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="/terms" className="hover:underline">Conditions d'utilisation</a></li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white opacity-80 hover:opacity-100">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white opacity-80 hover:opacity-100">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white opacity-80 hover:opacity-100">
            <Twitter size={24} />
          </a>
          
        </div>
        <p className="opacity-60 text-sm">© 2024 TikTok Pro. Tous droits réservés.</p>
      </div>
    </footer>
  );
}