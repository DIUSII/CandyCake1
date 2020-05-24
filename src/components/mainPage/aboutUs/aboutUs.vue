<template>
    <div class="aboutUs" id="aboutUs">
        <h2 class="aboutUs__title">О нас</h2>
        <div class="aboutUs__container flex-container fixed-container">
            <div class="aboutUs__info">
                <h3 class="aboutUs__sub-title">Кто такой кексик Candy?</h3>
                <div class="aboutUs__text">
                    Ищите самые интересные, новые и популярные подарки для детей, друзей, близких и себя любимого? Тогда вы зашли 
                    на нужный сайт! Трендовый товар, которого нет на прилавках других магазинов - наш ассортимент!
                </div>
            </div>
            <img src="./images/girl-about-us.png" alt="girl-about-us">
        </div>
    </div>
</template>
<script>
    
    export default {
        
    }
</script>
<style lang="scss">
    .aboutUs{
        margin-bottom: 170px;
        &__container{
            max-width:1000px;
        }
        &__title{
            margin-top: 163px;
            margin-bottom: 103px;
            font-family: GUERRILLA;
            font-size: 30px;
            line-height: 1.47;
            letter-spacing: 0.75px;
            text-align: center;
            color: #47adf5;
        }
        &__info{
            max-width: 421px;
        }
        &__sub-title{
            font-family: GUERRILLA;
            font-size: 22px;
            line-height: 1.36;
            letter-spacing: 0.88px;
            color: #e07dae;
            margin-top: 0px;
            margin-bottom: 55px;
        }
        &__text{
            font-family: Comfortaa;
            font-size: 17px;
            line-height: 1.76;
            letter-spacing: 0.68px;
            color: #898989;
        }
    }
</style>