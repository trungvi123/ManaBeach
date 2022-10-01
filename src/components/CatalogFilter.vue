<template>
  <div class="container">
          <div class="dropdown">
            <button
              type="button"
              class="btn mt-2 btn-secondary dropdown-toggle"
              data-toggle="dropdown"
            >
              {{ optioneSelect }}
            </button>
            <div class="dropdown-menu">
              <div
                @click="
                  () => {
                    optioneSelect = op.title;
                  }
                "
                class="dropdown-item"
                v-for="op in optineSort"
                :key="op.id"
              >
                {{ op.title }}
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import optineSort from "@/assets/fake-data/optineSort.js";

export default {
    data() {
    return {
      optineSort,
      optioneSelect: "Thứ tự mặc định",
    };
  },
}
</script>

<style>
.dropdown-toggle {
  min-width: 266px;
  text-align: left !important;
}
</style>