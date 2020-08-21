<template>
    <b-container id="inscription" class=" my-5 py-3 ">
               <div class="row">
                   <div class="col-md-4 col-sm-12"  v-for="step in steps " :key="step.id">
                       <div class="step d-flex align-items-center justify-content-center">
                           <div class="step__number">
                               {{step.id}}
                           </div>
                           <div class="">
                               <div class="step__title">{{step.title}}</div>
                               <div class="step__subTitle">{{step.subTitle}}</div>
                               <div v-if="step.option" class="step__title">{{step.option}}</div>
                           </div>
                       </div>
                   </div>
               </div>
        <div class="row justify-content-center mt-5">
            <button class="bubbly-button text-uppercase" v-on:click="animateButton">{{btn}}</button>

        </div>

    </b-container>


</template>

<script>
    export default {
        name: "Inscription",
        data(){
            return{
                btn : "Je m'inscris",
                steps :[
                    {
                        id:1,
                        title:"Rejoignez",
                        subTitle:"Emirates | The List",
                    }, {
                        id:2,
                        title:"Recevez par email",
                        subTitle:"Votre bon de 150€ offert",
                        option:"à utiliser dès 1000€ d'achat"
                    }, {
                        id:3,
                        title:"Réservez votre séjour",
                        subTitle:"Avant le 30 avril 2019",
                    }
                ]
            }
        }
        ,
        methods:{
            animateButton (e) {
                e.preventDefault;
                //reset animation
                e.target.classList.remove('animate');

                e.target.classList.add('animate');
                setTimeout(function(){
                    e.target.classList.remove('animate');
                },700);
            },
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/inscription";


</style>
