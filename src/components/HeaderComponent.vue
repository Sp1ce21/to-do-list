<template>
  <header>
    <div class="container_1200">
      <div class="row">
        <header-item
          v-for="route in myRoutes"
          :key="route.title"
          :route="route"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { routes } from "@/router/router";
import HeaderItem from "@/components/HeaderItem.vue";
export default {
  components: {
    HeaderItem,
  },
  data() {
    return {
      myRoutes: routes,
    };
  },
};
</script>

<style scoped>
header {
  height: 50px;
  background: rgb(147, 147, 147);
  border-bottom: rgb(230, 230, 230) 1px solid;
}
.row {
  display: flex;
}
</style>
