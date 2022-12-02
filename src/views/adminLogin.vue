<template>
  <div class="main-content">
    <h3 class="text-center mb-4">ADMIN LOGIN</h3>
    <div class="p-3 d-flex justify-content-center content">
      <div v-if="getStateLogin == 'login'">
        <div class="userInfo">
          <div class="userInfo__avt mr-2">
            <img
              class="w-100"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
          </div>
          <h6 class="m-0">{{ getUserInfo }}</h6>
        </div>
        <div class="content__btns">
          <button v-if="getIsAdmin" class="primaryBtn mt-4">
            
            <router-link :to="{ path: '/productManager' }">
              <span>Quản lí sản phẩm</span>
            </router-link>
          </button>
          <button v-if="getIsAdmin" class="primaryBtn mt-4">
            <router-link :to="{ path: '/add-product' }">
              <span>Thêm sản phẩm</span>
            </router-link>
          </button>
          <button v-if="getIsAdmin" class="primaryBtn mt-4">
            <router-link :to="{ path: '/add-img-product' }"
              ><span>Thêm ảnh cho sản phẩm</span></router-link
            >
          </button>

          <button @click="handleSignOut" class="primaryBtn mt-4">
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
      <div v-else>
        <h5>{{ loginMod ? "Đăng nhập tài khoản" : "Đăng ký tài khoản" }}</h5>
        <div>
          <Form @submit="handleSubmit" :validation-schema="formInfoSchema">
            <div class="form-group">
              <label for="email">Email hoặc số điện thoại:</label>
              <Field
                name="email"
                type="text"
                class="form-control"
                placeholder="@example.com"
                id="email"
                v-model="emailInput"
              />
              <ErrorMessage name="email" class="error-feedback" />
            </div>

            <div class="form-group">
              <label for="pwd">Mật khẩu:</label>
              <Field
                name="pwd1"
                type="password"
                class="form-control mb-2"
                id="pwd1"
                v-model="passWordInput"
              />
              <ErrorMessage name="pwd1" class="error-feedback" />
            </div>

            <div v-if="!loginMod" class="form-group">
              <label for="pwd">Nhập lại mật khẩu:</label>
              <Field
                name="pwd2"
                type="password"
                class="form-control mb-2"
                id="pwd2"
                v-model="passWord2Input"
              />
              <p v-if="!samePassword">
                Mật khẩu không giống, vui lòng kiểm tra lại!
              </p>
            </div>

            <div v-if="!loginMod" class="form-group">
              <label for="pwd">Nhập admin key:</label>
              <Field
                name="adminKey"
                type="text"
                class="form-control mb-2"
                id="adminKey"
                v-model="adminKey"
              />
            </div>

            <button type="submit" class="primaryBtn">
              <span>{{ loginMod ? "Đăng nhập" : "Đăng ký" }}</span>
            </button>
            <div v-if="loginMod">
              <p class="mb-0 mt-3">Bạn chưa có tài khoản?</p>
              <p role="button" @click="changeLoginMod()">Đăng ký</p>
            </div>
            <div v-else>
              <p role="button" class="mt-3" @click="changeLoginMod()">
                Đăng nhập
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as yup from "yup";

import { Form, Field, ErrorMessage } from "vee-validate";
import signUpApi from "../api/signUpApi";
import signInApi from "../api/signInApi";
import { mapGetters, mapMutations } from "vueX";

export default {
  data() {
    const formInfoSchema = yup.object().shape({
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      pwd1: yup.string().min(3, "Vui lòng đặt mật khẩu tối thiếu 3 kí tự"),
    });
    return {
      loginMod: true,
      emailInput: "",
      passWordInput: "",
      passWord2Input: "",
      samePassword: true,
      adminKey: "",
      formInfoSchema,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapGetters([
      "getStateLogin",
      "getUserInfo",
      "getCartList",
      "getIsAdmin",
    ]),
  },
  methods: {
    ...mapMutations([
      "setStateLogin",
      "setUserInfo",
      "setCartList",
      "setTotalCart",
      "setIsAdmin",
    ]),
    changeLoginMod() {
      this.loginMod = !this.loginMod;
    },

    async handleSubmit() {
      if (this.loginMod) {
        let postData = {
          email: this.emailInput,
          password: this.passWordInput,
        };

        let result = await signInApi.signInAdmin(postData);
        if (result.state == "success") {
          // hien thong bao dang nhap thanh cong

          // luu du lieu vao local store va vue x
          localStorage.setItem("stateLogin", JSON.stringify("login"));
          localStorage.setItem("userInfo", JSON.stringify(result.user.email));
          localStorage.setItem("isAdmin", JSON.stringify(result.user.isAdmin));

          this.setStateLogin(JSON.parse(localStorage.getItem("stateLogin")));
          this.setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
          this.setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")));

          // sau khi dang nhap thanh cong thi load gio hang cua user

          let cart = result.user.userCart;
          this.setCartList(cart);

          // cap nhat lai gia tien tong
          let totalCart = 0;
          this.getCartList?.forEach((e) => {
            totalCart += Number(e.price) * Number(e.quantity);
          });
          this.setTotalCart(totalCart);
        }
      } else {
        if (this.passWordInput != this.passWord2Input) {
          this.samePassword = false;
        } else {
          let postData = {
            email: this.emailInput,
            password: this.passWordInput,
            adminKey: this.adminKey,
            cart: [],
          };

          let result = await signUpApi.signUpAdmin(postData);
          if (result.state == "success") {
            // dang ky thanh cong
            //hien modal thong bao dang nhap thanh cong
          }
        }
      }
    },
    handleSignOut() {
      localStorage.setItem("stateLogin", JSON.stringify("unlogin"));
      localStorage.setItem("userInfo", JSON.stringify(""));
      localStorage.removeItem("isAdmin");

      this.setStateLogin(JSON.parse(localStorage.getItem("stateLogin")));
      this.setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      this.setIsAdmin(JSON.parse(false));

      this.setCartList([]);
    },
  },
  emits: ["headerBackgr"],
  mounted() {
    window.scrollTo(0,0)
    this.$emit("headerBackgr", "normal");
  },
};
</script>

<style>
.userInfo {
  display: flex;
  align-items: center;
  line-height: 1.3;
  -webkit-line-clamp: 1; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.userInfo__avt {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.content {
  background-color: var(--third-backgr-color);
}

.content__btns {
  display: flex;
  flex-direction: column;
}
</style>
