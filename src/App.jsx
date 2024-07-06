import Header from "./Components/Header";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from "./Pages/Wishlist";
import Footer from "./Components/Footer";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}   />
        <Route path='/CART' element={<Cart/>}   />
        <Route path='/Wishlist' element={<Wishlist/>}   />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
