<template>
  <div class="l-skills">
    <div class="l-skills__box scroll-field">
      <div
        v-for="(state, index) of GET_STATISTICS"
        :key="`statistic-${index}`"
        class="l-skills__box__element"
      >
        <span>{{ state.name }}</span>
        <level-viewer
          title="Level"
          :level="state.level"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "skills",
  computed: {
    ...mapGetters([
      'GET_STATISTICS'
    ])
  },
}
</script>

<style lang="scss" scoped>
.l-skills {
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      min-height: 70px;
      min-width: 230px;
      width: 100%;
      padding: 10px 20px;
      background-color: var(--bg-s-el);
      border-radius: var(--br-mc);
      transition: .3s;
      & > span {
        flex-basis: 50%;
        white-space: nowrap;
      }
      & .l-levels {
        flex-basis: 40%;
      }
    }
  }
}
@media (max-width: 1000px) {
  .l-skills {
    max-height: calc(100% - 70px);
    padding: 20px 10px 20px 20px;
    border-radius: var(--br-md);
    &__box {
      max-height: 100%;
      &__element {
        flex-direction: column;
        height: auto;
        min-height: auto;
        padding: 20px 20px 30px;
        & > span {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
