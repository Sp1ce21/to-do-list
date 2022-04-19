<template>
  <div class="app">
    <header-component />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "calibri";
}
input,
button {
  outline: none;
  border: none;
}
.app {
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
}
.container_1200 {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
