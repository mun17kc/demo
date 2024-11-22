import React, { useState } from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import { useNavigate } from 'react-router-dom'; // Thay useHistory bằng useNavigate
import axios from 'axios';
import './Register.scss';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Mật khẩu không khớp!');
            return;
        }

        try {
            const response = await axios.post('http://localhost/myapi/api.php', {
                action: 'register',
                username,
                password,
            });

            if (response.data.success) {
                setMessage('Đăng ký thành công!');
                // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
                navigate('/Login'); // Sử dụng navigate thay vì history.push
            } else {
                setMessage('Tên đăng nhập đã tồn tại.');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    return (
        <div className="register_wrapper">
            <Header />
            <div className="register_container">
                <div className="image-section">
                    <img src="/images/anh_DHKT.jpg" alt="University" className="background-image" />
                </div>
                <div className="register-section">
                    <form className="register-form" onSubmit={handleRegister}>
                        <img src="/images/logoDAU.png" alt="logo" className="logoregister" />
                        <h2 className="register-title">ĐĂNG KÝ TÀI KHOẢN</h2>
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
                        <div className="form-group">
                            <label htmlFor="confirm-password">Nhập lại mật khẩu</label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Nhập lại mật khẩu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="register-button">
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
