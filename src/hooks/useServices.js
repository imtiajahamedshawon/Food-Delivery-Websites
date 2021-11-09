import { useState, useEffect } from "react";

const useServices = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://bloodcurdling-skeleton-12880.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [Services, setServices];
};

export default useServices;
