import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import styles from '@/styles/MobileStickyNav.module.css'
import { MobileStickyNavbarContext } from '@/context/MobileStickyNavbar';
import { NavBars } from '@/config';

export default function MobileStickyNav() {
    const { activeTabIndex, setActiveTabIndex } = useContext(MobileStickyNavbarContext);
    
    const handleChangeNavbar = (id, url) => {
        setActiveTabIndex(id);

        // Find the element and scroll to it if it exists
        const element = document.querySelector(url);
        if (element) {
            const offset = 60; // Adjust this value based on your navbar height
            const yOffset = -offset;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
            console.warn(`Element with selector "${url}" not found.`);
        }
    }
    
    return (
        <Box className='fixed bottom-0 left-0 right-0'>
            <Box className='bg-navBg rounded-t-md'>
                <ul
                    className="flex list-none flex-row flex-wrap border-b-0 ps-0"
                >
                    {
                        NavBars.map((item, index) => (
                            <li 
                                role="presentation"
                                key={index}
                                className='w-1/4'
                            >
                                <a
                                    href={item.url}
                                    className={`${styles.item} ${activeTabIndex === item.id ? styles['item-active'] : ''}`}
                                    onClick={() => handleChangeNavbar(item.id, item.url)}
                                >{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </Box>
        </Box>
    )
}