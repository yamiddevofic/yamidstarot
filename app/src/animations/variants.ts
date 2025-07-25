// src/animations/variants.ts
export const heroAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

export const overlayVariants = {
  hidden: { opacity: 0, y: "-5%" },
  visible: { opacity: 1, y: "0%" },
};

export const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};
// src/animations/variants.ts
export const floatButtonVariants = {
  idle: {
    y: 0,
    scale: 1,
    rotate: 0,
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    filter: "brightness(1) saturate(1)",
  },
  float: {
    y: [0, -12, 0, -8, 0, -4, 0],
    rotate: [0, 1.2, 0, -0.8, 0, 0.4, 0],
    scale: [1, 1.02, 1, 1.015, 1, 1.008, 1],
    boxShadow: [
      "0 2px 8px rgba(0,0,0,0.12)",
      "0 16px 32px rgba(164,69,255,0.25)",
      "0 4px 12px rgba(0,0,0,0.15)",
      "0 12px 24px rgba(244,114,182,0.22)",
      "0 2px 8px rgba(0,0,0,0.12)",
      "0 8px 16px rgba(164,69,255,0.18)",
      "0 2px 8px rgba(0,0,0,0.12)",
    ],
    filter: [
      "brightness(1) saturate(1)",
      "brightness(1.06) saturate(1.04)",
      "brightness(1.01) saturate(1.01)",
      "brightness(1.04) saturate(1.03)",
      "brightness(1) saturate(1)",
      "brightness(1.02) saturate(1.02)",
      "brightness(1) saturate(1)",
    ],
    transition: {
      duration: 6,
      times: [0, 0.2, 0.35, 0.55, 0.7, 0.85, 1],
      repeat: Infinity,
      ease: [0.25, 0.46, 0.45, 0.94], // Cubic-bezier personalizado más suave
      repeatType: "loop",
    },
  },
  hover: {
    scale: 1.08,
    y: -10,
    rotate: 0,
    boxShadow: "0 20px 40px rgba(164,69,255,0.35)",
    filter: "brightness(1.1) saturate(1.08)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
  tap: {
    scale: 0.94,
    y: -2,
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    filter: "brightness(0.96) saturate(0.98)",
    transition: {
      duration: 0.12,
      ease: "easeOut",
    },
  },
  // Animación de atención más sutil y natural
  attention: {
    scale: [1, 1.05, 1.02, 1],
    y: [0, -8, -4, 0],
    rotate: [0, 2, -1, 0],
    boxShadow: [
      "0 2px 8px rgba(0,0,0,0.12)",
      "0 16px 32px rgba(244,114,182,0.4)",
      "0 8px 16px rgba(164,69,255,0.3)",
      "0 2px 8px rgba(0,0,0,0.12)",
    ],
    filter: [
      "brightness(1) saturate(1)",
      "brightness(1.08) saturate(1.06)",
      "brightness(1.04) saturate(1.03)",
      "brightness(1) saturate(1)",
    ],
    transition: {
      duration: 1.2,
      times: [0, 0.4, 0.7, 1],
      ease: [0.23, 1, 0.32, 1], // Ease-out-expo
      repeat: 1,
      repeatDelay: 0.3,
    },
  },
  // Nueva animación de "pulso" sutil para estados activos
  pulse: {
    scale: [1, 1.03, 1],
    boxShadow: [
      "0 2px 8px rgba(0,0,0,0.12)",
      "0 8px 24px rgba(164,69,255,0.25)",
      "0 2px 8px rgba(0,0,0,0.12)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const iconWiggleVariants = {
  loop: {
    rotate: [0, 6, -4, 2, -1, 0],
    y: [0, -1.5, 0, -0.8, 0, 0],
    scale: [1, 1.02, 1, 1.01, 1, 1],
    transition: {
      duration: 3.5,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      repeat: Infinity,
      ease: [0.25, 0.46, 0.45, 0.94], // Mismo easing suave
      repeatDelay: 0.5,
    },
  },
  // Nueva variante más sutil para iconos
  subtle: {
    rotate: [0, 3, -2, 1, 0],
    y: [0, -1, 0, -0.5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  // Animación para hover del icono
  hover: {
    rotate: [0, 8, -6, 4, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Nuevas variantes para elementos adicionales
export const backgroundGlowVariants = {
  idle: {
    opacity: 0,
    scale: 0.8,
  },
  active: {
    opacity: [0, 0.4, 0.2, 0.6, 0],
    scale: [0.8, 1.2, 1, 1.4, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rippleVariants = {
  tap: {
    scale: [0, 1.5],
    opacity: [0.6, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
