import apiConfig from "../../api/apiConfig";

const newsData = [
  {
    id:1,
    title: "Du lịch Đà Nẵng : 10 điểm du lịch tham quan hấp dẫn nhất",
    slug: "du-lich-nha-trang-10-diem-du-lich-tham-quan-hap-dan-nhat",
    img: `${apiConfig.baseUrl}/images/news/mainImg/1.jpg`,
    dropDesciption:'Toạ lạc trên đảo Hòn Tre với những bãi biển trong xanh quanh năm, Vinpearl Land được biết đến như “thiên đường của miền nhiệt đới”',
    description: [
      {
        title: "1. Vinpearl Land",
        detail:
          "<p>Toạ lạc trên đảo Hòn Tre với những bãi biển trong xanh quanh năm, Vinpearl Land được biết đến như “thiên đường của miền nhiệt đới”. Ngoài những khách sạn sang trọng, những khu vườn tuyệt đẹp, hồ bơi nước ngọt lý tưởng, nơi này còn thu hút du khách với khu trò chơi cảm giác mạnh và những rạp chiếu phim 4D hoành tráng. Vé tham quan đảo bao gồm vé cáp treo và chơi trò chơi: 600.000VND/người lớn; 350.000VND/trẻ em (1,0m – 1,4m). </p> <p>Di chuyển: Bằng cáp treo hoặc ca nô từ trung tâm thành phố Du lịch Nha Trang.</p> <p>Thời gian tham quan, tắm biển và nghỉ ngơi: Tối thiểu 1 ngày.</p>",
        img: `${apiConfig.baseUrl}/images/news/img/1.1.jpg`,
      },
      {
        title: "2. Đảo Hòn Mun",
        detail: "",
        img: `${apiConfig.baseUrl}/images/news/img/1.2.jpg`,
      },
    ],
  },
  {
    id:2,
    title: "Du lịch Vũng Tàu: Cẩm nang từ A đến Z",
    slug: "du-lich-vung-tau-cam-nang-tu-a-den-z",
    img: `${apiConfig.baseUrl}/images/news/mainImg/2.jpg`,
    dropDesciption:'Cách trung tâm thành phố Hồ Chí Minh chỉ khoảng 3 tiếng lái xe, với đường bờ biển trải dài 20km.',
    description: [
      {
        title: "Tổng quan du lịch Vũng Tàu",
        detail:
          "<p>Cách trung tâm thành phố Hồ Chí Minh chỉ khoảng 3 tiếng lái xe, với đường bờ biển trải dài 20km, Vũng Tàu là một trong những điểm đến yêu thích của du khách phía Nam. Nằm nhô hẳn ra khỏi đất liền như một dải đất, từ nơi đây, người ta có thể nhìn biển Đông cả khi trời mọc lẫn lúc hoàng hôn. Bên cạnh những giá trị cảnh quan thiên nhiên, Vũng Tàu còn là miền đất có truyền thống văn hóa lịch sử lâu đời.</p>",
        img: `${apiConfig.baseUrl}/images/news/img/2.1.jpg`,
      },
      {
        title: "Khí hậu",
        detail:
          "<p>Bà Rịa – Vũng Tàu thuộc vùng khí hậu nhiệt đới gió mùa, một năm chia hai mùa rõ rệt: Mùa mưa bắt đầu từ tháng 5 đến tháng 10, thời gian này có gió mùa Tây Nam; mùa khô bắt đầu từ tháng 11 đến tháng 4 năm sau, thời gian này có gió mùa Đông Bắc. Nhiệt độ trung bình hàng năm là 27°C, tháng thấp nhất khoảng 24,8°C, tháng cao nhất khoảng 28,6°C.</p>",
        img: "",
      },
      {
        title: "Thời điểm du lịch Vũng Tàu",
        detail:
          "<p>Ở Vũng Tàu quanh năm là mùa du lịch vì nhiệt độ không khi nào quá lạnh hay quá nóng. Bạn chỉ cần theo dõi bản tin dự báo thời tiết để tránh du lịch Vũng Tàu khi có mưa bão. Ngoài ra, vào ngày cuối tuần và các dịp lễ tết, Vũng Tàu thu hút rất đông khách du lịch, giá cả các dịch vụ đều tăng cao.</p>",
        img: "",
      },
      {
        title: "DI CHUYỂN TỪ TP.HỒ CHÍ MINH ĐẾN VŨNG TÀU",
        detail:
          "<p>Thành phố biển Vũng Tàu cách TP. Hồ Chí Minh chỉ 125km, là địa điểm tuyệt vời cho chuyến du lịch ngắn ngày của bạn. Hiện nay có 3 phương tiện dành cho các chuyến du lịch bụi: tự đi xe máy, đi ô tô khách hoặc tàu cánh ngầm.</p>",
        img: "",
      },
    ],
  },
  {
    id:3,
    title: "Du lịch Phú Quốc: Cẩm nang từ A đến Z",
    slug: "du-lich-phu-quoc-cam-nang-tu-a-den-z",
    img: `${apiConfig.baseUrl}/images/news/mainImg/3.jpg`,
    dropDesciption:'Phú Quốc là quần đảo xinh đẹp nằm sâu trong vùng vịnh Thái Lan, thuộc tỉnh Kiên Giang. Ở vùng biển phía Nam của tổ quốc',
    description: [
      {
        title: "Tổng quan du lịch Phú Quốc",
        detail:
          "<p>Phú Quốc là quần đảo xinh đẹp nằm sâu trong vùng vịnh Thái Lan, thuộc tỉnh Kiên Giang. Ở vùng biển phía Nam của tổ quốc, đảo Ngọc Phú Quốc – hòn đảo lớn nhất của Việt Nam, cũng là đảo lớn nhất trong quần thể 22 đảo tại đây. Nước biển trong vắt, những dòng suối yên bình cùng nhiều hải sản độc đáo chính là lợi thế tuyệt vời của du lịch Phú Quốc.</p>",
        img: `${apiConfig.baseUrl}/images/news/img/3.1.jpg`,
      },
      {
        title: "Lên lịch du lịch Phú Quốc",
        detail:
          "<p> Thời điểm đông khách du lịch nhất là từ tháng 4 đến tháng 9.</p><p>Tuy nhiên, mùa khô (tháng 10 đến tháng 3 năm sau) là thời điểm Phú Quốc đẹp nhất. Nhìn chung bạn có thể yên tâm du lịch Phú Quốc vào bất cứ thời điểm nào trong năm vì nhiệt độ trung bình năm chỉ vào khoảng 28 độ C.</p><p> Quan trọng nhất là theo dõi dự báo thời tiết để tránh những ngày mưa bão.</p>",
        img: "",
      },
    ],
  },
];

export default newsData;
