import Vue from 'vue'
import Vuex from 'vuex'
import modalWindow from './modules/windowPhone'
import colBackMainPage from './modules/colBackMainPage'
Vue.use(Vuex);
function sumAllPrice(state){
    let sum = 0;
    for(let i = 0; i < state.basket.length; i++){
        sum = (state.basket[i].price*state.basket[i].quantity) + sum;
        // console.log(state.basket[i].quantity)
        state.sumPrice = sum;
    }
    return state.sumPrice;
}
function appQuantityFunction(state){
    let sum = 0;
    for(let i = 0; i < state.basket.length; i++){
        sum = state.basket[i].quantity + sum;
        state.quantity = sum;
    }
}
export default new Vuex.Store({
    actions: {
        
    },
    mutations: {
        appQuantity(state){
            let sum = 0;
            for(let i = 0; i < state.basket.length; i++){
                sum = state.basket[i].quantity + sum;
                state.quantity = sum;
            }
            if(state.basket.length < 1){
                state.quantity = 0;
            }
        },
        indexOfArrayCatalog(state, index){
            localStorage.index = index;
            state.index = localStorage.index;
        },
        async pushInBasket(state){
            state.basket.push(state.arrayCatalog[state.index]);
            // if(state.basket[state.arrayCatalog[state.index]].sizeProduct === 'Размер не выбран'){
            if(state.basket.filter(item => item.id == state.arrayCatalog[state.index].id).length >  1){
                state.basket.pop();
                for(let i = 0; i < state.basket.length; i++){
                    if(state.basket[i].id === state.arrayCatalog[state.index].id){
                        state.basket[i].quantity++;
                        state.sumPrice = (state.basket[i].price * state.basket[i].quantity);
                    }
                }
                }
            // } 
            // else if( state.basket[state.arrayCatalog[state.index]].sizeProduct !== 'Размер не выбран' && ){
            //     this.assignSizeInProdct();
            // } else {     
            //      
            // }
            sumAllPrice(state);
        },
        plusQuantity(state, index){
            state.basket[index].quantity++;
            sumAllPrice(state);
            appQuantityFunction(state);
            console.log(state.basket);
        },
        minusQuantity(state, index){
            if(state.basket[index].quantity > 1){
                state.basket[index].quantity--;
            }
            sumAllPrice(state);
            appQuantityFunction(state);
            // console.log(state.basket);
        },
        deleteItemOfBasket(state, index){
            state.sumPrice = state.sumPrice - (state.basket[index].price * state.basket[index].quantity);
            state.basket.splice(index, 1);
        },
        quantityOfProduct(state, quantity){
            state.quantityOfOnleProduct = quantity
        },
        quantityOfOnleProductPlus(state){
            state.quantityOfOnleProduct++;
        },
        quantityOfOnleProductMinus(state){
            if(state.quantityOfOnleProduct > 1 ){
                state.quantityOfOnleProduct--;
            }
        },
        quantityOfProductInBasket(state){
            let sum = state.basket[state.indexOfBasket].quantity;
            sum = state.basket[state.indexOfBasket].quantity + state.quantityOfOnleProduct - 1;
            state.basket[state.indexOfBasket].quantity = sum;
            // console.log(state.basket);
        },
        INDEX_OF_BASKET(state, index){
            state.indexOfBasket = index
        },
        assignSizeInProdct(state, size){
            state.basket[state.indexOfBasket].sizeProduct = size;
        },
        SWITCH_ARRAY(state, index){
            state.arrayCatalog = state.allArray[index].subItem;
            state.titleCatalog = state.arrayCatalog[0];
            state.arrayCatalog.splice(0, 1);
            console.log(state.arrayCatalog);
        }
    },
    state: {
        basket: [],
        quantity: 0,
        quantityOfOnleProduct: 1,
        index: 0,
        sumPrice: 0,
        indexOfBasket: 0,
        titleCatalog: '',
        arrayCatalog: [],
        allArray: [
                    {
                        subItem: [
                            "кигуруми",
                            {   
                                id : 0,
                                title: 'Тапки для кигуруми жираф',
                                img: require('./images/giraff.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 1,
                                title: 'Тапки для кигуруми розовые',
                                img: require('./images/pink.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 2,
                                title: 'Тапки для кигуруми красные',
                                img: require('./images/red.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 3,
                                title: 'Тапки для кигуруми желтые',
                                img: require('./images/yellow.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id :4,
                                title: 'Тапки для кигуруми голубые',
                                img: require('./images/blue.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 5,
                                title: 'Тапки для кигуруми серые',
                                img: require('./images/gray.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                        ]
                    },
                    {
                        subItem: [
                            "слаймов",
                            {   
                                id : 0,
                                title: 'Тапки для кигуруми жираф',
                                img: require('./images/giraff.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 1,
                                title: 'Тапки для кигуруми розовые',
                                img: require('./images/pink.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 2,
                                title: 'Тапки для кигуруми красные',
                                img: require('./images/red.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 3,
                                title: 'Тапки для кигуруми желтые',
                                img: require('./images/yellow.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id :4,
                                title: 'Тапки для кигуруми голубые',
                                img: require('./images/blue.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 5,
                                title: 'Тапки для кигуруми серые',
                                img: require('./images/gray.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                        ]
                    },
                    {
                        subItem: [
                            "тапочек",
                            {   
                                id : 0,
                                title: 'Тапки для кигуруми жираф',
                                img: require('./images/giraff.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 1,
                                title: 'Тапки для кигуруми розовые',
                                img: require('./images/pink.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 2,
                                title: 'Тапки для кигуруми красные',
                                img: require('./images/red.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 3,
                                title: 'Тапки для кигуруми желтые',
                                img: require('./images/yellow.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id :4,
                                title: 'Тапки для кигуруми голубые',
                                img: require('./images/blue.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 5,
                                title: 'Тапки для кигуруми серые',
                                img: require('./images/gray.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                        ]
                    },
                    {
                        subItem: [
                            "сладостей",
                            {   
                                id : 0,
                                title: 'Тапки для кигуруми жираф',
                                img: require('./images/giraff.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 1,
                                title: 'Тапки для кигуруми розовые',
                                img: require('./images/pink.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 2,
                                title: 'Тапки для кигуруми красные',
                                img: require('./images/red.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 3,
                                title: 'Тапки для кигуруми желтые',
                                img: require('./images/yellow.png'),
                                price: 580 ,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id :4,
                                title: 'Тапки для кигуруми голубые',
                                img: require('./images/blue.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 5,
                                title: 'Тапки для кигуруми серые',
                                img: require('./images/gray.png'),
                                price: 580,
                                sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                        ]
                    },
                    {
                        subItem: [
                            "книг и журналов",
                            {   
                                id : 0,
                                title: 'Живая энциклопедия WOW! Динозавры',
                                img: require('./images/giraff.png'),
                                price: 600 ,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 1,
                                title: 'Живая энциклопедия WOW! Животные',
                                img: require('./images/pink.png'),
                                price: 600,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 2,
                                title: 'Живая энциклопедия WOW! Чудеса света',
                                img: require('./images/red.png'),
                                price: 600,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 3,
                                title: 'Живая энциклопедия Нескучная физика',
                                img: require('./images/yellow.png'),
                                price: 600 ,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id :4,
                                title: 'Живая энциклопедия Динозавры',
                                img: require('./images/blue.png'),
                                price: 540,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 5,
                                title: 'Живая энциклопедия Космос',
                                img: require('./images/gray.png'),
                                price: 540,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 6,
                                title: 'Живая энциклопедия Микромир',
                                img: require('./images/gray.png'),
                                price: 490,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 7,
                                title: 'Живая энциклопедия В глубинах океана',
                                img: require('./images/gray.png'),
                                price: 490,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 8,
                                title: 'Живая энциклопедия WOW! Секреты океанов',
                                img: require('./images/gray.png'),
                                price: 600,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 9,
                                title: 'Все загадки Понивилля',
                                img: require('./images/vce-zagatki-ponivilla.jpg'),
                                price: 450,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 10,
                                title: 'Все краски Понивилля',
                                img: require('./images/gray.png'),
                                price: 450,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                            {
                                id : 11 ,
                                title: 'Домашние помощники',
                                img: require('./images/gray.png'),
                                price: 490,
                                // sizeProduct: 'Размер не выбран',
                                quantity: 1,
                                checkBack: false,
                            },
                        ]
                    },
                    
                    // {   
                    //     id : 0,
                    //     title: 'Тапки для кигуруми жираф',
                    //     img: require('./images/giraff.png'),
                    //     price: 580 ,
                    //     sizeProduct: 'Размер не выбран',
                    //     quantity: 1,
                    //     checkBack: false,
                    // },
                    // {
                    //     id : 1,
                    //     title: 'Тапки для кигуруми розовые',
                    //     img: require('./images/pink.png'),
                    //     price: 580,
                    //     sizeProduct: 'Размер не выбран',
                    //     quantity: 1,
                    //     checkBack: false,
                    // },
                    // {
                    //     id : 2,
                    //     title: 'Тапки для кигуруми красные',
                    //     img: require('./images/red.png'),
                    //     price: 580,
                    //     sizeProduct: 'Размер не выбран',
                    //     quantity: 1,
                    //     checkBack: false,
                    // },
                    // {
                    //     id : 3,
                    //     title: 'Тапки для кигуруми желтые',
                    //     img: require('./images/yellow.png'),
                    //     price: 580 ,
                    //     sizeProduct: 'Размер не выбран',
                    //     quantity: 1,
                    //     checkBack: false,
                    // },
                    // {
                    //     id :4,
                    //     title: 'Тапки для кигуруми голубые',
                    //     img: require('./images/blue.png'),
                    //     price: 580,
                    //     sizeProduct: 'Размер не выбран',
                    //     quantity: 1,
                    //     checkBack: false,
                    // },
                    // {
                    //     id : 5,
                    //     title: 'Тапки для кигуруми серые',
                    //     img: require('./images/gray.png'),
                    //     price: 580,
                    //     sizeProduct: 'Размер не выбран',
                    //     quantity: 1,
                    //     checkBack: false,
                    // },
                
        ]
    },
    getters: {
        allBasket(state) {

            return state.basket;
        },
        quantityPeople(state) {
            return state.quantity;
        },
        checkOutCatalog(state) {
            return state.arrayCatalog;
        },
        conclusionQuantityProduct(state){
            return state.quantityOfOnleProduct;
        }

    },
    modules: {
        modalWindow,
        colBackMainPage,
    }
  })