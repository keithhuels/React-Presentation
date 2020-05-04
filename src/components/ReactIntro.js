import React, { Component } from 'react';
import handshake from '../assets/handshake.png';
import pillar from '../assets/pillar.jpg';
import ScrollToTop from './ScrollToTop';
import reactLogo from '../assets/react-black.png';
import react_and_js from '../assets/js-react-orbit-color1.png';

class ReactIntro extends Component {
render() {
    return(
        <div>
        <hr />
         <h1>React Introduction</h1>
         <hr />
         {/* <img src={handshake} alt='handshake' className='handshake'/>  */}
         <li>Released in 2013, React is a JavaScript library that was designed by Facebook</li>
        
         
         <img src={reactLogo} alt='logo' className='reactLogo'/>

         
         <ul>
            <h2>Quick Refresher</h2>
             <li>
                  There are three core pillars of web development: HTML, CSS, and Javascript
                  <p></p>
                  <img src={pillar} alt='pillar' className='pillar' />
             </li>
            <h2>How React fits into the picture</h2>
             <li>
                 React is used on the javascript side of web development, as it is a JavaScript library.
             </li>
             <img src={react_and_js} alt='react and js image' className='react_and_js'/>
             <li> 
             It allows developers to compose complex user interfaces from small isolated pieces of code called "components"
             </li>
         </ul>
         

<ScrollToTop/>
        </div>
    )
} 
}export default ReactIntro;