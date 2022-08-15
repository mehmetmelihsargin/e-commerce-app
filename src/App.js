import Home from "./pages/Home";
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Profile from './pages/Profile'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="">
      
      <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
