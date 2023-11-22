import Header from '../components/header';
import Footer from '../components/footer';
import React, { useEffect, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const Root = ({ cleanHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPathnameRef = useRef();

  // useEffect when switching between pages
  useEffect(() => {
    if (previousPathnameRef.current !== location.pathname) {
      cleanHandler();
      previousPathnameRef.current = location.pathname;
    }
  }, [cleanHandler, location.pathname]);
  
    return (  
        <>  
    <Header/>
    <Outlet/>
    <Footer/> 
       </> 
    );
}

export default Root;

