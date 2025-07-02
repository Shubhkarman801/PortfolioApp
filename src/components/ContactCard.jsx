import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactCard = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="relative w-120 h-60 bg-white border rounded-md overflow-hidden shadow-lg">
      
      {/* Static contact details */}
      <div className="absolute -top-5 left-0 w-full h-full p-4 bg-white/80 backdrop-blur-sm flex flex-col justify-center z-10 gap-4">
        <p className="text-sm text-black hover:cursor-pointer my-2" onClick={()=>{window.open('mailto:ssingh20_be23@thapar.edu','__blank')}}>Email: ssingh20_be23@thapar.edu</p>
        <p className="text-sm text-black hover:cursor-pointer mb-2" onClick={()=>{window.open('tel:+91 89689 93578','__blank')}}>Phone: +91 89689 93578</p>
      </div>

      {/* Animated 'Contact' pops upward behind then over the card */}
      <motion.div
        initial={{ y: 60, opacity: 0, zIndex: 0 }}
        animate={inView ? { y: -40, opacity: 1, zIndex: 20 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 text-3xl font-bold text-purple-600"
      >
        Contact
      </motion.div>
    </div>
  );
};

export default ContactCard;
