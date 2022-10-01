<template>
  <router-link :to="{ path: link }" class="card">
    <img class="card-img-top" :src="data.img" alt="Card image" />
    <div class="card-body">
      <h4 class="card-title">
        {{ data.title }}
      </h4>
      <p class="card-text">
        {{ data.dropDesciption }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      link: "/news/" + this.data.slug,
    };
  },
  props: {
    data: { type: Object },
  },
};
</script>

<style scoped>
.card {
  height: 250px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card:hover .card-text{
  color: var(--five-text-color);
}
.card-img-top {
  height: 50%;
  object-fit: cover;
}
.card-body {
  height: 50%;
}
.card-title {
  height: 50%;
  text-overflow: ellipsis;
}

.card-text {
  height: 50%;
}
.card-text,
.card-title {
  display: block;
  display: -webkit-box;
  font-size: 16px;
  line-height: 1.3;
  -webkit-line-clamp: 2; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
