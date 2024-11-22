import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Product from '~/pages/Product';
import Introduce from '~/pages/Introduce';
import Contact from '~/pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cartpage from './pages/Cartpage';
import ProductDetail from './pages/ProductDetail';
function App() {
    const [cartItems, setCartItems] = useState([]); // State to hold cart items

    const addToCart = (product) => {
        setCartItems([...cartItems, product]); // Add product to cart
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/introduce" element={<Introduce />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cartpage" element={<Cartpage cartItems={cartItems} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
