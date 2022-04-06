<template>
    <div class="upload">
        <p class="block-title">Загрузка документов</p>
        <p class="upload__hint">Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее 
            решить проблему.
        </p>
        <input type="file" name="screenshot" id="screenshot">
    </div>
</template>

<script>
export default {
    name: 'helper-upload'
}
</script>

<style lang="scss">

.upload{

    &__hint{
        width: 360px;
        margin: 10px 0;
        color: rgba(0,0,0,0.5)
    }
}
</style>