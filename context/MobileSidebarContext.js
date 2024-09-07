import { createContext, useState } from 'react';

const MobileSidebarContext = createContext({
 toggle: false,
 setToggle: () => {},
});

const MobileSidebarProvider = ({ children }) => {
 const [toggle, setToggle] = useState(false);

 return (
   <MobileSidebarContext.Provider value={{ toggle, setToggle }}>
     {children}
   </MobileSidebarContext.Provider>
 );
};

export { MobileSidebarContext, MobileSidebarProvider };