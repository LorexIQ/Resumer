<template>
  <div class="l-pages">
    <span
      v-for="(page, index) in pageData"
      :key="index"
    >
      <nuxt-link
        class="l-pages__link"
        active-class="l-pages__link--active"
        :to="page.link"
        draggable="false"
        v-bind:exact="page.exact ? page.exact : false"
      >
        <div class="l-pages__link__icon">
          <lfa :icon="['fas', page.icon]"/>
        </div>
        <span>{{ page.title }}</span>
        <lfa class="l-pages__link__arrow" :icon="['fas', 'caret-right']"/>
      </nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Pages",
  props: {
    pageData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$gray: #969ba0;
$white: #fff;
$dark-purple: #3c2e67;

$br: 15px;

.l-pages {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 40px;
  &__link {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    font-weight: 400;
    color: $gray;
    text-decoration: none;
    height: 60px;
    width: 300px;
    padding: 0 20px;
    border-radius: $br;
    transition: .3s;
    user-select: none;
    &:hover {
      &:not(.l-pages__link--active) {
        .l-pages {
          &__link {
            &__arrow {
              opacity: 1;
            }
          }
        }
      }
    }
    svg {
      transition: .3s;
      font-size: 30px;
    }
    &__arrow {
      position: absolute;
      right: 20px;
      font-size: 20px !important;
      opacity: 0;
      transition: .3s;
    }
    &--active {
      color: $white;
      .l-pages {
        &__link {
          &__arrow {
            color: $gray;
          }
        }
      }
      background-color: $dark-purple;
    }
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
    }
  }
}
</style>
