<template>
  <div class="main-wrapper">
    <h1 class="title">Форма подачи заявки в отдел сервиса и качества</h1>
    <helper-form>
    </helper-form>
  </div>
</template>

<script>

import helperForm from './components/helper-form.vue'
export default {

  name: 'App',
  components: {
    helperForm,
  }
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
