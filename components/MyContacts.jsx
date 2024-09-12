import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from 'next/link';

export default function MyContacts() {
    return (
        <section className='flex md:fixed md:bottom-24 md:right-5 p-2 md:my-0 my-5'>
            <Box className='flex md:flex-col flex-row gap-3'>
                <Link href='https://www.linkedin.com/in/yamin-phyu-982192197/' target='_blank'>
                    <FaLinkedin className='text-blueBg-500 text-2xl hover:text-accent' />
                </Link>
                <Link href='https://github.com/yaminphyu' target='_blank'>
                    <FaGithub  className='text-blueBg-500 text-2xl hover:text-accent' />
                </Link>
                <Link href='mailto:ymp2171995@gmail.com' target='_blank'>
                    <BiLogoGmail  className='text-blueBg-500 text-2xl hover:text-accent' />
                </Link>
            </Box>
        </section>
    )
}