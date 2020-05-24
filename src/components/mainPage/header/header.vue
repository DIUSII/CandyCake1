<template>
    <div class="header fixed-container ">
        <!-- Меню сайта -->
        <nav-bar></nav-bar>
        <div class="header__cover">
            <div class="header__info">
                <h1 class="header__title">Добро пожаловать в Мир кексика Candy!</h1>
                <p class="header__sub-title">Трендовый товар со всего света!</p>
                <a class="header__button flex-container" href="#catalog"><span>Перейти в каталог</span><span class="header__white-basket"></span></a>

            </div>
            <img src="./images/main-cake.png" alt="main-cake" class="header__main-cake">
        </div>
    </div>
</template>
<script>
    import navBar from '../../navBar/navBar'
    export default {
        data(){
            return {

            }
        },
        components: {
            'nav-bar': navBar
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .header{//левая часть хедера
        &__menu{
            padding: 21px 20px 0;
        }
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
            cursor: pointer;
        }
        &__item{
            display: inline-block;
            vertical-align: middle;
            margin-right: 30px;
            cursor: pointer;    
            &:nth-last-child(){
                margin-right: 0px;
            }
        }
        &__link{
            text-decoration: none;
            font-family: Comfortaa;
            font-size: 17px;
            letter-spacing: 0.43px;
            color: #858585;
        }
        &__basket{
            &_span{
                background: url('./images/basket.svg') no-repeat;
                width: 27px;
                height: 22px;
                display: inline-block;
                vertical-align: bottom;
                margin-right: 18px;
                cursor: pointer;
            }
        }
        &__text{
            margin: 0;
            display: inline-block;
            vertical-align: middle;
            font-family: Comfortaa;
            font-size: 13px;
            letter-spacing: 0.33px;
            color: #240606;
            border-bottom: 1px solid#9c9c9c;
            cursor: pointer;
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
    .header{//правая часть хедера
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
            max-width:237px;
            width: 100%;
            text-align: left;
            letter-spacing: 0.34px;
            color: #ffffff;
            text-decoration: none;
            background: linear-gradient(to top, #b1f367, #90d13b);
        }
        &__white-basket{
            background: url('./images/white-basket.png') no-repeat;
            width: 29px;
            height: 29px;
            display: inline-block;
            margin-right: 32px;

        }
    }
</style>