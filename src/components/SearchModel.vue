<template>
  <div
    class="search-modal"
    :class="{ active: getShowSearchModel }"
    @click="handleCloseModal()"
  >
    <div class="search-modal__content" @click="handleCloseModal()">
      <div class="search-modal__content__search">
        <input
          v-model="query"
          type="text"
          spellCheck="false"
          placeholder="Tìm kiếm..."
        />
        <button class="h-100 primaryBtn" @click="handleSearch">
          <span>Tìm kiếm</span>
        </button>
      </div>
      <div class="search-modal__content__popular"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vueX";
import productApi from "../api/productApi";
export default {
  data() {
    return {
      query: "",
    };
  },
  computed: {
    ...mapGetters(["getShowSearchModel",'getSearchList']),
  },
  methods: {
    ...mapMutations(["setShowSearchModel","setSearchList"]),
    handleCloseModal() {
      this.setShowSearchModel(!this.getShowSearchModel);
    },
    async handleSearch(){
      let productList = await productApi.getAllProduct()
      let resulutSearch = []
      
      productList.forEach(e => {
        if(e.name.toLowerCase().includes(this.query)){
          resulutSearch.push(e)
        }
      });
      this.setSearchList(resulutSearch)
      this.$router.push({ path: '/search' })
    }
  },
};
</script>

<style>
.search-modal {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 90px;
  left: 0;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
}

.search-modal.active {
  opacity: 1;
  visibility: visible;
}

.search-modal__content {
  margin: auto;
  z-index: 9999;
  padding: 3rem 6rem;
  background-color: var(--primary-backgr-color);
  width: 80%;
  position: relative;
  transform: translateY(-250px);
  transition: transform 0.3s ease;
  opacity: 0;
  /* box-shadow: $box-shadow; */
}

.search-modal.active .search-modal__content {
  opacity: 1;
  transform: translateY(0);
}

.search-modal__content__search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
button {
  border-radius: 0;
}

input {
  height: 100%;
  outline: none;
  flex: 1;
  padding: 10px;
  font-size: 1.2rem;
}

.search-modal__content__popular {
  max-width: 400px;
}

@media only screen and (max-width: 1024px) {
  .search-modal__content {
    width: 85%;
    padding: 1rem 2rem;
  }
}

@media only screen and (max-width: 600px) {
  .search-modal__content {
    width: 90%;
    padding: 1rem 2rem;
  }
}
</style>
