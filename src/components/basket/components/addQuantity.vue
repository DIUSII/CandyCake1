<template>
    <div class="product__quatity-product flex-container">
        <p class="product__minus" @click="minusNumber">-</p>
        <p class="product__number">{{$store.state.basket[indexArray].quantity}}</p>
        <p class="product__plus" @click="plusNumber" >+</p>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        props: ['indexArray'],
        methods: {
            ...mapMutations(['plusQuantity', 'minusQuantity']),
            minusNumber(){
                this.minusQuantity(this.indexArray);
            },
            plusNumber(){
                this.plusQuantity(this.indexArray);
            }
        }
    }
</script>
<style lang="scss">

</style>