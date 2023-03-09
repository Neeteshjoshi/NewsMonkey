import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const  App = () => {
  const  [pageSize, setPageSize] = useState(6);
    return (
      <div>
         <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={ <News key="general" pageSize={pageSize} country="us" category="General"/>} />
        <Route exact path="/general" element={ <News key="general" pageSize={pageSize} country="us" category="General"/>} />
        <Route exact path="/business" element={ <News key="business" pageSize={pageSize} country="us" category="Business"/>} />
        <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={pageSize} country="us" category="Entertainment"/>} />
        <Route exact path="/health" element={ <News key="health" pageSize={pageSize} country="us" category="Health"/>} />
        <Route exact path="/science" element={ <News key="science" pageSize={pageSize} country="us" category="Science"/>} />
        <Route exact path="/sports" element={ <News key="sports" pageSize={pageSize} country="us" category="Sports"/>} />
        <Route exact path="/technology" element={ <News key="technology" pageSize={pageSize} country="us" category="Technology"/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
