<template>
  <div class="l-card">
    <div class="l-card__profile">
      <div
        class="l-card__profile__header"
        :class="expandedProfileContent ? 'l-card__profile__header--max' : ''"
      >
        <div class="l-card__profile__header__photo">
          <img src="@/assets/img/profile_photo.jpg" alt="Photo profile" draggable="false">
        </div>
        <transition name="profile-title-animate">
          <div
            class="l-card__profile__header__title"
            v-if="!expandedProfileContent"
          >
            <span>{{userData.surname}} {{userData.name}}</span>
            <span>{{userData.level}}</span>
          </div>
        </transition>
        <div
          class="l-card__profile__header__opener"
          :class="expandedProfileContent ? 'l-card__profile__header__opener--open' : ''"
        >
          <lfa
            @click="expandedProfileContent = !expandedProfileContent"
            :icon="['fas', 'caret-down']"
          />
        </div>
      </div>
      <transition name="profile-content-animate">
        <div
          class="l-card__profile__content"
          v-if="expandedProfileContent"
        >
          <p class="l-card__profile__content__full-name">
            {{userData.name}} {{userData.surname}} {{userData.patronymic}}
          </p>
          <p class="l-card__profile__content__level">
            {{userData.level}}
          </p>
          <span>
                <p>Age:</p>
                <p>{{Math.floor((Date.now() - userData.birthdayTimestamp) / 31536000000)}} y.o.</p>
              </span>
          <span>
                <p>Workplace:</p>
                <p>{{userData.workplace}}</p>
              </span>
        </div>
      </transition>
    </div>
    <div class="l-card__contact">
      <div class="l-card__contact__button">
        <lfa :icon="['fab', 'vk']"/>
      </div>
      <div class="l-card__contact__division" />
      <div class="l-card__contact__button">
        <lfa :icon="['fab', 'telegram']"/>
      </div>
      <div class="l-card__contact__division" />
      <div class="l-card__contact__button">
        <lfa :icon="['fab', 'github']"/>
      </div>
      <div class="l-card__contact__division" />
      <div class="l-card__contact__button">
        <lfa :icon="['fas', 'envelope']"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      expandedProfileContent: false
    }
  },
  props: {
    userData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$light-font: #dfdef1;
$dark-light: #212130;
$dark-ultra-light: #2e2e42;
$dark: #171622;
$dark-purple: #3c2e67;
$light-purple: #7a4de8;
$white: #ffffff;

$photo-size-max: 200px;
$photo-size: 60px;
$br: 25px;

.l-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 25px 0 0 0;
  margin-bottom: 60px;
  &__profile {
    border: 1px solid $dark-ultra-light;
    border-radius: $br;
    background-color: $dark-light;
    width: 100%;
    z-index: 1;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 10px 20px;
      transition: .3s;
      &__photo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: $photo-size;
        height: $photo-size;
        overflow: hidden;
        border-radius: $br;
        user-select: none;
        transition: .3s;
        img {
          transition: .3s;
          width: $photo-size;
        }
      }
      &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 140px;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        user-select: none;
        white-space: nowrap;
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
      &__opener {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        width: 18px;
        height: 20px;
        cursor: pointer;
        svg {
          transition: .3s;
        }
        &--open {
          svg {
            transform: scaleY(-1);
          }
        }
        &:hover {
          svg {
            color: $white;
          }
        }
      }
      &--max {
        padding-top: 20px;
        .l-card {
          &__profile {
            &__header {
              &__photo {
                width: $photo-size-max;
                height: $photo-size-max;
                img {
                  width: $photo-size-max;
                }
              }
            }
          }
        }
      }
    }
    &__content {
      max-height: 180px;
      padding: 0 20px 20px 20px;
      font-size: 14px;
      overflow: hidden;
      span {
        display: flex;
        gap: 5px;
        p {
          font-weight: 300;
          margin: 0;
          &:last-child {
            font-weight: 600;
          }
        }
      }
      p {
        margin: 0;
        text-align: center;
      }
      &__full-name {
        font-size: 24px;
        font-weight: 600;
        line-height: 25px;
      }
      &__level {
        font-weight: 300;
        padding-bottom: 10px;
      }
    }
  }
  &__contact {
    position: absolute;
    bottom: -60px;
    display: flex;
    align-items: flex-end;
    gap: 1px;
    height: 100px;
    width: 100%;
    border: 1px solid $dark-ultra-light;
    border-top: 0;
    border-radius: 0 0 $br $br;
    overflow: hidden;
    cursor: pointer;
    &__button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 15px;
      width: 100%;
      height: 100%;
      font-size: 30px;
      transition: .3s;
      svg {
        z-index: 1;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 0;
        background-color: $dark-purple;
        transition: .3s;
      }
      &:first-child {
        &::before {
          border-radius: 0 0 0 $br;
        }
      }
      &:last-child {
        &::before {
          border-radius: 0 0 $br 0;
        }
      }
      &:hover {
        color: $white;
        &::before {
          height: 100%;
        }
      }
    }
  }
}
.profile {
  &-title-animate {
    &-enter-active, &-leave-active {
      transition: .3s;
      overflow: hidden;
    }
    &-enter, &-leave-to {
      opacity: 0.5;
      width: 0;
      transform: translateX(-20px);
    }
    &-enter-to, &-leave {
      opacity: 1;
    }
  }
  &-content-animate {
    &-enter-active, &-leave-active {
      transition: .3s;
    }
    &-enter, &-leave-to {
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>
