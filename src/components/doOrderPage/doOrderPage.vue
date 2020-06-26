<template>
    <div class="doOrder">
        <nav-bar></nav-bar>
        <div class="doOrder__contain fixed-container">
            <div class="doOrder__way">Главная /  Каталог  /  Корзина / <span class="doOrder__way_span">Оформление заказа</span></div>
            <h3 class="doOrder__title">Контактная информация</h3>
            <form class="doOrder__group-input">
                <input type="text" class="doOrder__input" placeholder="Ваше имя">
                <input type="text" class="doOrder__input" placeholder="Ваш e-mail">
                <input type="text" class="doOrder__input" placeholder="Ваша фамилия">
                <input type="text" class="doOrder__input" placeholder="Ваш телефон">
            </form>
            <h3 class="doOrder__title">Адрес доставки</h3>
            <input type="text" class="doOrder__input" placeholder="Город">
            <input type="text" class="doOrder__input doOrder__input_home" placeholder="Улица, дом, квартира">
            <div class="doOrder__delivery flex-container">
                <p class="doOrder__sub-title">Доставка</p>
                <label  class="doOrder__label">
                    <input type="radio" class="doOrder__radio" name="delivery">
                    <span class="doOrder__label_span">СДЭК</span>
                </label>
                <label  class="doOrder__label">
                    <input type="radio" class="doOrder__radio" name="delivery">
                    <span class="doOrder__label_span">Курьер (по Томску)<br><span class="doOrder__label_additionally-info">(+150 руб)<br>от 3000р. - бесплатно!</span></span>
                </label>
                <label  class="doOrder__label">
                    <input type="radio" class="doOrder__radio" name="delivery">
                    <span class="doOrder__label_span">Самовывоз</span>
                </label>
            </div>
            <h3 class="doOrder__title">Ваш заказ</h3>
            <ul class="doOrder__items" >
                <li class="doOrder__item" v-for="item in allBasket" :key="item.id"> 
                    <span style="margin-right: 60px;">Тапочки:<span class="doOrder__item_span">{{item.title}}</span></span>
                    <span style="margin-right: 60px;">Размер:<span class="doOrder__item_span">{{item.sizeProduct}}</span></span>
                    <span style="margin-right: 60px;">Количество:<span class="doOrder__item_span">{{item.quantity}}</span></span>
                    <span style="margin-right: 60px;">Цена:<span class="doOrder__item_span">{{item.price*item.quantity + 'p'}}</span></span>
                </li>
            </ul>
            <h3 class="doOrder__title">Итого:   {{$store.state.sumPrice + 'p'}}</h3>
            <button class="doOrder__button" :class="{darkBack: checkBack}" @mouseenter="checkBack = true" @mouseout="checkBack = false">Оформить заказ</button>
            <small class="doOrder__info-text">Отправляя свои контактные данные, вы соглашаетесь<br>на обработку персональных данных</small>
            <span class="doOrder__back-page" @click="backToBasket" >Вернуться в корзину</span>
        </div>
        <footer-container></footer-container>
    </div>
</template>
<script>
import navBar from '../navBar/navBar'
import footer from '../footer/footer'
import {mapGetters} from 'vuex'
export default {
    components: {
        'footer-container': footer,
        'nav-bar': navBar,
    },
    data(){
        return {
            checkBack: false,
        }
    },
    computed: mapGetters(['allBasket']),
    methods: {
        backToBasket(){
            this.$router.push({path: './basket'})
        }
    }
}
</script>
<style lang="scss">
    .darkBack{
        background-image: linear-gradient(to bottom, #a1dc5e, #7fb834) !important;
    }
    .doOrder{
        &__way{
            font-family: GUERRILLA;
            font-size: 15px;
            line-height: 1.33;
            letter-spacing: 0.38px;
            margin-top: 81px;
            margin-bottom: 79px;
            color: #7c7c7c;
            &_span{
                color: #bebebe;
            }
        }
        &__title{
            font-family: GUERRILLA;
            font-size: 19px;
            line-height: 1.58;
            letter-spacing: 0.76px;
            margin-top: 0px;
            margin-bottom: 70px;
            color: #545454;
        }
        &__group-input{
            max-width: 600px;
        }
        &__input{
            max-width: 214px;
            width: 100%;
            font-family: Comfortaa;
            font-size: 15px;
            margin-bottom: 60px;
            letter-spacing: 0.6px;
            border: none;
            outline: none;
            background-color: transparent;
            padding-bottom: 19px;
            border-bottom: solid 3px #aeaeae;
            color: #8d8b8b;
            &_home{
                max-width: 320px;
            }
            &:nth-child(2n + 1){
                margin-right:133px;
            }
        }
        &__delivery{
            align-items: flex-start;
            max-width: 800px;
        }
        &__sub-title{
            font-family: Comfortaa;
            font-size: 17px;
            line-height: 1.76;
            letter-spacing: 0.68px;
            color: #545454;
            margin: 0;
        }
        &__label{
            &_span{
                margin-left: 21px;
                font-family: Comfortaa;
                font-size: 17px;
                font-weight: bold;
                line-height: 1.41;
                letter-spacing: 0.43px;
                color: #777777;
            }
            &_additionally-info{
                margin-top: 13px;
                margin-left: 25px;
                font-family: Comfortaa;
                font-size: 15px;
                line-height: 1.4;
                letter-spacing: 0.6px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #8d8b8b;
            }
        }
        &__items{
            margin: 0;
            padding: 0;
            list-style:none;
            margin-bottom: 81px;
        }
        &__item{
            display: inline-block;
            vertical-align: middle;
            font-family: Comfortaa;
            font-size: 17px;
            line-height: 1.76;
            letter-spacing: 0.68px;
            color: #8d8b8b;
            margin-bottom: 22px;
            &_span{
                font-weight: bold;
                color: #4e0b0b;
                margin-left: 25px;
            }
        }
        &__button{
            border: none;
            outline: none;
            border-radius: 25.5px;
            background-image: linear-gradient(to bottom, #b1f367, #90d13b);
            font-family: GUERRILLA;
            font-size: 17px;
            letter-spacing: 0.43px;
            padding: 20px 0;
            max-width:269px;
            width:100%;
            color: #ffffff;
            transition: 1s;
            display: inline-block;
            vertical-align: middle;
        }
        &__info-text{
            display: inline-block;
            vertical-align: middle;
            font-family: Comfortaa;
            font-size: 12px;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: 0.24px;
            color: #b6b6b6;
            margin-left: 42px;
        }
        &__back-page{
            display: block;
            font-family: Comfortaa;
            font-size: 14px;
            letter-spacing: 0.28px;
            color: #b5b5b5;
            margin-top: 34px;
            margin-bottom: 150px;
        }
    }
</style>