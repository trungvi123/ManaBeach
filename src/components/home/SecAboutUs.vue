<template>
  <section class="about-us container d-flex">
    <div class="about-us__info p-2 mr-2">
      <p class="about-us__info__about">VỀ CHÚNG TÔI</p>
      <h2 class="about-us__info__title mb-3">
        Mona Beach - Hơn cả 1 kì nghỉ dưỡng trên biển
      </h2>

      <p class="about-us__info__decription">
        Chúng tôi tự hào nói rằng kể từ khi mở cửa vào năm 98, chúng tôi đã phục
        vụ khách truy cập theo cách tốt nhất có thể. Trong khách sạn Monavi, nơi
        mỗi một trong số 17 phòng của chúng tôi - với cá tính và phong cách
        riêng - sẽ giúp bạn cảm thấy như ở nhà và sống trải nghiệm Monavi trải
        nghiệm như bạn sẽ không bao giờ tưởng tượng được.
      </p>
      <img
        class="about-us__info__img mb-2"
        :src="img2"
        alt=""
      />
      <h4 class="about-us__info__author">RICARD MORGAN - GENERAL MANAGER</h4>
    </div>
    <div class="about-us__img p-2">
      <img class="w-100 h-100" :src="img1" alt="" />
    </div>
  </section>
</template>

<script>
import { img1, img2 } from "@/assets/images/aboutUs";
export default {
  data() {
    return {
      img1,
      img2,
    };
  },
};
</script>

<style>
.test {
  width: 50px;
  height: 50px;
  background-color: black;
  position: fixed;
  top: 50%;
  left: 0;
}

.about-us {
  padding: 3rem;
}
.about-us__info {
  width: 45%;
}

.about-us__info__about,
.about-us__info__decription {
  color: var(--secondary-text-color);
}

.about-us__info__author {
  font-size: 1rem;
  font-weight: 700;
}

.about-us__info__img {
  height: 65px;
}

.about-us__img {
  flex: 1;
}

@media only screen and (max-width: 600px) {
  .about-us {
    flex-direction: column-reverse;
    padding: 15px !important;
  }

  .about-us__info {
    width: 100%;
  }
}
</style>
