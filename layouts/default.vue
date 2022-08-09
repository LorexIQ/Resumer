<template>
  <div class="l-layout">
    <div class="l-layout__navbar">
      <logo />
      <profile-card :user-data="userData"/>
      <pages />
    </div>
    <div class="l-layout__field">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      userData: {
        name: 'Dmitry',
        surname: 'Murashko',
        patronymic: 'Sergeevich',
        birthday: '29.12.2002',
        birthdayTimestamp: null,
        level: 'Junior developer',
        workplace: 'Noosphere Software LLC',
      }
    }
  },
  mounted() {
    let dateParts = this.userData.birthday.split('.');
    this.userData.birthdayTimestamp = new Date(dateParts[2] - 0, dateParts[1] - 1, dateParts[0] - 0)
  }
}
</script>

<style lang="scss" scoped>
$light-font: #dfdef1;
$dark-light: #212130;
$dark-ultra-light: #2e2e42;
$dark: #171622;
$dark-purple: #3c2e67;
$light-purple: #7a4de8;
$white: #ffffff;

$photo-size-max: 200px;
$photo-size: 60px;
$br: 35px;

.l-layout {
  display: flex;
  gap: 20px;
  &__navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: calc(100vh - 40px);
    margin: 20px 0 20px 20px;
    border-radius: $br;
    background-color: $dark-light;
    color: #c7c6d5;
  }
  &__field {
    padding: 20px 20px 20px 0;
  }
}
</style>
