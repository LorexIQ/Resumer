<template>
  <div class="l-error">
    <div class="l-error__code">{{ error.statusCode }}</div>
    <div class="l-error__message">{{ error.message }}</div>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {
    error: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.l-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 150px;
  &__code {
    font-size: 70px;
    font-weight: 600;
    color: var(--light-purple);
  }
  &__message {
    font-weight: 500;
    text-align: center;
    color: var(--c-stnd-text);
  }
}
</style>
