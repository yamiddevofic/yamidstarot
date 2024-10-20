import React, { useState } from 'react';
import { Coffee, Music, Sparkles, Share2, Copy, Check, Moon, Sun } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import iconoComunidad from '../../public/icono.png';

const GROUP_LINK = 'https://chat.whatsapp.com/JMsmFCNhIVO8NgmIrO5UrA';
const GROUP_NAME = 'Tarot, Café y Música';

const GroupWhatsapp: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(GROUP_LINK);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleJoin = () => window.open(GROUP_LINK, '_blank');

  const handleShare = () => {
    const message = encodeURIComponent(`¡Te invitamos a unirte a nuestro grupo de WhatsApp "${GROUP_NAME}"! Únete para compartir y disfrutar: ${GROUP_LINK}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <>
      {/* Helmet para los metadatos de la página */}
      <Helmet>
        <title>Grupo de WhatsApp - TAROT, CAFÉ Y MÚSICA</title>
        <meta name="description" content="Descubre el fascinante mundo del tarot, disfruta de café de calidad y sumérgete en la música en nuestra comunidad única." />
        <meta property="og:title" content="Grupo de WhatsApp - TAROT, CAFÉ Y MÚSICA" />
        <meta property="og:description" content="Descubre el fascinante mundo del tarot, disfruta de café de calidad y sumérgete en la música en nuestra comunidad única." />
        <meta property="og:image" content="https://yamidtarot.online/community.jpg" />
        <meta property="og:url" content="https://yamidtarot.online/grupo-whatsapp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grupo de WhatsApp - TAROT, CAFÉ Y MÚSICA" />
        <meta name="twitter:description" content="Descubre el fascinante mundo del tarot, disfruta de café de calidad y sumérgete en la música en nuestra comunidad única." />
        <meta name="twitter:image" content="https://yamidtarot.online/community.jpg" />
      </Helmet>

      {/* Contenido de la página */}
      <div
        className={`min-h-screen flex flex-col justify-center items-center p-4 text-center transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-100 via-amber-100 to-green-100 text-gray-800'
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-all duration-300 hover:bg-opacity-80 ${
            isDarkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <div
          className={`w-full max-w-md rounded-3xl shadow-xl p-6 transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white bg-opacity-95'
          }`}
        >
          <img src={iconoComunidad} alt="Icono de Comunidad" className="w-24 h-24 mx-auto mb-6" />
          <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-yellow-400' : 'text-purple-700'}`}>{GROUP_NAME}</h1>

          <div className="flex justify-center space-x-6 mb-8">
            <Sparkles className={`w-12 h-12 ${isDarkMode ? 'text-yellow-400' : 'text-purple-700'}`} />
            <Coffee className={`w-12 h-12 ${isDarkMode ? 'text-amber-500' : 'text-amber-700'}`} />
            <Music className={`w-12 h-12 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`} />
          </div>

          <p className="text-lg mb-8 leading-relaxed">
            ¡Sé parte de nuestra comunidad, donde el tarot, el café y la buena música se encuentran! Aprende, conoce, y diviertete.
          </p>

          <div className="flex flex-col items-center space-y-4 mb-8">
            <button
              onClick={handleJoin}
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-green-700 active:scale-95"
            >
              <Sparkles className="mr-2" size={20} />
              Unirse a la comunidad
            </button>

            <button
              onClick={handleCopy}
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-blue-700 active:scale-95 flex items-center justify-center"
            >
              {isCopied ? <Check size={20} /> : <Copy size={20} />}
              <span className="ml-2">{isCopied ? 'Enlace copiado' : 'Copiar enlace'}</span>
            </button>

            <button
              onClick={handleShare}
              className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-purple-700 active:scale-95 flex items-center justify-center"
            >
              <Share2 size={20} />
              <span className="ml-2">Compartir</span>
            </button>
          </div>

          <p className="text-sm">
            ¡Únete y disfruta! Puedes salir en cualquier momento. Respetamos tu privacidad.
          </p>
        </div>
      </div>
    </>
  );
};

export default GroupWhatsapp;
