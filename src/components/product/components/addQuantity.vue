<template>
    <div class="product__quatity-product flex-container">
        <p class="product__minus" @click="minusNumber">-</p>
        <p class="product__number">{{number}}</p>
        <p class="product__plus" @click="plusNumber" >+</p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                number: 1,
            }
        },
        methods: {
            minusNumber(){
                if(this.number > 1){
                    this.number--;
                }
            },
            plusNumber(){
                this.number++;
            }
        }
    }
</script>
<style lang="scss">

</style>