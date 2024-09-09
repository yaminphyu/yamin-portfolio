import React, { useContext, useEffect, useState } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Box, HStack, List, ListItem } from '@chakra-ui/react';
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import styles from '@/styles/NavBar.module.css';
import { MobileSidebarContext } from '@/context/MobileSidebarContext';
import { disableBodyScroll } from 'body-scroll-lock';

export default function NavBar() {
    const { toggle, setToggle } = useContext(MobileSidebarContext);

    const [isScrolled, setIsScrolled] = useState(false);

    const handleChangeSidebar = () => {
        setToggle(!toggle);
        disableBodyScroll(document.body, { reserveScrollBarGap: true });
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            console.log('scrolled');
            setIsScrolled(true);
        } else {
            console.log('not scrolled');
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <Box className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
            <Box className="flex justify-between p-6">
                <AiOutlineHeart size={20} className='m-[2px]' />
                <Link href='/'>YaminPhyu</Link>
                <AiOutlineHeart size={20} className='m-[2px]' />
            </Box>
            <Box className={styles.wrapper}>
                <List 
                    display="flex" 
                    alignItems="center" 
                    listStyleType="none"
                >
                    <HStack as="ul" spacing={3}>
                        <ListItem>
                            <Link 
                                href='/about' 
                                className={`${styles.item} ${isScrolled ? styles['scrolled-btn'] : ''}`}
                            >About</Link>
                        </ListItem>
                        <ListItem>
                            <Link 
                                href='/projects' 
                                className={`${styles.item} ${isScrolled ? styles['scrolled-btn'] : ''}`}
                            >Projects</Link>
                        </ListItem>
                        <ListItem>
                            <Link 
                                href='/education' 
                                className={`${styles.item} ${isScrolled ? styles['scrolled-btn'] : ''}`}
                            >Education</Link>
                        </ListItem>
                        <ListItem>
                            <Link 
                                href='/contact' 
                                className={`${styles.item} ${isScrolled ? styles['scrolled-btn'] : ''}`}
                            >Contact me</Link>
                        </ListItem>
                    </HStack>
                </List>
            </Box>
            <Box className={styles['mobile-wrapper']}>
                <AiOutlineMenu 
                    className={styles['sidebar-icon']} 
                    size={20}
                    onClick={handleChangeSidebar}
                />
            </Box>
        </Box>
    )
}
