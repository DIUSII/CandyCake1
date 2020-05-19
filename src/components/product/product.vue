<template>
    <div class="product">
        <nav-bar class="fixed-container"></nav-bar>
        <div class="product__container fixed-container flex-container">
            <div class="product__group-img">
                <a href="#" class="product__link">Главная / Тапочки / <span class="product__link_span">Тапки для кигуруми розовые</span></a>
                <img src="./images/big-slipper.png" alt="slipper">
                <div class="flex-container product__additional-img">
                    <img src="./images/small-slipper.png" alt="slipper" class="product__min-img">
                    <img src="./images/reverse-slipper.png" alt="slipper" class="product__reverse-img-product">
                </div>
            </div>
            <form class="product__form">
                <h2 class="product__title">Тапки для кигуруми розовые</h2>
                <h3 class="product__sub-title">Выберите размер:</h3>
                <ul class="product__size">
                    <li class="product__item-size" :class="{hoverEffectSize: hoverEffect1}" @mouseenter="hoverEffect1 = true" @mouseout="hoverEffect1 = false">29-34</li>
                    <li class="product__item-size" :class="{hoverEffectSize: hoverEffect2}" @mouseenter="hoverEffect2 = true" @mouseout="hoverEffect2 = false">35-39</li>
                    <li class="product__item-size" :class="{hoverEffectSize: hoverEffect3}" @mouseenter="hoverEffect3 = true" @mouseout="hoverEffect3 = false">40-45</li>
                </ul>
                <h3 class="product__sub-title">Количество:</h3>
                <div class="product__quatity-product flex-container">
                    <p class="product__minus" @click="minusNumber">-</p>
                    <p class="product__number">{{number}}</p>
                    <p class="product__plus" @click="plusNumber" >+</p>
                </div>
                <div class="product__price">Цена:<span class="product__price_span">580 руб</span></div>
                <button class="product__add-in-basket">Добавить в корзину</button>
                <button class="product__order">Заказать</button>
            </form>
        </div>
        <footer-container></footer-container>
    </div>
</template>
<script>
    import navBar from '../navBar/navBar'
    import footer from '../footer/footer'
    export default {
        data(){
            return {
                hoverEffect1: false,
                hoverEffect2: false,
                hoverEffect3: false,
                number: 1,
            }
        },
        methods: {
            minusNumber(){
                if(this.number > 1){
                    this.number--;
                }
            },
            plusNumber(){
                this.number++;
            }
        },
        components: {
            'nav-bar': navBar,
            'footer-container': footer,
        }
    }
</script>
<style lang="scss">
    .hoverEffectSize{
        border-radius: 10px;
        background-color: #a9eb5c;
        padding: 8px 11px;
        color: #FFF !important;
    }
    .product{
        &__container{
            align-items: flex-start;
            max-width: 950px;
            padding: 82px 0 150px;
        }
        &__link{
            text-decoration: none;
            font-family: GUERRILLA;
            line-height: 1.33;
            letter-spacing: 0.38px;
            text-align: center;
            color: #7c7c7c;
            margin-bottom: 79px;
            display: block;
            &_span{
                color: #bebebe;
            }
        }
        &__title{
            font-family: GUERRILLA;
            font-size: 44px;
            line-height: 1.36;
            letter-spacing: 1.1px;
            color: #47adf5;
            margin-top: 0px;
            margin-bottom: 70px;
        }
        &__sub-title{
            font-family: Comfortaa;
            letter-spacing: 0.45px;
            color: #616161;
            margin-top: 0px;
            margin-bottom: 26px;
        }
        &__additional-img{
            justify-content: flex-start;
        }
        &__form{
            max-width:394px;
        }
        &__size{
            margin: 0;
            padding: 0;
            list-style: none;
            margin-bottom: 56px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        &__item-size{
            margin-right: 10px;
            font-family: GUERRILLA;
            letter-spacing: 0.4px;
            color: #7a7a7a;
            cursor: pointer;
            &:nth-last-child(1){
                margin-right: 0px;
            }
        }
        &__quatity-product{
            border: 1px solid #f99fc9;
            max-width: 106px;
            width: 100%;
            margin-bottom: 53px;
        }
        &__minus, &__plus, &__number{
            margin: 0;
        }
        &__plus, &__minus{
            font-family: Myriad Pro;
            font-size: 22px;
            letter-spacing: 0.55px;
            color: #ffffff;
            background-color: #f99fc9;
            padding: 0 9px;
            cursor: pointer;
        }
        &__number{
            font-family: GUERRILLA;
            font-size: 22px;
            letter-spacing: 0.55px;
            color: #8c8c8c;   
        }
        &__price{
            font-family: Comfortaa;
            font-size: 18px;
            letter-spacing: 0.45px;
            color: #616161;
            margin-bottom: 50px;
            &_span{
                font-family: GUERRILLA;
                font-size: 32px;
                margin-left: 23px;
                letter-spacing: 0.8px;
                color: #5f5f5f;
            }
        }
        &__add-in-basket{
            font-family: GUERRILLA;
            font-size: 14px;
            letter-spacing: 0.14px;
            color: #ffffff;
            max-width: 174px;
            width: 100%;
            border: none;
            outline: none;
            border-radius: 18px;
            padding: 10px 0;
            margin-right: 34px;
            background-image: linear-gradient(to top, #b1f367, #90d13b);
        }
        &__order{
            outline: none;
            border-radius: 19px;
            border: solid 2px #9fe14f;
            background-color: transparent;
            font-family: GUERRILLA;
            font-size: 14px;
            letter-spacing: 0.14px;
            padding: 10px 0 ;
            max-width:140px;
            width: 100%;
            color: #797979;
        }
    }
</style>