import React, { Component } from 'react';
import graph from '../assets/graph.png';
import CompanyExamples from './CompanyExamples';
import hr2020 from '../assets/HR2020.png';
import hr2019 from '../assets/HR2019.png'
import ScrollToTop from './ScrollToTop';

class WhyReact extends Component {



render() {
    return(
        <div>
        <hr />
         <h1>What's with the hype?</h1>
         <hr />
         <CompanyExamples />

         <h2>Developers like React</h2>
         <img src={graph} alt='graph' className='graph'/>
         
        <h2>Job Prospects</h2>
            <div class='row'>
                <div class='column'>
                    <a href="https://research.hackerrank.com/developer-skills/2019/">
                    <img src={hr2019} alt='Hackerrank Image'/>
                    </a>
                </div>
            <div class="column">
                <a href="https://research.hackerrank.com/developer-skills/2020/">
                <img src={hr2020} alt='Hackerrank Image'/>
                </a>
                
            </div>
        </div>
        
        

        <ScrollToTop/>
        </div>

    )
} 
}export default WhyReact;