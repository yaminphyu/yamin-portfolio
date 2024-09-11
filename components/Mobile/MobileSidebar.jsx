import React from 'react'
import { Box, List, ListItem } from '@chakra-ui/react';
import styles from '@/styles/MobileSidebar.module.css';
import { Link } from '@chakra-ui/next-js';

export default function MobileSidebar() {
    return (
        <Box className={styles.wrapper}>
            <Box className='w-3/4 px-6'>
                <List 
                    justifyContent="start" 
                    listStyleType="none"
                    as="ul" 
                    spacing={5}
                >
                    <ListItem>
                        <Link 
                            href='/about' 
                            className={styles.item}
                        >About</Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                            href='/projects' 
                            className={styles.item}
                        >Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                            href='/education' 
                            className={styles.item}
                        >Education</Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                            href='/contact' 
                            className={styles.item}
                        >Contact me</Link>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
