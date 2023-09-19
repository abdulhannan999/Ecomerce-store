import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './assets/Components/Navbar.jsx'
import { BrowserRouter  } from 'react-router-dom'
// import Footer from './Footer.jsx'
// import { CartProvider } from './assets/Components/Cartcontext.jsx'
// src/index.js or src/App.js
import { CartProvider } from './assets/Components/CartContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
   <CartProvider>
    <Navbar/>
 
  <App />

    
    </CartProvider>
   
    </BrowserRouter>
 
)
