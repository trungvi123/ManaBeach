<template>
  
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    title: { type: String},
  },
  mounted() {
      if( this.title){
          document.title = "ManaBeach - " + this.title;

      }
  },
};
</script>
