<template>
  <div id="app">
    <block></block>
    <modal-window></modal-window>
  </div>
</template>

<script>
  import block from './components/block'
  import modalWindow from './components/mainPage/modalWindowPhone/modalWindowPhone'
export default {
  name: 'App',
  components: {
    block,
    'modal-window':modalWindow
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