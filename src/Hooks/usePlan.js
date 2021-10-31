import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const usePlans = () => {
    const [plans, setPlans] = useState([])
    const getPlans = () => {
        axios.get("http://localhost:5000/plans")
            .then(res => {
                const myPlans = res.data;
                setPlans(myPlans)
                console.log(myPlans)
            })
    }
    useEffect(() => getPlans(), [])
    return [plans, setPlans]
};

export default usePlans;