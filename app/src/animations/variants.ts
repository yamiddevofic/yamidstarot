import { Variants, Transition } from 'framer-motion';

// =================================================================
// 1. CONSTANTES Y CONFIGURACIONES BASE (SIN CAMBIOS)
// =================================================================

const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  spring: [0.23, 1, 0.32, 1] as const,
  ease: [0.4, 0, 0.2, 1] as const,
} as const;
const EASE = [0.42, 0, 0.58, 1] as const   // ease‑in‑out estándar

//Haz un shadow de colores llamativo

const SHADOWS = {
  subtle: '0 2px 8px rgba(0,0,0,0.08)',
  medium: '0 8px 24px rgba(0,0,0,0.12)',
  strong: '0 16px 32px rgba(0,0,0,0.16)',
  colored: {
    purple: '0 12px 28px rgba(164,69,255,0.25)',
    pink: '0 12px 28px rgba(244,114,182,0.22)',
    active: '0 20px 40px rgba(164,69,255,0.35)',
  }
} as const;

const baseTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

const smoothTransition: Transition = {
  duration: 0.6,
  ease: EASING.smooth,
};


// =================================================================
// 2. VARIANTES AGRUPADAS Y TIPADAS EXPLÍCITAMENTE
// =================================================================

/**
 * Variantes para la maquetación y transiciones de página/componente.
 */
export const layout = {
  hero: {
    initial: { opacity: 0, y: -50, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { ...baseTransition, duration: 1.2, staggerChildren: 0.2 } 
    },
    exit: { opacity: 0, y: -30, scale: 0.98, transition: smoothTransition }
  } as Variants,
  fadeSlideIn: {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { ...baseTransition, staggerChildren: 0.1 } 
    },
  } as Variants,
  slideCarousel: {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  } as Variants,
};

/**
 * Variantes para elementos de UI decorativos o de estado.
 */
export const uiElements = {
  overlay: {
    hidden: { opacity: 0, y: '-5%', backdropFilter: 'blur(0px)' },
    visible: { 
      opacity: 1, 
      y: '0%', 
      backdropFilter: 'blur(8px)', 
      transition: { ...smoothTransition, backdropFilter: { duration: 0.3 } } 
    },
    exit: { 
      opacity: 0, 
      y: '-3%', 
      backdropFilter: 'blur(0px)', 
      transition: { duration: 0.4, ease: EASING.ease } 
    }
  } as Variants,
  backgroundGlow: {
    idle: { opacity: 0, scale: 0.8, rotate: 0 },
    active: {
      opacity: [0, 0.4, 0.2, 0.6, 0.1, 0],
      scale: [0.8, 1.2, 1, 1.4, 1.1, 0.8],
      rotate: [0, 90, 180, 270, 360],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
    intense: {
      opacity: [0, 0.8, 0.4, 1, 0],
      scale: [0.5, 1.5, 1.2, 2, 0.5],
      transition: { duration: 3, repeat: Infinity, ease: EASING.smooth },
    },
  } as Variants,
  morph: {
    initial: { borderRadius: '0%', rotate: 0 },
    animate: {
      borderRadius: ['0%', '50%', '25%', '50%'],
      rotate: [0, 180, 360],
      transition: { duration: 2, repeat: Infinity, ease: EASING.smooth },
    },
  } as Variants,
};

/**
 * [CORRECCIÓN] Se define la variante del botón en una constante con tipo explícito 'Variants'.
 * Esto resuelve el error de inferencia de TypeScript en los componentes que la usan.
 */
export const buttonVariants: Variants = {
  /* ① Aparece suavemente desde abajo al montar la página */
  intro: {
    y: 30,
    opacity: 0,
    scale: 0.9,
    transition: { duration: .55, ease: EASE },
  },

  /* ② Estado natural */
  idle: {
    y: 0,
    opacity: 1,
    scale: 1,
    boxShadow: SHADOWS.strong,
    transition: { duration: .4, ease: EASE },
  },

  /* ③ Leve levantamiento al pasar el cursor */
  hover: {
    y: -8,
    scale: 1.07,
    boxShadow: SHADOWS.colored.active,
    transition: { type: 'spring', stiffness: 260, damping: 10 },
  },

  /* ④ Feedback rápido al click/tap */
  tap: {
    scale: 0.94,
    y: -2,
    boxShadow: '0 4px 12px rgba(0,0,0,.25)',
    transition: { duration: .12, ease: 'easeOut' },
  },
}

/**
 * Variantes para elementos que responden a la interacción del usuario.
 */
export const interactive = {
  menuItem: {
    hidden: { opacity: 0, y: 20, x: -10, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { ...baseTransition, delay: i * 0.08, stiffness: 400 },
    }),
  } as Variants,
  button: buttonVariants,
  iconWiggle: {
    loop: {
      rotate: [0, 6, -4, 2, -1, 0], y: [0, -1.5, 0, -0.8, 0, 0], scale: [1, 1.02, 1, 1.01, 1, 1],
      transition: { duration: 3.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1], repeat: Infinity, ease: EASING.smooth, repeatDelay: 0.5 },
    },
    subtle: {
      rotate: [0, 3, -2, 1, 0], y: [0, -1, 0, -0.5, 0], scale: [1, 1.005, 1, 1.003, 1],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
    hover: {
      rotate: [0, 8, -6, 4, 0], scale: [1, 1.1, 1.05, 1.15, 1], y: [0, -2, 0, -1, 0],
      transition: { duration: 0.8, ease: EASING.bounce },
    },
    active: {
      rotate: [0, 15, -10, 5, 0], scale: [1, 1.2, 1.1, 1.25, 1],
      transition: { duration: 0.6, ease: EASING.spring },
    },
  } as Variants,
  ripple: {
    tap: { scale: [0, 1.5], opacity: [0.6, 0], transition: { duration: 0.6, ease: 'easeOut' } },
    multiRipple: { scale: [0, 1, 1.5, 2], opacity: [0.8, 0.4, 0.2, 0], transition: { duration: 1, ease: 'easeOut' } },
  } as Variants,
};

/**
 * Variantes para dar feedback al usuario (carga, éxito, notificación).
 */
export const feedback = {
  skeleton: {
    loading: {
      opacity: [0.4, 0.8, 0.4],
      transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
    },
  } as Variants,
  notification: {
    hidden: { opacity: 0, y: -100, scale: 0.3 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { ...baseTransition, stiffness: 500 } },
    exit: { opacity: 0, y: -100, scale: 0.5, transition: { duration: 0.3, ease: 'easeIn' } },
  } as Variants,
};