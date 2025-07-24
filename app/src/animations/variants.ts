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
