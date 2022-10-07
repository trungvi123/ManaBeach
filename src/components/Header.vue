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
            <RouterLink class="nav-item__link" :to="{ name: 'notfound' }"
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
        <BIconSearch class="nav_icon nav-service__iconSeach"></BIconSearch>
        <BIconPerson class="nav_icon nav-service__iconUser"></BIconPerson>
        <BIconBag
          class="nav_icon nav-service__iconCart nav-service__iconCart__right"
        ></BIconBag>
      </div>
    </div>

    <BIconXCircle
      @click="toggleBar()"
      :class="{ active: activeBar }"
      class="nav_icon nav-service__close"
    ></BIconXCircle>
    <a href="#"><BIconArrowUpCircle class="toTopBtn"></BIconArrowUpCircle></a>
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
import typeRoom from "../assets/fake-data/typeRoom";
export default {
  data() {
    return {
      isSkrinkHeader: false,
      activeBar: false,
      typeRoom,
    };
  },
  props: {
    backgrProps: { type: String },
  },
  components: {
    BIconXCircle,
    BIconBag,
    BIconList,
    BIconSearch,
    BIconPerson,
    BIconArrowUpCircle,
    BIconChevronDown,
  },
  methods: {
    shrinkHeader() {
      const headerRef = document.querySelector("#header");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.classList.add("skrinkHeader");
        this.isSkrinkHeader = true;
      } else {
        headerRef.classList.remove("skrinkHeader");
        this.isSkrinkHeader = false;
      }
    },
    showGoToTop() {
      const toTopBtnRef = document.querySelector(".toTopBtn");
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        toTopBtnRef.classList.add("show");
      } else {
        toTopBtnRef.classList.remove("show");
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
.toTopBtn.show {
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
