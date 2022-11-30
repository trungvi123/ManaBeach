<template>
  <div class="main-content">
    <div class="row m-0 pt-5 justify-content-center">
      <form
        ref="addProductForm"
        :onsubmit="handleSubmit"
        enctype="multipart/form-data"
        class="was-validated col-lg-8 col-md-10 col-sm-11"
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Tên dịch vụ"
            name="name"
            v-model="name"
            required
          />
          <div class="invalid-feedback">Vui lòng nhập tên dịch vụ!</div>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="price"
            placeholder="Giá dịch vụ"
            name="price"
            v-model="price"
            required
          />
          <div class="invalid-feedback">Vui lòng nhập giá dịch vụ!</div>
        </div>

        <!-- <div class="form-group">
          <input
            type="text"
            class="form-control d-none"
            id="type"
            placeholder="Giá dịch vụ"
            name="type"
            v-model="type"
          />
          <div class="invalid-feedback">Vui lòng nhập giá dịch vụ!</div>
        </div> -->

        <div class="form-group">
          <textarea
            class="form-control"
            placeholder="Mô tả dịch vụ"
            name="description"
            v-model="description"
          />
        </div>

        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="sang-trong" />
            Sang trọng
          </label>
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="cap-doi" />
            Cặp đôi
          </label>
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="gia-dinh" />
            Gia đình
          </label>
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="gia-re" />
            Giá rẻ
          </label>
        </div>

        <button type="submit" class="primaryBtn mt-2">
          <span>Thêm dịch vụ</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vueX";
import productApi from "../api/productApi";
export default {
  data() {
    return {
      imgurl: "",
      type: [],
      name: "",
      price: "",
      description: "",
    };
  },
  computed:{
    ...mapGetters(['getIsAdmin'])
  },
  methods: {
    ...mapMutations(['setMessageModal']),
    async handleSubmit(e) {
      e.preventDefault();
      this.imgs = [];
      const typeCheckboxs =
        this.$refs.addProductForm.querySelectorAll(".form-check-input");
      this.type = [];
      typeCheckboxs.forEach((e) => {
        if (e.checked) {
          this.type.push(e.name);
        }
      });
      let data = {
        name: this.name,
        price: this.price,
        type: this.type,
        description: this.description,
      };
      let result = await productApi.createProduct(data);
      this.setMessageModal({
        show: true,
        heading: "Thông báo",
        content: `Thêm sản phẩm thành công, mã sản phẩm là ${result._id}`,
        type: "success",
      });
    },
  },
  mounted(){
    if(!this.getIsAdmin){
      this.$router.push('/not-found')
    }
  }
};
</script>
