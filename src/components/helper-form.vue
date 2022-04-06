<template>
    <h1 class="title">Форма подачи заявки в отдел сервиса и качества</h1>
    <div class="form">
        <helper-city></helper-city>
        <helper-theme></helper-theme>
        <helper-msg></helper-msg>
        <helper-upload></helper-upload>
        <button
            @click="postFormToApi"
            :disabled="!sendBtnIsReady"
            class="form__btn"
            type="submit"
        >Отправить</button>
    </div>
</template>

<script>
import helperCity from './helper-city.vue'
import helperTheme from './helper-theme.vue'
import helperMsg from './helper-msg.vue'
import helperUpload from './helper-upload.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'helper-form',
    components: {
        helperCity,
        helperTheme,
        helperMsg,
        helperUpload
    },
    methods: {
        ...mapActions([
            'postFormToApi'
        ])
    },
    computed: {
        ...mapGetters([
            'CheckedCity',
            'Status',
            'CheckedTheme',
            'UserTheme',
            'Message'
        ]),
        sendBtnIsReady() {
            return (!!this.CheckedCity || this.Status) 
            && (!!this.CheckedTheme || !!this.UserTheme )
            && !!this.Message
        }
    }
}
</script>

<style lang="scss">
.form {
    padding: 20px 40px;
    border: 1px solid rgba(173, 173, 173, 0.5);
    margin: 20px;

    &__btn {
        padding: 8px 19px;
        text-transform: uppercase;
        color: #fff;
        background-color: #fe9867;
        border: none;
        border-radius: 2px;
        font-size: 14px;
        margin: 20px 0;
        cursor: pointer;

        &:disabled {
            background-color: #e2e2e2;
            cursor: not-allowed;
        }
    }
}
</style>