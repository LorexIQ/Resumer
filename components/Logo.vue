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
.l-logo {
  font-size: 35px;
  padding: 25px 0;
  user-select: none;
  svg {
    color: var(--light-purple);
  }
  span {
    color: var(--c-text-logo);
    font-weight: 700;
    transition: .3s;
  }
}
</style>
