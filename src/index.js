import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CartProvider } from './Contexts/cartContext1'
import { WishListProvider } from './Contexts/wishListContext1';
import { FilterProvider } from "./Contexts/filterContext";
import { PriceProvider } from "./Contexts/priceContext";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
     <PriceProvider>
    <WishListProvider>
      <CartProvider>
     <Router>
    <App />
    </Router>
    </CartProvider>
    </WishListProvider>
    </PriceProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
