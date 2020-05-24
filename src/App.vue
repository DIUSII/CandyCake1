<template>
  <div id="app">
    <block></block>
  </div>
</template>

<script>
  import block from './components/block'
export default {
  name: 'App',
  components: {
    block,
  },
  created(){
    localStorage.index = 0;
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  .fixed-container{
    max-width: 1170px;
    margin: 0 auto;
  }
  .flex-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>