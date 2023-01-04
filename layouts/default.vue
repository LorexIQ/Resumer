<template>
  <div class="l-layout">
    <navbar :user-data="GET_USER" :pages-data="navbarPages"/>
    <div ref="page" class="l-layout__field">
      <sidebar :pages-data="navbarPages"/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "default",
  data() {
    return {
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
        },
        {
          link: '/skills',
          title: 'Skills',
          name: 'skills',
          icon: 'chart-simple'
        }
      ]
    }
  },
  created() {
    this.SET_NEWS();
    this.SET_PROJECTS();
    this.SET_USER();
    document.addEventListener('click', () => {
      window.scrollTo(0,1);
    })
  },
  computed: {
    ...mapGetters([
      'GET_USER'
    ])
  },
  methods: {
    ...mapActions([
      'SET_NEWS',
      'SET_USER',
      'SET_PROJECTS'
    ])
  }
}
</script>

<style lang="scss" scoped>
.l-layout {
  display: flex;
  max-width: 1920px;
  min-width: 1100px;
  margin: 0 auto;
  gap: 40px;
  &__field {
    padding: 20px 40px 20px 0;
    width: calc(100% - 410px);
  }
}
@media (max-width: 1000px) {
  .l-layout {
    min-width: 300px;
    height: calc(100% - 70px);
    & .l-navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      z-index: 5;
      box-sizing: border-box;
    }
    & .l-sidebar {
      align-items: flex-start;
      height: 70px;
    }
    &__field {
      padding: 20px;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
