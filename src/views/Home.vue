<template>
  <div>
    <HelmetVue :title="'Home'"></HelmetVue>
    <HeroSliderVue />
    <SecAboutUsVue />
    <SecRoomVue />
    <SecIntroVue
      :data="{
        head: '5 SAO MICHALIN',
        title: 'Trải nghiệm thú vị từ các đầu bếp của chúng tôi',
        description:
          '5 tiêu chí đánh giá sao Michelin hiện nay gồm chất lượng nguyên liệu thành phần, làm chủ được hương vị và kỹ thuật nấu ăn, cá tính của người đầu bếp. Bên cạnh đó, giá trị đồng tiền bỏ ra và tính nhất quán giữa các lần thưởng thức cũng là tiêu chí quan trọng trong việc đánh giá các nhà hàng của Michelin',
        img: `${img4}`,
        nameBtn: 'Xem thêm',
        link: '/news',
      }"
    />
    <SecBannerVue
      class="mr-4"
      :data="{
        title: 'Ghé thăm biệt thự tuyệt vời của chúng tôi',
        description:
          'Với sự pha trộn dễ chịu của các vật liệu tự nhiên và sang trọng, trang trí và nội thất tạo ra một bầu không khí mời gọi thúc đẩy thư giãn và cảm giác hạnh phúc.',
        img: `${backgrSec1}`,
        nameBtn: 'KHÁM PHÁ PHÒNG KHÁCH SẠN',
        link: '/catalog/tat-ca',
      }"
    />
    <SecBannerVue
      class="ml-4"
      :data="{
        title: 'Vị ngon nguyên bản',
        description:
          'Được trao 14 điểm Gault-Millau, ẩm thực của chúng tôi tập trung vào các nguyên liệu theo mùa, có nguồn gốc địa phương.',
        img: `${backgrSec2}`,
        nameBtn: 'KHÁM PHÁ NHÀ HÀNG',
        link: '/about-us',
      }"
    />
    <SecIntroVue
      :reverse="true"
      :data="{
        head: 'ĐIỂM ĐẾN',
        title: 'Khám phá Thái Bình Dương',
        description:
          'Với hơn 3.400km đường bờ biển, Việt Nam là một trong những quốc gia có ưu thế trong phát triển du lịch biển kết hợp khám phá, nghỉ dưỡng. Vẻ đẹp hoang sơ của những bờ cát trắng tinh, vịnh biển hoang sơ hay những hòn đảo nhiệt đới quanh năm tươi tốt, những rặng san hô lộng lẫy… tất cả đang mời gọi bước chân bạn.',
        img: `${img5}`,
        nameBtn: 'Xem thêm',
        link: '/news',
      }"
    />
    
  </div>
</template>

<script>
import HeroSliderVue from "@/components/HeroSlider.vue";
import SecAboutUsVue from "@/components/home/SecAboutUs.vue";
import SecRoomVue from "@/components/home/SecRoom.vue";
import SecBannerVue from "@/components/home/SecBanner.vue";
import SecIntroVue from "@/components/home/SecIntro.vue";
import HelmetVue from "@/components/Helmet.vue";

import { backgrSec1, backgrSec2, img4, img5 } from "@/assets/images/all";

export default {
  components: {
    HeroSliderVue,
    SecAboutUsVue,
    SecRoomVue,
    SecBannerVue,
    SecIntroVue,
    HelmetVue
  },
  emits: ["headerBackgr"],
  data() {
    return {
      backgrSec1,
      backgrSec2,
      img4,
      img5,
    };
  },
  mounted(){
    this.$emit('headerBackgr','transparent')
  }
};
</script>
