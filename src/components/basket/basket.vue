<template>
    <div class="basket">
        <nav-bar></nav-bar>
        <div class="basket__container">
            <a href="#" class="basket__link  fixed-container">Главная /  Каталог  / <span class="basket__link_span">Корзина</span></a>
            <hr class="basket__hr">
            <ul class="basket__items">
                <li class="basket__item" v-for="(item, index) in allBasket" :key="item.id">
                    <div class="fixed-container flex-container">
                        <img :src="item.img" alt="girl" class="basket__img-product" @click="switchProduct(index)">
                        <div class="basket__form flex-container">
                            <div class="basket__name">
                                <h3 class="basket__title-product">{{item.title}}</h3>
                                <p class="basket__product-size">{{item.sizeProduct}}</p>
                            </div>
                            <div class="basket__additional">
                                <h4 class="basket__sub-title">Количество</h4>
                                <add-quantity :indexArray="index"></add-quantity>
                            </div>
                            <div class="basket__price">
                                <h4 class="basket__sub-title">Цена</h4>
                                <p class="basket__money">{{item.price + 'p'}}</p>
                            </div>
                            <div class="basket__delete-of-basket">
                                <h4 class="basket__sub-title">Удалить</h4>
                                <span class="basket__button-delete" @click="deleteOfBasket(index)">X</span>
                            </div>
                        </div>
                    </div>
                    <hr class="basket__hr">
                </li>
            </ul>
            <div class="basket__price-and-order flex-container fixed-container">
                <div class="basket__all-price">Сумма заказа:<span class="basket__all-price_span">{{$store.state.sumPrice + 'p'}}</span></div>
                <div class="basket__order flex-container">
                    <a href="#" class="basket__back-main-page" @click="backMainPage">Вернуться на главную</a>
                    <button class="basket__button" @click="transitionOrder"  :class="{darkBack: checkBack}" href="#catalog" @mouseenter="checkBack = true" @mouseleave="checkBack = false">Оформить заказ</button>
                </div>
            </div>
        </div>
        <footer-container></footer-container>
    </div>
</template>
<script>    
    import navBar from '../navBar/navBar'
    import footer from '../footer/footer'
    import addQuantity from './components/addQuantity'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return {
                hoverEffect1: false,
                hoverEffect2: false,
                hoverEffect3: false,
                number: 1,
                checkBack: false,
            }
        },
        computed: mapGetters(['checkOutCatalog', 'allBasket']),
        methods: {
            ...mapMutations(['deleteItemOfBasket', 'indexOfArrayCatalog', 'quantityOfProduct', 'INDEX_OF_BASKET', 'appQuantity']),
            deleteOfBasket(index){
                this.deleteItemOfBasket(index);
                console.log(this.allBasket);
                this.appQuantity();
            },
            backMainPage(){
                this.$router.push({path: './'});
            },
            transitionOrder(){
                this.$router.push({path: './do-order'});
            },
            switchProduct(index){
                this.indexOfArrayCatalog(this.$store.state.basket[index].id);
                this.INDEX_OF_BASKET(index)
                this.quantityOfProduct(1);
                this.$router.push({path: './product'});
            }
        },
        components: {
            'nav-bar': navBar,
            'footer-container': footer,
            'add-quantity':addQuantity
        }
    }
</script>
<style lang="scss">
    .basket{
        &__items{
            margin: 0;
            padding: 0;
            list-style: none;
            min-height: 300px;
        }
        &__item{
            padding-bottom: 15px;

        }
        &__form{
            align-items: flex-start;
            width: 900px;
            padding-top: 41px;
        }
        &__link{
            font-family: GUERRILLA;
            letter-spacing: 0.64px;
            color: #7c7c7c;
            margin-top: 81px;
            margin-bottom: 62px;
            display: block;
            &_span{
                font-size: 15px;
                color: #bebebe;
            }
        }
        &__hr{
            border: 1px solid #d0d0d0;
            margin: 0;
        }
        &__title-product{
            max-width: 189px;
            font-family: Comfortaa;
            font-size: 18px;
            font-weight: bold;
            line-height: 1.33;
            margin: 0;
            margin-bottom: 39px;
            letter-spacing: 0.45px;
            color: #777777;
        }
        &__product-size{
            font-family: Comfortaa;
            letter-spacing: 0.32px;
            color: #808080;
            margin: 0;
        }
        &__sub-title{
            font-family: GUERRILLA;
            letter-spacing: 0.64px;
            text-align: center;
            color: #bebebe;
            margin: 0;
            margin-bottom: 64px;
        }
        &__money{
            font-family: GUERRILLA;
            font-size: 24px;
            letter-spacing: 0.6px;
            text-align: left;
            color: #7f7f7f;
        }
        &__delete-of-basket{
            text-align: center;
        }
        &__button-delete{
            text-align: center;
            color: #47adf5;
            font-size: 19.5px;
            font-family: Myriad Pro;
            border: solid 1px #d0d0d0;
            background-color: transparent;
            border-radius: 50%;
            padding: 11px 15px;
        }
        &__price-and-order{
            margin: 61px auto 150px;
        }
        &__all-price{
            font-family: Comfortaa;
            font-size: 22px;
            font-weight: bold;
            letter-spacing: 0.77px;
            color: #6a6a6a;
            &_span{
                font-family: GUERRILLA;
                font-size: 28px;
                letter-spacing: 0.7px;
                color: #575757;
                margin-left: 62px;
            }
        }
        &__back-main-page{
            font-family: Comfortaa;
            font-size: 14px;
            letter-spacing: 0.28px;
            text-align: left;
            color: #b5b5b5;
            display: block;
            margin-right: 51px;
        }
        &__button{
            font-family: GUERRILLA;
            font-size: 17px;
            letter-spacing: 0.43px;
            border: none;
            outline: none;
            padding: 20px;
            max-width: 269px;
            width: 100%;
            border-radius: 25.5px;
            background-image: linear-gradient(to bottom, #b1f367, #90d13b);
            color: #ffffff;
        }   
        &__order{
            max-width: 500px;
            width: 100%;
        }
    }
</style>