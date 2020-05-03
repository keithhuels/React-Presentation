import React, { Component } from 'react';
import COMPANY_EXAMPLES from '../data/companyExamples';

class CompanyExample extends Component {
    render(){
        const { link, image } = this.props.companyExample;

        return(
            <span>
                <a href={link}>
                <img src={image} alt='company-example' style={{width: 80, height: 80, margin: 10}}/>
                </a>
            </span>
        )
    }
}

const CompanyExamples = () => (
    <div>
        <h2>Can anyone guess what these companies have in common?</h2>
        <div>
            {
                COMPANY_EXAMPLES.map(COMPANY_EXAMPLE => {
                    return <CompanyExample key={COMPANY_EXAMPLE.id} companyExample={COMPANY_EXAMPLE}/>
                })
            }
        </div>
    </div>
)

export default CompanyExamples;