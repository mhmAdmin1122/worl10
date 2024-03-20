import React, { Children, useState } from 'react'
import Header from '../H/Header';
import Footer from '../F/Footer';
const Layout = ({children}: any) => {
    const[isShown,setIsShown] = useState(false);
    const handleClick = (event:any) =>{
        setIsShown((current) => !current);
    };
  return (
    <div className=''>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout
