<template>
  <div class="l-pages">
    <nuxt-link
      active-class="l-pages__link--active"
      class="l-pages__link"
      to="/"
      exact
    >
      <lfa :icon="['fas', 'newspaper']"/>
      <span>Last News</span>
      <lfa class="l-pages__link__arrow" :icon="['fas', 'caret-right']"/>
    </nuxt-link>
    <nuxt-link
      active-class="l-pages__link--active"
      class="l-pages__link"
      to="/stacks"
    >
      <lfa :icon="['fas', 'cubes']"/>
      <span>Stacks</span>
      <lfa class="l-pages__link__arrow" :icon="['fas', 'caret-right']"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Pages"
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
  }
}
</style>
