import React from 'react';
import styles from '@/styles/AboutMe.module.css';
import { Box } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';

export default function AboutMe() {
    const MotionBox = motion.create(motion(Box));

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../public/hero.json'),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Box className={styles.wrapper} id='about'>
            <Box className={styles.container}>
                <Box className={styles['left-section']}>
                    <Lottie options={defaultOptions} height={300} width={300} />
                </Box>
                <Box className={styles['right-section']}>
                    <Box>
                        <motion.article
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, transition: { duration: 1 } }}
                            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                        >
                            <motion.h1 
                                variants={itemVariants}
                                className={styles.title}
                            >About Me</motion.h1>
                            <motion.p 
                                variants={itemVariants}
                                className={styles.content}
                            >I have over 4 years of experience in web design and development, specializing in PHP with the Laravel framework, ReactJS, and NextJS. I have proficiency in React Native as well. As a quick learner, I easily adapt from one technology to another. My passion for coding and problem-solving is the driving force behind my career choice. I enjoy collaborating with teams and envision becoming a Full-Stack Developer with comprehensive expertise. I particularly relish the challenge of debugging and resolving errors.</motion.p>
                        </motion.article>
                    </Box>
                    <Box className='mt-5'>
                        <motion.article
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, transition: { duration: 1 } }}
                            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                        >
                            <motion.h1 
                                variants={itemVariants}
                                className={styles.title}
                            >Educational Background</motion.h1>
                            <motion.p 
                                variants={itemVariants}
                                className={styles.content}
                            >BE-IT (2011-2019)</motion.p>
                            <motion.p 
                                variants={itemVariants}
                                className={styles['uni-name']}
                            >Technological University (Hmaw Bi)</motion.p>
                        </motion.article>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
