import React from 'react';

import img from '../../asset/slider/slider8.jpg';
import img1 from '../../asset/slider/slider9.jpg';
import './Introduce.scss';
function Introduce() {
    return (
        <div className="intro_wrapper">
            <div className="intro_container">
                <div className="intro_left">
                    <img src={img1} alt="banner" className="left_intro_img"></img>
                </div>
                <div className="intro_right">
                    <img src={img} alt="banner" className="right_intro_img"></img>
                    <h2 className="intro_tilte">Giới thiệu</h2>
                    <div className="lorem_intro">
                        <p className="p_intro">
                            WandaVe tự hào là thương hiệu thực phẩm chất lượng cao, luôn cam kết mang đến cho bạn những
                            sản phẩm tươi ngon, an toàn và dinh dưỡng. Chúng tôi hiểu rằng mỗi bữa ăn không chỉ đơn
                            thuần là nguồn cung cấp năng lượng mà còn là cách để bạn chăm sóc sức khỏe và yêu thương bản
                            thân cùng gia đình.
                        </p>
                        <p className="p_intro">
                            Tại WandaVe, bạn sẽ tìm thấy đa dạng các loại thực phẩm từ rau củ sạch, thực phẩm hữu cơ,
                            đến các món ăn chế biến sẵn tiện lợi, được chọn lọc kỹ càng từ những nguồn cung ứng đáng tin
                            cậy. Chúng tôi luôn nỗ lực nâng cao chất lượng sản phẩm và dịch vụ, giúp bạn tận hưởng trải
                            nghiệm mua sắm dễ dàng, tiện lợi và nhanh chóng.
                        </p>
                        <p className="p_intro">
                            Hãy để WandaVe đồng hành cùng bạn trong hành trình chăm sóc sức khỏe toàn diện và mang đến
                            bữa ăn ngon lành mỗi ngày!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
