import { motion } from 'framer-motion';

export const ContactSection = () => (
  <section id="contacto" className="relative py-16 sm:py-24 bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/40 to-gray-900/60" />
    </div>

    <div className="container mx-auto px-4 max-w-2xl relative z-10">
      <div className="bg-gray-800/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Inicia tu viaje
        </h2>

        <div className="text-center pb-8">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center bg-gray-900/50 border border-white/10 rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-base sm:text-lg text-purple-200 font-medium">
              Esta sección está en construcción. ¡Próximamente!{" "}
              <a href="#inicio" className="underline hover:text-purple-400 transition-colors">Contáctame</a>
            </p>
          </div>
        </div>

        <form className="space-y-4 sm:space-y-6 opacity-50 pointer-events-none">
          <div className="space-y-4">
            <input type="text" placeholder="Nombre completo" className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white" disabled />
            <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white" disabled />
            <textarea rows={4} placeholder="Tu mensaje..." className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white resize-none" disabled />
          </div>
          <motion.button
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled
          >
            Enviar mensaje
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);
