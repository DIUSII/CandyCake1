<template>
    <div class="header__menu flex-container fixed-container">
            <div class="header__nav-bar">
                <router-link :to="{name: 'candyCake'}">
                    <img src='./logo.png' alt='logo' class="header__logo" >
                </router-link>
                <ul class="header__items">
                    <li class="header__item" v-for="item in array" :key="item.key" @click="goOverMainPage">
                        <a :href="item.id" class="header__link" :class="{hoverBack: item.hoverEffect}" @mouseenter="item.hoverEffect = 1" @mouseleave="item.hoverEffect = false">{{item.text}}</a>
                    </li>
                </ul>
            </div>
            <div class="header__contact-basket flex-container">
                <router-link :to="{name: 'basket'}">
                    <div class="header__basket">
                        <span class="header__basket_span">
                            <span class="header__quantity-people" v-if="quantityPeople > 0" >{{quantityPeople}}</span>
                        </span>
                        <p class="header__text" >Корзина</p>
                    </div>
                </router-link>
                <span class="header__tell" @click="openWindowNavBar">8 (923) 437-74-72</span>
            </div>
        </div>
</template>
<script>
    import axios from 'axios'
    import {mapGetters, mapMutations} from "vuex"
    export default {
        data(){
            return {
                array: [
                    {
                        text: 'Каталог',
                        id: '#catalog-main-page',
                        hoverEffect: false,
                    },
                    {
                        text: 'О нас',
                        id:'#aboutUs-main-page',
                        hoverEffect: false,
                    },
                    {
                        text: 'Сотрудничество',
                        id: '#cooperation-main-page',
                        hoverEffect: false,
                    },
                    {
                        text: 'Контакты',
                        id: '#contacts-main-page',
                        hoverEffect: false,
                    },
                    

                ],
                // arrayTest: []
            }
        },
        mounted(){
            axios
            .get('http://test.host1813568.hostland.pro/public/home')
            .then(res => (console.log(res.data)));
        },
        computed: mapGetters(['quantityPeople']),
        methods: {
            ...mapMutations(['openWindow']),
            basketClick(){
                // this.$router.push({path: "./basket"});
            },
            goOverMainPage(){
                // this.$router.push({path: './'})
            },
            openWindowNavBar(){
                this.openWindow();
            }
        }
    }
</script>
<style lang="scss">
    .hoverBack{
        margin-right: 1px !important;
        margin-left: 1px !important;
        border: none;
        border-radius: 15px;
        background-color: #fc8dc7 !important;
        color: #FFF !important;
        padding: 11px 14px !important;
    }
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