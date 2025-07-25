import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { floatButtonVariants, iconWiggleVariants, backgroundGlowVariants, rippleVariants } from '../animations/variants';
import { useEffect, useState } from 'react';

const FloatWhatsAppBtn = () => {
  const controls = useAnimation();
  const iconControls = useAnimation();
  const glowControls = useAnimation();
  const prefersReduced = useReducedMotion();
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (prefersReduced) return;

    const complexLoop = async () => {
      while (true) {
        // Inicia el float normal
        controls.start('float');
        iconControls.start('loop');

        // Después de 12 segundos, hace una secuencia de atención
        await new Promise(r => setTimeout(r, 12000));

        // Secuencia de atención coordinada
        await Promise.all([
          controls.start('attention'),
          iconControls.start('hover'),
          glowControls.start('active')
        ]);

        // Pequeña pausa antes de volver al estado normal
        await new Promise(r => setTimeout(r, 1000));

        // Vuelve a float suave
        glowControls.start('idle');

        // Espera antes del próximo ciclo
        await new Promise(r => setTimeout(r, 8000));
      }
    };

    // Estado inicial más suave
    controls.start('pulse');
    iconControls.start('subtle');

    // Inicia el loop complejo después de un momento
    setTimeout(() => {
      complexLoop();
    }, 3000);

  }, [controls, iconControls, glowControls, prefersReduced]);

  const handleTap = () => {
    if (prefersReduced) return;
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <div className="relative">
      {/* Glow de fondo para mayor impacto visual */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl blur-xl"
        variants={backgroundGlowVariants}
        initial="idle"
        animate={prefersReduced ? 'idle' : glowControls}
      />

      {/* Botón principal */}
      <motion.button
        className="relative w-[100%] px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden"
        variants={floatButtonVariants}
        initial="idle"
        animate={prefersReduced ? 'idle' : controls}
        whileHover="hover"
        whileTap="tap"
        onTapStart={handleTap}
      >
        {/* Efecto ripple al hacer tap */}
        {isPressed && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-xl"
            variants={rippleVariants}
            initial={{ scale: 0, opacity: 0.6 }}
            animate="tap"
          />
        )}

        {/* Icono WhatsApp con animaciones mejoradas */}
        <motion.svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 relative z-10"
          variants={iconWiggleVariants}
          animate={prefersReduced ? undefined : iconControls}
        >
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </motion.svg>

        {/* Texto con animación sutil */}
        <motion.span
          className="text-[.85rem] sm:text-[1rem] md:text-[1.4rem] relative z-10"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Reserva tu lectura
        </motion.span>

        {/* Highlight sutil que se mueve */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 7,
            ease: 'easeInOut',
          }}
        />
      </motion.button>
    </div>
  );
};

export default FloatWhatsAppBtn;
