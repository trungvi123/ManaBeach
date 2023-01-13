<template>
  <div class="main-content">
    <HelmetVue :title="'Contact'"></HelmetVue>
    <PageTitleVue></PageTitleVue>
    <div class="contact-content row m-0 justify-content-center mt-5">
      <div class="contact-content__left col-lg-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841454343754!2d105.7684266152336!3d10.029938975268987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1666854244537!5m2!1svi!2s"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-100"
          height="500px"
        ></iframe>
      </div>
      <div class="contact-content__right col-lg-5">
        <div>
          <ul class="contact-info">
            <li>
              <BIconMapFill></BIconMapFill>
              <span>Đại học Cần Thơ</span>
            </li>
            <li>
              <BIconTelephoneFill></BIconTelephoneFill>
              <span></span>
              <a href="tel:039 999 9999">039 999 9999</a>
            </li>
            <li>
              <BIconWalletFill></BIconWalletFill>
              <a href="mailto:trungvibui123@gmail.com"
                >trungvibui123@gmail.com</a
              >
            </li>
            <li>
              <BIconMessenger></BIconMessenger>
              <a href="https://zalo.me/0396360603">chat</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-center">LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <div class="row m-0">
            <input
              v-model="inputName"
              class="col-lg-12 mt-3 p-2"
              type="text"
              placeholder="Họ và tên"
            />
            <input
              v-model="inputEmail"
              class="col-lg-12 mt-3 p-2"
              type="text"
              placeholder="Email"
            />
            <input
              v-model="inputMessage"
              class="col-lg-12 mt-3 p-2"
              type="text"
              placeholder="Ghi chú"
            />
          </div>
          <button @click="handleSubmit" class="primaryBtn mt-3">
            <span>GỬI</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelmetVue from "@/components/Helmet.vue";
import PageTitleVue from "@/components/PageTitle.vue";
import { mapMutations, mapGetters } from "vueX";

import {
  BIconMapFill,
  BIconTelephoneFill,
  BIconMessenger,
  BIconWalletFill,
} from "bootstrap-icons-vue";
import contactApi from "../api/contactApi";
export default {
  data() {
    return {
      inputName: "",
      inputEmail: this.getUserInfo ? this.getUserInfo : "",
      inputMessage: "",
    };
  },
  components: {
    HelmetVue,
    PageTitleVue,
    BIconMapFill,
    BIconTelephoneFill,
    BIconMessenger,
    BIconWalletFill,
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
  methods: {
    ...mapMutations(["setMessageModal"]),
    async handleSubmit() {
      let data = {
        name: this.inputName,
        email: this.inputEmail,
        note: this.inputMessage,
      };

      let result = contactApi.createContact(data);
      if (result.state = 'sucess') {
        this.setMessageModal({
          show: true,
          heading: "Thông báo",
          content:
            "Gửi thành công, chúng tôi sẽ liên hệ với bạn sớm nhất qua email hoặc số điện thoại!",
          type: "success",
        });
      }
    },
  },
  emits: ["headerBackgr"],
  mounted() {
    this.$emit("headerBackgr", "normal");
  },
};
</script>

<style>
.contact-info li svg {
  margin-right: 10px;
}
</style>
