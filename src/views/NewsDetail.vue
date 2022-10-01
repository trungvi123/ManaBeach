<template>
  <div class="main-content">
    <HelmetVue :title="'news detail'"></HelmetVue>
    <div class="row m-0 justify-content-center mt-3">
      <div class="content col-lg-6 pl-5 pr-5">
        <NewsContentVue :slug="slugData"></NewsContentVue>
      </div>
      <div class="sideBar col-lg-3 pl-3 pr-3">
        <SideBarVue @slug="getSlug"></SideBarVue>
      </div>
    </div>
  </div>
</template>

<script>
import HelmetVue from "@/components/Helmet.vue";
import SideBarVue from "@/components/SideBar.vue";
import NewsContentVue from "@/components/newsDetail/NewsContent.vue";

export default {
  data() {
    return {
      slugData: "",
    };
  },
  components: {
    HelmetVue,
    SideBarVue,
    NewsContentVue,
  },
  methods: {
    getSlug(slug) {
      this.slugData = slug;
    },
  },
  emits: ["headerBackgr"],
  mounted(){
    this.$emit('headerBackgr','normal')
  }
};
</script>

<style scoped></style>
