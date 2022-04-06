<template>
  <div class="main-wrapper">
    <router-view></router-view>
    <!-- <helper-form>
    </helper-form> -->
  </div>
</template>

<script>

export default {

  name: 'App',
}
</script>

<style lang="scss">
.main-wrapper{
  width: 1180px;
  margin: 0 auto;

}
.title {
  color: #4c5057;
  font-size: 22px;
  font-family: system-ui;
  margin: 5px 20px;
}
</style>
