import { createContext, useState } from 'react';

const MobileStickyNavbarContext = createContext({
 activeTabIndex: '',
 setActiveTabIndex: () => {},
});

const MobileStickyNavbarProvider = ({ children }) => {
 const [activeTabIndex, setActiveTabIndex] = useState('');

 return (
   <MobileStickyNavbarContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
     {children}
   </MobileStickyNavbarContext.Provider>
 );
};

export { MobileStickyNavbarContext, MobileStickyNavbarProvider };