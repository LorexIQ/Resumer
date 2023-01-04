<template>
  <div class="l-projects">
    <div class="l-projects__box scroll-field">
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
              :name="element.name"
            />
            <div class="l-projects__box__element__content__authors">
              Authors:
              <a
                class="l-projects__box__element__content__authors__author"
                v-for="(author, index_a) in element.authors"
                :key="index_a"
                :href="author.link"
                target="_blank"
              >
                <div class="l-projects__box__element__content__authors__author__img">
                  <img :src="author.img" alt="">
                </div>
                <div class="l-projects__box__element__content__authors__author__name">
                  {{ author.name }}
                </div>
              </a>
            </div>
            <div class="l-projects__box__element__content__status">
              Status:
              <template v-if="element.status === 'dev'">
                <lfa icon="code"/>
                <span>In Development</span>
              </template>
              <template v-else-if="element.status === 'end'">
                <lfa icon="check"/>
                <span>Finished</span>
              </template>
              <template v-else-if="element.status === 'throw'">
                <lfa icon="box-archive"/>
                <span>Abandoned</span>
              </template>
              <template v-else>
                <lfa icon="times"/>
                <span>Unknown</span>
              </template>
            </div>
            <a
              class="l-projects__box__element__content__link"
              :href="element.link"
              target="_blank"
            >
              <lfa icon="folder"/>
              <span>Link Project</span>
            </a>
            <div class="l-projects__box__element__content__version">
              v{{ element.version }}
            </div>
            <div class="l-projects__box__element__content__description">
              Description:
              <div class="l-projects__box__element__content__description__content">{{ element.description }}</div>
            </div>
            <div class="l-projects__box__element__content__date">
              {{new Date(element.timestamp).toLocaleDateString('en-US', dateFilter)}}
              &mdash;
              <template v-if="element.timestampEnd">
                {{new Date(element.timestampEnd).toLocaleDateString('en-US', dateFilter)}}
              </template>
              <template v-else>
                N/A
              </template>
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
      openedProjects: [],
      dateFilter: { day: 'numeric', month: 'short', year: 'numeric' }
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
    gap: 5px;
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
          position: relative;
          align-self: center;
          flex-basis: 40%;
          display: flex;
          max-height: 80px;
          overflow: hidden;
          white-space: normal;
          line-height: 18px;
          font-weight: 300;
          color: var(--c-blur-text);
          &:before {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(44,44,65,0) 0%, rgba(44,44,65,1) 25%, rgba(240,240,240,0) 50%, rgba(240,240,240,1) 75%, rgba(240,240,240,0) 100%) 0 var(--lbg-s-el-pos);
            background-size: 100% 400%;
            transition: .3s;
          }
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
          &:hover {
            & svg {
              color: var(--c-title-name);
            }
          }
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
                             "STATUS . VERSION"
                             "DESCRIPTION DESCRIPTION DESCRIPTION"
                             ". . DATE";
        padding: 0 20px 20px;
        & hr {
          grid-area: HR;
          border-top: 1px solid var(--c-stacks-div);
          margin: 10px;
          transition: .3s;
        }
        &__carousel {
          grid-area: CAROUSEL;
          margin: 10px 0;
        }
        &__authors {
          grid-area: AUTHORS;
          display: flex;
          gap: 10px;
          align-items: center;
          &__author {
            font-weight: 500;
            display: flex;
            gap: 10px;
            align-items: center;
            width: max-content;
            padding: 5px 10px;
            border-radius: var(--br-sm);
            background-color: var(--bg-element);
            user-select: none;
            cursor: pointer;
            text-decoration: none;
            color: var(--c-stnd-text);
            & img {
              width: 30px;
              height: 30px;
              border-radius: var(--br-sm);
            }
            &:hover {
              transform: scale(1.03);
            }
          }
        }
        &__status {
          grid-area: STATUS;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          & svg {
            color: var(--light-purple);
          }
          & span {
            font-weight: 500;
          }
        }
        &__link {
          grid-area: LINK;
          font-weight: 500;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border: 2px solid var(--bg-element);
          border-radius: var(--br-sm);
          color: var(--c-stnd-text);
          background-color: var(--bg-element);
          text-decoration: none;
          user-select: none;
          cursor: pointer;
          &:hover {
            color: var(--c-sd-text);
            background-color: var(--bg-sd-page-el);
          }
        }
        &__version {
          grid-area: VERSION;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          color: var(--c-title-level);
        }
        &__description {
          grid-area: DESCRIPTION;
          margin-top: 8px;
          &__content {
            padding-top: 8px;
            white-space: pre-wrap;
          }
        }
        &__date {
          grid-area: DATE;
          justify-self: end;
          flex-basis: 10%;
          font-size: 12px;
          color: var(--c-el-time);
          white-space: nowrap;
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .l-projects {
    width: 100%;
    height: 100%;
    max-height: calc(100% - 70px);
    padding: 20px 10px 20px 20px;
    border-radius: var(--br-md);
    &__box {
      width: 100%;
      max-height: 100%;
      &__element {
        width: 100%;
        &__box {
          padding-right: 0;
          grid-template-areas: "IMG IMG" "TITLE BTN" "DESC DESC";
          grid-template-columns: calc(100% - 40px) 40px;
          &__img {
            min-width: 100%;
            border-radius: var(--br-sm);
            border: 3px solid var(--bg-s-el);
            & img {
              position: relative;
            }
            &:before {
              display: none;
            }
          }
          &__title, &__description {
            padding: 5px 10px !important;
          }
          &__description {
            &:before {
              left: 10px;
              right: 10px;
              width: auto;
            }
          }
        }
        &__content {
          grid-template-areas: "HR"
                             "CAROUSEL"
                             "AUTHORS"
                             "STATUS"
                             "LINK"
                             "VERSION"
                             "DESCRIPTION"
                             "DATE";
          grid-auto-columns: calc(100% - 20px);
          width: 100%;
          margin: 0 10px;
          padding: 0 0 10px;
          &__link {
            padding: 5px 10px;
          }
        }
      }
    }
  }
}
</style>
