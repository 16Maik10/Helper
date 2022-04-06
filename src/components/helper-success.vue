<template>
    <div class="success">
        <router-link class="success__link" to="/">Назад к форме</router-link>
        <p class="success__title">Заявка отправлена.</p>
        <img width="500" src="../assets/images/success_img.png" alt="success">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.success{
    margin: 50px;
    text-align: center;

    &__link{
        margin: 20px;
        font-size: 25px;
        display: block;
        text-decoration: none;
    }

    &__title{
        font-size: 25px;
        margin-bottom: 20px;
    }
}
</style>