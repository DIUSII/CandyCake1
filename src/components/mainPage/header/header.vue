<template>
    <div class="header fixed-container ">
        <!-- Меню сайта -->
        <div class="header__menu flex-container">
            <div class="header__nav-bar">
                <img src='./images/logo.png' alt='logo' class="header__logo">
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
        <div class="header__cover">
            <div class="header__info">
                <h1 class="header__title">Добро пожаловать в Мир кексика Candy!</h1>
                <p class="header__sub-title">Трендовый товар со всего света!</p>
                <button class="header__button">Перейти в каталог<span class="header__white-basket"></span></button>
            </div>
            <img src="./images/main-cake.png" alt="main-cake" class="header__main-cake">
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
<style lang="scss">
    .header{
        padding: 21px 20px 0;
        &__items{
            margin: 0;
            padding: 0;
            list-style: none;
            display: inline-block;
            vertical-align: middle;
        }
        &__logo{
            display: inline-block;
            vertical-align: middle;
            margin-right: 38px;
        }
        &__item{
            display: inline-block;
            vertical-align: middle;
            font-family: Comfortaa;
            font-size: 17px;
            letter-spacing: 0.43px;
            color: #858585;
            margin-right: 30px;
            &:nth-last-child(){
                margin-right: 0px;
            }
        }
        &__basket{
            &_span{
                background: url('./images/basket.svg') no-repeat;
                width: 27px;
                height: 22px;
                display: inline-block;
                vertical-align: bottom;
                margin-right: 18px;
            }
        }
        &__text{
            margin: 0;
            display: inline-block;
            vertical-align: middle;
            font-family: Comfortaa;
            font-size: 13px;
            letter-spacing: 0.33px;
            color: #9c9c9c;
            border-bottom: 1px solid#9c9c9c;
        }
        &__tell{
            font-family: Comfortaa;
            font-size: 17px;
            font-weight: bold;
            letter-spacing: 0.68px;
            color: #727070;
            margin-left: 55px;
            text-decoration: none;
        }
    }
    .header{
        &__cover{
            margin-top: 36px;
        }
        &__info{
            display: inline-block;
            vertical-align: middle;
            margin-right: 107px;
            max-width: 504px;
        }
        &__main-cake{
            display: inline-block;
            vertical-align: middle;
        }
        &__title{
            font-family: GUERRILLA;
            font-size: 40px;
            line-height: 1.53;
            letter-spacing: 1.8px;
            color: #31a0ee;
            margin: 0 0 58px;
        }
        &__sub-title{
            font-family: Comfortaa;
            font-size: 22px;
            letter-spacing: 0.55px;
            color: #878787;
            margin: 0 0 65px;
        }
        &__button{
            border: none;outline: none;
            border-radius: 29.5px;
            font-family: GUERRILLA;
            font-size: 17px;
            padding: 23px 0 23px 30px;
            max-width:267px;
            width: 100%;
            text-align: left;
            letter-spacing: 0.34px;
            color: #ffffff;
            background: linear-gradient(to top, #b1f367, #90d13b);
        }
        // &__white-basket{
        //     background: url('./images/basket-order.svg') no-repeat;
        //     width: 29px;
        //     height: 29px;
        //     display: inline-block;

        // }
    }
</style>