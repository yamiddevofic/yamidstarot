import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Coffee, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const tarotistInfo = {
  name: "Yamid Tarot",
  description: "Soy un tarotista joven con un enfoque moderno e intuitivo. Mi misión es ayudarte a descubrir tu camino y potencial interno a través de las cartas del tarot.",
  specialties: ["Lecturas personalizadas", "Tarot para desarrollo personal", "Sesiones online"],
};

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por contactarme. Tu información ha sido guardada.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Helmet para los metadatos de la página */}
      <Helmet>
        <title>Yamid Tarot - Lecturas Online</title>
        <meta name="description" content="Explora el fascinante mundo del tarot con Yamid Tarot. Lecturas personalizadas para ayudarte a descubrir tu camino." />
        <meta property="og:title" content="Yamid Tarot - Lecturas Online" />
        <meta property="og:description" content="Explora el fascinante mundo del tarot con Yamid Tarot. Lecturas personalizadas para ayudarte a descubrir tu camino." />
        <meta property="og:image" content="https://yamidtarot.online/tarot.jpg" />
        <meta property="og:url" content="https://yamidtarot.online" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yamid Tarot - Lecturas Online" />
        <meta name="twitter:description" content="Explora el fascinante mundo del tarot con Yamid Tarot. Lecturas personalizadas para ayudarte a descubrir tu camino." />
        <meta name="twitter:image" content="https://yamidtarot.online/tarot.jpg" />
      </Helmet>
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://c1.wallpaperflare.com/preview/572/30/566/tarot-cards-fortune-symbol.jpg')",
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <div className="relative z-20">
        <header className="p-4 sm:p-6 flex justify-between items-center flex-wrap">
          <h1 className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">{tarotistInfo.name}</h1>
          <nav className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-end">
            <a href="#about" className="hover:text-purple-300">Sobre mí</a>
            <a href="#services" className="hover:text-purple-300">Servicios</a>
            <a href="#contact" className="hover:text-purple-300">Contacto</a>
          </nav>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/*Aquí Comienza*/}
            
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen flex flex-col justify-center items-center text-center sm:text-left sm:items-start"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center sm:text-left">
                Descubre tu camino
              </h2>
              
              <p className="text-lg sm:text-xl mb-8 max-w-2xl text-center sm:text-left">
                {tarotistInfo.description}
              </p>
              
              <div className="flex items-center gap-4 w-full flex-col sm:flex-row">
                {/* Primer Botón: Reserva tu Lectura */}
                <motion.a 
                  href="https://wa.me/573124673850?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20lectura%20de%20tarot." 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full w-full sm:w-auto text-center flex items-center justify-center"
                  style={{ minWidth: '250px' }}
                >
                  <FaStar className='text-3xl mr-4'/> Reserva tu lectura
                </motion.a>
                
                {/* Segundo Botón: Únete a la Comunidad */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                  style={{ minWidth: '250px' }}
                >
                  <Link
                    to="/grupo-whatsapp"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full block text-center flex items-center justify-center"
                  >
                    <FaWhatsapp className='text-3xl mr-2'/> Únete a nuestra comunidad
                  </Link>
                </motion.div>
              </div>
            </motion.section>

          {/*Aquí Termina */}  
          <motion.section 
            id="services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-8">Mis servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {tarotistInfo.specialties.map((specialty, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg"
                >
                  <Star className="h-8 w-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{specialty}</h3>
                  <p>{
                    specialty === "Lecturas personalizadas" ? "Ofrezco lecturas de tarot completamente adaptadas a tus necesidades personales, enfocándome en las preguntas o inquietudes que más te importan." :
                    specialty === "Tarot para desarrollo personal" ? "Estas sesiones están diseñadas para ayudarte a encontrar un crecimiento interno y comprender mejor tus potenciales y bloqueos personales." :
                    specialty === "Sesiones online" ? "Accede a una lectura de tarot desde la comodidad de tu hogar, a través de una videollamada que te permitirá conectarte y explorar tu camino sin importar donde estés." :
                    "En Colombia, el tarot no es solo una herramienta de adivinación, sino una guía para descubrir el potencial interno de cada persona. Las sesiones buscan brindar claridad y acompañamiento en momentos de incertidumbre."
                  }</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-8">Contáctame</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto sm:mx-0">
              <input 
                type="text" 
                placeholder="Nombre" 
                className="w-full mb-4 p-2 rounded bg-white bg-opacity-20" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full mb-4 p-2 rounded bg-white bg-opacity-20" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea 
                placeholder="Mensaje" 
                rows={4} 
                className="w-full mb-4 p-2 rounded bg-white bg-opacity-20" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
                type="submit"
              >
                Enviar
              </motion.button>
            </form>
          </motion.section>
        </main>

        <footer className="bg-black bg-opacity-50 py-6">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 {tarotistInfo.name}. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-300"><Coffee className="h-6 w-6" /></a>
              <a href="#" className="hover:text-purple-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-purple-300"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
