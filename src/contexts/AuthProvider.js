import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// import React, {  createContext, useState } from "react";
// import useFirebase from "../hooks/useFirebase.js";
// import useServices from "../hooks/useServices.js";

// export const AuthContext = createContext();

// const AuthProvider = (props) => {
//   const allContext = useFirebase();
//   const [services] = useServices();
//   const [selectedService, setSelectedService] = useState([]);
//   function addToCart(key) {
//     const isHave = selectedService.find((service) => service.key === key);
//     if (isHave) {
//       alert("Already Added!");
//     } else {
//       const matchingService = services.find((service) => service.key === key);
//       const newSelectedService = [matchingService, ...selectedService];
//       setSelectedService(newSelectedService);
//     }
//   }

//   function removeItem(key) {
//     const removed = selectedService.filter((service) => service.key !== key);
//     setSelectedService(removed);
//   }

//   const data = {
//     contexts: allContext,
//     addToCart,
//     selectedService,
//     removeItem,
//     setSelectedService,
//   };

//   return (
//     <AuthContext.Provider value = {data}>{props.children}</AuthContext.Provider>
//     // <AuthContext.Provider value={allContext}>
//     //             {props.Children}
//     //        </AuthContext.Provider>
//         );
  
// };

// export default AuthProvider;
