import React, { Component } from 'react';
import graph from '../assets/graph.png'

class WhyReact extends Component {
render() {
    return(
        <div>
         <h1>React is incredibly useful!</h1> 
         <li>
            * job listings   *
         </li>
         <li>
            * lists of companys that use react *
         </li>
         <img src={graph} alt='graph' className='graph'/>
         
        </div>
    )
} 
}export default WhyReact;