<template>
  <section class="d-flex section sec-room">
    <div class="sec-room__left">
      <span class="sec-room__left__title">Luxury Room</span>
      <p>TỪ 800K/ĐÊM</p>
      <ul class="sec-room__left__list mt-5">
        <li class="d-flex justify-content-between mb-4">
          <span class="mr-2">Giường:</span>
          <span>King Bed</span>
        </li>
        <li class="d-flex justify-content-between mb-4">
          <span class="mr-2">Dành cho:</span>
          <span>3 người lớn + 1 trẻ em</span>
        </li>
        <li class="d-flex justify-content-between mb-4">
          <span class="mr-2">Kích thước:</span>
          <span>55m&sup2;</span>
        </li>
        <li class="d-flex justify-content-between mb-4">
          <span class="mr-2">View:</span>
          <span>Cạnh bờ biển</span>
        </li>
        <li class="d-flex justify-content-between mb-4">
          <span class="mr-2">Phù hợp:</span>
          <span>Gia đình và công việc</span>
        </li>
      </ul>
      <button class="mt-5 outlineBtn">
        <span>Xem chi tiết</span><BIconChevronRight class="icon-btn" />
      </button>
    </div>
    <div class="sec-room__right d-flex h-100">
      <div class="sec-room__right__img sec-room__right__img1">
        <img class="img-fluid h-100 w-100" :src="img1" alt="img" />
      </div>
      <div class="sec-room__right__img sec-room__right__img2">
        <img class="w-100 h-100" :src="img2" alt="img2" />
      </div>
      <div class="sec-room__right__img sec-room__right__img3">
        <img class="w-100 h-100" :src="img3" alt="img3" />
      </div>
    </div>
  </section>
</template>

<script>
import { img1, img2, img3, img4 } from "@/assets/images/all";
import { BIconChevronRight } from "bootstrap-icons-vue";

export default {
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
    };
  },
  components: {
    BIconChevronRight,
  },
};
</script>

<style>
/* Section Room */
.sec-room {
  height: 80vh;
}

.sec-room__left {
  flex: 1;
  padding: 3rem;
  background-color: var(--secondary-backgr-color);
  color: var(--Fourth-text-color);
}

.sec-room__left__title {
  color: var(--third-text-color);
  font-size: 2.5rem;
  font-weight: 700;
}

.sec-room__right {
  flex: 3;
  overflow: hidden;
}

.sec-room__right__img {
  flex: 1;
}

@media only screen and (max-width: 1024px) {
  .sec-room__left {
    padding: 1.5rem;
  }
  .sec-room__left__list li {
    justify-content: start !important;
  }

  .sec-room__right {
    flex: 2;
  }

  .sec-room__right__img3 {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .sec-room {
    flex-direction: column-reverse;
  }

  .sec-room__right__img3,
  .sec-room__right__img2 {
    display: none;
  }
}
</style>
