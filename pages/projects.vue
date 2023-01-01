<template>
  <div class="l-projects">
    <div class="l-projects__box">
      <div
        class="l-projects__box__element"
        :class="{'l-projects__box__element--open': openedProjects.includes(index)}"
        v-for="(element, index) in GET_PROJECTS"
        :key="`projects-el-${index}`"
      >
        <div class="l-projects__box__element__box">
          <div
            class="l-projects__box__element__box__img"
            key="img"
          >
            <img :src="`/projects/img/${element.imgCarousel.folder}/${element.imgCarousel.default}.png`" alt="">
          </div>
          <div
            class="l-projects__box__element__box__title"
            key="title"
          >
            {{ element.name }}</div>
          <div
            class="l-projects__box__element__box__description"
            key="desc"
          >
            {{ element.description }}</div>
          <div
            class="l-projects__box__element__box__button"
            :class="{'l-projects__box__element__box__button--open': openedProjects.includes(index)}"
            @click="openedProjects.includes(index) ?
          openedProjects.splice(openedProjects.indexOf(index)) :
          openedProjects.push(index)"
            key="btn"
          >
            <lfa icon="caret-down"/>
          </div>
        </div>
        <transition-expand>
          <div
            class="l-projects__box__element__content"
            v-if="openedProjects.includes(index)"
          >
            <hr/>
            <carousel
              class="l-projects__box__element__content__carousel"
              :images="Array.from({length: element.imgCarousel.count}, (el, index) => `/projects/img/${element.imgCarousel.folder}/${index + 1}.png`)"
            />
            <div class="l-projects__box__element__content__authors">
              authors
            </div>
            <div class="l-projects__box__element__content__link">
              link
            </div>
            <div class="l-projects__box__element__content__version">
              version
            </div>
            <div class="l-projects__box__element__content__description">
              description
            </div>
            <div class="l-projects__box__element__content__date">
              date
            </div>
          </div>
        </transition-expand>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "projects",
  data() {
    return {
      openedProjects: []
    }
  },
  computed: {
    ...mapGetters([
      'GET_PROJECTS'
    ])
  },
  mounted() {
  },
  head() {
    return {
      title: 'Resumer: Projects'
    }
  }
}
</script>

<style lang="scss" scoped>
.l-projects {
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
    &__element {
      position: relative;
      background-color: var(--bg-s-el);
      border-radius: 15px;
      &, & * {
        transition: .3s;
      }
      &__box {
        display: grid;
        grid-template-areas: "IMG TITLE DESC BTN";
        grid-template-columns: 30% 30% calc(40% - 40px) 40px;
        width: 100%;
        padding-right: 10px;
        & > div {
          padding: 15px 0;
          &:first-child {
            padding: 0;
          }
        }
        &__img {
          grid-area: IMG;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          width: 100%;
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
          img {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        &__title {
          grid-area: TITLE;
          align-self: center;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 1px;
          line-height: 26px;
          padding-right: 25px;
          color: var(--c-stnd-text);
        }
        &__description {
          grid-area: DESC;
          align-self: center;
          flex-basis: 40%;
          display: flex;
          white-space: normal;
          line-height: 18px;
          font-weight: 300;
          color: var(--c-blur-text);
        }
        &__button {
          grid-area: BTN;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          width: 40px;
          height: 100%;
          cursor: pointer;
          color: var(--c-title-level);
          &--open {
            & svg {
              transform: scaleY(-1);
            }
          }
        }
      }
      &__content {
        display: grid;
        grid-template-areas: "HR HR HR"
                             "CAROUSEL CAROUSEL CAROUSEL"
                             "AUTHORS AUTHORS LINK"
                             ". . VERSION"
                             "DESCRIPTION DESCRIPTION DESCRIPTION"
                             ". . DATE";
        padding: 0 10px 10px;
        & hr {
          grid-area: HR;
          border-top: 1px solid var(--c-stacks-div);
          margin: 10px;
          transition: .3s;
        }
        &__carousel {
          grid-area: CAROUSEL;
        }
        &__authors {
          grid-area: AUTHORS;
        }
        &__link {
          grid-area: LINK;
        }
        &__version {
          grid-area: VERSION;
        }
        &__description {
          grid-area: DESCRIPTION;
        }
        &__date {
          grid-area: DATE;
        }
      }
    }
  }
}
</style>
