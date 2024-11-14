import React, { useState } from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';
import img3 from '../../asset/slider/slider7.webp';
import './Product.scss';
import ProductCard from '~/components/ProductCard/index';

const sanphams = [
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
    { name: 'Gừng', image: '/images/anh_gung.webp', price: '18,000 đ' },
    { name: 'Nho tím', image: '/images/anh_nho_tim.webp', price: '140,000 đ' },
    { name: 'ổi xanh', image: '/images/anh_oi_xanh.webp', price: '50,000 đ' },
    { name: 'Ớt Vàng', image: '/images/anh_ot_vang.webp', price: '28,000 đ' },
    { name: 'Thịt bò', image: '/images/anh_thit_bo.webp', price: '140,000 đ' },
    { name: 'Thịt heo', image: '/images/anh_thit_heo.webp', price: '190,000 đ' },
    { name: 'Tôm hùm', image: '/images/anh_tom_hum.webp', price: '1,900,000 đ' },
    { name: 'Nấm', image: '/images/anh-nam.webp', price: '110,000 đ' },
];

function Product() {
    // State để lưu trang hiện tại
    const [currentPage, setCurrentPage] = useState(1);

    // Hàm để lấy các sản phẩm theo trang
    const productsPerPage = 8;
    const currentProducts = sanphams.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    // Hàm thay đổi trang khi click vào nút
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="main">
            <Header />
            <div className="product_content">
                <Sidebar />
                <div className="product_content_slide">
                    <img src={img3} alt="" className="product_anh1" />
                    <h2 className="content_title">TẤT CẢ SẢN PHẨM</h2>
                    <div className="sanpham">
                        {currentProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <div className="product_page">
                        {/* Nút trang 1 */}
                        <button
                            className={`btn_product ${currentPage === 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                        {/* Nút trang 2 */}
                        <button
                            className={`btn_product ${currentPage === 2 ? 'active' : ''}`}
                            onClick={() => handlePageChange(2)}
                        >
                            2
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
