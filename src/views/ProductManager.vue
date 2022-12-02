<template>
  <div class="main-content">
    <HelmetVue :title="'Product manager'"></HelmetVue>
    <div class="row m-0 justify-content-center">
      <CardProductVue
        v-for="item in data"
        :key="item._id"
        :data="{
          _id: item._id,
          img: item.imgs[0],
          name: item.name,
          price: item.price,
        }"
        :notLink="true"
        class="col-lg-4 col-md-5 col-sm-5"
        @click="handleEdit(item._id)"
      ></CardProductVue>
    </div>

    <div class="container modal__container">
      <!-- The Modal -->
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content w-100">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Chỉnh sửa</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body w-100">
              <form @submit="handleSubmit" class="w-100">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="dataLocal.name"
                  />
                </div>

                <div class="form-group">
                  <label for="name">Price:</label>
                  <input
                    name="price"
                    type="text"
                    class="form-control"
                    id="price"
                    v-model="dataLocal.price"
                  />
                </div>

                <div class="form-group">
                  <label for="name">Type:</label>
                  <input
                    name="type"
                    type="text"
                    class="form-control"
                    id="type"
                    v-model="dataLocal.type"
                  />
                </div>

                <div class="d-flex justify-content-between">
                  <div class="form-group w-50">
                    <label for="img1">Link ảnh 1:</label>
                    <input
                      name="img1"
                      type="text"
                      class="form-control"
                      id="img1"
                      v-model="img1"
                    />
                  </div>
                  <div class="form-group w-50 ml-2">
                    <label for="img2">Link ảnh 2:</label>
                    <input
                      name="img2"
                      type="text"
                      class="form-control"
                      id="img2"
                      v-model="img2"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="form-group w-50">
                    <label for="img3">Link ảnh 3:</label>
                    <input
                      name="img3"
                      type="text"
                      class="form-control"
                      id="img3"
                      v-model="img3"
                    />
                  </div>
                  <div class="form-group w-50 ml-2">
                    <label for="img4">Link ảnh 4:</label>
                    <input
                      name="img4"
                      type="text"
                      class="form-control"
                      id="img4"
                      v-model="img4"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="name">Mô tả:</label>
                  <input
                    name="description"
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="dataLocal.description"
                  />
                </div>
              </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button
                type="button"
                @click="handleDeleteSubmit(dataLocal._id)"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Xóa
              </button>
              <button
                type="button"
                @click="handleEditSubmit"
                class="btn btn-warning"
                data-dismiss="modal"
              >
                Chỉnh sửa
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelmetVue from "../components/Helmet.vue";
import CardProductVue from "../components/CardProduct.vue";
import PageTitleVue from "../components/PageTitle.vue";
import productApi from "../api/productApi";
import { mapMutations, mapGetters } from "vueX";

export default {
  data() {
    return {
      data: [],
      dataLocal: {},
      img1: this.dataLocal?.imgs[0],
      img2: this.dataLocal?.imgs[1],
      img3: this.dataLocal?.imgs[2],
      img4: this.dataLocal?.imgs[3],
    };
  },
  components: {
    HelmetVue,
    CardProductVue,
    PageTitleVue,
  },
  computed:{
    ...mapGetters(['getIsAdmin'])
  },
  methods: {
    ...mapMutations(["setMessageModal"]),
    async getAllProduct() {
      let result = await productApi.getAllProduct();
      this.data = result;
    },
    async handleEdit(_id) {
      this.dataLocal = this.data.find((e) => e._id == _id);
      this.img1 = this.dataLocal?.imgs[0];
      this.img2 = this.dataLocal?.imgs[1];
      this.img3 = this.dataLocal?.imgs[2];
      this.img4 = this.dataLocal?.imgs[3];
    },
    async handleEditSubmit() {
      let payload = {
        ...this.dataLocal,
        imgs: [this.img1, this.img2, this.img3, this.img4],
      };
      let result = await productApi.updateProduct(payload);
      // THONG BAO
      if(result){
        this.setMessageModal({
        show: true,
        heading: "Thông báo",
        content: "Chỉnh sửa sản phẩm thành công",
        type: "success",
      });
      this.getAllProduct()
      }
      
    },
    async handleDeleteSubmit(_id) {
      let result = await productApi.deleteProduct(_id);
      if(result){
        this.setMessageModal({
        show: true,
        heading: "Thông báo",
        content: "Xóa sản phẩm thành công",
        type: "success",
      });
      this.getAllProduct()
      }
    },
  },
  emits: ["headerBackgr"],
  mounted() {
    window.scrollTo(0,0)
    this.$emit("headerBackgr", "normal");
    this.getAllProduct();
    if(!this.getIsAdmin){
      this.$router.push('/not-found')
    }
  },
};
</script>

<style>
.modal-dialog {
  margin-top: 100px;
  min-width: 1000px;
}

@media only screen and (max-width: 1024px) {
  .modal-dialog {
    width: 800px;
  }
}

@media only screen and (max-width: 820px) {
  .modal-dialog {
    width: 400px;
  }
  .modal {
    width: 400px;
  }
  .modal-content {
    width: 400px;
  }
}
</style>
