import { TrendingUp, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-stone-900 to-black border-t border-amber-900/30 relative overflow-hidden py-16">
      {/* Effet lumineux révisé */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 via-orange-500/10 to-coral-500/10 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo avec animation révisée */}
        <div className="flex items-center justify-center space-x-2 mb-6 animate-float">
          <TrendingUp className="h-8 w-8" />
          <span className="text-2xl font-bold text-white ">
            FormationV2Pro
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <li>
              <a href="/about" className="text-amber-100/80 hover:text-orange-300 transition-colors">
                À propos
              </a>
            </li>
            <li>
              <a href="/contact" className="text-amber-100/80 hover:text-coral-300 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-amber-100/80 hover:text-orange-300 transition-colors">
                Confidentialité
              </a>
            </li>
            <li>
              <a href="/terms" className="text-amber-100/80 hover:text-coral-300 transition-colors">
                Conditions
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Réseaux sociaux améliorés */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="p-2 rounded-full bg-stone-800/40 hover:bg-orange-500/20 transition-colors">
            <Facebook className="h-6 w-6 text-amber-100/80 hover:text-orange-300" />
          </a>
          <a href="#" className="p-2 rounded-full bg-stone-800/40 hover:bg-orange-500/20 transition-colors">
            <Instagram className="h-6 w-6 text-amber-100/80 hover:text-orange-300" />
          </a>
          <a href="#" className="p-2 rounded-full bg-stone-800/40 hover:bg-orange-500/20 transition-colors">
            <Twitter className="h-6 w-6 text-amber-100/80 hover:text-orange-300" />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-amber-100/60">
          © {new Date().getFullYear()} FormationV2Pro. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}