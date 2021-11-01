import React from 'react';
import { Row } from 'react-bootstrap';

import Plans from '../Plans/Plans';
import Banner from '../Banner/Banner';
import usePlans from '../../../Hooks/usePlan';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    const [plans] = usePlans();
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <h1 style={{ color: '#e0ab1a' }} id="plans">Tour Plans</h1>
                <div className="container my-5">

                    <Row xs={1} md={2} className="g-4 ">
                        {
                            plans.map(plan => <Plans
                                key={plan._id}
                                plan={plan}
                            ></Plans>)
                        }

                    </Row>

                </div>
            </div>
            <div>
                <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default Home;