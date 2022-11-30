<template>
  <div class="main-content">
    <HelmetVue :title="'Order manager'"></HelmetVue>
    <div class="d-flex m-0 justify-content-around">
      <div v-for="item in data" :key="item.id" class="orderItem">
        <p><strong>Order:</strong> {{ item._id }}</p>
        <p><strong>Email:</strong> {{ item.email }}</p>
        <p><strong>Detail:</strong></p>
        <ul v-for="it in item.cart" :key="it._id">
          <p>name: {{ it.name }}</p>
          <p>quantity: {{ it.quantity }}</p>
        </ul>
        <p>Date create: {{ item.createdAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HelmetVue from "../components/Helmet.vue";
import PageTitleVue from "../components/PageTitle.vue";
import orderApi from "../api/orderApi";
import { mapGetters } from "vueX";
export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    HelmetVue,
    PageTitleVue,
  },
  computed:{
    ...mapGetters(['getIsAdmin'])
  },
  methods: {
    async getAllOrder() {
      let result = await orderApi.getAllOrder();
      console.log(result);
      if (result) {
        this.data = result;
      }
    },
  },
  mounted() {
    this.getAllOrder();
    if (!this.getIsAdmin) {
      this.$router.push("/not-found");
    }
  },
};
</script>

<style>
.orderItem {
  /* background-color: aqua; */
  border: 1px solid;
  padding: 10px;
}
</style>
