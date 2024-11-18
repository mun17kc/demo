import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
function Footer() {
    return (
        <div className="container">
            <footer className="footer">
                <div className="footer_sub">
                    <div className="footer_title">
                        <h4>Giới Thiệu</h4>
                    </div>
                    <div className="footer_info">
                        <p>
                            Thực phẩm Organic Wandave chuyên cung cấp các thực phẩm tươi sạch, giá cả phải chằng. Đạt
                            tiêu chuẩn chất lượng.
                        </p>
                        <ul>
                            <li>Địa chỉ: 566 Núi Thành - Hòa Cường Nam - Hải Châu - TP Đà Nẵng</li>
                            <li>SĐT: 0335661795</li>
                            <li>Gmail: hau_2251220056@dau.edu.vn</li>
                        </ul>
                    </div>
                </div>
                <div className="footer_sub">
                    <div className="footer_title">
                        <h4>Liên Kết</h4>
                    </div>
                    <div className="footer_info">
                        <ul>
                            <li>
                                <Link to="/">Trang Chủ</Link>
                            </li>
                            <li>
                                <Link to="/product">Sản Phẩm</Link>
                            </li>
                            <li>
                                <Link to="/introduce">Giới Thiệu</Link>
                            </li>
                            <li>
                                <Link to="/contact">Liên Hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_sub">
                    <div className="footer_title">
                        <h4>Chính Sách</h4>
                    </div>
                    <div className="footer_info">
                        <ul>
                            <li>
                                <Link to="">Chính sách thanh toán</Link>
                            </li>
                            <li>
                                <Link to="">Chính sách đổi trả</Link>
                            </li>
                            <li>
                                <Link to="">Chính sách bảo mật</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="footer_logo">
                <img src="/images/logo.webp" alt="logo" className="logo logo_footer" />
                <p>© Copyright 2024 By Wandave. Powere by Haravan</p>
            </div>
        </div>
    );
}

export default Footer;
