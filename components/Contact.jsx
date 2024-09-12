import React, { useContext, useState } from 'react';
import { Box } from '@chakra-ui/react';
import styles from '@/styles/Contact.module.css';
import MyContacts from './MyContacts';
import { MobileSidebarContext } from '@/context/MobileSidebarContext';

export default function Contact() {
    const { toggle } = useContext(MobileSidebarContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const res = fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        console.log({ res });
        
        // if (res.ok) {
        //     alert('Message sent successfully!');
        // } else {
        //     alert('Failed to send message.');
        // }
    }
    return (
        <section className={styles.wrapper} id='contact'>
            <Box className={styles.container}>
                <h1 className='text-xl my-5'>Contact</h1>
                <form className='w-full flex flex-col items-center' onSubmit={handleSubmit}>
                    <Box className='w-3/4 flex flex-col m-1'>
                        <label className={styles.label}>Name</label>
                        <input 
                            type='text' 
                            name='name'
                            required
                            placeholder='Enter your name...' 
                            className={styles.input} 
                            value={formData.name || ''}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box className='w-3/4 flex flex-col m-1'>
                        <label className={styles.label}>Email</label>
                        <input 
                            type='text' 
                            name='email'
                            required
                            placeholder='Enter your email...' 
                            className={styles.input} 
                            value={formData.email || ''}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box className='w-3/4 flex flex-col m-1'>
                        <label className={styles.label}>Subject</label>
                        <input 
                            type='text' 
                            name='subject'
                            required
                            placeholder='Enter your title...' 
                            className={styles.input} 
                            value={formData.subject || ''}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box className='w-3/4 flex flex-col m-1'>
                        <label className={styles.label}>Message</label>
                        <textarea 
                            type='text' 
                            name='message'
                            required
                            placeholder='Message me here...' 
                            rows={7} 
                            className={styles.input} 
                            value={formData.message || ''}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box className='w-3/4'>
                        <button 
                            type='submit'
                            className={styles.button}
                        >Send</button>
                    </Box>
                </form>
            </Box>
            { toggle && <MyContacts /> }
        </section>
    )
}
