import Image from 'next/image'
import React, { useEffect, useRef } from "react";
import { usePresence, motion } from "framer-motion";
import styles from '../../pages/facts/styles.module.css'
import nits from '../../../public/nits.jpg';
import croc from '../../../public/croc.jpeg';
import sad from '../../../public/sad.png';


export default function FactItem() {
	const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);

    	const aboutVariants = {
    	hidden: { opacity: 0, x: '1vw'   },
    	visible: { 
			opacity: 1, x: 0,
			transition:{
				delay: 1,
				type: 'spring', 
          		velocity: 2, 
          		damping: 10,  
				duration: 1.2
			},
		}
	};
	const yVariants = {
    	hidden: { opacity: 0, y: '1vw'   },
    	visible: { 
			opacity: 1, y: 0,
			transition:{
				delay: 1.3,
				type: 'spring', 
          		damping: 10,  
			},
		}
	};

	const aboutLits = {
    hidden: { opacity: 0, x: '-1vw' },
    visible: {
        opacity: 1, x: 0,
        transition: { 
          type: 'spring', 
          delay: .4, 
          velocity: 2, 
          damping: 10, 
        },
		 exit: { 
      y: '-1vw',
      transition: { ease: 'easeInOut' }
     }
		

    }
	};

	return (
		<motion.div className={styles.box} ref={ref}>
			<motion.ul>
				<motion.li 
					className={styles.listStack}
					initial='hidden' 
					animate='visible' 
					variants={aboutLits}
					exit='exit'
				>
					<motion.div className={styles.listImg}>
                              <Image
                                src={nits}
                                alt={'Nits'}
                                className={styles.nitImg}
                                height={180}
                                width={180}
                                />
                    </motion.div>
					<motion.div className={styles.font}>Fact One</motion.div>
					<motion.div className={styles.fontTwo}> Nits are actually eggs that lice lay. Hairstylists hate nits.</motion.div>
				</motion.li>
				
				<motion.li 
					className={styles.listStack} 
					initial='hidden' 
					animate='visible' 
					variants={aboutVariants}
				>   
				<motion.div className={styles.listImg}>
				           <Image
                                src={croc}
                                alt={'Nits'}
                                className={styles.nitImg}
                                height={180}
                                width={180}
                                />
								</motion.div>
					<div className={styles.font}>Fact Two</div>
					<div className={styles.fontTwo}>Crocodiles will fuck your day up if you get too close.</div>

				</motion.li>
				<motion.li 
					className={styles.listStack}
					initial='hidden' 
					animate='visible' 
					variants={yVariants}
				>
					<motion.div className={styles.listImg}>
				           <Image
                                src={sad}
                                alt={'Nits'}
                                className={styles.nitImg}
                                height={180}
                                width={180}
                                />
								</motion.div>
					<div className={styles.font}>Fact Three</div>
					<div className={styles.fontTwo}>I put my feelings before yours, for that I am sorry.</div>
				</motion.li>
		
			</motion.ul>
		</motion.div>
	);
}