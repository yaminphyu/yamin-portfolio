import React, { useContext, useEffect, useState } from 'react';
import { Box, HStack, List, ListItem } from '@chakra-ui/react';
import { AiOutlineHeart } from "react-icons/ai";
import styles from '@/styles/NavBar.module.css';
import { MobileStickyNavbarContext } from '@/context/MobileStickyNavbar';
import { NavBars } from '@/config';
import { Link } from 'react-scroll';

export default function NavBar() {
    const { setActiveTabIndex } = useContext(MobileStickyNavbarContext);

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <Box className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
            <Box className="flex justify-between p-6">
                <AiOutlineHeart size={20} className='m-[2px]' />
                <Link 
                    to="top"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setActiveTabIndex('')}
                    className='cursor-pointer'
                >YaminPhyu</Link>
                <AiOutlineHeart size={20} className='m-[2px]' />
            </Box>
            <Box className={styles.wrapper}>
                <List 
                    display="flex" 
                    alignItems="center" 
                    listStyleType="none"
                >
                    <HStack as="ul" spacing={3}>
                        {
                            NavBars.map((item, index) => (
                                <ListItem key={index}>
                                    <Link
                                        smooth 
                                        spy 
                                        to={item.url}
                                        className={`${styles.item} ${isScrolled ? styles['scrolled-btn'] : ''}`}
                                    >{item.name}</Link>
                                </ListItem>
                            ))
                        }
                    </HStack>
                </List>
            </Box>
        </Box>
    )
}
