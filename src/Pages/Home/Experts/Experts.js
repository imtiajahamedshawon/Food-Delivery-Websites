import React from 'react';

import delivere1 from '../../../images/deliver-1.jpg'
import delivere2 from '../../../images/delivery-2 -.jpg'
import delivere3 from '../../../images/delivery-3.jpg'

import Expert from '../Expert/Expert';

const experts = [
    {
        img: delivere1,
        name: 'jeck',
        expertize: 'Pizza Delivery'
    },
    {
        img: delivere2,
        name: 'rakes',
        expertize: 'Fasta Delivery'
    },
    {
        img: delivere3,
        name: 'sakib',
        expertize: 'Burger Delivery'
    },
   
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-success mt-5">Our Food Delivery Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;