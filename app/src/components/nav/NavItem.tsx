// src/components/nav/NavItem.tsx
import { motion } from 'framer-motion';
import { getIconForNavItem } from '../../utils/getIconForNavItem';

interface Props {
  item: string;
}

export const NavItem = ({ item }: Props) => (
  <motion.a
    href={`#${item.toLowerCase().replace(" ", "-")}`}
    className="relative text-white/90 hover:text-white transition-colors text-base xl:text-lg font-medium flex items-center gap-2 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="w-4 h-4 xl:w-5 xl:h-5"
      whileHover={{ rotate: 15, scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {getIconForNavItem(item)}
    </motion.div>
    {item}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full" />
  </motion.a>
);
