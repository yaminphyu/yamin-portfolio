import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaArrowDownLong } from "react-icons/fa6";
import styles from '@/styles/HeroSection.module.css';
import { Link } from 'react-scroll';

export default function ScrollAnimation() {
    return (
        <Link
            to='about'
            smooth={true}
            duration={500}
            offset={20}
        >
            <Box 
                className={styles['down-arrow-container']}
            >
                <FaArrowDownLong className={styles['down-arrow']} />
            </Box>
        </Link>
    )
}
