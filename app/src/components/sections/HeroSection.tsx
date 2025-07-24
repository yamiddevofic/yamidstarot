import { motion } from 'framer-motion';
import { heroAnimation } from '../../animations/variants';

export const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
    <div className="absolute inset-0 z-0">
      <img src="./fondo-animados-estrellas.gif" alt="Yamid Tarot" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16">
      <motion.div className="text-center max-w-4xl mx-auto" {...heroAnimation}>
        <motion.h1
          className="text-[4rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-500 bg-clip-text text-transparent leading-none md:leading-relaxed"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Descubre tu destino
        </motion.h1>

        <motion.p
          className="text-[1.15rem] sm:text-[1.25rem] md:text-[1.35rem] text-purple-100 mb-8 font-light leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Transforma tu vida con una lectura de tarot personalizada. Conecta con tu yo interior y desbloquea las respuestas que el universo tiene para ti.
        </motion.p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-2xl mx-auto">
          <a
            href="https://wa.me/+573124673850?text=Hola%2C%20estoy%20interesado%20en%20reservar%20una%20lectura%20de%20tarot%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center"
          >
            <motion.button
              className="w-[50%] px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm sm:text-base">Reserva tu lectura</span>
            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
