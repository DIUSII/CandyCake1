import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
function sumAllPrice(state){
    let sum = 0;
    for(let i = 0; i < state.basket.length; i++){
        sum = ((+state.basket[i].price) * (+state.basket[i].quantity)) + sum;
        console.log(state.basket[i].quantity)
        state.sumPrice = sum;
    }
    return state.sumPrice;
}
export default new Vuex.Store({
    actions: {

    },
    created() {
    },
    mutations: {
        appQuantity(state){
            state.quantity++;
        },
        indexOfArrayCatalog(state, index){
            localStorage.index = index;
            state.index = localStorage.index;
        },
        pushInBasket(state){
            state.basket.push(state.arrayCatalog[state.index]);
            console.log(state.basket.filter(item => item.id == state.arrayCatalog[state.index].id).length);
            if(state.basket.filter(item => item.id == state.arrayCatalog[state.index].id).length >  1){
                state.basket.pop();
                for(let i = 0; i < state.basket.length; i++){
                    if(state.basket[i].id === state.arrayCatalog[state.index].id){
                        state.basket[i].quantity++;
                        // let sum = 0;
                        // sum = (state.basket[i].price * state.basket[i].quantity) + sum;
                        state.sumPrice = (state.basket[i].price * state.basket[i].quantity);
                    }
                }
            }
            sumAllPrice(state);
        },
        plusQuantity(state, index){
            state.basket[index].quantity++;
            sumAllPrice(state);
        },
        minusQuantity(state, index){
            state.basket[index].quantity--;
            sumAllPrice(state);
        },
    },
    state: {
        basket: [],
        quantity: 0,
        index: 0,
        sumPrice: 0,
        arrayCatalog: [
            {   id : 0,
                title: 'Тапки для кигуруми жираф',
                img: require('./images/giraff.png'),
                price: 580 ,
                quantity: 1,
            },
            {
                id : 1,
                title: 'Тапки для кигуруми розовые',
                img: require('./images/pink.png'),
                price: 580,
                quantity: 1,
            },
            {
                id : 2,
                title: 'Тапки для кигуруми красные',
                img: require('./images/red.png'),
                price: 580,
                quantity: 1,
            },
            {
                id : 3,
                title: 'Тапки для кигуруми желтые',
                img: require('./images/yellow.png'),
                price: 580 ,
                quantity: 1,
            },
            {
                id :4,
                title: 'Тапки для кигуруми голубые',
                img: require('./images/blue.png'),
                price: 580,
                quantity: 1,
            },
            {
                id : 5,
                title: 'Тапки для кигуруми серые',
                img: require('./images/gray.png'),
                price: 580,
                quantity: 1,
            },
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

    }
  })