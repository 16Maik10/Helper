<template>
    <div class="msg">
        <label class="msg__label block-title" for="message">
            Описание проблемы
            <span class="required-sign">*</span>
        </label>
        <textarea 
        class="msg__textarea"
        name="message" 
        id="message"  
        placeholder="Введите текст"
        @input="setMessage($event.target.value)"
        ></textarea>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'helper-msg',
    methods: {
        ...mapMutations([
            'setMessage'
        ])
    },
}
</script>

<style lang="scss">

.msg{

    margin: 20px 0;

    &__textarea{
        padding: 5px 10px;
        margin: 20px 0;
        width: 100%;
        height: 120px;
        font-size: 16px;
        resize: none;
        outline: none;
        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,0.2);
    }
}
</style>