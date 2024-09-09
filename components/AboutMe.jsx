import React from 'react';
import styles from '@/styles/AboutMe.module.css';
import { Box } from '@chakra-ui/react';
import Lottie from 'react-lottie';

export default function AboutMe() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../public/hero.json'),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>
                <Box className={styles['left-section']}>
                    <Lottie options={defaultOptions} height={300} width={300} />
                </Box>
                <Box className={styles['right-section']}>
                    <Box>
                        <h1 className={styles.title}>About Me</h1>
                        <p className={styles.content}>I have over 4 years of experience in web design and development, specializing in PHP with the Laravel framework, ReactJS, and NextJS. I have proficiency in React Native as well. As a quick learner, I easily adapt from one technology to another. My passion for coding and problem-solving is the driving force behind my career choice. I enjoy collaborating with teams and envision becoming a Full-Stack Developer with comprehensive expertise. I particularly relish the challenge of debugging and resolving errors.</p>
                    </Box>
                    <Box className='mt-5'>
                        <h1 className={styles.title}>Educational Background</h1>
                        <p className={styles.content}>BE-IT (2011-2019)</p>
                        <p className={styles['uni-name']}>Technological University (Hmaw Bi)</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
