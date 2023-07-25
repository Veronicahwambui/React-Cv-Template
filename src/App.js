import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'

import 'materialize-css/dist/js/materialize.min.js'

import { Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Educations from './components/Educations';
import Experiences from './components/Experiences';
import Portfolios from './components/Portfolios';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
   <Routes>


<>


  <Route exact path="/" element={<Home/>} />





      <Route path="/skills" element={<Skills/>} />


      <Route path="/educations" element={<Educations/>} />


      <Route path="/experiences" element={<Experiences/>} />


      <Route path="/portfolios" element={<Portfolios/>} />





</>


</Routes>


    </div>
  );
}

export default App;
