<template>
  <div class="l-layout">
    <div class="l-layout__navbar">
      <logo />
      <div class="l-layout__navbar__slider">
        <profile-card :user-data="userData"/>
        <pages :pages-data="navbarPages"/>
      </div>
    </div>
    <div ref="page" class="l-layout__field">
      <sidebar :pages-data="navbarPages"/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      userData: {
        name: 'Dmitry',
        surname: 'Murashko',
        patronymic: 'Sergeevich',
        birthday: '29.12.2002',
        birthdayTimestamp: null,
        level: 'Junior developer',
        workplace: 'Noosphere Software LLC',
        education: 'Studying at BSITU'
      },
      navbarPages: [
        {
          link: '/',
          title: 'News',
          name: 'index',
          exact: true,
          icon: 'newspaper'
        },
        {
          link: '/projects',
          title: 'Projects',
          name: 'projects',
          icon: 'bars-progress'
        },
        {
          link: '/stacks',
          title: 'Stacks',
          name: 'stacks',
          icon: 'cubes'
        }
      ]
    }
  },
  mounted() {
    let dateParts = this.userData.birthday.split('.');
    this.userData.birthdayTimestamp = new Date(dateParts[2] - 0, dateParts[1] - 1, dateParts[0] - 0);
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.l-layout {
  display: flex;
  gap: 40px;
  &__navbar {
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
  &__field {
    padding: 20px 40px 20px 0;
    width: calc(100% - 430px);

  }
}
</style>
