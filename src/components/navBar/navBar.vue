<template>
    <div class="header__menu flex-container fixed-container">
            <div class="header__nav-bar">
                <img src='./logo.png' alt='logo' class="header__logo">
                <ul class="header__items">
                    <li class="header__item" v-for="item in array" :key="item.id">
                        {{item.text}}
                    </li>
                </ul>
            </div>
            <div class="header__contact-basket flex-container">
                <div class="header__basket">
                    <span class="header__basket_span"></span>
                    <p class="header__text">Корзина</p>
                </div>
                <a href="tel:+79234377472" class="header__tell">8 (923) 437-74-72</a>
            </div>
        </div>
</template>
<script>
    export default {
        data(){
            return {
                array: [
                    {
                        text: 'Каталог'
                    },
                    {
                        text: 'О нас'
                    },
                    {
                        text: 'Отзывы'
                    },
                    {
                        text: 'Сотрудничество'
                    },
                    {
                        text: 'Контакты'
                    },
                    

                ]
            }
        }
    }
</script>