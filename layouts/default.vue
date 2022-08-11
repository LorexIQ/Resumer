<template>
  <div class="l-layout">
    <navbar :user-data="userData" :pages-data="navbarPages"/>
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
        education: 'Studying at BSITU',
        links: [
          {
            icon: ['fab', 'vk'],
            link: 'https://vk.com/whedmitryel'
          },
          {
            icon: ['fab', 'telegram'],
            link: 'https://t.me/LorexIQ'
          },
          {
            icon: ['fab', 'github'],
            link: 'https://github.com/LorexIQ'
          },
          {
            icon: ['fas', 'envelope'],
            link: 'mailto: murashko100500@gmail.com'
          }
        ]
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
  &__field {
    padding: 20px 40px 20px 0;
    width: calc(100% - 430px);
  }
}
</style>
