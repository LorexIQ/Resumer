<template>
  <div class="l-layout">
    <div class="l-layout__navbar">
      <div class="l-layout__navbar__header">
        <div class="l-layout__navbar__header__profile">
          <div class="l-layout__navbar__header__profile__photo">
            <img src="@/assets/img/profile_photo.jpg" alt="Photo profile" draggable="false">
          </div>
          <div class="l-layout__navbar__header__profile__title">
            <span>Murashko Dmitry</span>
            <span>Junior developer</span>
          </div>
          <lfa :icon="['fas', 'chevron-down']"/>
        </div>
        <div class="l-layout__navbar__header__contact">
          <div class="l-layout__navbar__header__contact__button">
            <lfa :icon="['fab', 'vk']"/>
          </div>
          <div class="l-layout__navbar__header__contact__division" />
          <div class="l-layout__navbar__header__contact__button">
            <lfa :icon="['fab', 'telegram']"/>
          </div>
          <div class="l-layout__navbar__header__contact__division" />
          <div class="l-layout__navbar__header__contact__button">
            <lfa :icon="['fab', 'github']"/>
          </div>
          <div class="l-layout__navbar__header__contact__division" />
          <div class="l-layout__navbar__header__contact__button">
            <lfa :icon="['fas', 'envelope']"/>
          </div>
        </div>
      </div>
    </div>
    <div class="l-layout__field">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  components: {}

}
</script>

<style lang="scss" scoped>
$light-font: #dfdef1;
$dark-light: #212130;
$dark-ultra-light: #2e2e42;
$dark: #171622;

$photo-size: 60px;
$br: 35px;

.l-layout {
  &__navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: calc(100vh - 40px);
    margin: 20px 0 20px 20px;
    border-radius: $br;
    background-color: $dark-light;
    color: #c7c6d5;
    &__header {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      padding: 25px 0 0 0;
      &__profile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
        border: 1px solid $dark-ultra-light;
        border-radius: $br;
        padding: 10px 20px;
        background-color: $dark-light;
        z-index: 1;
        &__photo {
          display: flex;
          justify-content: center;
          align-items: center;
          width: $photo-size;
          height: $photo-size;
          overflow: hidden;
          border-radius: 50px;
          img {
            width: $photo-size;
          }
        }
        &__title {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: Roboto, sans-serif;
          font-weight: 400;
          span {
            &:first-child {
              font-weight: 600;
              font-size: 18px;
            }
            &:last-child {
              font-size: 12px;
            }
          }
        }
      }
      &__contact {
        position: absolute;
        bottom: -60px;
        display: flex;
        align-items: flex-end;
        gap: 3px;
        height: 100px;
        width: 100%;
        border: 1px solid $dark-ultra-light;
        border-top: 0;
        border-radius: 0 0 $br $br;
        overflow: hidden;
        &__button {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 15px;
          width: 100%;
          height: 100%;
          font-size: 30px;
          svg {
            z-index: 1;
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            width: 100%;
            height: 0;
            background-color: $dark-ultra-light;
            transition: .3s;
          }
          //&:first-child {
          //  border-radius: 0 0 0 $br;
          //}
          //&:last-child {
          //  border-radius: 0 0 $br 0;
          //}
          &:hover {
            &::before {
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
