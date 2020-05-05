import React, { Component } from 'react';

const REVIEWS = [
  '"React poised to overtake AngularJS in 2019"-research.hackerrank.com',
  '"React has exceeded our requirements and enabled us to build a tremendous foundation on which to innovate the Netflix experience." -Jordanna Kwok, Engineering Manager at Netflix',
'"The best tools set you up for success and the highly compositional nature of React made it particularly easy to reason about."- Katie Sievert, Senior Software Engineer at Twitter'
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
    
   
    animateReviews = () => {
         this.reviewsInterval = setInterval(() => {
          const reviewsIndex = (this.state.reviewsIndex + 1) % REVIEWS.length;
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