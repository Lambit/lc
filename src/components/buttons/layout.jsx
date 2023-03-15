import { delay, easeInOut, motion, useTransform, useMotionValue } from "framer-motion";
import styles from './styles.module.css'  

export const ThreeDButton = ({onClick}) => {
  return (
    <motion.div 
        className={styles.threeDButton}
        whileTap={{opacity: .9, scale: .95, boxShadow: '0'}}
        onClick={onClick}
    >
        <div className={styles.font}>Press Me</div>
    </motion.div>
  );
};