<template>
    <div class="header__menu flex-container fixed-container">
            <div class="header__nav-bar">
                <img src='./logo.png' alt='logo' class="header__logo" @click="goOverMainPage">
                <ul class="header__items">
                    <li class="header__item" v-for="item in array" :key="item.key" @click="goOverMainPage">
                        <a :href="item.id" class="header__link">{{item.text}}</a>
                    </li>
                </ul>
            </div>
            <div class="header__contact-basket flex-container">
                <div class="header__basket">
                    <span class="header__basket_span" @click="basketClick">
                        <span class="header__quantity-people" v-if="quantityPeople > 0" >{{quantityPeople}}</span>
                    </span>
                    <p class="header__text" @click="basketClick">Корзина</p>
                </div>
                <a href="tel:+79234377472" class="header__tell">8 (923) 437-74-72</a>
            </div>
        </div>
</template>
<script>
    import {mapGetters} from "vuex"
    export default {
        data(){
            return {
                array: [
                    {
                        text: 'Каталог',
                        id: '#catalog'
                    },
                    {
                        text: 'О нас',
                        id:'#aboutUs'
                    },
                    {
                        text: 'Сотрудничество',
                        id: '#cooperation'
                    },
                    {
                        text: 'Контакты',
                        id: '#contacts'
                    },
                    

                ]
            }
        },
        computed: mapGetters(['quantityPeople']),
        methods: {
            basketClick(){
                this.$router.push({path: "./basket"});
            },
            goOverMainPage(){
                this.$router.push({path: './'})
            }
        }
    }
</script>
<style lang="scss">
    .header{
        &__basket{
            &_span{
                position: relative;
            }
        }
        &__quantity-people{
            position: absolute;
            display: inline-block;
            text-align: center;
            font-size: 12px;
            max-width: 18px;
            width: 100%;
            padding: 2px 0;
            background-color: #a8eb5d;
            color: #ffffff;
            border: none;
            border-radius: 50%;
            top: -40%;
            right: -30%;
        }
    }
</style>