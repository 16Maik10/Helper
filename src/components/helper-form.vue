<template>
    <div class="form">
         <helper-city></helper-city>
         <helper-theme></helper-theme>
         <helper-msg></helper-msg>
         <helper-upload></helper-upload>
         <button @click="postFormToApi" :disabled="formStatus" class="form__btn" type="submit">Отправить</button> 
    </div>
</template>

<script>
import helperCity from './helper-city.vue'
import helperTheme from './helper-theme.vue'
import helperMsg from './helper-msg.vue'
import helperUpload from './helper-upload.vue'

import { mapActions } from 'vuex'

export default {
    name: 'helper-form',
    components: {
        helperCity,
        helperTheme,
        helperMsg,
        helperUpload
    },
    data(){
        return{
            formStatus: false,
        }
    },
    methods: {
        ...mapActions([
            'postFormToApi'
        ])
    }
}
</script>

<style lang="scss">

    .form{
        padding: 20px 40px;
        border: 1px solid rgba(173, 173, 173, 0.5);
        margin: 20px;

        &__btn{
            padding: 8px 19px;
            text-transform: uppercase;
            color: #fff;
            background-color: #fe9867;
            border: none;
            border-radius: 2px;
            font-size: 14px;
            margin: 20px 0;
            cursor: pointer;

            &:disabled{
                background-color: #e2e2e2;
                cursor: not-allowed;
            }
        }
    }
</style>