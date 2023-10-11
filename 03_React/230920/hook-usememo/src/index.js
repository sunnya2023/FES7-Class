import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App4 from "./App4";
import { DarkMode } from './DarkMode';
import ClassLifeCycle from './ClassLifeCycle';
import Wrap from './wrap';
import LayoutEffecct from './LayoutEffect';
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LayoutEffecct />);
