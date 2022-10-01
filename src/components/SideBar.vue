<template>
  <div class="side-bar">
    <div class="side-bar__search mb-3">
      <input
        class="side-bar__search__input h-100 p-1 pl-2"
        type="text"
        placeholder="Tìm kiếm..."
      />
      <BIconSearch class="side-bar__search__icon"></BIconSearch>
    </div>
    <h5 class="side-bar__title">BÀI VIẾT MỚI NHẤT</h5>
    <div class="small__line mt-1"></div>

    <router-link :to="{path:`/news/${item.slug}`}" @click="emitSlug(item.slug)" class="side-bar__list" v-for="item in newsData" :key="item.id">
      <div class="side-bar__list__item d-flex mb-2">
        <div class="side-bar__list__item__img">
          <img class="w-100 h-100" :src="item.img" alt="" />
        </div>
        <p class="side-bar__list__item__description">
         {{item.dropDesciption}}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { BIconSearch } from "bootstrap-icons-vue";
import newsData from "@/assets/fake-data/news.js";

export default {
  data() {
    return {
      newsData,

    };
  },
  components: {
    BIconSearch,
  },
  emits:["slug"],
  methods:{
    emitSlug(slug){
      this.$emit('slug',slug)
    }
  }

};
</script>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
}

h5 {
  color: var(--secondary-text-color);
}

.side-bar__search {
  display: flex;
  height: 40px;
}
.side-bar__search__input {
  outline: none;
  border: 1px solid var(--Fourth-text-color);
}
.side-bar__search__icon {
  width: 35px;
  border: 1px solid var(--Fourth-text-color);
  height: 100%;
  padding: 8px;
  border-left: none;
  cursor: pointer;
}

.side-bar__search__icon:hover {
  background-color: var(--Fourth-backgr-color);
}



.side-bar__list__item:hover{
    cursor: pointer;
}

.side-bar__list__item:hover .side-bar__list__item__description{
    color: var(--five-text-color);
}

.side-bar__list__item__description {
  flex: 1;
  margin-left: 10px;
  display: block;
  display: -webkit-box;
  font-size: 16px;
  line-height: 1.3;
  -webkit-line-clamp: 2; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.side-bar__list__item__img {
  height: 50px;
  width: 50px;
}
</style>
