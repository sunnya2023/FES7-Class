import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import Pet from './Pet.jsx';
// import App3 from "./App3";
import App4 from './App4.js';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App4 />);
