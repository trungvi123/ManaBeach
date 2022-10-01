<template>
  <div class="card border border-top-0">
    <div class="p-4">
      <h2>{{ content.title }}</h2>
      <div class="small__line"></div>
    </div>
    <img class="card-img w-100 h-100" :src="content.img" alt="Card image" />
    <div class="card-body">
      <div
        class="card-body__item"
        v-for="item in content.description"
        :key="item.title"
      >
        <h4 class="card-title mt-2">
          {{ item.title }}
        </h4>
        <p class="card-text" v-html="item.detail"></p>
        <img v-if="item.img" class="w-100 h-100" :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import newsData from "@/assets/fake-data/news.js";

export default {
  data() {
    return {
      newsData,
      content: this.refreshDataBySlug(this.$route.params.slug),
    };
  },
  watch: {
    slug: function () {
      this.content = this.refreshDataBySlug(this.slug);
    },
  },
  methods: {
    refreshDataBySlug(slug) {
      return newsData.find((e) => {
        return e.slug == slug;
      });
    },
  },
  props: {
    slug: { type: String },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 600;
}
.card {
  transition: box-shadow 1s ease;
}
.card:hover {
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
