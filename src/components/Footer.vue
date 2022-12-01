<template>
  <footer class="footer">
      <img class="waveFooter w-100" :src="waveFooter" alt="" />
    <div class="footer-content">
    <div class="row m-0 justify-content-center">
      <div class="col col-lg-2 col-md-5 col-sm-5 footer-items">
        <h6>ĐỊA CHỈ</h6>
        <p><strong>Mana Beach</strong></p>
        <p>Đại Học Cần Thơ</p>
      </div>
      <div class="col col-lg-2 col-md-5 col-sm-5 footer-items">
        <h6>ĐẶT CHỖ</h6>
        <div>
          <a
            class="d-block text-white text-decoration-none"
            href="tel:0999999999"
            >Tel: 09 9999 9999</a
          >
          <a
            class="d-block text-white text-decoration-none"
            href="mailto:vib1910023@student.ctu.edu.vn"
            >Email: vib1910023@student.ctu.edu.vn</a
          >
        </div>
      </div>
      <div class="col col-lg-2 col-md-5 col-sm-5 footer-items">
        <h6>NHẬN TIN</h6>
        <input
          class="mt-2 email-input"
          type="text"
          placeholder="Email của bạn"
        />
        <button class="d-block mt-5 outlineBtn"><span>Đăng ký</span></button>
      </div>
      <div class="col col-lg-2 col-md-5 col-sm-5 footer-items">
        <h6>GIẢI THƯỞNG</h6>
        <div class="">
          <img class="prizeImg1" :src="tripadvisor" alt="" />
          <img class="prizeImg2" :src="asean_award" alt="" />
        </div>
      </div>
    </div></div>
  </footer>
</template>

<script>
import { tripadvisor, asean_award, waveFooter } from "@/assets/images/footer/";
export default {
  data() {
    return {
      asean_award,
      tripadvisor,
      waveFooter,
    };
  },
};
</script>

<style scoped>
.footer {
  color: var(--third-text-color);
  position: relative;
  margin-top: 100px;
}

.footer-content {
  background-color: var(--secondary-backgr-color);
  
}

.footer-items {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.prizeImg1 {
  width: 35%;
  margin: 10px;
}

.prizeImg2 {
  width: 50%;
  margin: 10px;
}
.email-input {
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--third-text-color);
  border-bottom: 1px solid var(--third-text-color);
  padding: 5px 0;
}

::placeholder {
  color: var(--third-text-color);
}

h6 {
  font-weight: 300;
}
</style>
