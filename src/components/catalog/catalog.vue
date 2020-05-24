<template>
    <div class="catalog">
        <nav-bar class="fixed-container"></nav-bar>
        <div class="catalog__container fixed-container">
            <div class="catalog__contant">
                <h2 class="catalog__title">
                    Каталог тапочек
                </h2>
                <span class="catalog__quatity-product">7 товаров</span>
            </div>
        </div>
        <ul class="catalog__items-1 fixed-container">
            <li class="catalog__item" v-for="(item, index) in checkOutCatalog" :key="item.id">
                <h3 class="catalog__title-product" @click="switchProduct(index)">{{item.title}}</h3>
                <img :src="item.img" alt="giraff" class="catalog__img" @click="switchProduct(index)">
                <div class="catalog__price-buy flex-container">
                    <span class="catalog__price" @click="switchProduct(index)">{{item.price}}</span>
                    <div class="catalog__backgroung-img" @click="buyProduct(index)">
                        <img src="./images/basket.png" alt="bakset" class="catalog__basket" >
                    </div>
                </div>
            </li>
        </ul>
        <footer-container></footer-container>
    </div>
</template>
<script>
import navBar from '../navBar/navBar'
import footer from '../footer/footer'
import {mapMutations, mapGetters} from "vuex"
export default {
    data(){
        return {
            
        }
    },
    computed: mapGetters(['checkOutCatalog']),
    methods: {
        ...mapMutations(['appQuantity', 'indexOfArrayCatalog', 'pushInBasket']),
        buyProduct(index){
            this.appQuantity();
            this.indexOfArrayCatalog(index);
            this.pushInBasket();
        },
        switchProduct(index){
            this.indexOfArrayCatalog(index);
            this.$router.push({path: './product'});
        }
    },
    components: {
        'nav-bar':navBar,
        'footer-container': footer
    }
}
</script>
<style lang="scss">
    .catalog{
        &__contant{
            margin-top: 86px;
            margin-bottom: 69px;
        }
        &__title{
            font-family: GUERRILLA;
            font-size: 37px;
            line-height: 1.19;
            letter-spacing: 0.93px;
            margin: 0;
            display: inline-block;
            vertical-align: middle;
            color: #47adf5;
        }
        &__quatity-product{
            display: inline-block;
            vertical-align: middle;
            margin-left: 69px;
            font-family: Comfortaa;
            font-size: 15px;
            letter-spacing: 0.38px;
            color: #c2c0c0;

        }
        &__items-1{
            margin: 0 auto;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-bottom: 90px;
        }
        &__item{
            max-width: 218px;
            border-radius: 20px;
            box-shadow: 0 0 16px 0 rgba(53, 53, 53, 0.08);
            background-color: #ffffff;
            padding: 13px 0;
            height:300px;
            margin-right: 51px;
            margin-bottom: 58px;
        }
        &__title-product{
            margin: 0 auto;
            max-width:146px;
            text-align: center;
            font-family: Comfortaa;
            font-size: 15px;
            line-height: 1.33;
            letter-spacing: 0.38px;
            color: #909090;
        }
        &__img{
            max-width: 218px;
            height: 210px;
        }
        &__price-buy{
            padding: 0 40px;
        }
        &__price{
            font-family: GUERRILLA;
            font-size: 22px;
            line-height: 2;
            letter-spacing: 0.55px;
            color: #4b4b4b;
            margin-right: 32px;
            display: inline-block;
            vertical-align: middle;
        }
        &__backgroung-img{
            box-shadow: 0 0 13px 0 rgba(112, 162, 48, 0.47);
            background-image: linear-gradient(to top, #b1f367, #90d13b);
            border: none;
            outline: none;
            border-radius: 50%;
            width: 51px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
    }
</style>