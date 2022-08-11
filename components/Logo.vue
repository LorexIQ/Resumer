<template>
  <div class="l-logo">
    <lfa :icon="['fas', 'sheet-plastic']"/>
    <span>Resumer</span>
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.l-logo {
  font-size: 35px;
  padding: 25px 0;
  user-select: none;
    svg {
      color: $light-purple;
    }
    span {
      font-weight: 700;
    }
}
</style>
