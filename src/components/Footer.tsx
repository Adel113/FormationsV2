import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <TrendingUp className="h-6 w-6" />
          <span className="text-xl font-bold">TikTok Pro</span>
        </div>
        <p className="opacity-60">© 2024 TikTok Pro. Tous droits réservés.</p>
      </div>
    </footer>
  );
}