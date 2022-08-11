<template>
  <div class="l-layout">
    <div class="l-layout__navbar">
      <logo />
      <div class="l-layout__navbar__slider">
        <profile-card :user-data="userData"/>
        <pages :page-data="navbarPages"/>
      </div>
    </div>
    <div ref="page" class="l-layout__field">
      <div class="l-layout__field__title">
        <span :class="{'l-layout__field__title--animate': changingTitle}">
          {{pageTitle}}
        </span>
        <div
          class="l-layout__field__title__theme"
          @click="themeSelect"
        >
          <template
            v-for="(mode, index) in themeModes"
          >
            <transition name="theme-switch-icon">
              <lfa :icon="['fas', mode]" v-if="themeModeSelected === index"/>
            </transition>
          </template>
        </div>
      </div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      pageTitle: '',
      changingTitle: false,
      titleDelayId: null,

      themeModes: [
        'sun',
        'moon',
        'a'
      ],
      themeModeSelected: 0,

      userData: {
        name: 'Dmitry',
        surname: 'Murashko',
        patronymic: 'Sergeevich',
        birthday: '29.12.2002',
        birthdayTimestamp: null,
        level: 'Junior developer',
        workplace: 'Noosphere Software LLC',
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
    this.pageTitle = this.titlePage;
  },
  computed: {
    titlePage() {
      return this.navbarPages.filter(res => res.name === this.$nuxt.$route.name)[0].title;
    }
  },
  watch: {
    titlePage() {
      this.changePageAnimation(this.titlePage)
    }
  },
  methods: {
    changePageAnimation(newTitle) {
      if (this.changingTitle) {
        this.changingTitle = false;
        clearTimeout(this.titleDelayId);
      }
      setTimeout(() => {
        this.changingTitle = true;
        this.titleDelayId = setTimeout(() => {
          this.pageTitle = newTitle;
          this.titleDelayId = setTimeout(() => {
            this.changingTitle = false;
          }, 700);
        }, 300);
      });
    },
    themeSelect() {
      this.themeModeSelected++;
      if (this.themeModeSelected > 2) this.themeModeSelected = 0;
    }
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
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100px;
      user-select: none;
      span {
        overflow: hidden;
        font-size: 35px;
        font-weight: 500;
        letter-spacing: -1px;
      }
      &--animate {
        animation: page-title 1s;
        animation-iteration-count: 1;
      }
      &__theme {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: $light-purple;
        border-radius: 15px;
        cursor: pointer;
        transition: .3s;
        svg {
          position: absolute;
          font-size: 20px;
        }
        &:hover {
          background-color: $light-dark-purple;
        }
      }
    }
  }
}
@keyframes page-title {
  0% {
    max-width: 150px;
  }
  30% {
    max-width: 0;
  }
  50% {
    max-width: 0;
  }
  100% {
    max-width: 150px;
  }
}

.theme-switch-icon {
  &-enter-active, &-leave-active {
    transition: .3s;
  }
  &-enter, &-leave-to {
    transform: scale(0.5);
    opacity: 0;
  }
  &-leave, &-enter-to {
    opacity: 1;
  }
}
</style>
