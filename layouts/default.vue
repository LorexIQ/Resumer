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
        }
      ]
    }
  },
  created() {
    this.SET_NEWS();
    this.SET_PROJECTS();
    this.SET_USER();
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
</style>
