import React, { Component } from 'react';
import handshake from '../assets/handshake.png';
import pillar from '../assets/pillar.jpg';

class ReactIntro extends Component {
render() {
    return(
        <div>
            <h1> "React is a Javascript library for building user interfacts" -reactjs.org</h1>
         <p> </p>   
         <p> </p>

         <h2>React Introduction</h2> 
         <img src={handshake} alt='handshake' className='handshake'/>
    
       <p>    </p>  
         <ul>
             <li>
                  There are three core pillars of web development: HTML, CSS, and Javascript
                  <p></p>
                  <img src={pillar} alt='pillar' className='pillar' />
             </li>
             <p> </p>
             <li>
                 React is used in the Javascript side of web development.
             </li>
         </ul>
         


        </div>
    )
} 
}export default ReactIntro;