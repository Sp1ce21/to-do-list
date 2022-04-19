<template>
  <router-link :to="route.path" :class="itemStyle">{{
    route.title
  }}</router-link>
</template>

<script>
export default {
  data() {
    return {
      itemStyle: {
        item: true,
        active: false,
      },
    };
  },
  props: {
    route: [Object],
  },
  mounted() {
    if (this.$route.path === this.route.path) this.itemStyle.active = true;
    else this.itemStyle.active = false;
  },
  watch: {
    "$route.path"() {
      if (this.$route.path === this.route.path) this.itemStyle.active = true;
      else this.itemStyle.active = false;
    },
  },
};
</script>

<style scoped>
.item {
  flex: 0 0 auto;
  text-decoration: none;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  background: rgb(147, 147, 147);
  color: white;
  cursor: pointer;
  border-right: 1px solid rgb(118, 118, 118);
}
.item:last-child {
  border: none;
}
.item:hover {
  background: rgb(184, 184, 184);
  color: #000;
}
.active {
  background: rgb(255, 102, 0);
  color: white;
}
.active:hover {
  background: rgb(255, 102, 0);
  color: white;
}
</style>
