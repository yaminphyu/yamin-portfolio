import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaArrowDownLong } from "react-icons/fa6";
import styles from '@/styles/HeroSection.module.css';

export default function ScrollAnimation() {
    return (
        <Box className={styles['down-arrow-container']}>
            <FaArrowDownLong className={styles['down-arrow']} />
        </Box>
    )
}
