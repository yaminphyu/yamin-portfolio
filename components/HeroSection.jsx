/* eslint-disable react/display-name */
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/HeroSection.module.css';
import ScrollAnimation from './ScrollAnimation';
import useWindowDimension from '@/hooks/useWindowDimension';

export default function HeroSection() {
    const { width } = useWindowDimension();
    const MotionImage = motion.create(motion(Image));
    const MotionText = motion.create(motion(Text));
    const MotionButton = motion.create(motion(Button));

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
    };

    return (
        <section className={`${styles.wrapper} ${width < 378 ? 'mb-48' : ''}`}>
            <Box className={styles.container}>
                <Box className={styles['left-section']}>
                    <motion.article
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                    >
                        <motion.h1
                            variants={itemVariants}
                            className={styles['first-text']}
                        >
                            Hi, I&apos;m
                        </motion.h1>
                        <motion.h1
                            variants={itemVariants}
                            className={styles['second-text']}
                        >
                            Yamin Phyu!
                        </motion.h1>
                        <MotionText
                            variants={itemVariants}
                            className={styles['third-text']}
                        >
                            A Full-stack Developer
                        </MotionText>
                        <motion.h1
                            variants={itemVariants}
                            className={styles['paragraph']}
                        >
                            I am a full-stack developer who loves delivering quality work. I use Laravel for backend development and ReactJS and Next.js for frontend. I enjoy learning new things and solving bugs.
                        </motion.h1>
                        <Box>
                            <MotionButton 
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible
                                }}
                                className={styles['contact-me-btn']}
                                onClick={() => alert('Contact me!')}
                            >Contact me!</MotionButton>
                        </Box>
                    </motion.article>
                </Box>
                <Box className={styles['right-section']}>
                    <MotionImage
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        src='/hero1.png' 
                        alt='hero'
                        width={300}
                        height={300}
                    />
                </Box>
            </Box>
            <ScrollAnimation />
        </section>
    )
}
