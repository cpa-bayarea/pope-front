// import React, { Component } from 'react'
// import { Route } from 'react-router-dom'

// export const isAuthenticated = () => localStorage.getItem('token') !== null;

// const PrivateRoute = ({ component: Component, ...rest }) => (
    
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/homeUser", state: { from: props.location } }} />
//         )
//       }
//     />
// );


// export const login = token => {
//     localStorage.setItem('token', token);
//   };


// export const logout = () => {
//     localStorage.removeItem('token', token);
//   };