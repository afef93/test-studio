<template>
    <div id="contact">
        <div class="text-dark text-uppercase contact">
            <h4 class="m-0 mt-3 contact__title">{{title}}</h4>
            <h4 class="m-0 contact__subtitle">{{subTitle}}</h4>
            <hr>
        </div>

        <div class="my-5 py-3 bg-red justify-content-center text-light form-contact">
            <h4 class="m-0 form-contact__title">{{question}}</h4>
            <h5 class="m-0 form-contact__subtitle">{{info}}<a href="">{{link}}</a></h5>

            </div>
        </div>


</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                title: "Comment bénéficier de l'offre ?",
                subTitle: "150€ de réduction* dès 1000€ d'achat",
                question: "Déjà membre ?",
                info: "Votre code promo vous attend directement sur le site ",
                link: "en cliquant ici",
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/contact";



</style>
