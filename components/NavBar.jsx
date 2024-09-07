import React, { useContext } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Box, HStack, List, ListItem } from '@chakra-ui/react';
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import styles from '@/styles/NavBar.module.css';
import { MobileSidebarContext } from '@/context/MobileSidebarContext';

export default function NavBar() {
    const { toggle, setToggle } = useContext(MobileSidebarContext);

    const handleChangeSidebar = () => {
        setToggle(!toggle);
    }

    return (
        <Box className={styles.container}>
            <Box className="flex justify-between p-6">
                <AiOutlineHeart size={20} className='m-1' />
                <Link href='/'>YaminPhyu</Link>
                <AiOutlineHeart size={20} className='m-1' />
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
