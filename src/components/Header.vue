<template>
  <header
    id="header"
    class="header d-flex justify-content-between align-items-center"
    :class="{ backgrTransparent: backgrProps == 'transparent' ? true : false }"
  >
    <div class="header-item d-none">
      <BIconList
        @click="toggleBar"
        class="nav_icon nav-service__iconBar"
      ></BIconList>
      <BIconBag
        class="nav_icon nav-service__iconCart nav-service__iconCart__left"
      ></BIconBag>
    </div>
    <div class="d-flex header-item align-items-center justify-content-center">
      <div class="logo-box">
        <img
          v-if="!isSkrinkHeader && backgrProps == 'transparent'"
          class="logo"
          src="http://mauweb.monamedia.net/hotellerbeach/wp-content/uploads/2019/03/logo_white_mona.png"
          alt="logo"
        />
        <img
          v-if="isSkrinkHeader || backgrProps != 'transparent'"
          class="logo"
          src="http://mauweb.monamedia.net/hotellerbeach/wp-content/uploads/2019/03/logo_black_mona.png"
          alt="logo"
        />
      </div>
      <nav class="ml-5">
        <ul :class="{ active: activeBar }" class="nav-list">
          <li class="nav-item">
            <RouterLink class="nav-item__link" :to="{ name: 'Home' }"
              >Trang chủ</RouterLink
            >
          </li>
          <li class="nav-item navDropdown" data-toggle="dropdown">
            <span class="nav-item__link navIcon"> Loại phòng </span>
            <BIconChevronDown />
            <div class="dropdown-menu p-3">
              <RouterLink
                v-for="item in typeRoom"
                :key="item.option"
                class="pl-0 pb-2 dropdown-item"
                :to="{ path: `${item.path}` }"
                >{{ item.display }}</RouterLink
              >
            </div>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-item__link" :to="{ name: 'News' }"
              >Tin tức</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-item__link" :to="{ name: 'About-us' }"
              >Giới thiệu</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-item__link" :to="{ name: 'Contact' }"
              >Liên hệ</RouterLink
            >
          </li>
        </ul>
        <div
          :class="{ active: activeBar }"
          @click="toggleBar()"
          class="filter__toggle"
        ></div>
      </nav>
    </div>
    <div class="header-item nav-service d-flex justify-content-end">
      <div>
        <BIconSearch
          class="nav_icon nav-service__iconSeach"
          @click="handleOpenSearchModel()"
        ></BIconSearch>

        <BIconPerson
          class="nav_icon nav-service__iconUser"
          @click="handleOpenLoginModal()"
        ></BIconPerson>

        <LoginVue @closeLoginModal="closeLoginModal" :showProps="showLoginModal"></LoginVue>

        <router-link :to="{ path: '/cart' }" class="cart__count__box">
          <div
            class="cart__count"
            :class="{
              cart__count__box__bg: backgrProps == 'transparent' ? false : true,
            }"
          >
            {{ getCartList.length > 9 ? '9+': getCartList.length}}
           
          </div>
          <BIconBag
            class="nav_icon nav-service__iconCart nav-service__iconCart__right"
          >
          </BIconBag
        ></router-link>
      </div>
    </div>

    <BIconXCircle
      @click="toggleBar()"
      :class="{ active: activeBar }"
      class="nav_icon nav-service__close"
    ></BIconXCircle>
    <a href="#"><BIconArrowUpCircle class="toTopBtn"></BIconArrowUpCircle></a>
    <div class="zaloLinkIcon">
      <a href="https://zalo.me/0396360603" target="_blank">
        <img class="w-100 h-100" :src="zaloLogo" alt="zalo" />
      </a>
    </div>
    <div class="fbLinkIcon">
      <a href="https://www.facebook.com/gom.gomVvvv/" target="_blank">
        <img class="w-100 h-100" :src="Fb" alt="fb" />
      </a>
    </div>
    <SearchModelVue class="mt-4"></SearchModelVue>
  </header>
