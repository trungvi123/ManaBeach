<template>
  <div id="app">
    <Header :backgrProps="backgr" />
    <router-view @headerBackgr="backgrEmit" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      backgr: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    backgrEmit(data) {
      this.backgr = data;
    },
  },
};
</script>

<style>
#app {
  position: relative;
}
</style>
