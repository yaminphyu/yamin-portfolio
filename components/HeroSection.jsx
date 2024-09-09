import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';
import ScrollAnimation from './ScrollAnimation';

export default function HeroSection() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>
                <Box className={styles['left-section']}>
                    <h1 className={styles['first-text']}>Hi, I&apos;m</h1>
                    <h1 className={styles['second-tex']}>Yamin Phyu!</h1>
                    <Text className={styles['third-text']}>A Full-stack Developer</Text>
                    <h1 className={styles['paragraph']}>I am a full-stack developer who loves delivering quality work. I use Laravel for backend development and ReactJS and Next.js for frontend. I enjoy learning new things and solving bugs.</h1>
                    <Box>
                        <Button 
                            className={styles['contact-me-btn']}
                            onClick={() => alert('Contact me!')}
                        >Contact me!</Button>
                    </Box>
                </Box>
                <Box className={styles['right-section']}>
                    <Image src='/hero1.png' alt='hero' width={300} height={300} />
                </Box>
            </Box>
            <ScrollAnimation />
        </Box>
    )
}
