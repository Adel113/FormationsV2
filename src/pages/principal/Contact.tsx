import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // envoi de l'email via EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Template ID
        e.target as HTMLFormElement,              // Le formulaire entier
        import.meta.env.VITE_EMAILJS_USER_ID     // Public Key (User ID)
       )
      .then(
        () => {
          setSuccessMessage('Votre message a été envoyé avec succès !');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setSuccessMessage('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-beige text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-40 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">Contactez-nous</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute question ou demande.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      {/* Contact Info Section */}
      
      
      <section className="py-20 flex flex-col bg-black items-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl w-full rounded-2xl p-10 bg-orange-100">
          <h1 className="text-5xl font-bold text-center mb-6 text-orange-600">Informations de Contact</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-black">Nous Contacter</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-black bg-opacity-20 p-4 rounded-lg">
                  <Mail className="h-6 w-6 text-black" />
                  <span className="text-black">support@tiktokpro.com</span>
                </div>
                <div className="flex items-center space-x-4 bg-black bg-opacity-20 p-4 rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                  <span className="text-black">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-4 bg-black bg-opacity-20 p-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                  <span className="text-black">Paris, France</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-black bg-opacity-20 p-4 md:p-6 rounded-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"  
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"  
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"  
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-black-400 py-3 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-all"
              >
                Envoyer le message
              </button>

              {successMessage && (
                <p className="text-center text-green-600 font-semibold mt-4">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
