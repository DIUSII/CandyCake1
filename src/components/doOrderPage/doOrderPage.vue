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
                    <input type="radio" class="doOrder__radio">
                    <span class="doOrder__label_span">СДЭК</span>
                </label>
                <label  class="doOrder__label">
                    <input type="radio" class="doOrder__radio">
                    <span class="doOrder__label_span">Курьер (по Томску)<br><span class="doOrder__label_additionally-info">(+150 руб)<br>от 3000р. - бесплатно!</span></span>
                </label>
                <label  class="doOrder__label">
                    <input type="radio" class="doOrder__radio">
                    <span class="doOrder__label_span">Самовывоз</span>
                </label>
            </div>
            <h3 class="doOrder__title">Ваш заказ</h3>
            <ul class="doOrder__items">
                <li class="doOrder__item">Тапочки:<span class="doOrder__item_span">Тапки для кигуруми жираф</span></li>
                <li class="doOrder__item">Размер:<span class="doOrder__item_span">35-39 </span></li>
                <li class="doOrder__item">Цена:<span class="doOrder__item_span">580 руб</span></li>
            </ul>
            <h3 class="doOrder__title">Итого:   580 руб.</h3>
            <button class="doOrder__button">Оформить заказ</button>
            <small class="doOrder__info-text">Отправляя свои контактные данные, вы соглашаетесь<br>на обработку персональных данных</small>
            <a href="#" class="doOrder__back-page">Вернуться в корзину</a>
        </div>
        <footer-container></footer-container>
    </div>
</template>
<script>
import navBar from '../navBar/navBar'
import footer from '../footer/footer'
export default {
    components: {
        'footer-container': footer,
        'nav-bar': navBar,
    }
}
</script>
<style lang="scss">
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
            max-width: 561px;
        }
        &__input{
            max-width: 214px;
            width: 100%;
            font-family: Comfortaa;
            font-size: 15px;
            margin-bottom: 60px;
            letter-spacing: 0.6px;
            border: none;
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
            margin-right: 72px;
            &_span{
                font-weight: bold;
                color: #777777;
                margin-left: 25px;
            }
        }
        &__button{
            border: none;
            outline: none;
            border-radius: 25.5px;
            background-image: linear-gradient(to top, #b1f367, #90d13b);
            font-family: GUERRILLA;
            font-size: 17px;
            letter-spacing: 0.43px;
            padding: 20px 0;
            max-width:269px;
            width:100%;
            color: #ffffff;
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