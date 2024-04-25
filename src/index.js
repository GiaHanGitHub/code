import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
//import App from './AdressIndex';
// import SumCalculator from './SumCalculator';
//import PhoneDialer2 from './PhoneDialer2';
//import ChooseAdress from './ChooseAdress';
 import SYLL from './SYLL';
import WeatherApp from './WeatherApp';
//import ChonNgay from './chonNgay';

//import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App2 from './App2';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App2 />} />
//     </Routes>
//   </Router>
// );

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <App2/>
   // <React.StrictMode>
   //   {/* <SYLL/>  */}
    
   //   {/* <WeatherApp/> */}
    
//   // </React.StrictMode>
 );
/*
// <SumCalculator />
// <App/>
// <PhoneDialer2/>
// <ChooseAdress/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/* // Cach 1: Jsx
const element = <h1 className='testClass'>Hello!</h1>

ReactDOM.render(element,document.getElementById("root"));

const new_element = <h1 className='testClass'>Hi!</h1>

ReactDOM.render(new_element,document.getElementById("app"));


// cach 2: react
/*
const element= React.createElement("div",{className:"testClass"},
React.createElement("h1",null,"Line 1"),
React.createElement("h1",null,"Line 2"));

ReactDOM.render(element,document.getElementById("root"));
*/