</template>

<script>
import {
  BIconBag,
  BIconPerson,
  BIconArrowUpCircle,
  BIconSearch,
  BIconChevronDown,
  BIconList,
  BIconXCircle,
} from "bootstrap-icons-vue";
import { mapGetters, mapMutations } from "vueX";
import typeRoom from "../assets/fake-data/typeRoom";
import { zaloLogo, Fb } from "../assets/images/iconPng";
import SearchModelVue from "./SearchModel.vue";
import LoginVue from "./Login.vue";
export default {
  data() {
    return {
      isSkrinkHeader: false,
      activeBar: false,
      showLoginModal: false,
      typeRoom,
      zaloLogo,
      Fb,
    };
  },
  props: {
    backgrProps: { type: String },
  },
  components: {
    SearchModelVue,
    LoginVue,
    BIconXCircle,
    BIconBag,
    BIconList,
    BIconSearch,
    BIconPerson,
    BIconArrowUpCircle,
    BIconChevronDown,
  },
  computed: {
    ...mapGetters(["getShowSearchModel","getCartList"]),
  },
  methods: {
    ...mapMutations(["setShowSearchModel"]),
    handleOpenLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    handleCloseLoginModal() {
      this.showLoginModal = false;
    },
    closeLoginModal(){
      this.handleCloseLoginModal()
    },
    shrinkHeader() {
      const headerRef = document.querySelector("#header");
      const cartCountRef = document.querySelector(".cart__count");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.classList.add("skrinkHeader");
        this.isSkrinkHeader = true;
        if (this.backgrProps == "transparent") {
          // chỉ áp dụng khi backgrProps la transf
          cartCountRef.classList.add("cart__count__box__bg");
        }
      } else {
        headerRef.classList.remove("skrinkHeader");
        this.isSkrinkHeader = false;

        if (this.backgrProps == "transparent") {
          cartCountRef.classList.remove("cart__count__box__bg");
        }
      }
    },
    handleOpenSearchModel() {
      this.setShowSearchModel(!this.getShowSearchModel);
    },
    showGoToTop() {
      const toTopBtnRef = document.querySelector(".toTopBtn");
      const zaloLinkIcon = document.querySelector(".zaloLinkIcon");
      const fbLinkIcon = document.querySelector(".fbLinkIcon");

      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        toTopBtnRef.classList.add("show");
        zaloLinkIcon.classList.add("show");
        fbLinkIcon.classList.add("show");
      } else {
        toTopBtnRef.classList.remove("show");
        zaloLinkIcon.classList.remove("show");
        fbLinkIcon.classList.remove("show");
      }
    },
    toggleBar() {
      this.activeBar = !this.activeBar;
    },
  },
  created() {
    window.addEventListener("scroll", this.shrinkHeader);
    window.addEventListener("scroll", this.showGoToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.shrinkHeader);
    window.removeEventListener("scroll", this.showGoToTop);
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  padding: 20px 15%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  color: var(--primary-text-color);
  height: var(--header-height);
  background-color: var(--primary-backgr-color);
}

.header.backgrTransparent {
  background-color: transparent;
  color: var(--third-text-color);
}

.header.skrinkHeader {
  background-color: var(--primary-backgr-color);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: var(--primary-text-color);
  transition: background-color 0.5s ease;
}

.nav-list {
  display: flex;
  text-align: left;
  font-weight: 200;
  margin: unset;
}

.nav-item {
  margin: 0 10px;
  cursor: pointer;
  padding: 15px 0;
}
.dropdown-menu {
  background-color: var(--secondary-backgr-color);
  width: 280px;
}
.dropdown-item {
  color: var(--Fourth-text-color);
}

.dropdown-item ~ .dropdown-item {
  border-top: 1px solid var(--primary-backgr-color);
}

