import Image from 'next/image';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useCycle } from 'framer-motion';
import styles from './nav.module.css';

const Navbar = () => {

  return (
    
        <motion.nav className={styles.nav}>
          <ul className={styles.navUl}>
            <motion.li 
              whileFocus={{boxShadow: '0'}} 
              whileTap={{opacity: .9, scale: .95, boxShadow: '0'}} 
              className={styles.li}
            > 
              <div className={styles.navItem} >
                hey
              </div >
            </motion.li> 
               
            <motion.li 
              whileFocus={{boxShadow: '0'}} 
              whileTap={{opacity: .9, scale: .95, boxShadow: '0'}} 
              className={styles.li}
            >
              <div className={styles.navItem} >
                bro
              </div>
            </motion.li> 
       
            {/* <motion.li 
              whileTap={{opacity: .9, scale: .95, boxShadow: '0'}} 
              className={styles.li} 
            >
               <div className={styles.rightItem} >
                  <Link className={styles.rightItem}  style={{ caretColor: 'honeydew', color: '#66ffb2', columnFill: 'auto'}} >Contact</Link>
              </div>
          </motion.li>  */}
        </ul> 

      </motion.nav>
  );
};

export default Navbar;