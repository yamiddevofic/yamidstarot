import React, { useState } from 'react';
import { Coffee, Music, Sparkles, Share2, Copy, Check, Moon, Sun } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import iconoComunidad from '../../public/icono.png'; // Asegúrate de que este ícono esté en la carpeta 'public'

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
        <meta property="og:image" content="https://yamidtarot.online/grupo/tarot-cafe-music.png" />
        <meta property="og:url" content="https://yamidtarot.online/grupo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grupo de WhatsApp - TAROT, CAFÉ Y MÚSICA" />
        <meta name="twitter:description" content="Descubre el fascinante mundo del tarot, disfruta de café de calidad y sumérgete en la música en nuestra comunidad única." />
        <meta name="twitter:image" content="https://yamidtarot.online/grupo/tarot-cafe-music.png" />
      </Helmet>

      <div
        className={`min-h-screen flex flex-col justify-center items-center p-6 md:p-12 text-center transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-100 via-amber-100 to-green-100 text-gray-800'
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-white-800 shadow-md transition-all duration-300 hover:bg-[#f5f5f5] dark:hover:bg-white-700"
        >
          {isDarkMode ? <Sun size={24} className="text-orange-400" /> : <Moon size={24} className="text-gray-900" />}
        </button>

        <div
          className={`max-w-3xl w-full rounded-3xl shadow-xl p-8 md:p-16 transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white bg-opacity-95'
          }`}
        >
          <img src={iconoComunidad} alt="Icono de Comunidad" className="w-40 h-40 mx-auto mb-8" />
          <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-yellow-400' : 'text-purple-700'}`}>{GROUP_NAME}</h1>

          <div className="flex justify-center space-x-12 mb-10">
            <Sparkles className={`w-20 h-20 ${isDarkMode ? 'text-yellow-400' : 'text-purple-700'}`} />
            <Coffee className={`w-20 h-20 ${isDarkMode ? 'text-amber-500' : 'text-amber-700'}`} />
            <Music className={`w-20 h-20 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`} />
          </div>

          <p className="text-xl mb-12 leading-relaxed">
            ¡Únete a nuestra comunidad donde exploramos el tarot, disfrutamos del café y la buena música! Comparte ideas y participa en conversaciones enriquecedoras.
          </p>

          <div className="flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6 mb-10">
            <button
              onClick={handleJoin}
              className="w-full md:w-auto bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-green-700 active:scale-95"
            >
              <Sparkles className="mr-2" size={24} />
              Unirse al grupo
            </button>

            <button
              onClick={handleCopy}
              className="w-full md:w-auto bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-md transition-all duration-300 hover:bg-blue-700 active:scale-95 flex items-center justify-center"
            >
              {isCopied ? <Check size={24} /> : <Copy size={24} />}
              <span className="ml-2">{isCopied ? 'Enlace copiado' : 'Copiar enlace'}</span>
            </button>

            <button
              onClick={handleShare}
              className="w-full md:w-auto bg-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-md transition-all duration-300 hover:bg-purple-700 active:scale-95 flex items-center justify-center"
            >
              <Share2 size={24} />
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
