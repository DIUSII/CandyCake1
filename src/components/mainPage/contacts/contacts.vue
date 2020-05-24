<template>
    <div class="contact fixed-container" id='contacts'>
        <h2 class="contact__title">Контакты</h2>
        <h3 class="contact__sub-title">Как с нами связаться</h3>
        <div class="contact__container">
            <div class="contact__info">
                <h4 class="contact__title-info">Мы находимся:</h4>
                <p class="contact__location"><span>Иркутский тракт 54, ТЦ БУМ</span></p>
                <p class="contact__time"><img src="./images/clock.svg" alt="clock" class="contact__img"><span>Пн-вс 11.00 - 8.30</span></p>
                <h4 class="contact__title-info">С нами можно связаться:</h4>
                <p class="contact__link">
                    <img src="./images/email.svg" alt="email" class="contact__img">
                    <a href="mailto:CakeCandyTomsk@gmail.com" class="contact__email-input">CakeCandyTomsk@gmail.com</a>
                </p>
                <p class="contact__link">
                    <img src="./images/inst.svg" alt="inst" class="contact__img">
                    <span>@cakecandytomsk</span>
                </p>
                <p class="contact__link">
                    <img src="./images/vk.svg" alt="vk" class="contact__img">
                    <span>vk.com/keksikcandy</span>
                </p>
                <a href="tel:+79234377472" class="contact__phone">8 (923) 437-74-72</a>
            </div>
            <img src="./images/map.jpg" alt="map" class="contact__img-map">
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    .contact{
        &__title{
            font-family: GUERRILLA;
            font-size: 30px;
            line-height: 1.47;
            letter-spacing: 0.75px;
            text-align: center;
            color: #47adf5;
            margin-top: 0;
            margin-bottom: 27px;
        }
        &__sub-title{
            font-family: GUERRILLA;
            font-size: 18px;
            letter-spacing: 0.45px;
            text-align: center;
            color: #bae3ff;
            margin-top: 0;
            margin-bottom: 101px;
        }
        &__container{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 167px;
        }
        &__title-info{
            font-family: GUERRILLA;
            line-height: 1.5;
            letter-spacing: 0.32px;
            color: #b7b7b7;
            margin-top: 0px;
            margin-bottom: 22px;
        }
        &__location{
            font-family: Comfortaa;
            font-size: 17px;
            line-height: 1.76;
            letter-spacing: 0.68px;
            color: #706f6f;
            margin-top: 0px;
            margin-bottom: 26px;
        }
        &__time{
            display: flex;
            align-items: center;
            font-family: Comfortaa;
            font-size: 15px;
            font-weight: bold;
            line-height: 1.6;
            letter-spacing: 0.3px;
            margin: 0;
            margin-bottom: 30px;
            color: #909090;
        }
        &__img{
            margin-right: 14px;
        }   
        &__link{
            display: flex;
            align-items: center;
            font-family: Comfortaa;
            font-size: 15px;
            line-height: 2;
            letter-spacing: 0.6px;
            color: #858585;
            margin-top: 0px;
            margin-bottom: 30px;
        }
        &__email-input{
            text-decoration: none;
            color: #858585;
        }
        &__phone{
            font-family: GUERRILLA;
            font-size: 17px;
            line-height: 1.76;
            letter-spacing: 0.68px;
            color: #707070;
            text-decoration: none;
        }
        &__img-map{
            margin-top: 34px;
        }
    }
</style>