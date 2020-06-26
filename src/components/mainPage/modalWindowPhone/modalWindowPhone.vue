<template>
    <div class="modal-phone" v-show="hideOrShowWindow">
        <div class="cooperation__modal-window">
            <img src="./images/candyWindowPhone.png" alt="" class="img">
            <form 
                class="cooperation__form" 
                action="https://formspree.io/maypqryg"
                method="POST"
            > 
                <h4 class="cooperation__title-form">Укажите ваши контакты и мы с вами свяжемся!</h4>
                <input type="text" class="cooperation__input" placeholder="Ваше имя..." required name="text">
                <input type="text" class="cooperation__input" placeholder="Ваш телефон..." required name="tell" v-mask="'7 (###) ###-##-##'" v-model="inputPhone">
                <button class="cooperation__button" type="submit">Отправить контакты</button>
                <small class="cooperation__small ">Отправляя свои контактные данные, вы соглашаетесь на обработку персональных данных</small>
            </form>
        </div>
        <div class="cooperation__dark-background" @click="closeWindowModal" v-show='hideOrShowWindow'></div>
    </div>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
    data(){
        return {
            inputPhone: ''
        }
    },
    computed: mapGetters(['hideOrShowWindow']),
    methods: {
        ...mapMutations(['closeWindow']),
        closeWindowModal(){
            this.closeWindow();
        }
    }
}
</script>
<style lang="scss">
    .img{
        align-self: flex-end;
        padding: 0 20px 40px 30px;
    }
    .cooperation {
        &__modal-window {
            display: flex;
            justify-content: flex-start;;
            align-items: center;
            position: fixed;
            margin: auto;
            background-color: #fff;
            max-width: 820px;
            width: 100%;
            height: 560px;
            border-radius: 15px;
            top: 10%;
            left: 0;
            right: 0;
            z-index: 1000;
        }
        &__dark-background{
            position: fixed;
            background-color: rgb(54, 54, 54);
            opacity: 0.5;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 500;
            height: 100%;

        }
    }
</style>