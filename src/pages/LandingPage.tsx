import React from 'react';
import { motion } from 'framer-motion';

const heroAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 }
};

const cardVariants = {
  hover: { y: -10, scale: 1.02 },
  tap: { scale: 0.98 }
};

const LandingPage: React.FC = () => (
  <>
    {/* Header con glassmorphism */}
    <header className="fixed w-full z-50 flex justify-between items-center p-6 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Yamid Tarot
      </div>
      <nav className="hidden md:flex space-x-8">
        {['Inicio', 'Sobre mí', 'Servicios', 'Contacto'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-gray-300 hover:text-white transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>
    </header>

    {/* Sección Hero con parallax effect */}
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/10/16/11/40/tarot-991041_1280.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-purple-900/50" />
      <motion.div 
        className="relative z-10 text-center px-4"
        {...heroAnimation}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Revela tu camino
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Conexión espiritual a través del tarot con un enfoque contemporáneo
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-all"
          whileHover="hover"
          whileTap="tap"
          variants={cardVariants}
        >
          Agenda tu lectura
        </motion.button>
      </motion.div>
    </section>

    {/* Sobre Mí con diseño split-screen */}
    <section id="sobre-mí" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition" />
          <img 
            src="./yamidtarot.jpg"
            alt="Yamid Tarot"
            style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            className="rounded-3xl transform rotate-3 group-hover:rotate-0 transition"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mi enfoque espiritual
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Combinando la sabiduría ancestral del tarot con técnicas modernas de coaching,
            ofrezco una experiencia única de autodescubrimiento y crecimiento personal.
          </p>
        </div>
      </div>
    </section>

    {/* Servicios con cards interactivas */}
    <section id="servicios" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experiencias Transformadoras
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Lectura Premium', desc: 'Sesión personalizada de 90 minutos', price: '€11' },
            { title: 'Tarot Terapéutico', desc: 'Integración con psicología moderna', price: '€15' },
            { title: 'Mentoría Mensual', desc: 'Acompañamiento continuo', price: '$17' },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all relative group"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {service.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contacto con glassmorphism */}
    <section id="contacto" className="relative py-24 bg-gray-900">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dotnoise-light-grey.png')]" />
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-gray-800/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Inicia tu viaje
          </h2>
          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
              />
              <textarea
                rows={5}
                placeholder="Tu mensaje..."
                className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <motion.button
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl transition-all hover:shadow-lg hover:shadow-purple-500/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar mensaje
            </motion.button>
          </form>
        </div>
      </div>
    </section>

    {/* Footer con socials */}
    <footer className="py-12 bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          {['instagram', 'facebook', 'tiktok'].map((social) => (
            <motion.a
              key={social}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              <span className="sr-only">{social}</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Iconos de redes sociales aquí */}
              </svg>
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()} Yamid Tarot. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  </>
);

export default LandingPage;