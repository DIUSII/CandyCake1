<template>
    <div class="footer">
        <div class="footer__container fixed-container flex-container">
            <div class="footer__catalog">
                <h3 class="footer__title">Категории</h3>
                <ul class="footer__catalog-items">
                    <li class="footer__catalog-item">Кигуруми</li>
                    <li class="footer__catalog-item">Слаймы</li>
                    <li class="footer__catalog-item">Тапочки</li>
                    <li class="footer__catalog-item">Сладости</li>
                </ul>
            </div>
            <h3 class="footer__title">Как сделать заказ?</h3>
            <div class="footer__money">
                <h3 class="footer__title">Как сделать заказ?</h3>
                <img src="./images/master-visa.png" alt="master-visa" class="footer__img-card">
                <h3 class="footer__title">Как сделать заказ?</h3>
            </div>
            <div class="footer__contacts">
                <h3 class="footer__title footer__title_contacts">Обратный звонок</h3>
                <ul class="footer__contacts-items">
                    <li class="footer__phone">8 (923) 437-74-72</li>
                    <li class="footer__email">CakeCandyTomsk@gmail.com</li>
                    <li class="footer__images">
                        <img src="./images/gray-inst.svg" alt="inst" class="footer__img">
                        <img src="./images/gray-vk.svg" alt="vk">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    .footer{
        background-color: #e4e4e4;
        padding: 31px 0;
        &__container{
            align-items: flex-start !important;
        }
        &__title{
            font-family: GUERRILLA;
            font-size: 15px;
            letter-spacing: 0.38px;
            color: #8f8f8f;
            margin-top: 0px;
            margin-bottom: 23px;
            &_contacts{
                text-decoration: underline;
                text-align: center;
            }
        }
        &__catalog-items{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        &__catalog-item{
            margin-bottom: 15px;
            font-family: Comfortaa;
            font-size: 13px;
            letter-spacing: 0.33px;
            color: #a2a2a2;
            &:nth-last-child(1){
                margin-bottom: 0px;
            }
        }
        &__contacts-items{
            margin: 0;
            padding: 0;
            list-style: none;
            text-align: center;
        }
        &__img-card{
            margin-bottom: 21px;
        }
        &__phone{
            font-family: GUERRILLA;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 0.48px;
            color: #a2a2a2;
            margin-bottom: 21px;
        }
        &__email{
            font-family: GUERRILLA;
            font-size: 12px;
            letter-spacing: 0.48px;
            color: #a2a2a2;
            margin-bottom: 27px;
        }
        &__img{
            margin-right: 14px;
        }
    }
</style>