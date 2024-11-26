import React from 'react';
import './Sidebar.scss';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>Danh mục sản phẩm</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="fruit" />
                        <label htmlFor="fruit">Trái Cây </label>
                    </li>
                    <li>
                        <input type="checkbox" id="vegetables" />
                        <label htmlFor="vegetables">Rau Củ </label>
                    </li>
                    <li>
                        <input type="checkbox" id="meat" />
                        <label htmlFor="meat">Thịt </label>
                    </li>
                    <li>
                        <input type="checkbox" id="dry-food" />
                        <label htmlFor="dry-food">Thực Phẩm Khô </label>
                    </li>
                    <li>
                        <input type="checkbox" id="dessert" />
                        <label htmlFor="dessert">Bánh Ngọt </label>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Thương hiệu</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="farmer" />
                        <label htmlFor="farmer">Farmer</label>
                    </li>
                    <li>
                        <input type="checkbox" id="bach-hoa" />
                        <label htmlFor="bach-hoa">Bách Hóa Xanh</label>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Giá sản phẩm</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="below-50k" />
                        <label htmlFor="below-50k">Dưới 50,000đ</label>
                    </li>
                    <li>
                        <input type="checkbox" id="50k-200k" />
                        <label htmlFor="50k-200k">50,000đ - 200,000đ</label>
                    </li>
                    <li>
                        <input type="checkbox" id="200k-400k" />
                        <label htmlFor="200k-400k">200,000đ - 400,000đ</label>
                    </li>
                    <li>
                        <input type="checkbox" id="400k-1m" />
                        <label htmlFor="400k-1m">400,000đ - 1,000,000đ</label>
                    </li>
                    <li>
                        <input type="checkbox" id="above-1m" />
                        <label htmlFor="above-1m">Trên 1,000,000đ</label>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Kích thước</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="size1" />
                        <label htmlFor="size1">1 kg</label>
                    </li>
                    <li>
                        <input type="checkbox" id="size2" />
                        <label htmlFor="size2">1,5 kg</label>
                    </li>
                    <li>
                        <input type="checkbox" id="size3" />
                        <label htmlFor="size3">2 kg</label>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
