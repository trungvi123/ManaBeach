<template>
  <section class="section sec-banner mt-4">
    <img class="w-100 h-100" :src="data.img" alt="" />
    <div class="sec-banner__info">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
      <button class="outlineBtn">
        <router-link :to="{ path: `${data.link}` }">
          <span>{{ data.nameBtn }}</span
          ><BIconChevronRight class="icon-btn" />
        </router-link>
      </button>
    </div>
  </section>
</template>

<script>
import { BIconChevronRight } from "bootstrap-icons-vue";
export default {
  components: {
    BIconChevronRight,
  },
  props: {
    data: { Object },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.sec-banner {
  position: relative;
  height: 70vh;
}

.sec-banner img {
  object-fit: cover;
  object-position: center;
  filter: brightness(70%);
}

.sec-banner__info {
  position: absolute;
  top: 50%;
  left: 5%;
  color: var(--third-text-color);
  width: 50%;
}
.sec-banner__info h2 {
  font-weight: 400;
  font-size: 2.2rem;
}

.sec-banner__info p {
  font-size: 1.1rem;
  color: var(--Fourth-text-color);
}

@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 600px) {
  .sec-banner__info {
    top: 30%;
    width: 80%;
  }

  .sec-banner {
    height: 50vh;
  }

  .sec-banner__info h2 {
    font-weight: 400;
    font-size: 1.7rem;
  }

  .sec-banner__info p {
    font-size: 0.8rem;
  }

  .outlineBtn span {
    font-size: 0.9rem;
  }
}
</style>