.dropdown-item:hover {
  background-color: unset;
  color: var(--third-text-color);
}

.nav-service__iconUser,
.nav-service__iconBar {
  font-size: 3rem;
}
.nav_icon {
  margin-right: 15px;
  cursor: pointer;
  padding: 10px;
}

.cart__count__box {
  position: relative;
}

.cart__count {
  position: absolute;
  background-color: transparent;
  border-radius: 50%;
  min-width: 14px;
  text-align: center;
  top: -7px;
  left: 22px;
  box-shadow: var(--box-shadow);
  padding:0 4px;
  color: white;
  font-size: 0.8rem;
}
.cart__count.cart__count__box__bg {
  background-color: var(--secondary-backgr-color);
}

.nav-service__iconCart,
.nav-service__close,
.nav-service__iconSeach {
  font-size: 2.5rem;
}

.nav-service__iconCart__left {
  display: none;
}
.nav-service__close {
  position: fixed;
  right: 0;
  display: none;
}

.nav-service__close.active {
  display: block;
  color: var(--third-text-color);
  z-index: 999;
}

.logo {
  width: 99px;
  height: 43px;
}
.zaloLinkIcon {
  position: fixed;
  bottom: 10%;
  left: 10px;
  background-color: white;
  height: 45px;
  border-radius: 10px;
  display: none;
}

.fbLinkIcon {
  position: fixed;
  bottom: 18%;
  left: 10px;
  height: 50px;
  display: none;
}
.toTopBtn {
  position: fixed;
  bottom: 20px;
  right: 21px;
  font-size: 2.5rem;
  cursor: pointer;
  color: var(--secondary-text-color);
  border-radius: 50%;
  display: none;
}
.toTopBtn.show,
.zaloLinkIcon.show,
.fbLinkIcon.show {
  display: block;
}
.toTopBtn:hover {
  background-color: var(--secondary-backgr-color);
  color: var(--third-text-color);
}

/* Responsive */
@media only screen and (max-width: 1024px) {
  .header {
    padding: 20px 5%;
  }
  .header-item {
    flex: 1;
    align-items: center;
    display: flex !important;
  }
  .logo-box {
    margin-left: 25%;
  }
  .nav-list {
    position: fixed;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    background-color: var(--primary-backgr-color);
    color: var(--secondary-text-color);
    display: none;
    z-index: 99;
  }

  .filter__toggle {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 98;
    display: none;
  }

  .filter__toggle.active {
    display: block;
  }

  .nav-list.active {
    display: flex;
  }

  .nav-item {
    font-weight: 600;
    margin: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: unset;
  }

  .dropdown-menu {
    width: 96%;
  }

  .nav-item__link {
    width: 100%;
    padding: 20px;
  }
  .nav-item__link.navIcon {
    width: 85%;
  }

  .nav-item svg {
    font-size: 1.2rem;
    width: 15%;
    height: 100%;
    padding: 10px;
  }

  .nav-item svg:hover {
    color: var(--primary-text-color);
  }
  .nav-item ~ .nav-item {
    border-top: 1px solid var(--Fourth-text-color);
  }

  .nav-item:hover {
    background-color: var(--third-backgr-color);
  }
}

@media only screen and (max-width: 600px) {
  .header {
    padding: 20px 2%;
  }

  .logo-box {
    margin-left: 35%;
  }

  .nav-service__iconCart__right {
    display: none;
  }

  .logo {
    transform: scale(0.7);
  }
  .nav_icon {
    margin-right: 5px;
    padding: 9px;
  }

  .nav-service__iconCart__left {
    display: block;
    padding: 8px;
    margin-bottom: 3px;
  }

  .nav-service__iconUser,
  .nav-service__iconBar {
    font-size: 2.8rem;
  }
  .nav-service__iconCart,
  .nav-service__close,
  .nav-service__iconSeach {
    font-size: 2.3rem;
  }
}
</style>
