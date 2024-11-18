import React from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
    return (
        <div className="login_wrapper">
            <Header />
            <div className="login-container">
                <div className="image-section">
                    <img src="/images/anh_DHKT.jpg" alt="University" className="background-image" />
                </div>
                <div className="login-section">
                    <form className="login-form">
                        <h2 className="login-title">ĐĂNG NHẬP</h2>
                        <div className="form-group">
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input type="text" id="username" placeholder="username" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" id="password" placeholder="password" required />
                        </div>
                        <Link to="/">
                            <button type="submit" className="login-button">
                                Đăng nhập
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
