import React, { Component } from 'react';

const REVIEWS = [
    'reviews',
    'reviews1',
    'reviews3'
    
];

class Reviews extends Component{

    //loop through reviews, keeps track of index of reviews
    state = { reviewsIndex: 0, fadeIn: true};

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);
       

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

            this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);
        }, 4000);

       
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