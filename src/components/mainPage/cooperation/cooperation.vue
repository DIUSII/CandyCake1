<template>
    <div class="cooperation fixed-container">
        <h2 class="cooperation__title">Сотрудничество</h2>
        <h3 class="cooperation__sub-title">Мы всегда открыты к сотрудничеству</h3>
        <div class="cooperation__container">
            <img src="./images/cooperation-cake.png" alt="cooperation-cake" class="cooperation__img">
            <form class="cooperation__form">
                <h4 class="cooperation__title-form">Укажите ваши контакты и мы с вами свяжемся!</h4>
                <input type="text" class="cooperation__input" placeholder="Ваше имя...">
                <input type="text" class="cooperation__input" placeholder="Ваш телефон...">
                <button class="cooperation__button">Отправить контакты</button>
                <small class="cooperation__small">Отправляя свои контактные данные, вы соглашаетесь на обработку персональных данных</small>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    .cooperation{
        &__container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 150px;
        }
        &__img{
            margin-right: 185px;
        }
        &__form{
            max-width: 315px;
            width:100%;
        }
        &__title{
            font-family: GUERRILLA;
            font-size: 30px;
            line-height: 1.47;
            letter-spacing: 0.75px;
            text-align: center;
            color: #47adf5;
            margin-top:0;
            margin-bottom: 25px;
        }
        &__sub-title{
            font-family: GUERRILLA;
            font-size: 18px;
            letter-spacing: 0.45px;
            text-align: center;
            color: #bae3ff;
            margin-top: 0;
            margin-bottom: 15px;
        }
        &__title-form{
            font-family: Comfortaa;
            font-weight: bold;
            line-height: 1.5;
            letter-spacing: 0.32px;
            text-align: center;
            max-width:214px;
            margin:0 auto 33px;
            color: #a7a7a7;
        }
        &__input{
            outline: none;
            border-radius: 16px;
            border: solid 1px #dadada;
            background-color: #ffffff;
            max-width:293px;
            width: 100%;
            padding: 7px 0 7px 20px;
            display: block;
            margin-bottom: 26px;
            font-family: Comfortaa;
            font-size: 12px;
            line-height: 1.83;
            letter-spacing: 0.24px;
            color: #bcbbbb;

        }
        &__button{
            border-radius: 16px;
            background-image: linear-gradient(to top, #b1f367, #90d13b);
            font-family: GUERRILLA;
            font-size: 15px;
            line-height: 1.6;
            letter-spacing: 0.3px;
            padding: 7px 0;
            width: 100%;
            color: #ffffff;
            outline: none;
            border: none;
            margin-bottom: 27px;
        }
        &__small{
            font-family: Comfortaa;
            font-size: 12px;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: 0.24px;
            color: #b6b6b6;
        }
    }
</style>