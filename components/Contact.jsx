import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    return (
        <Box className={styles.wrapper} id='contact'>
            <Box className={styles.container}>
                <h1 className='text-xl my-5'>Contact</h1>
                <Box className='w-3/4 flex flex-col m-1'>
                    <label className={styles.label}>Name</label>
                    <input type='text' placeholder='Enter your name...' className={styles.input} />
                </Box>
                <Box className='w-3/4 flex flex-col m-1'>
                    <label className={styles.label}>Email</label>
                    <input type='text' placeholder='Enter your email...' className={styles.input} />
                </Box>
                <Box className='w-3/4 flex flex-col m-1'>
                    <label className={styles.label}>Subject</label>
                    <input type='text' placeholder='Enter your title...' className={styles.input} />
                </Box>
                <Box className='w-3/4 flex flex-col m-1'>
                    <label className={styles.label}>Message</label>
                    <textarea type='text' placeholder='Message me here...' className={styles.input} rows={7} />
                </Box>
                <Box className='w-3/4'>
                    <button className={styles.button}>Send</button>
                </Box>
            </Box>
        </Box>
    )
}
