<template>
    <div class="order fixed-container" id="doOrder-main-page"> 
        <h2 class="order__title">Как сделать заказ</h2>
        <h3 class="order__sub-title">У нас все легко и просто</h3>
        <div class="order__staps">
            <div class="order__staps_one">
                <img src="./images/basket-order.svg" alt="basket" class="order__img">
                <div class="order__fiqcaption">Шаг 1</div>
                <div class="order__text">Добавьте нужные вам товары в корзину</div>
            </div>
            <hr class="order__hr">
            <div class="order__staps_dwo">
                <img src="./images/card.svg" alt="card" class="order__img">
                <div class="order__fiqcaption">Шаг 2</div>
                <div class="order__text">Нажмите «заказать» и оплатите заказ любым удобным способом,выбрав способ доставки</div>
            </div>
            <hr class="order__hr">
            <div class="order__staps_three">
                <img src="./images/box.svg" alt="box" class="order__img">
                <div class="order__fiqcaption">Шаг 3</div>
                <div class="order__text">Ждете доставку посылки курьером или сервисом СДЕК!</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    .order{
        &__title{
            font-family: GUERRILLA;
            font-size: 30px;
            line-height: 1.47;
            letter-spacing: 0.75px;
            text-align: center;
            color: #47adf5;
            margin: 0;
            margin-bottom: 30px;
        }
        &__sub-title{
            font-family: GUERRILLA;
            font-size: 18px;
            letter-spacing: 0.45px;
            text-align: center;
            color: #bae3ff;
            margin-top: 0;
            margin-bottom:100px;
        }
        &__staps{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 146px;
            &_one, &_dwo, &_three{
                max-width: 289px;
                text-align: center;
            }
        }
        &__fiqcaption{
            font-family: GUERRILLA;
            font-size: 20px;
            line-height: 2.2;
            letter-spacing: 0.5px;
            color: #707070;
        }
        &__text{
            font-family: Comfortaa;
            line-height: 1.56;
            letter-spacing: 0.4px;
            color: #8e8e8e;
        }
        &__hr{
            border: 2px solid #d3d3d3;
            margin: 0;
            margin-top: 44px;
            max-width: 170px;
            width: 100%;
        }
    }
</style>