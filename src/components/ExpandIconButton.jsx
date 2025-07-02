import {motion} from 'framer-motion';
import { useState } from 'react';



const ExpandIconButton = (props) => {
    const [isVisible, setIsVisible] = useState(false);
  return (
   <motion.div
      className="flex items-center bg-white/10 backdrop-blur-md text-black rounded-full px-2 py-1 cursor-pointer overflow-hidden"
      initial={{ width: 60 }}
      whileHover={{ width: isVisible?140:60
       }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={()=> window.open(`${props.url}`,'__blank')}
    >
      {/* Icon with hover detection */}
      <img
        src={props.imgId}
        alt="insta"
        className=" h-12 w-12 object-contain"
        
      />

      {/* Text that only appears when icon is hovered */}
      <motion.span
        className="ml-2 whitespace-nowrap text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible?1:0}}
        transition={{ duration: 0.2 }}
        
      >
        {props.App}
      </motion.span>
    </motion.div>
  );
};

export default ExpandIconButton;