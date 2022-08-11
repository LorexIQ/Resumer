<template>
  <div class="l-card">
    <div class="l-card__profile">
      <div
        class="l-card__profile__header"
        :class="expandedProfileContent ? 'l-card__profile__header--max' : ''"
      >
        <div
          class="l-card__profile__header__photo"
          :class="{'l-card__profile__header__photo--open': expandedProfileContent}"
        >
          <transition name="profile-photo-span">
            <span v-if="expandedProfileContent">Card</span>
          </transition>
          <div class="l-card__profile__header__photo__content">
            <img src="@/assets/img/profile_photo.jpg" alt="Photo profile" draggable="false">
          </div>
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
          <span>
            <p>Education:</p>
            <p>{{userData.education}}</p>
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
@import "@/assets/css/variables.scss";

.l-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-bottom: 60px;
  &__profile {
    border: 1px solid $dark-ultra-light;
    border-radius: $br-md;
    background-color: $dark-light;
    width: 100%;
    z-index: 1;
    &__header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 10px 20px;
      transition: .3s;
      &__photo {
        transition: .3s;
        span {
          position: absolute;
          top: 10px;
          left: 128px;
          user-select: none;
          font-size: 20px;
          font-weight: 500;
          height: 60px;
          display: flex;
          align-items: center;
        }
        &__content{
          display: flex;
          justify-content: center;
          align-items: center;
          width: $photo-size;
          height: $photo-size;
          overflow: hidden;
          border-radius: $br-md;
          user-select: none;
          transition: .3s;
          img {
            transition: .3s;
            width: $photo-size;
          }
        }
        &--open {
          margin-top: 60px;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-left: 18px;
        }
      }
      &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 140px;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        white-space: nowrap;
        span {
          user-select: none;
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
        align-self: flex-start;
        margin-top: 20px;
        font-size: 20px;
        min-width: 18px;
        height: 20px;
        cursor: pointer;
        user-select: none;
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
        gap: 0;
        .l-card {
          &__profile {
            &__header {
              &__photo {
                &__content {
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
    border-radius: 0 0 $br-md $br-md;
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
          border-radius: 0 0 0 $br-md;
        }
      }
      &:last-child {
        &::before {
          border-radius: 0 0 $br-md 0;
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
  &-photo-span {
    &-enter-active, &-leave-active {
      transition: .3s ease-in-out;
      overflow: hidden;
    }
    &-enter, &-leave-to {
      max-height: 0;
      opacity: 0;
    }
    &-enter-to, &-leave {
      max-height: 60px;
    }
  }
  &-title-animate {
    &-enter-active, &-leave-active {
      transition: .3s;
      overflow: hidden;
    }
    &-enter, &-leave-to {
      opacity: 0;
      min-width: 0;
      max-width: 0;
    }
    &-enter-to, &-leave {
      opacity: 1;
    }
  }
  &-content-animate {
    &-enter-active {
      transition: .3s ease;
    }
    &-leave-active {
      transition: .3s ease-out;
    }
    &-enter, &-leave-to {
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>
