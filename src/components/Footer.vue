<template>
    <footer id="footer" class="justify-center">
        <h4 class="mt-3 footer__title">Rejoignez <span class="footer__title--bold">Emirates | The List</span></h4>
        <h4 class="footer__subtitle">{{alert}}</h4>

        <hr class="mb-3">
    </footer>


</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                alert: 'Vol + hôtel négociés jusqu\'à -70%',
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/footer";


</style>
