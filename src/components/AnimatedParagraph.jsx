
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedParagraph = ({ children , delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut', delay }}
      className="mb-8 text-justify text-2xl"
    >
      {children}
    </motion.p>
  );
};

export default AnimatedParagraph;
