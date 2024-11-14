import React from 'react';
import './Login.scss';

function Login() {
    return (
        <div className="login">
            <form>
                <h2 className="login_tilte">Đăng Nhập</h2>

                <div className="form_group">
                    <label>Tên đăng nhập</label>
                    <input type="text" placeholder="Tên đăng nhập" required />
                </div>
                <div className="form_group">
                    <label>Mật khẩu</label>
                    <input type="password" placeholder="password" required />
                </div>
                <button className="btn_login">Đăng Nhập</button>
            </form>
        </div>
    );
}

export default Login;
