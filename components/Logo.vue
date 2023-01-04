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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 25px 0;
  user-select: none;
  transition: .3s;
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
