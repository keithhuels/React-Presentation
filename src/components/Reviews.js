import React, { Component } from 'react';

const REVIEWS = [
  '"React poised to overtake AngularJS in 2019"-research.hackerrank.com',
  '"React has exceeded our requirements and enabled us to build a tremendous foundation on which to innovate the Netflix experience." -Jordanna Kwok, Engineering Manager at Netflix',
'"Component-based design isn’t unique to React, but the best tools set you up for success and the highly compositional nature of React made it particularly easy to reason about."- Katie Sievert, Senior Software Engineer at Twitter'
];

class Reviews extends Component{

    //loop through reviews, keeps track of index of reviews
    state = { reviewsIndex: 0, fadeIn: true};

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 6000);
       

        this.animateReviews();
    }

    componentWillUnmount() {
    clearInterval(this.reviewsInterval);
    clearTimeout(this.timeout);
    }
    
    //class property syntax
    animateReviews = () => {

        // two arg one callback function to fire, second milisecond rate to fire callback
        this.reviewsInterval = setInterval(() => {
            //^fixes error of calling setState on unmounted component

            //create local constant and incriments and modulates to loop back to beginning
            const reviewsIndex = (this.state.reviewsIndex + 1) % REVIEWS.length;

            //sets reviewindex to local constant
            this.setState({ reviewsIndex, fadeIn : true});

            this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 6000);
        }, 8000);

       
    }

    //creates title constant by accessing index
    render() {
        const { fadeIn, reviewsIndex } = this.state;

        const reviews = REVIEWS[reviewsIndex];

        //renders  title on page in browser
        return (
            <p className={fadeIn ? 'reviews-fade-in' : 'reviews-fade-out'}> {reviews}</p>
        )
    }
}

export default Reviews;