<template>
  <div class="l-news">
    <div class="l-news__box">
      <div
        v-for="(element, index) of GET_NEWS"
        :key="`news-el-${index}`"
        class="l-news__box__element"
      >
        <div class="l-news__box__element__img">
          <img
            v-if="element.banner"
            :src="`/news/img/${element.banner}`"
            :alt="element.banner"
          >
          <span
            class="l-news__box__element__img__logo"
            v-else
          >
            <lfa :icon="['fas', 'sheet-plastic']"/>
            <span>Resumer</span>
          </span>
        </div>
        <div class="l-news__box__element__title">{{element.title}}</div>
        <div class="l-news__box__element__content">
          <span>
            {{element.content}}
          </span>
        </div>
        <div class="l-news__box__element__time">{{new Date(element.timestamp).toLocaleDateString('en-US', dateFilter)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Resumer: News',
    }
  },
  data() {
    return {
      dateFilter: { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric', hour12: false }
    }
  },
  computed: {
    ...mapGetters([
      'GET_NEWS'
    ])
  }
}
</script>

<style lang="scss" scoped>
.l-news {
  width: 100%;
  height: calc(100vh - 140px);
  background-color: var(--bg-element);
  border-radius: var(--br-bg);
  padding: 25px 15px 25px 25px;
  box-shadow: 0 0 15px 0 var(--bs-c-element);
  transition: .3s;
  &__box {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-right: 10px;
    max-height: calc(100vh - 190px);
    border-radius: var(--br-mc);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--bg-page) var(--c-border);
    transition: .3s;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--c-border);
      border-radius: 4px;
      transition: .3s;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--bg-page);
      border-radius: 4px;
      transition: .3s;
    }
    &__element {
      position: relative;
      background-color: var(--bg-s-el);
      display: flex;
      justify-content: space-between;
      border-radius: 15px;
      padding-right: 15px;
      &, & * {
        transition: .3s;
      }
      & > div {
        padding: 15px 0;
        &:first-child {
          padding: 0;
        }
      }
      &__img {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-basis: 25%;
        max-width: 300px;
        border: 3px solid var(--bg-s-el);
        border-right: 0;
        border-radius: var(--br-mc) 0 0 var(--br-mc);
        background-color: var(--bg-element);
        transition: .3s;
        &:before {
          width: 100%;
          height: 100%;
          content: '';
          display: block;
          position: absolute;
          background: linear-gradient(90deg, rgba(44,44,65,0) 0%, rgba(44,44,65,1) 25%, rgba(240,240,240,0) 50%, rgba(240,240,240,1) 75%, rgba(240,240,240,0) 100%) var(--lbg-s-el-pos);
          background-size: 400% 100%;
          z-index: 1;
          transition: .3s;
        }
        &__logo {
          font-size: 30px;
          padding: 15px;
          width: 100%;
          text-align: center;
          user-select: none;
          white-space: nowrap;
          svg {
            color: var(--light-purple);
          }
          span {
            color: var(--c-text-logo);
            font-weight: 700;
            transition: .3s;
          }
        }
        img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      &__title {
        align-self: center;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 1px;
        flex-basis: 25%;
        white-space: pre-wrap;
        line-height: 26px;
        padding-right: 25px;
      }
      &__content {
        flex-basis: 40%;
        display: flex;
        align-items: center;
        white-space: normal;
        line-height: 18px;
        font-weight: 300;
        color: var(--c-blur-text);
      }
      &__time {
        display: flex;
        justify-content: flex-end;
        align-self: flex-end;
        flex-basis: 10%;
        font-size: 12px;
        color: var(--c-el-time);
        white-space: nowrap;
      }
    }
  }
}
</style>
