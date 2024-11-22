import React, { useState } from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';
import img3 from '../../asset/slider/slider7.webp';
import ProductCard from '~/components/ProductCard/index';
import products from '~/components/data/products';
import './Product.scss';

function Product() {
    // State để lưu trang hiện tại
    const [currentPage, setCurrentPage] = useState(1);

    // Hàm để lấy các sản phẩm theo trang
    const productsPerPage = 8;
    const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

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
