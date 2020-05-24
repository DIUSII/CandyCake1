<template>
    <div class="catalog fixed-container" id="catalog">
        <h2 class="catalog__title-mainPage">Каталог</h2>
        <h3 class="catalog__sub-title">Выберите интересующий раздел</h3>
        <ul class="catalog__items">
            <li class="catalog__item-main-page" v-for="item in array" :key='item.id' @click="goOverCatalog">
                <img :src="item.img" alt="kigurumi" class="catalog__img-main-page">
                <p class="catalog__fiqcaption">{{item.title}}</p>
                <button class="catalog__button">Перейти</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import router from '../../../router/router'
    export default {
        data(){
            return {
                array: [
                    {
                        title: 'Кигуруми',
                        img: require('./images/kigurumi.png')
                    },
                    {
                        title: 'Слаймы',
                        img: require('./images/slime.png')
                    },
                    {
                        title: 'Тапочки',
                        img: require('./images/slippers.png')
                    },
                    {
                        title: 'Сладости',
                        img: require('./images/sweets.png')
                    },
                    
                ]
            }
        },
        methods: {
            goOverCatalog(){
                router.push({path: './catalog'})
            }
        }
    }
</script>
<style lang="scss">
    .catalog{
        &__title-mainPage{
            font-family: GUERRILLA;
            font-size: 30px;
            line-height: 1.47;
            letter-spacing: 0.75px;
            text-align: center;
            color: #47adf5;
            margin: 0;
            margin-bottom: 32px;
        }
        &__sub-title{
            font-family: GUERRILLA;
            font-size: 18px;
            line-height: 2.44;
            letter-spacing: 0.45px;
            text-align: center;
            margin: 0;
            margin-bottom: 66px;
            color: #bae3ff;
        }
        &__items{
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 162px;
        }
        &__item-main-page{
            text-align: center;
        }
        &__fiqcaption{
            font-family: GUERRILLA;
            font-size: 20px;
            line-height: 1.5;
            letter-spacing: 0.8px;
            text-align: center;
            color: #707070;
            margin-bottom: 33px;
            margin-top: 34px;
        }
        &__button{
            border-radius: 20.5px;
            background-image: linear-gradient(to top, #b1f367, #90d13b);
            max-width: 140px;
            width: 100%;
            font-family: GUERRILLA;
            font-size: 15px;
            letter-spacing: 0.38px;
            color: #ffffff;
            padding: 15px 0;
            border: none;
            outline: none;
        }
    }
</style>