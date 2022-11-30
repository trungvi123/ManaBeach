<template>
  <div class="main-content d-flex justify-content-center">
    <div>
      <img :src="img404" alt="404" />
      <h3>
        Oops, không thể tìm thấy trang. Trở về
        <router-link to="/">trang chủ.</router-link>
      </h3>
    </div>
  </div>
</template>
<script>
import { img404 } from "../assets/images/all";

export default {
  data() {
    return {
      img404,
    };
  },
};
</script>
