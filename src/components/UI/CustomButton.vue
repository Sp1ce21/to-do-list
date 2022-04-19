<template>
  <button :class="className">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    buttonText: [String],
    className: [String],
  },
};
</script>

<style scoped>
button {
  flex: 0 0 70px;
  background: rgb(255, 102, 0);
  color: white;
  cursor: pointer;
}
button:hover {
  background: rgb(255, 140, 64);
}
</style>
