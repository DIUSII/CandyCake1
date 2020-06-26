<template>
    <div class="product__quatity-product flex-container">
        <p class="product__minus" @click="minusNumber">-</p>
        <p class="product__number">{{conclusionQuantityProduct}}</p>
        <p class="product__plus" @click="plusNumber" >+</p>
    </div>
</template>
<script>
    import {mapMutations, mapGetters} from 'vuex'
    export default {
        computed: mapGetters(['conclusionQuantityProduct']),
        methods: {
            ...mapMutations(['quantityOfOnleProductPlus', 'quantityOfOnleProductMinus']),
            minusNumber(){
                this.quantityOfOnleProductMinus()
            },
            plusNumber(){
                this.quantityOfOnleProductPlus();
            }
        }
    }
</script>
<style lang="scss">

</style>