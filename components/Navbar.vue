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
.l-navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 15px 0 var(--bs-c-element);
  width: 350px;
  height: calc(100vh - 40px);
  margin: 20px 0 20px 20px;
  border-radius: var(--br-bg);
  background-color: var(--bg-element);
  transition: .3s;
  &__slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 25px);
    max-height: calc(100% - 125px);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--bg-page) var(--c-border);
    color: var(--c-el-nv-page);
    transition: .3s;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--c-border);
      border-radius: 4px;
      transition: .3s;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--bg-page);
      border-radius: 4px;
      transition: .3s;
    }
  }
}
</style>
