<template>
    <div class="mainForm">
        <header-header></header-header>
        <about-us></about-us>
        <catalog></catalog>
        <do-order></do-order>
        <cooperation></cooperation>
        <contacts></contacts>
        <footer-container></footer-container>
    </div>
</template>
<script>
    import header from './header/header'
    import aboutUs from './aboutUs/aboutUs'
    import catalog from './catalog/catalog'
    import doOrder from './doOrder/doOrder'
    import cooperation from './cooperation/cooperation'
    import contacts from './contacts/contacts'
    import footer from '../footer/footer'
    export default {
        components: {
            'header-header':header,
            'about-us': aboutUs,
            catalog,
            'do-order': doOrder,
            cooperation,
            contacts,
            'footer-container': footer
        }
    }
</script>