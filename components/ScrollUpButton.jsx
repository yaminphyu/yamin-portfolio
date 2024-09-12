import React from 'react';
import { Button } from 'react-scroll';
import { BsArrowUpCircle } from "react-icons/bs";

export default function ScrollUpButton() {
  return (
    <section className='fixed md:bottom-10 bottom-16 right-5'>
        <Button 
            smooth={true} 
            duration={1000} 
            to="top" 
            spy={true} 
            offset={-70}
        >
            <BsArrowUpCircle className='text-accent hover:text-blueBg-500 md:text-[40px] text-4xl bg-white rounded-full' />
        </Button>
    </section>
  )
}
