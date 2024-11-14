import React from 'react';
import { Link } from 'react-router-dom';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import ProductCard from '~/components/ProductCard/index';
import img1 from '../../asset/slider/slider2.webp';
import img2 from '../../asset/slider/slider3.webp';
import './Home.scss';

const products = [
    { name: 'Bắp mỹ', image: '/images/anh_bap.webp', price: '35,000 đ' },
    { name: 'Bí đỏ', image: '/images/anh_bi_do.webp', price: '55,000 đ' },
    { name: 'Bí xanh', image: '/images/anh_bi_xanh.webp', price: '40,000 đ' },
    { name: 'Bưởi da xanh', image: '/images/anh_buoi_da_xanh.webp', price: '120,000 đ' },
    { name: 'Cà chua', image: '/images/anh_ca-chua.webp', price: '25,000 đ' },
    { name: 'Cà rốt', image: '/images/anh_ca_rot.webp', price: '32,000 đ' },
    { name: 'Cà tím', image: '/images/anh_ca_tim.webp', price: '20,000 đ' },
    { name: 'Đậu bắp', image: '/images/anh_dau_bap.webp', price: '22,000 đ' },
    { name: 'Dâu tây', image: '/images/anh_dau-tay.webp', price: '90,000 đ' },
    { name: 'Dưa lưới', image: '/images/anh_dua_luoi.webp', price: '100,000 đ' },
];
function Home() {
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
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="slider_2"></div>
                <h2>BEST SELLER</h2>
                <div className="product">
                    {products.slice(0, 5).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="slider_3">
                    <p className="title">Giảm giá cuối mùa lên tới 30%</p>
                    <Link to="/product" className="button_sub">
                        Xem ngay
                    </Link>
                </div>
                <h2>SẢN PHẨM MỚI</h2>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
