import React, { useState, useRef, useEffect, } from "react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { FactItem } from "@/pages/facts/layout";
import styles from './styles.module.css'

export default function FactsPage() {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence(); 

     useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);

  return (
   
      <AnimatePresence  key={ 'yo' } ref={ref} onExitComplete>
        <motion.div className={styles.container}>
          <FactItem />
        </motion.div>
      </AnimatePresence>
   

  );
};