import React, { useContext } from 'react'
import { Box, List, ListItem } from '@chakra-ui/react'
import { AiOutlineClose } from "react-icons/ai";
import styles from '@/styles/MobileSidebar.module.css';
import { MobileSidebarContext } from '@/context/MobileSidebarContext';
import { Link } from '@chakra-ui/next-js';

export default function MobileSidebar() {
    const { toggle, setToggle } = useContext(MobileSidebarContext)
    
    return (
        <Box className={styles.wrapper}>
            <Box>
                <AiOutlineClose 
                    className={styles['sidebar-icon']} 
                    size={20}
                    onClick={() => setToggle(!toggle)}
                />
            </Box>
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
