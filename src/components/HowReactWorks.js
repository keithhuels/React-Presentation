import React, { Component } from 'react';
import JSXExample from '../assets/JSXExample.png';

class HowReactWorks extends Component {
    render(){
        return(
            <div>
            <hr />
                <h1>How React Works</h1>
            <hr />
            <h2><u>React uses JSX</u></h2>
            <ul>
                <li> JSX is a syntax similar to XML/HTML that enables
                    HTML to be used in Javascript code.  </li>
                    <img src={JSXExample} alt='JSXExample' className='JSXExample'/>
                <li> However, JSX is not supported by the browser.
                    To allow the browser to render JSX, we have to use transpilation.
                </li>
                <h2>Transpiling</h2>
                <li>Transpiling is the process of translating modern Javascript code 
                    into a syntax that the browser supports. As Javascript constantly evolves, 
                    browsers like Chrome, FireFox and Edge must keep up and support the changes.
                </li>
                    <h2> Bundling </h2>
                    <li>
                        
                    </li>

            </ul>

            </div>
        )
    }
}export default HowReactWorks;