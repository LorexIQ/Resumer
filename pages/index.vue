<template>
  <div class="l-news">
    <div
      class="l-news__element"
    >

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
      newsData: []
    }
  },
  computed: {
    ...mapGetters([
      'GET_NEWS'
    ])
  },
  mounted() {
    console.log(this.GET_NEWS);
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.l-news {
  width: 100%;
  height: calc(100vh - 140px);
  background-color: var(--bg-element);
  border-radius: var(--br-bg);
  padding: 25px;
  box-shadow: 0 0 15px 0 var(--bs-c-element);
  &__element {

  }
}
</style>
