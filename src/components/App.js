import React, {Component} from 'react';
import Reviews from './Reviews';
import react_icon from '../assets/react_icon.png';

// class RegularClass{}
// class ComponentClass extends Component{}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componenetClassInstance', componentClassInstance);

class App extends Component{

 render() {
       
       return(
      
            <div>
                 
                <span><img src={react_icon} alt='react_icon' className='react_icon'/></span>
                <p> </p>
               <span><h1>A Presentation of React using React!</h1></span>
                      
        
                <h2>By Keith Huels, Josh Hootman, Karey Vongchareunexay and James Ndungu </h2>
                 <Reviews />
               
      
        </div>
        
  
       )
}
}

export default App;