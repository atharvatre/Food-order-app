import Header from "./components/Layout/Header";
import React,{useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {

    const[cartIsShown,setCaertIsShown]=useState(false)
    const showCartHandler=()=>{
        setCaertIsShown(true)
    }
    const hideCartHandler=()=>{
      setCaertIsShown(false)
    }
  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>

      <main>
         <Meals/>
      </main>
    </CartProvider>
  )
}

export default App;
