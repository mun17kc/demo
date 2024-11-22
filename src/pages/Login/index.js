import React, { useState } from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import { useNavigate } from 'react-router-dom'; // Thay useHistory bằng useNavigate
import axios from 'axios';
import './Login.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/myapi/api.php', {
                action: 'login',
                username,
                password,
            });

            if (response.data.success) {
                setMessage('Đăng nhập thành công!');
                // Chuyển hướng đến trang chính sau khi đăng nhập thành công
                navigate('/'); // Sử dụng navigate thay vì history.push
            } else {
                setMessage('Tên đăng nhập hoặc mật khẩu không đúng.');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    return (
        <div className="login_wrapper">
            <Header />
            <div className="login-container">
                <div className="image-section">
                    <img src="/images/anh_DHKT.jpg" alt="University" className="background-image" />
                </div>
                <div className="login-section">
                    <form className="login-form" onSubmit={handleLogin}>
                        <img src="/images/logoDAU.png" alt="logo" className="logoLogin" />
                        <h2 className="login-title">ĐĂNG NHẬP</h2>
                        {message && <p className="message">{message}</p>} {/* Hiển thị thông báo */}
                        <div className="form-group">
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
