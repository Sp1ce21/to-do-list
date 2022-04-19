<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="className"
    :value="modelValue"
    @input="changeInput"
  />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: [String, Number],
    placeholder: [String],
    type: {
      type: String,
      default: "text",
    },

    className: [Object],
  },
  methods: {
    changeInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
input {
  flex: 1 1 auto;
  padding: 10px;
  border: 1px solid rgba(66, 68, 90, 1);
  -webkit-box-shadow: -2px 2px 24px -15px rgba(66, 68, 90, 1);
  -moz-box-shadow: -2px 2px 24px -15px rgba(66, 68, 90, 1);
  box-shadow: -2px 2px 24px -15px rgba(66, 68, 90, 1);
}
</style>
