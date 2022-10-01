<template>
  <section class="section d-flex justify-content-center sec-intro">
    <div
      class="d-flex justify-content-center sec-intro__item m-2"
      :class="{ reverse }"
    >
      <div class="sec-intro__item__left p-2">
        <img class="w-100 h-100" :src="data.img" alt="" />
      </div>
      <div class="sec-intro__item__right p-2">
        <p>{{ data.head }}</p>
        <h2>{{ data.title }}</h2>
        <p>
          {{ data.description }}
        </p>
        <button class="primaryBtn">
          <router-link :to="{path:data.link}" >
            <span>{{ data.nameBtn }}</span
            ><BIconChevronRight class="icon-btn" />
          </router-link>
        </button>
      </div>
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
    reverse: { Boolean },
  },
  data() {
    return {};
  },
};
</script>

<style>
.sec-intro {
  margin: 3rem;
}

.sec-intro__item {
  width: 75%;
}

.sec-intro__item__left {
  width: 50%;
}
.sec-intro__item__right {
  flex: 1;
  margin-left: 1.5rem;
}

.reverse {
  flex-direction: row-reverse;
}

.sec-intro__item__right p {
  color: var(--secondary-text-color);
}

@media only screen and (max-width: 1024px) {
  .sec-intro {
    margin: 10px;
  }

  .sec-intro__item {
    width: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .sec-intro__item {
    flex-direction: column;
  }

  .sec-intro__item__left {
    width: 100%;
  }

  .sec-intro__item__right {
    margin-left: 0;
  }
}
</style>
