import React from 'react'; // importing react library
import ReactDOM from 'react-dom/client'; // DOM of react
import App from "./App";
import ProductContainer from './pdt-container.js';
import NavBar from './navbar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

{/* <h1>Compiler</h1> */}
{/* <App/> */}
{/* <NavBar/> */}
<ProductContainer/>


  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
