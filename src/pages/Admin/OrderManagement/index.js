import React, { useEffect, useState } from 'react';
import NavbarAdmin from '~/components/Layout/DefaultLayout/navbar-admin';
import SidebarAdmin from '~/components/Layout/DefaultLayout/Sidebar-admin';
import './OrderManagement.scss';

function OrderManagement() {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({
        recipientName: '',
        phoneNumber: '',
        address: '',
        totalAmount: '',
        paymentTime: '',
        status: 'pending',
    });
    const [editIndex, setEditIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('payments')) || [];
        setOrders(savedOrders);
    }, []);

    const handleApproveOrder = (index) => {
        const updatedOrders = [...orders];
        updatedOrders[index].status = 'approved'; // Cập nhật trạng thái đơn hàng
        setOrders(updatedOrders);
        localStorage.setItem('payments', JSON.stringify(updatedOrders)); // Lưu lại vào localStorage
    };

    const handleAddOrder = () => {
        const updatedOrders = [
            ...orders,
            { ...newOrder, orderId: `ORD-${Date.now()}`, paymentTime: new Date().toLocaleString() },
        ];
        setOrders(updatedOrders);
        localStorage.setItem('payments', JSON.stringify(updatedOrders));
        setNewOrder({
            recipientName: '',
            phoneNumber: '',
            address: '',
            totalAmount: '',
            paymentTime: '',
            status: 'pending',
        }); // Reset form
    };

    const handleEditOrder = (index) => {
        setNewOrder(orders[index]);
        setEditIndex(index);
        setIsEditing(true);
    };

    const handleUpdateOrder = () => {
        const updatedOrders = [...orders];
        updatedOrders[editIndex] = { ...newOrder, paymentTime: new Date().toLocaleString() }; // Cập nhật thời gian thanh toán
        setOrders(updatedOrders);
        localStorage.setItem('payments', JSON.stringify(updatedOrders));
        setNewOrder({
            recipientName: '',
            phoneNumber: '',
            address: '',
            totalAmount: '',
            paymentTime: '',
            status: 'pending',
        }); // Reset form
        setIsEditing(false);
        setEditIndex(null);
    };

    const handleDeleteOrder = (index) => {
        const updatedOrders = orders.filter((_, i) => i !== index);
        setOrders(updatedOrders);
        localStorage.setItem('payments', JSON.stringify(updatedOrders));
    };

    return (
        <div className="order-management">
            <NavbarAdmin />

            <div className="oder-content">
                <SidebarAdmin />
                <div className="oder-table">
                    <h2>Quản lý đơn hàng</h2>

                    {isEditing ? (
                        <div>
                            <h3>{editIndex !== null ? 'Sửa đơn hàng' : 'Thêm đơn hàng'}</h3>
                            <input
                                type="text"
                                placeholder="Tên người nhận"
                                value={newOrder.recipientName}
                                onChange={(e) => setNewOrder({ ...newOrder, recipientName: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Số điện thoại"
                                value={newOrder.phoneNumber}
                                onChange={(e) => setNewOrder({ ...newOrder, phoneNumber: e.target.value })}
                            />
                            <textarea
                                placeholder="Địa chỉ"
                                value={newOrder.address}
                                onChange={(e) => setNewOrder({ ...newOrder, address: e.target.value })}
                            ></textarea>
                            <input
                                type="number"
                                placeholder="Tổng số tiền"
                                value={newOrder.totalAmount}
                                onChange={(e) => setNewOrder({ ...newOrder, totalAmount: e.target.value })}
                            />
                            <button onClick={isEditing ? handleUpdateOrder : handleAddOrder}>
                                {isEditing ? 'Cập nhật' : 'Thêm'}
                            </button>
                        </div>
                    ) : null}
                    {orders.length === 0 ? (
                        <p>Chưa có đơn hàng nào.</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Trạng thái đơn</th>
                                    <th>Tên người nhận</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Tổng số tiền</th>
                                    <th>Thời gian đặt đơn</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.orderId}</td>
                                        <td>{order.recipientName}</td>
                                        <td>{order.phoneNumber}</td>
                                        <td>{order.address}</td>
                                        <td>{order.totalAmount}</td>
                                        <td>{order.paymentTime}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            {order.status === 'pending' && (
                                                <button onClick={() => handleApproveOrder(index)}>Duyệt đơn</button>
                                            )}
                                            <button onClick={() => handleEditOrder(index)}>Sửa</button>
                                            <button onClick={() => handleDeleteOrder(index)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OrderManagement;
