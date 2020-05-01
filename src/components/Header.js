import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
   const style ={
        display: 'inline-block',
        margin: 10,
        marginBottom: 10,
       
    }

    return(
    <div>
        <div>
            <h3 style = {style}><Link to='/'>Home</Link></h3>
             <h3 style = {style}><Link to='/ReactIntro'>What is React?</Link></h3>
             <h3 style = {style}><Link to='/WhyReact'>Why Use React?</Link></h3>
             <h3 style = {style}><Link to='/HowReactWorks'>How It Works</Link></h3>
             <h3 style = {style}><Link to='/OurCode'>Our Code</Link></h3>
             <h3 style = {style}><Link to='/Sources'>Our Sources</Link></h3>
         </div>
         {children}
    </div>
        
     )
  }
export default Header;