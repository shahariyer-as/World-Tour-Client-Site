import axios from "axios";
import { useEffect, useState } from "react";

const usePlans = () => {
  const [plans, setPlans] = useState([]);
  const getPlans = () => {
    axios.get("https://world-tour-server-site.vercel.app/plans").then((res) => {
      const myPlans = res.data;
      setPlans(myPlans);
      console.log(myPlans);
    });
  };
  useEffect(() => getPlans(), []);
  return [plans, setPlans];
};

export default usePlans;
