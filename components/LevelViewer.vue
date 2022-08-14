<template>
  <div class="l-levels">
    <div
      v-if="title.length"
      class="l-levels__title"
    >
      <span>{{title}}</span>
    </div>
    <div class="l-levels__content">
      <template v-for="levelId in levels">
        <lfa
          :class="{'l-levels__content__active': levelId <= level}"
          :icon="['fas', 'circle']"
        />
        <div
          :class="{'l-levels__content__way__active': levelId < level}"
          class="l-levels__content__way"
          v-if="levelId !== levels"
        />
      </template>
    </div>
    <div class="l-levels__numerate">
      <span
        :class="{'l-levels__numerate--active': levelId <= level}"
        v-for="levelId in levels"
      >
        {{levelId}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LevelViewer",
  props: {
    level: {
      type: Number,
      default: () => {
        return 0;
      }
    },
    levels: {
      type: Number,
      default: () => {
        return 5;
      }
    },
    title: {
      type: String,
      default: () => {
        return 'Level';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.l-levels {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  &__title {
    position: absolute;
    padding-bottom: 35px;
    font-size: 12px;
    font-weight: 500;
    color: var(--c-title-level);
    transition: .3s;
    user-select: none;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    &__way {
      width: 100%;
      height: 5px;
      background-color: var(--c-lvl-way);
      transition: .3s;
      &__active {
        background-color: var(--c-lvl-way-act);
      }
    }
    svg {
      color: var(--c-lvl-way);
      transition: .3s;
    }
    &__active {
      color: var(--c-lvl-way-act) !important;
    }
  }
  &__numerate {
    display: flex;
    justify-content: space-between;
    padding: 35px 5px 0;
    position: absolute;
    width: inherit;
    font-size: 12px;
    font-weight: 900;
    color: var(--c-lvl-way);
    user-select: none;
    transition: .3s;
    &--active {
      color: var(--c-lvl-way-act);
    }
  }
}
</style>
