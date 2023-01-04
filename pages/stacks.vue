<template>
  <div class="l-stacks">
    <div class="l-stacks__box scroll-field">
      <div
        v-for="(stack, index) in GET_STACKS"
        :key="`stacks-element-${index}`"
        class="l-stacks__box__element"
      >
        <div
          class="l-stacks__box__element__header"
        >
          <div>
            <div class="l-stacks__box__element__header__img">
              <img :src="`/stacks/${stack.lang}.png`" :alt="stack.lang" draggable="false">
            </div>
            <span>{{stack.name}}</span>
          </div>
          <div>
            <div
              v-if="stack.frameworks"
              :ref="`header-frameworks-${index}`"
              class="l-stacks__box__element__header__frameworks"
            >
              <div
                v-for="(framework, jIndex) in stack.frameworks"
                :key="`stacks-element-${index}-header-frameworks-${jIndex}`"
                class="l-stacks__box__element__header__frameworks__img"
              >
                <img :src="`/stacks/${framework.lang}.png`" :alt="framework.lang" draggable="false">
              </div>
            </div>
            <div
              v-if="stack.frameworks"
              class="l-stacks__box__element__header__expand"
              :class="{'l-stacks__box__element__header__expand--open': expandedGroups.includes(stack.lang)}"
              @click="actionGroup(stack.lang)"
            >
              <lfa :icon="['fas', 'caret-down']"/>
            </div>
          </div>
          <div>
            <div class="l-stacks__box__element__header__level">
              <level-viewer :level="stack.level"/>
            </div>
          </div>
        </div>
        <transition-expand>
          <div
            v-if="expandedGroups.includes(stack.lang)"
            class="l-stacks__box__element__frameworks"
          >
            <hr />
            <div
              v-for="(framework, jIndex) in stack.frameworks"
              :key="`stacks-element-${index}-${jIndex}`"
              class="l-stacks__box__element__frameworks__element"
            >
              <div>
                <div class="l-stacks__box__element__frameworks__element__img">
                  <img :src="`/stacks/${framework.lang}.png`" :alt="framework.lang" draggable="false">
                </div>
                <span>{{framework.name}}</span>
              </div>
              <div>
                <div class="l-stacks__box__element__frameworks__element__level">
                  <level-viewer :level="framework.level"/>
                </div>
              </div>
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
  name: "stacks",
  head() {
    return {
      title: 'Resumer: Stacks'
    }
  },
  data() {
    return {
      scrollStartPosition: [],
      expandedGroups: [],
      statisticOpened: false
    }
  },
  computed: {
    ...mapGetters([
      'GET_STACKS'
    ])
  },
  methods: {
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
  border-radius: var(--br-bg);
  padding: 25px 15px 25px 25px;
  box-shadow: 0 0 15px 0 var(--bs-c-element);
  background-color: var(--bg-element);
  transition: .3s;
  &__box {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-height: 100% !important;
    padding-right: 10px;
    border-radius: var(--br-mc);
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
            flex-basis: 40%;
            & > span {
              font-size: 20px;
              color: var(--c-blur-text);
              font-weight: 700;
              transition: .3s;
              user-select: none;
            }
            white-space: nowrap;
          }
          &:nth-child(2) {
            flex-basis: 30%;
            justify-content: end;
          }
          &:last-child {
            justify-content: flex-end;
            flex-basis: 30%;
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
          width: 100%;
          max-width: 350px;
          min-width: 150px;
          height: 50px;
        }
      }
      &__frameworks {
        transition: .3s;
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

@media (max-width: 1000px) {
  .l-stacks {
    max-height: calc(100% - 70px);
    padding: 20px 10px 20px 20px;
    border-radius: var(--br-md);
    &__box {
      max-height: 100%;
      &__element {
        &__header {
          flex-direction: column;
          padding: 20px 20px 10px;
          &__img {
            grid-area: IMG;
          }
          &__frameworks {
            grid-area: PREV;
          }
          &__expand {
            grid-area: EXPAND;
          }
          &__level {
            grid-area: LVL;
          }
          & > div {
            &:first-child {
              order: 0;
            }
            &:nth-child(2) {
              order: 2;
              width: 100%;
              justify-content: space-between;
            }
            &:last-child {
              order: 1;
              width: 100%;
            }
          }
        }
        &__frameworks {
          padding: 0 20px 10px;
          &__element {
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;
            & > div {
              &:last-child {
                width: 100%;
              }
            }
            &__level {
              flex-basis: auto;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
