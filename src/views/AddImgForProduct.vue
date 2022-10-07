<template>
  <div class="main-content">
    <div class="row m-0">
      <form
        :onsubmit="handleSubmit"
        enctype="multipart/form-data"
        class="was-validated col-lg-8 col-md-10 col-sm-11"
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="idProduct"
            placeholder="ID dịch vụ"
            name="idProduct"
            v-model="idProduct"
            required
          />
          <div class="invalid-feedback">Vui lòng nhập id của dịch vụ cần thêm ảnh!</div>
        </div>

        <div class="form-group">
          <input
            type="file"
            ref="imgs"
            multiple
            placeholder="Giá dịch vụ"
            name="photo"
            required
            :onchange="handleUploadImg"
          />
          <div class="invalid-feedback">Vui lòng tải ảnh dịch vụ lên!</div>
        </div>

        <div class="row m-0 justify-content-center">
          <div v-if="imgurl" class="col-lg-6 col-md-6 col-sm-10">
            <img class="w-100 h-100" :src="imgurl" alt="" />
          </div>
        </div>
        <button type="submit" class="primaryBtn mt-2">
          <span>Thêm ảnh cho sản phẩm</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import productApi from "../api/productApi";

export default {
  data() {
    return {
      imgurl: "",
      idProduct:''
    };
  },
  methods: {
    handleUploadImg(e) {
      let file = e.target.files[0];
      URL.revokeObjectURL(this.imgurl);
      if (file) this.imgurl = URL.createObjectURL(file);
    },
    handleSubmit(e) {
      e.preventDefault();

      const formData = new FormData();
      let imgfile = this.$refs.imgs.files[0]
      formData.append("photo", imgfile);
      formData.append("idProduct", this.idProduct);
      formData.append("namePhoto",imgfile.name.split('.')[0])
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      productApi.createImgForProduct(formData, config);
    },
  }, 
};
</script>

<style></style>
