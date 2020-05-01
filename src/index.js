import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import ReactIntro from './components/ReactIntro';
import WhyReact from './components/WhyReact';
import HowReactWorks from './components/HowReactWorks';
import OurCode from './components/OurCode';
import Sources from './components/Sources'
//import Jokes from './components/Jokes';
import Header from './components/Header';
import './index.css';


ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact path='/' render={() => <Header><App /></Header>} />
        <Route path='/ReactIntro' render={() => <Header><ReactIntro /></Header>} />
        <Route path='/WhyReact' render={() => <Header><WhyReact /></Header>} />
        <Route path='/HowReactWorks' render={() => <Header><HowReactWorks /></Header>} />
        <Route path='/OurCode' render={() => <Header><OurCode /></Header>} />
        <Route path='/Sources' render={() => <Header><Sources/></Header>} />

    </Switch>
</Router>, 
    document.getElementById('root')
    );

// new Promise((resolve, reject) => {
//     return reject(new Error('No bears'));
//     setTimeout(() =>{
        
//         resolve('Bears, Beets, Battlestar Galactica');
//     }, 2000);
//     })
//     .then(quote => {
//         console.log(quote);
//     })
//     .catch(error => console.log('error', error));



//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak(){
//         console.log('I am', this.name, 'and I am', this.age, 'years old');
//     }
// }

// const animal1 = new Animal('Simba', 3);
// animal1.speak();

// console.log(animal1);

// class Lion extends Animal{
//     constructor(name, age, furColor, speed){
//         super(name, age);
//         this.furColor = furColor;
//         this.speed = speed;
//     }
//     roar(){
//         console.log('ROOOAR! and I have',
//          this.furColor,
//          'fur, and I can run',
//          this.speed,
//          'miles an hour!');
//     }

// }

// const lion1 = new Lion('Mufasa', 20, 'golden', 25);

// lion1.speak();
// lion1.roar();
// console.log(lion1);