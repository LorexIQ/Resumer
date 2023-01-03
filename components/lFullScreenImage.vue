<template>
  <transition name="fade">
    <div
      class="full-watch"
      v-if="selectedImg.length"
      @click="$emit('input', '')"
    >
      <div class="full-watch__box">
        <div class="full-watch__box__img">
          <img
            ref="fullImg"
            draggable="false"

            :src="selectedImg"
            alt=""
          >
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
      selectedImg: '',
      fac: new (require('fast-average-color').FastAverageColor)()
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value() {
      this.selectedImg = this.value
    }
  },
  updated() {
    if (this.selectedImg.length) {
      let cardObject = this.$refs.fullImg
      this.fac.getColorAsync(cardObject)
        .then(res => {
          cardObject.style.backgroundColor = res.hex
        })
    }
  },
  mounted() {
    this.selectedImg = this.value
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
  z-index: 2;
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: var(--bg-element);
    border-radius: 10px;
    overflow: hidden;
    &__img {
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      border-radius: 5px;
      overflow: hidden;
      user-select: none;
      & img {
        width: 100%;
        object-fit: contain;
        height: 100%;
      }
    }
  }
  @media (max-width: 1099px) and (min-width: 300px) {
    &__box {
      height: 100%;
    }
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
    transform: scale(.95);
  }
}
</style>
