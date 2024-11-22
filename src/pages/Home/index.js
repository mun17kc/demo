import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import ProductCard from '~/components/ProductCard/index';
import products from '~/components/data/products';
import img1 from '../../asset/slider/slider2.webp';
import img2 from '../../asset/slider/slider3.webp';
import './Home.scss';

function Home() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="slider"></div>
                <div className="anh_nen">
                    <div className="anh_nen_1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="anh_nen_2">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
                <div className="product">
                    {products.slice(0, 10).map((product, index) => (
                        <ProductCard key={index} product={product} addToCart={addToCart} />
                    ))}
                </div>
                <div className="slider_2"></div>
                <h2>BEST SELLER</h2>
                <div className="product">
                    {products.slice(0, 5).map((product, index) => (
                        <ProductCard key={index} product={product} addToCart={addToCart} />
                    ))}
                </div>
                <div className="slider_3">
                    <p className="title">Giảm giá cuối mùa lên tới 30%</p>
                    <Link to="/product" className="button_sub">
                        Xem ngay
                    </Link>
                </div>
                <h2>SẢN PHẨM MỚI</h2>
                {products.slice(0, 10).map((product, index) => (
                    <ProductCard key={index} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
