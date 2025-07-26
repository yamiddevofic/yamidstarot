import { motion } from 'framer-motion';
import FloatWhatsAppBtn from '../FloatWhatsApp';
export const HeroSection = () => (
  <section id="inicio" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center pt-32 md:pt-[6%]">
    <div className="absolute inset-0 z-0">
      <img src="./fondo-animados-estrellas.gif" alt="Yamid Tarot" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16">
      <motion.div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-[3rem] sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-500 bg-clip-text text-transparent leading-none md:leading-relaxed"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Descubre tu destino
        </motion.h1>

        <motion.p
          className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] text-purple-100 mb-8 font-light leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Transforma tu vida con una lectura de tarot personalizada. Conecta con tu yo interior y desbloquea las respuestas que el universo tiene para ti.
        </motion.p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 w-auto max-w-auto place-items-center">
          <a
            href="https://wa.me/+573124673850?text=Hola%2C%20estoy%20interesado%20en%20reservar%20una%20lectura%20de%20tarot%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto flex items-center justify-center"
          >
            <FloatWhatsAppBtn />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
