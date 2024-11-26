import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/DefaultLayout/Header';
import Footer from './components/Layout/DefaultLayout/Footer';
import Home from './pages/Home';
import Product from '~/pages/Product';
import Introduce from '~/pages/Introduce';
import Contact from '~/pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cartpage from './pages/Cartpage';
import { CartProvider } from './components/Cartcontext';
import ProductDetail from './pages/ProductDetail';
function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/introduce" element={<Introduce />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cartpage" element={<Cartpage />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
