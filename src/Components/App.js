import React from 'react';
import '../Styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import Products from './Products';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
