import React from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import { Link } from 'react-router-dom';
import './Register.scss';
function Register() {
    return (
        <div className="register_wrapper">
            <Header />
            <div className="register_container">
                <div className="image-section">
                    <img src="/images/anh_DHKT.jpg" alt="University" className="background-image" />
                </div>
                <div className="register-section">
                    <form className="register-form">
                        <h2 className="register-title">ĐĂNG KÝ TÀI KHOẢN</h2>

                        <div className="form-group">
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input type="text" id="username" placeholder="username" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" id="password" placeholder="password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Nhập lại mật khẩu</label>
                            <input type="password" id="password" placeholder="password" required />
                        </div>
                        <Link to="/Login">
                            <button type="submit" className="register-button">
                                Đăng ký
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
