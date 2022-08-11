<template>
  <div class="l-navbar">
    <logo />
    <div class="l-navbar__slider">
      <profile-card :user-data="userData"/>
      <pages :pages-data="pagesData"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    userData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    pagesData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.l-navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: calc(100vh - 40px);
  margin: 20px 0 20px 20px;
  border-radius: $br-bg;
  background-color: $dark-light;
  color: #c7c6d5;
  &__slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 25px);
    max-height: calc(100% - 125px);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: $dark $dark-ultra-light;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: $dark-ultra-light;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $dark;
      border-radius: 4px;
    }
  }
}
</style>
