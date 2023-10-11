import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ListRender from './ListRender';
import ReactFragment from './03_ReactFragment';
import FruitSong from './03_ReactFragment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ListRender />
    <FruitSong />
  </React.StrictMode>
);


