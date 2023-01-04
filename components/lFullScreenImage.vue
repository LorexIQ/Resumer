<template>
  <transition name="fade-out">
    <div
      class="full-watch"
      v-if="Number.isInteger(selectedImg)"
      @click="$emit('input', null)"
    >
      <div class="full-watch__box">
        <transition name="fade">
          <div class="full-watch__box__info" v-if="!hideTitle">
            <span>{{ name }}</span>
            <span>{{ selectedImg + 1 }}<p>/{{ images.length }}</p></span>
          </div>
        </transition>
        <div class="full-watch__box__button full-watch__box__button--left" @click.stop="activeMoveImage($event, 'left')">
          <lfa icon="caret-left"/>
        </div>
        <div class="full-watch__box__img">
          <img
            ref="fullImg"
            draggable="false"
            :src="images[selectedImg]"
            alt=""
          >
        </div>
        <div class="full-watch__box__button full-watch__box__button--right" @click.stop="activeMoveImage($event, 'right')">
          <lfa icon="caret-right"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "IFullScreenImage",
  data() {
    return {
      selectedImg: null,
      fac: new (require('fast-average-color').FastAverageColor)(),
      hideTitle: true,
      hideTitleTimeoutId: null
    }
  },
  props: {
    value: {
      type: Number,
      default: null
    },
    images: {
      type: Array,
      default: () => {
        return []
      }
    },
    name: {
      type: String,
      required: true
    }
  },
  watch: {
    value() {
      this.selectedImg = this.value
    },
    selectedImg() {
      this.hideTitle = false
      clearTimeout(this.hideTitleTimeoutId)
      this.hideTitleTimeoutId = setTimeout(() => {
        this.hideTitle = true
      }, 4000)
    }
  },
  updated() {
    if (this.selectedImg) {
      let cardObject = this.$refs.fullImg
      this.fac.getColorAsync(cardObject)
        .then(res => {
          cardObject.style.backgroundColor = res.hex
        })
    }
  },
  mounted() {
    this.selectedImg = this.value
  },
  methods: {
    activeMoveImage(event, mode) {
      if (mode === 'left' && this.selectedImg > 0) {
        this.selectedImg--
      } else if (mode === 'right' && this.selectedImg < this.images.length - 1) {
        this.selectedImg++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.full-watch {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: zoom-out;
  z-index: 6;
  &__box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: var(--bg-element);
    border-radius: var(--br-md);
    overflow: hidden;
    &__info {
      position: absolute;
      top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 70px;
      padding: 5px 25px;
      background-color: var(--bg-element-opos-3);
      & > span {
        &:first-child {
          font-size: 24px;
          font-weight: 600;
        }
        &:last-child {
          font-size: 24px;
          font-weight: 600;
          & p {
            font-size: 16px;
            font-weight: 500;
            display: inline;
            color: var(--c-stnd-text);
          }
        }
      }
    }
    &__img {
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      border-radius: var(--br-sm);
      overflow: hidden;
      user-select: none;
      transition: .3s;
      & img {
        width: 100%;
        object-fit: contain;
        height: 100%;
      }
    }
    &__button {
      position: absolute;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 80px;
      border-radius: var(--br-mc);
      color: var(--light-purple);
      background-color: var(--bg-element);
      cursor: pointer;
      transition: .3s;
      &--left {
        left: 0;
        &:active {
          transform: translateX(-10px);
        }
      }
      &--right {
        right: 0;
        &:active {
          transform: translateX(10px);
        }
      }
    }
  }
}
.fade-out {
  &-enter-active, &-leave-active {
    transition: .3s;
  }
  &-enter-to, &-leave {
    opacity: 1;
  }
  &-enter, &-leave-to {
    opacity: 0;
    transform: scale(.95);
  }
}
.fade {
  &-enter-active, &-leave-active {
    transition: .3s;
  }
  &-enter-to, &-leave {
    opacity: 1;
  }
  &-enter, &-leave-to {
    opacity: 0;
  }
}
</style>
