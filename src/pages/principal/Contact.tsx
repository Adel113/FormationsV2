import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center pt-20 justify-center p-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gradient-to-br from-orange-500 to-yellow-400 p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <h1 className="text-5xl font-extrabold text-black text-center mb-10">
            Contactez-nous
          </h1>
          
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 mix-blend-overlay"></div>
          
          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-black">Informations</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-black bg-opacity-20 p-4 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                  <span className="text-white">support@tiktokpro.com</span>
                </div>
                <div className="flex items-center space-x-4 bg-black bg-opacity-20 p-4 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                  <span className="text-white">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-4 bg-black bg-opacity-20 p-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                  <span className="text-white">Paris, France</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 bg-black bg-opacity-20 p-6 rounded-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-yellow-400 py-3 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-all"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}