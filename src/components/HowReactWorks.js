import React, { Component } from 'react';
import JSXExample from '../assets/JSXExample.png';
import BundlingEx from '../assets/BundlingEx.png';
import DOM from '../assets/DOM.png';
import Example from '../assets/Example.png';
import ScrollToTop from './ScrollToTop';
import iSurRender from '../assets/iSurRender.png';
import CompEx from "../assets/CompEx.png";
import huh from "../assets/huh.jpg";
import StateEx from "../assets/StateEx.png";

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
                    <img src={JSXExample} alt='JSXExample' className='Example'/>
                <li> However, JSX is not supported by the browser.
                    To allow the browser to render JSX, we have to use transpilation.
                </li>
            <h2>React needs Transpiling</h2>
                <li>Transpiling is the process of translating modern Javascript code 
                    into a syntax that the browser supports. As Javascript constantly evolves, 
                    browsers like Chrome, FireFox and Edge must keep up and support the changes.
                </li>
            <h2> React uses Bundling </h2>
                    <li>
                        Bundling is the process of "packaging" multiple Javascript files and their dependencies into one core file that the HTML can refer to.
                    </li>
                  <img src={BundlingEx} alt='BundlingEx' className='BundlingEx'/>
                    <li>We used Parcel-bundler and Babel to achieve bundling and transpiling.</li>
                    
            <h2> React uses VDOM</h2>
                  <li>When a web page is loaded, the browser creates a DOM of the page</li> 
                  <li>A DOM, or Document Object Model, 
                      is a cross-platform API that standardizes how to get, change, add or delete HTML elements.</li>
                      <img src={DOM} alt= 'DOM' className='DOM'/>
                    
                      <li>React creates a Virtual DOM, where a virtual representation of
                          the User Interface is kept in memory and synced with the "real" DOM by a library such as ReactDOM. 
                      </li>
            <h2>React uses ReactDOM</h2>
                    <li>ReactDOM is a library that provides methods that can be used
                        as an efficient way to manage HTML DOM elements. </li>
             <h2>Ok...so what does that do for us as developers?</h2>
                        <li>ReactDOM is a library, so it uses a number of methods 
                            like render() and document methods like getElementById() that are used for updating
                            the User Interface faster by bypassing conventional DOM event-handing, among many other uses.
                        </li>
                     <li>Here's an example of how ReactDOM is used in conjuction with React-Router to 
                            create the navigation pane we used in this presentation.
                        </li>
                    <img src={Example} alt='Example' className='Example'/>
          
            <h2>React uses Components</h2>
                    <li>Components in React are reusable pieces of React code to control parts of the User Interface. Components capture the structure of the UI and can have internal data to track the user behavior throughout the lifetime of the app.</li>
                  <img src={CompEx} alt='CompEx' className="CompEx" />
                  <h2>React components have state </h2>
                  <li>The state of a component is the internal data it holds. This data can be changed through the component itself, often called "updating the state". </li>
                        <img src={StateEx} alt='StateEx' className='StateEx'/>
            <h2>React uses Lifecycle methods</h2>
                        <li>Lifecycle methods are the series of events that happen from the "birth" of a React component, to its "death".</li>
                        <h2>React NEEDS render()</h2>
                        <li> The render() method is the most important lifecycle method. As the name suggests, it handles the rendering of React componenets to the UI. Every component in React MUST have a render() method, even if it just returns a null.</li>
                        <img src={iSurRender} alt='iSurRender' className='iSurRender' />

             <h2>Here are some more common lifecycle methods that React uses when building apps</h2>
                    <li>fetch()- fetch is a method that can make HTTP requests to grab data. 
                        This is primarily used in calling to web API's. </li>
                    <li>componentDidMount() and componentWillUnmount()- signals when component's elements have rendered properly and when they have finished. Also best used in making API calls. (We also used these functions to create the fader effect on the main page)</li>
                    </ul>
                    <img src={huh} alt='huh' className='huh'/>
                    <h2>So, I kind of get it? What's the bottom line? (and say hello to your mother for me)</h2>
                    <li> React is made for strong and fast web development for User Interfacts. Components, rendering, ReactDOM, bundling, and JSX are some of the many tools used in conjuction to create responsive, easily-modified web applications! </li>
           <ScrollToTop/>
    </div>
        )
    }
}export default HowReactWorks;