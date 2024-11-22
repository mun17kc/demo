const products = [
    {
        id: 1,
        name: 'Bắp mỹ',
        image: '/images/anh_bap.webp',
        price: '35,000 đ',
        description:
            'Bắp Mỹ Hạt được trồng và phát triển rộng ở khắp nơi trên thế giớiBắp Mỹ còn có các tên gọi khác là ngô ngọt hay bắp ngọt. Ở Châu Mỹ thì đây là cây lương thực được gieo trồng nhiều nhất và đã có các giống bắp lai ghép cho năng suất cực kỳ cao. Khoảng những năm 1990, loại bắp này đã du nhập vào nước ta rồi sau đó phát triển rộng rãi đến ngày hôm nay.',
    },
    {
        id: 2,
        name: 'Bí đỏ',
        image: '/images/anh_bi_do.webp',
        price: '55,000 đ',
        description:
            'Bí đỏ (bí ngô) là một loại bí thuộc cùng họ thực vật với dưa chuột và dưa. Về mặt kỹ thuật, đây là một loại trái cây vì nó chứa hạt giống. Nhưng về mặt dinh dưỡng, nó giống như một loại rau. Bí ngô thường có hình tròn và màu cam, mặc dù kích thước, hình dạng và màu sắc có thể thay đổi tùy theo giống. Chúng có vỏ ngoài dày, mịn và có gân. Bên trong rỗng, ngoại trừ các hạt màu ngà được phủ bằng thịt chuỗi.',
    },
    {
        id: 3,
        name: 'Bí xanh',
        image: '/images/anh_bi_xanh.webp',
        price: '40,000 đ',
        description:
            'Bí xanh thuộc họ bầu bí, thân dây leo, thường trồng giàn, được dùng như một loại rau trong các bữa ăn. Lá bí xanh hình bầu, bề ngang khoảng 10 - 20cm, có lông giáp. Hoa bí xanh mọc đơn, màu vàng, Quả bí xanh khi còn non màu xanh lục, vỏ phủ lớp lông tơ. Dần dần quả ngả sang màu nhạt dần, có lốm đốm trắng cùng với lớp phấn sáp. Khi già, quả bí xanh có thể dài tới 2m, bên trong có nhiều hạt. ',
    },
    {
        id: 4,
        name: 'Bưởi da xanh',
        image: '/images/anh_buoi_da_xanh.webp',
        price: '120,000 đ',
        description:
            'Bưởi da xanh là một giống bưởi có nguồn gốc đầu tiên ở xã Thanh Tân, huyện Mỏ Cày Bắc, tỉnh Bến Tre. Trái bưởi da xanh có dạng hình cầu, nặng trung bình từ 1,2 – 2,5 kg/trái; vỏ có màu xanh đến xanh hơi vàng khi chín, dễ lột và khá mỏng (14–18 mm); tép bưởi màu hồng đỏ, bó chặt và dễ tách khỏi vách múi; vị ngọt không chua (độ brix: 9,5–12%); mùi thơm; không hạt đến khá nhiều hạt (có thể có đến 30 hạt/trái); tỷ lệ thịt/trái >55%',
    },
    {
        id: 5,
        name: 'Cà chua',
        image: '/images/anh_ca-chua.webp',
        price: '25,000 đ',
        description:
            'Cà chua thuộc họ Cà, các loại cây trong họ này thường phát triển từ 1 đến 3 mét chiều cao, có những cây thân mềm bò trên mặt đất hoặc dây leo trên thân cây khác, ví dụ nho. Họ cây này là một loại cây lâu năm trong môi trường sống bản địa của nó, nhưng nay nó được trồng như một loại cây hàng năm ở các vùng khí hậu ôn đới và nhiệt đới.',
    },
    {
        id: 6,
        name: 'Cà rốt',
        image: '/images/anh_ca_rot.webp',
        price: '32,000 đ',
        description:
            'Cà rốt là loại củ chứa lượng natri vừa đủ để duy trì huyết áp ở mức hợp lý trong cơ thể. Đối với những người tiêu thụ cà rốt thường xuyên sẽ có tỷ lệ duy trì huyết áp ở mức khỏe mạnh cao hơn so với mức trung bình.',
    },
    {
        id: 7,
        name: 'Cà tím',
        image: '/images/anh_ca_tim.webp',
        price: '20,000 đ',
        description:
            'Cà tím được trồng rộng rãi ở Việt Nam, chiếm 0,4% thị trường rau quả, với kim ngạch xuất khẩu hơn 6 triệu USD. Ngoài giá trị kinh tế, cà tím còn mang lại nhiều chất dinh dưỡng. Cùng tìm hiểu xem ăn cà tím có tốt không và nó tốt cho sức khỏe như thế nào nhé.',
    },
    {
        id: 8,
        name: 'Đậu bắp',
        image: '/images/anh_dau_bap.webp',
        price: '22,000 đ',
        description:
            'Đậu bắp hay còn được gọi bằng các tên khác như mướp tây, bông vàng, bắp chà hay thảo cà phê,... có nguồn gốc từ Tây Phi. Nhờ vào khả năng chịu nóng bức và khô hạn rất tốt nên chủ yếu đậu bắp được trồng ở các vùng ôn đới hay nhiệt đới, được trồng nhiều nhất là ở miền Nam Hoa Kỳ. Đậu bắp cũng được trồng ở nước ta nhưng chủ yếu vẫn là ở các tỉnh miền Nam có khí hậu nóng bức.',
    },
    {
        id: 9,
        name: 'Dâu tây',
        image: '/images/anh_dau-tay.webp',
        price: '90,000 đ',
        description:
            'Dâu tây (Fragaria ananassa) có nguồn gốc từ châu Âu vào thế kỷ 18, có màu đỏ tươi, vị ngon ngọt và thơm. Nó chính là giống lai của hai loại dâu tây tự nhiên đến từ Bắc Mỹ và Chile. Được trồng đầu tiên ở Rome cổ đại, dâu tây hiện là loại quả mọng phổ biến nhất trên thế giới. Ở Pháp, chúng thậm chí được coi là một loại thuốc kích thích tình dục. Chúng được ví như những viên đá quý màu đỏ này rất tốt cho trái tim của bạn theo những cách khác nhau.',
    },
    {
        id: 10,
        name: 'Dưa lưới',
        image: '/images/anh_dua_luoi.webp',
        price: '100,000 đ',
        description:
            'Dưa lưới ruột xanh thuộc họ bầu bí, tên khoa học là Cucumis melo. Dưa lưới ruột xanh có dáng tròn hoặc dài tùy từng giống, mỗi quả nặng từ 1.5 - 3.5kg, lớp vỏ bên ngoài có màu xanh đan xen với các đường vân nổi màu trắng như có một lớp lưới bọc bên ngoài. Phần ruột bên trong của dưa có màu xanh nhạt, vị ngọt thanh và giòn.',
    },
    {
        id: 11,
        name: 'Gừng',
        image: '/images/anh_gung.webp',
        price: '18,000 đ',
        description:
            'Gừng là thực phẩm vô cùng quen thuộc trong mỗi gian bếp của người Việt. Trong thành phần của gừng có chứa những hợp chất quan trọng giúp cơ thể khỏe mạnh, chống lại những vi khuẩn gây bệnh từ bên ngoài môi trường. Vậy ăn gừng có tốt không? Bài viết dưới đây sẽ chỉ ra những lợi ích sức khỏe của gừng mà bạn không ngờ tới.',
    },
    {
        id: 12,
        name: 'Nho tím',
        image: '/images/anh_nho_tim.webp',
        price: '140,000 đ',
        description:
            'Nho là một loại trái cây giàu dinh dưỡng gồm các chất chống oxy hóa, vitamin và khoáng chất. Chính vì thế mà quả nho đem lại nhiều lợi ích cho sức khỏe con người. Cùng khám phá các thành phần dinh dưỡng có trong quả nhỏ và 13 lợi ích sức khỏe của việc ăn nho mà có thể bạn chưa biết.',
    },
    {
        id: 13,
        name: 'Ổi xanh',
        image: '/images/anh_oi_xanh.webp',
        price: '50,000 đ',
        description:
            'Ổi không chỉ là trái cây sạch ăn vặt khoái khẩu của nhiều người mà nó còn có tác dụng rất lớn đối với sức khỏe con người. Nếu như ổi dầm là món ăn tuyệt vời với các bạn trẻ thì gỏi ổi, ổi dồn thịt lại là một món ăn trứ danh của một số vùng miền. Để biết các công thức chế biến ổi ngon nhất,',
    },
    {
        id: 14,
        name: 'Ớt vàng',
        image: '/images/anh_ot_vang.webp',
        price: '28,000 đ',
        description:
            'Một trong những loại ớt đem lại hiệu quả kinh tế cao nhất là ớt sừng vàng. Người ta không những dùng chúng để ăn mà còn trồng như một loại cây cảnh bởi mỗi giai đoạn của quả có một màu đặc trưng khiến cho cây ớt sặc sỡ màu sắc',
    },
    {
        id: 15,
        name: 'Thịt bò',
        image: '/images/anh_thit_bo.webp',
        price: '140,000 đ',
        description:
            'Thịt bò là thịt của con bò (thông dụng là loại bò thịt). Đây là thực phẩm gia súc phổ biến trên thế giới, cùng với thịt lợn, được chế biến và sử dụng theo nhiều cách, trong nhiều nền văn hoá và tôn giáo khác nhau, cùng với thịt lợn và thịt gà, thịt bò là một trong những loại thịt được con người sử dụng nhiều nhất.',
    },
    {
        id: 16,
        name: 'Thịt heo',
        image: '/images/anh_thit_heo.webp',
        price: '190,000 đ',
        description:
            'Thịt ba rọi là khúc thịt lợn được nhiều người ưa chuộng bởi có tỷ lệ mỡ nạc hài hòa và dễ chế biến thành nhiều món ăn ngon khác nhau như rim, nướng, kho, luộc, hầm hay hun khói, thịt quay... Tuy nhiên, để mua được thịt ba rọi ngon, an toàn cho sức khỏe không phải ai cũng nắm rõ.',
    },
    {
        id: 17,
        name: 'Tôm hùm',
        image: '/images/anh_tom_hum.webp',
        price: '1,900,000 đ',
        description:
            'Tôm hùm Alaska sinh sống tại vùng biển sâu của Canada phía bắc nước Mỹ Tôm này chỉ sống tại những bãi đá ngầm, nước trong xanh, cực lạnh nên thịt tôm trắng, dai, có vị ngọt, đậm và thơm, có độ an toàn tuyệt đối. Sản phẩm tôm hùm Alaska chín như hình size khoảng 400gr - 450gr/ con , shop lựa kĩ từng con cẩn thận trước khi xuất bán ',
    },
    {
        id: 18,
        name: 'Nấm',
        image: '/images/anh-nam.webp',
        price: '110,000 đ',
        description:
            'Nấm ngọc cẩu mọc ở đâu?Trong điều kiện tự nhiên, nó phát triển ở các vùng thảo nguyên và rừng-thảo nguyên của Nga và Ukraine, cũng như ở Bắc Caucasus, Nhật Bản, Trung Quốc. Nấm mọc trên tàn tích của cây rụng lá, và được tìm thấy trên cây du. Họ thích những nơi vắng vẻ khó tiếp cận: rừng phong và sồi chết, bụi rậm rậm rạp, chặt hạ, chắn gió.Có quả từ tháng 5 đến tháng 9,',
    },
];

export default products;
