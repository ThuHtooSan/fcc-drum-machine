import { Variants } from 'framer-motion';

export const displayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
};
