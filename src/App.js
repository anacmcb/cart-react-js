import Cart from "./components/cart";
import Products from "./components/product";
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Products />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="/*" element={<NoMatch />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


function NoMatch() {
  const url = '/';
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <Link to={url}>Back</Link>
    </div>
  );
}

export default App;
