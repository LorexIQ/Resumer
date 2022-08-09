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
$light-purple: #7a4de8;

.l-logo {
  font-size: 35px;
  padding-top: 25px;
  user-select: none;
    svg {
      color: $light-purple;
    }
    span {
      font-weight: 700;
    }
}
</style>
