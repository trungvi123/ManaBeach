<template>
  <div class="main-content">
    <HelmetVue :title="'News'"></HelmetVue>
    <PageTitleVue></PageTitleVue>
    <div class="row m-0 justify-content-center mt-3">
      <div class="content col-lg-6">
        <div class="row justify-content-center">
          <CardVue
            v-for="card in newsData"
            :key="card.id"
            :data="{
              title: card.title,
              slug: card.slug,
              img: card.img,
              dropDesciption: card.dropDesciption,
              description: card.description,
            }"
            class="col-lg-3 col-md-3 col-sm-11 pl-0 pr-0 m-3 mt-0"
          ></CardVue>
        </div>
      </div>
      <div class="sideBar col-lg-3 pl-3 pr-3 col-sm-2">
        <SideBarVue></SideBarVue>
      </div>
    </div>
  </div>
</template>

<script>
import HelmetVue from "@/components/Helmet.vue";
import PageTitleVue from "@/components/PageTitle.vue";
import CardVue from "@/components/Card.vue";
import SideBarVue from "@/components/SideBar.vue";
import newsData from "@/assets/fake-data/news.js";

export default {
  data() {
    return {
      newsData,
    };
  },
  components: {
    HelmetVue,
    PageTitleVue,
    CardVue,
    SideBarVue,
  },
  emits: ["headerBackgr"],
  mounted() {
    window.scrollTo(0,0)
    this.$emit("headerBackgr", "normal");
  },
};
</script>

