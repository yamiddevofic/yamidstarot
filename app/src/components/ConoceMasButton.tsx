import { motion } from "framer-motion";

export default function ConoceMasButton() {
  return (
    <motion.button
      className="w-auto max-w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all group"
      whileHover={{ scale: 1.03, y: -2, transition: { duration: .2 } }}
      whileTap={{ scale: 0.97, y: -1, transition: { duration: .1 } }}
    >
      <span className="text-[.9rem] md:text-[1.4rem]">Conoce más sobre mí</span>

      {/* Flecha animada */}
      <motion.svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ x: [0, 6, 0] }}         // pequeño “ping” horizontal
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </motion.svg>
    </motion.button>
  );
}
