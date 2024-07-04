// import react for use
import React from 'react';
import ReactDOM from 'react-dom/client';

// import the app data from rootCmp to this file
import { RootCmp } from './root-cmp.jsx'

// import the design to the app
import './assets/styles/main.scss'

// set a root element using react
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the app data from rootCmp
root.render(
    <RootCmp />
);
