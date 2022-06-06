import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
 
const root = ReactDOM.createRoot(document.getElementById('root'));
  


// const element = (
//   <div>
//     <h1>Hello, {formatName(user)}</h1>
//     <h1>Hello, {user.firstName}{user.lastName}</h1>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   </div>
// ); 
//root.render(element);

function tick() {
  const element = (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <h1>Hello, {user.firstName}{user.lastName}</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);