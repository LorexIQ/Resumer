<template>
  <div class="l-carousel">
    <div class="l-carousel__title">Gallery</div>
    <div class="l-carousel__box scroll-field">
      <div class="l-carousel__box__scroller">
        <div
          class="l-carousel__box__scroller__img"
          v-for="(img, index) in images"
          :key="index"
        >
          <img :src="img" alt="" draggable="false" @click="selectedImg = img">
        </div>
      </div>
    </div>
    <full-screen-image v-model="selectedImg"/>
  </div>
</template>

<script>
export default {
  name: "LCarouselImages",
  data() {
    return {
      selectedImg: ''
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.l-carousel {
  position: relative;
  height: 300px;
  padding: 10px;
  border: 3px solid var(--bg-element);
  border-radius: var(--br-sm);
  background-color: var(--bg-element);
  box-sizing: border-box;
  overflow: hidden;
  &:before {
    width: 20%;
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, rgba(44,44,65,0) 0%, rgba(44,44,65,1) 25%, rgba(240,240,240,0) 50%, rgba(240,240,240,1) 75%, rgba(240,240,240,0) 100%) var(--lbg-s-el-pos);
    background-size: 400% 100%;
    z-index: 1;
    transition: .3s;
    pointer-events: none;
  }
  &:after {
    width: 20%;
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(44,44,65,0) 0%, rgba(44,44,65,1) 25%, rgba(240,240,240,0) 50%, rgba(240,240,240,1) 75%, rgba(240,240,240,0) 100%) var(--lbg-s-el-pos);
    background-size: 400% 100%;
    z-index: 1;
    transform: scaleX(-1);
    transition: .3s;
    pointer-events: none;
  }
  &__title {
    font-weight: 500;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
  }
  &__box {
    width: 100%;
    height: 100%;
    border-radius: var(--br-mc);
    overflow-y: hidden;
    overflow-x: auto;
    scrollbar-width: thin;
    &__scroller {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 10px;
      height: 100%;
      &__img {
        height: 254px;
        & img {
          height: 100%;
          border-radius: var(--br-mc);
          transition: .3s;
          cursor: zoom-in;
          user-select: none;
          &:hover {
            transform: scale(1.02);
          }
        }
      }
    }
  }
}
</style>
