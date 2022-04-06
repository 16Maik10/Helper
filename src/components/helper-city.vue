<template>
    <div class="city">
        <label class="city__label block-title" for="city">
            Ваш филиал
            <span class="required-sign">*</span>
        </label>
        <select :disabled="disabled" class="city__vars" name="city" id="city">
            <option selected disabled value>Выберите город</option>
            <option v-for="city in Cities" :key="city.id" value="city.title">{{ city.title }}</option>
        </select>
        <div class="status">
            <input
                v-model="disabled"
                class="status__state"
                type="checkbox"
                name="online"
                id="online"
            />
            <label class="status__label" for="online">Онлайн</label>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'helper-city',
    data() {
        return {
            disabled: false,
        }
    },
    computed: {
        ...mapGetters([
            'Cities'
        ])
    },
    methods: {
        ...mapActions([
            'getCitiesFromApi'
        ])
    },
    created() {
        this.getCitiesFromApi();
    }

}
</script>

<style lang="scss">
.city {
    margin-bottom: 50px;

    &__vars {
        display: block;
        width: 250px;
        padding: 7px;
        margin: 10px 0 20px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.2);
        outline: none;
        cursor: pointer;

        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;

        background-image: url(../assets/images/angle-down-solid.svg);
        background-repeat: no-repeat;
        background-size: 15px;
        background-position: 220px;
    }
}

.status {
    display: flex;
    align-items: center;
    &__state {
        position: absolute;
        z-index: -1;
        opacity: 0;

        & + label {
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            font-size: 18px;
        }

        & + label::before {
            content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #000;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }

        &:checked + label::before {
            background-image: url("../assets/images/check-solid.svg");
            background-size: 14px;
        }
    }

    &__label {
        font-size: 20px;
    }
}

</style>