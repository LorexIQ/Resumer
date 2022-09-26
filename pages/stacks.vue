<template>
  <div class="l-stacks">
    <div class="l-stacks__list">
      <span>List Stacks</span>
      <div class="scroll-field">
        <div class="l-stacks__list__box">
          <div
            v-for="(stack, index) in GET_STACKS"
            :key="`stacks-element-${index}`"
            class="l-stacks__list__box__element"
          >
            <div
              class="l-stacks__list__box__element__header"
            >
              <div>
                <div class="l-stacks__list__box__element__header__img">
                  <img :src="`/stacks/${stack.lang}.png`" :alt="stack.lang" draggable="false">
                </div>
                <span>{{stack.name}}</span>
              </div>
              <div>
                <div
                  v-if="stack.frameworks"
                  :ref="`header-frameworks-${index}`"
                  class="l-stacks__list__box__element__header__frameworks"
                  @mousedown="scrollStart($event, index)"
                  @mouseup="scrollState = null"
                  @mouseleave="scrollState = null"
                  @mousemove="scrollState && scrollMouseMenuFrameworks($event)"
                >
                  <div
                    v-for="(framework, jIndex) in stack.frameworks"
                    :key="`stacks-element-${index}-header-frameworks-${jIndex}`"
                    class="l-stacks__list__box__element__header__frameworks__img"
                  >
                    <img :src="`/stacks/${framework.lang}.png`" :alt="framework.lang" draggable="false">
                  </div>
                </div>
                <div
                  v-if="stack.frameworks"
                  class="l-stacks__list__box__element__header__expand"
                  :class="{'l-stacks__list__box__element__header__expand--open': expandedGroups.includes(stack.lang)}"
                  @click="actionGroup(stack.lang)"
                >
                  <lfa :icon="['fas', 'caret-down']"/>
                </div>
                <div class="l-stacks__list__box__element__header__level">
                  <level-viewer :level="stack.level"/>
                </div>
              </div>
            </div>
            <transition name="frameworks-open-animation">
              <div
                v-if="expandedGroups.includes(stack.lang)"
                class="l-stacks__list__box__element__frameworks"
                :class="`height-70px-20px-${stack.frameworks.length}`"
              >
                <hr />
                <div
                  v-for="(framework, jIndex) in stack.frameworks"
                  :key="`stacks-element-${index}-${jIndex}`"
                  class="l-stacks__list__box__element__frameworks__element"
                >
                  <div>
                    <div class="l-stacks__list__box__element__frameworks__element__img">
                      <img :src="`/stacks/${framework.lang}.png`" :alt="framework.lang" draggable="false">
                    </div>
                    <span>{{framework.name}}</span>
                  </div>
                  <div>
                    <div class="l-stacks__list__box__element__frameworks__element__level">
                      <level-viewer :level="framework.level"/>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="{'l-stacks__statistic--open': statisticOpened}"
      class="l-stacks__statistic"
    >
      <div
        @click="statisticOpened = !statisticOpened"
        class="l-stacks__statistic__opener"
      >
        <span>Statistic</span>
      </div>
      <div class="l-stacks__statistic__content">
        <span>Statistic</span>
        <div class="scroll-field">
          <div class="l-stacks__statistic__content__box">
            <div
              v-for="(state, index) of GET_STATISTICS"
              :key="`statistic-${index}`"
              class="l-stacks__statistic__content__box__element"
            >
              <level-viewer
                :title="state.name"
                :level="state.level"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "stacks",
  head() {
    return {
      title: 'Resumer: Stacks'
    }
  },
  data() {
    return {
      scrollState: null,
      scrollStartPosition: [],
      expandedGroups: [],
      statisticOpened: false
    }
  },
  computed: {
    ...mapGetters([
      'GET_STACKS',
      'GET_STATISTICS'
    ])
  },
  methods: {
    scrollStart(event, index) {
      this.scrollState = this.$refs[`header-frameworks-${index}`][0];
      this.scrollStartPosition = this.scrollState.scrollLeft + event.clientX;
    },
    scrollMouseMenuFrameworks(event) {
      const difference = this.scrollStartPosition - event.clientX;
      this.scrollState.scrollTo(difference, 0);
    },
    actionGroup(id) {
      const index = this.expandedGroups.indexOf(id);
      if (index === -1) {
        this.expandedGroups.push(id);
      } else {
        this.expandedGroups.splice(index, 1);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.l-stacks {
  position: relative;
  height: calc(100vh - 140px);
  display: flex;
  gap: 20px;
  & > div {
    height: 100%;
    border-radius: var(--br-bg);
    padding: 25px 10px 25px 25px;
    box-shadow: 0 0 15px 0 var(--bs-c-element);
    background-color: var(--bg-element);
    transition: .3s;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  &__list {
    flex-basis: 100%;
    & > span {
      font-size: 24px;
      font-weight: 500;
      color: var(--c-stnd-text);
      padding-left: 20px;
      user-select: none;
    }
    &__box {
      display: flex;
      flex-direction: column;
      gap: 3px;
      overflow: hidden;
      &__element {
        background-color: var(--bg-s-el);
        border-radius: var(--br-mc);
        transition: .3s;
        &__header {
          min-height: 80px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          & > div {
            display: flex;
            align-items: center;
            gap: 10px;
            &:first-child {
              & > span {
                font-size: 20px;
                color: var(--c-blur-text);
                font-weight: 700;
                transition: .3s;
                user-select: none;
              }
              white-space: nowrap;
            }
            &:last-child {
              justify-content: flex-end;
              flex-basis: 70%;
            }
          }
          &__img {
            min-width: 50px;
            min-height: 50px;
            width: 50px;
            height: 50px;
            overflow: hidden;
            user-select: none;
            img {
              height: 100%;
              width: 100%;
              object-fit: contain;
            }
          }
          &__frameworks {
            box-shadow: inset 0 0 5px 3px var(--bs-frm);
            display: flex;
            gap: 5px;
            background-color: var(--bg-element);
            padding: 10px;
            border-radius: var(--br-mc);
            width: max-content;
            max-width: 200px;
            overflow-x: hidden;
            transition: .3s;
            &__img {
              min-width: 40px;
              min-height: 40px;
              width: 40px;
              height: 40px;
              overflow: hidden;
              user-select: none;
              img {
                height: 100%;
                width: 100%;
                object-fit: contain;
              }
            }
          }
          &__expand {
            display: flex;
            justify-content: center;
            align-self: flex-start;
            margin-top: 20px;
            font-size: 20px;
            width: 20px;
            height: 20px;
            cursor: pointer;
            color: var(--c-title-level);
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
                color: var(--c-title-name);
              }
            }
          }
          &__level {
            max-width: 350px;
            min-width: 150px;
            flex-basis: 40%;
            height: 50px;
          }
        }
        &__frameworks {
          hr {
            border-top: 1px solid var(--c-stacks-div);
            margin: 10px;
            transition: .3s;
          }
          &__element {
            min-height: 70px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            & > div {
              display: flex;
              align-items: center;
              gap: 10px;
              &:first-child {
                & > span {
                  font-size: 20px;
                  color: var(--c-blur-text);
                  font-weight: 500;
                  transition: .3s;
                  user-select: none;
                }
                white-space: nowrap;
              }
              &:last-child {
                justify-content: flex-end;
                flex-basis: 70%;
              }
            }
            &__img {
              min-width: 50px;
              min-height: 50px;
              width: 50px;
              height: 50px;
              overflow: hidden;
              user-select: none;
              img {
                height: 100%;
                width: 100%;
                object-fit: contain;
              }
            }
            &__level {
              max-width: 350px;
              min-width: 150px;
              flex-basis: 40%;
              height: 50px;
            }
          }
        }
      }
    }
  }
  &__statistic {
    position: relative;
    flex-basis: 35%;
    &__opener {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0;
      width: 30px;
      height: 100px;
      border-radius: var(--br-sm) 0 0 var(--br-sm);
      background-color: var(--bg-element);
      visibility: hidden;
      opacity: 0;
      transition: .3s;
      cursor: pointer;
      & > span {
        color: var(--c-stnd-text);
        font-weight: 500;
        font-size: 14px;
        writing-mode: vertical-lr;
        user-select: none;
      }
      &:hover {
        padding-right: 5px;
        width: 35px;
        left: -35px;
      }
    }
    &__content {
      & > span {
        font-size: 24px;
        font-weight: 500;
        color: var(--c-stnd-text);
        padding-left: 20px;
        user-select: none;
      }
      &__box {
        display: flex;
        flex-wrap: wrap;
        min-width: 250px;
        justify-content: center;
        gap: 5px 20px;
        &__element {
          height: 70px;
          min-width: 230px;
          max-width: 300px;
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 1600px) {
    gap: 0;
    &__statistic {
      animation-name: statistic-in;
      animation-iteration-count: 1;
      animation-duration: .6s;
      position: fixed;
      right: 40px;
      width: 350px;
      min-width: 350px;
      height: calc(100vh - 140px) !important;
      transform: translateX(calc(100% + 40px));
      &__opener {
        left: -30px;
        visibility: visible;
        opacity: 1;
      }
      &--open {
        .l-stacks {
          &__statistic {
            &__opener {
              border: 2px solid var(--c-border);
              border-right: 0;
              padding-right: 5px;
              transition: .3s;
              &:hover {
                padding-right: 0;
                width: 25px;
                left: -25px;
              }
            }
          }
        }
        transform: translateX(0);
      }
    }
  }
  @media (max-width: 1099px) {
    &__statistic {
      &__opener {
        visibility: hidden;
      }
    }
  }
}
.scroll-field {
  max-height: calc(100vh - 215px);
  padding-right: 15px;
  border-radius: var(--br-mc);
  transition: .3s;
}
.frameworks-open-animation {
  &-enter-active, &-leave-active {
    transition: .3s;
    overflow: hidden;
  }
  &-enter-to, &-leave {
    //max-height: 700px;
  }
  &-leave-to, &-enter {
    max-height: 0;
  }
}
@keyframes statistic-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
