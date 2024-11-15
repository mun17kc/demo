import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import { LiaShoppingCartSolid } from 'react-icons/lia';

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src="/images/logo.webp" alt="logo" className="logo" />
            <nav className="header_nav">
                <ul className="header_nav_list">
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
            </nav>
            <div className="header_search">
                <input type="text" className="header_search_input" placeholder="tìm kiếm" />
                <div className="header_search_icon">
                    <i className="IoSearchSharp">
                        <IoSearchSharp />
                    </i>
                </div>
            </div>
            <div className="header_right">
                <div className="header_cart">
                    <div className="header_cart_icon">
                        <i className="LiaShoppingCartSolid">
                            <LiaShoppingCartSolid />
                        </i>
                    </div>
                </div>
                <div className="btn_header">
                    <div className="btn_header_login">
                        <Link to="/Login">
                            <button className="btn_login">Đăng Nhập</button>
                        </Link>
                    </div>
                    <div className="btn_header_register">
                        <Link to="/Register">
                            <button className="btn_register">Đăng Ký</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
