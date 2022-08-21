import React, { useContext, useEffect } from 'react'
import Context from './Context/Context'

import './Assets/Styles/Styles.css';
import HomePage from './Components/HomePage';
import Cart from './Components/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouriteList from './Components/FavouriteList';
import Checkout from './Components/Checkout'
import SuccessMessage from './Components/SuccessMessage';
import Category from './Components/Category';
import Mobile from './Components/Mobile';
import Watches from './Components/Watches';
import Laptops from './Components/Laptops';
import LoginScreen from './Components/LoginScreen';
import { Toaster } from 'react-hot-toast';


function App() {

  const { loginScreen, setLoginScreen } = useContext(Context);

  useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn')
    if (userInfo === '1') {
      setLoginScreen(false);
    }
  }, [setLoginScreen])



  return (
    <>
     <Toaster
                position="top-center"
                reverseOrder={false}
            />
      {loginScreen ? <LoginScreen /> :

        <Router>
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/FavrtList" element={<FavouriteList />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/successMessage" element={<SuccessMessage />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Mobile" element={<Mobile />} />
            <Route path="/Watches" element={<Watches />} />
            <Route path="/Laptops" element={<Laptops />} />
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
