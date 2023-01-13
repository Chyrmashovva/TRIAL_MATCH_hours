import {useState} from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Skin from './components/Skin/Skin';
import Reviews from './components/Reviews/Reviews';
//import Questions from './components/Questions/Questions';
import Models from './components/Models/Models';
import './style.css';


function App() {
  const [cart, setCart]= useState( localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] );
  const [cartCount, setCartCount] = useState(0)
  const addCart = (obj) => {
    setCartCount(cartCount + 1)
    const idx = cart.findIndex((item) => {
      return item.id === obj.id
    });
    if(idx == -1){
      setCart([{
        ...obj, count: 1
      }, ...cart])
    }else{
      cart[idx].count++;
      setCart([...cart])
    }
  }

  
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/reviews' element={<Reviews/>} />
      <Route path='/models' element={<Models  addCart={addCart} cartCount={cartCount} />} />
      {/* <Route path='/questions' element={<Questions/>} /> */}
      <Route path='/cart' element={<Cart cart = {cart} setCart={setCart} cartCount={cartCount} setCartCount={setCartCount} />} />
      <Route path='/skin/:id' element={<Skin addCart={addCart} cart={cart} setCart={setCart}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
