<template>
  <div class="page-title">
    <div class="fill page-title-bg"></div>
    <div class="page-title__content d-flex">
      <div class="page-title__content__item"></div>
      <div class="page-title__content__item">
        <h3>{{ getOption().display.toUpperCase() }}</h3>
        <router-link
          v-for="item in historyLocal"
          :to="{ path: `${item.path}` }"
          :key="item.option"
          v-html="item.display"
        ></router-link>
      </div>
      <div class="page-title__content__item">
        <CatalogFilterVue v-if="catalogFilter" class="mb-3 mb-lg-0"></CatalogFilterVue>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogFilterVue from "./CatalogFilter.vue";
import typeRoom from "../assets/fake-data/typeRoom";
import category from "../assets/fake-data/category";
export default {
  data() {
    return {
      typeRoom,
      category,
      option: {},
      historyLocal: [
        {
          display: "TRANG CHỦ / ",
          path: "/",
        },
      ],
    };
  },
  components: {
    CatalogFilterVue,
  },
  props: {
    catalogFilter: { type: Boolean, default: false },
  },
  watch: {
    option: function () {
      this.updateHistory();
    },
  },
  emits:['optionSelect'],
  methods: {
    getOption() {
      if (this.$route.params.option) {
        this.option = typeRoom.find((e) => {
          return e.option == this.$route.params.option;
        });
      } else {
        // nếu không có param option như các trang news,contact,about
        this.option = category.find((e) => {
          return e.path == this.$route.fullPath;
        });
      }
      this.$emit('optionSelect',this.option) // emit qua catalog.vue để render theo type
      return this.option;
    },

    updateHistory() {
      let parentPath = {
        display: "",
        path: "",
      };

      if (this.$route.params.option) {
        // nếu có params option
        const tmpObj = category.find((e) => {
          return e.path == `/${this.$route.fullPath.split("/").splice(1)[0]}`; // => /catalog
        });

        parentPath = {
          // format lại dữ liệu trước khi render
          display: `${tmpObj.display.toUpperCase()} / `,
          path: tmpObj.path + '/tat-ca',
        };
      }

      if (this.historyLocal.length > 1) {
        // chừa lại phần tử trang chủ
        this.historyLocal.splice(1);
      }
      this.historyLocal.push(parentPath, {
        display: `<strong>${this.getOption().display.toUpperCase()}</strong>`,
        path: this.getOption().path,
      });
    },
  },
  mounted(){
    window.scrollTo(0,0)
  }
};
</script>

<style>
.page-title {
  height: 20vh;
  background-image: url("http://mauweb.monamedia.net/hotellerbeach/wp-content/uploads/2019/02/page-title-background.jpg");
  color: var(--third-text-color);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.fill {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
}
.page-title-bg {
  box-shadow: inset 0 0 30px 0px rgba(0, 0, 0, 0.1);
}

.page-title__content {
  padding: 0 15%;
  align-items: center;
  height: 100%;
}

.page-title__content__item {
  flex: 1;
  text-align: center;
}

@media only screen and (max-width: 1024px) {
  .page-title__content {
    flex-direction: column;
  }
}
</style>
