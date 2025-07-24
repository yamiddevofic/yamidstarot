// src/components/service/ServiceCard.tsx
import { motion } from 'framer-motion';

interface Props {
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, desc, price, icon }: Props) => (
  <motion.div
    className="bg-gray-900/50 p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all relative group overflow-hidden"
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative space-y-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>

      <p className="text-gray-400 text-sm sm:text-base">{desc}</p>

      <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {price}
      </div>
    </div>
  </motion.div>
);
