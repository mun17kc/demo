import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import products from '~/components/data/products';
import './ProductDetail.scss';
function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Không tìm thấy sản phẩm!</div>;
    }

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleChange = (e) => {
        const value = Math.max(1, Number(e.target.value) || 1);
        setQuantity(value);
    };

    return (
        <div className="product-detail">
            <Header />
            <div className="product-detail-content">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-mass">
                        <h5>
                            Khối lượng: <span>1kg</span>
                        </h5>
                    </div>
                    <h5>Số lượng</h5>
                    <div className="product-quantity">
                        <input type="button" value="-" className="btn-quantity-decrease" onClick={handleDecrease} />
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={quantity} // Giá trị từ state
                            min="1"
                            className="quantity-selector"
                            onChange={handleChange} // Hàm xử lý thay đổi giá trị
                        />
                        <input type="button" value="+" className="btn-quantity-increase" onClick={handleIncrease} />
                    </div>
                    <button className="btn-add-cart">Thêm vào giỏ hàng</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
