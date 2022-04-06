<template>
    <div class="theme">
        <label class="theme__label block-title" for="city">
            Тема обращения
            <span class="required-sign">*</span>
        </label>
        <input
            @click="stateOfInput = ''"
            class="theme__radio"
            type="radio"
            name="complaint"
            id="complaint"
            value="complaint"
            v-model="checkedBtn"
        />
        <label for="complaint">Недоволен качеством услуг</label>
        <input
            @click="stateOfInput = ''"
            class="theme__radio"
            type="radio"
            name="complaint"
            id="contract"
            value="contract"
            v-model="checkedBtn"
        />
        <label for="contract">Расторжение договора</label>
        <input 
        @click="stateOfInput = ''" 
        class="theme__radio" 
        type="radio" 
        name="complaint" 
        id="letter"
        value="letter"
        v-model="checkedBtn" 
        />
        <label for="letter">Не приходит письмо активации на почту</label>
        <input 
        @click="stateOfInput = ''" 
        class="theme__radio" 
        type="radio" 
        name="complaint" 
        id="account"
        value="account"
        v-model="checkedBtn"
         />
        <label for="account">Не работает личный кабинет</label>
        <input
            @input="clearRadio"
            class="theme__input"
            type="text"
            name="complaint"
            id="other_theme"
            placeholder="Другое"
            v-model="stateOfInput"
        />
    </div>
</template>

<script>
export default {
    name: 'helper-theme',
    data() {
        return {
            stateOfInput: '',
            checkedBtn: ''
        }
    },
    methods: {
        clearRadio() {
            const checkedRadioEl = document.getElementById(this.checkedBtn);
            if(checkedRadioEl){
                checkedRadioEl.checked = false;
                this.checkedBtn = ''
            }
            }
        }
    }
</script>

<style lang="scss">
.theme {
    display: flex;
    flex-direction: column;

    &__radio {
        position: absolute;
        z-index: -1;
        opacity: 0;

        & + label {
            display: inline-flex;
            align-items: center;
            margin: 10px 0;
            cursor: pointer;
            width: fit-content;
        }

        & + label::before {
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #000;
            border-radius: 50%;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }

        /* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
        &:focus:not(:checked) + label::before {
            border-color: #80bdff;
        }
        /* стили для радиокнопки, находящейся в состоянии checked */
        &:checked + label::before {
            background-image: url("../assets/images/circle-solid.svg");
        }
    }

    &__input {
        padding: 7px;
        width: 218px;
        margin: 10px 0;
        outline: none;
        border: 1px solid rgba(0,0,0,0.2);
    }
}
</style>