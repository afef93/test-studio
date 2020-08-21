<template>
    <div>
        <b-container class="home">
            <h1 class="text-uppercase home__title">Découvrez les offres du moment</h1>
            <h2 class="text-uppercase home__subtitle">Vol + hôtel jusqu'à -70%</h2>
            <hr/>
            <div class="aselect" :data-value="selectedDestination" :data-list="list">
                <div class="selector" @click="toggle()">

                    <div class="label">
                        <img class="img-mixer" src="../../public/images/equalizer.svg"/>
                        <span>{{ selectedDestination }}</span>
                    </div>
                    <div class="arrow" :class="{ expanded : visible }"></div>
                    <div :class="{ hidden : !visible, visible }">
                        <ul>
                            <li :class="{ current : 'DESTINATIONS' === selectedDestination }"
                                @click="select('DESTINATIONS')">
                                DESTINATIONS
                            </li>
                            <li :class="{ current : item === selectedDestination }" v-for="item in list"
                                :key="item.country"
                                @click="select(item)">{{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="mt-5">

                <div class="row">
                    <div class="col-md-4" v-for="(item,index) in filteredDestination " :key="index">
                        <div class="card mb-4 shadow-sm">
                            <div :id="index" class="carousel slide">
                                <!-- Wrapper for slides -->
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <img src="../../public/images/ENTRE_CULTURE_ET_PLAGES.png" alt="first">
                                    </div>

                                    <div class="item">
                                        <img src="../../public/images/FAIRMONT_DUBAI.png" alt="second">
                                    </div>

                                    <div class="item">
                                        <img src="../../public/images/STHALA_MARC_PATRA.png" alt="third">
                                    </div>
                                </div>

                                <!-- Left and right controls -->
                                <a class="left carousel-control" :href="'#'+index" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" :href="'#'+index" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                <span class="carousel__label ">{{item.upto}}</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text card-body__title text-left mb-0">
                                    <span class="card-body__title--bold">{{item.country}}</span> — {{item.place}}</p>
                                <p class="card-text card-body__subtitle text-left mb-0">
                                    {{item.label}}
                                    <span v-for="(n, index) in parseInt(item.rating)" :key="n*index"
                                          class="glyphicon glyphicon-star" aria-hidden="true"></span>
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="tag-group my-2">
                                        <span class="tag-group__first p-1">{{item.tags[0].label}}</span>
                                        <span class="tag-group__second mx-1 p-1">{{item.tags[1].label}}</span>
                                    </div>
                                    <small class="">
                                        <button type="button" class="btn btn-sm btn-more">
                                            <img src="../../public/images/right-arrow.svg"/>
                                        </button>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Contact/>
            <Inscription/>


        </b-container>
        <b-container class="footer-fixed">
            <div class="navbar text-light navbar-light bg-dark bg-faded mb-0">
                <Footer/>
            </div>
        </b-container>
    </div>
</template>

<script>
    import destinations from '../../public/destinations'
    import Footer from './Footer.vue'
    import Contact from './Contact.vue'
    import Inscription from "@/components/Inscription";


    export default {
        name: 'Home',
        data: function () {
            return {
                items: destinations,
                visible: false,
                selectedDestination: "DESTINATIONS",
                list: [],
                data: [
                    '<img src="../../public/images/NOKU_MALDIVES.png" />',
                    '<img src="public/images/ECHAPEE_SRI_LANKAISE.png"/>',
                    '<img src="public/images/ENTRE_CULTURE_ET_PLAGES.png"/>'
                ],

            };
        },
        mounted: function () {

            // get list of country
            let getUniqueListByCountry = [...new Map(destinations.map(item => [item["country"], item])).values()];

            this.list = getUniqueListByCountry.map(function (item) {
                return item.country;
            });

        },
        methods: {
            toggle() {
                this.visible = !this.visible;
            },
            select(option) {
                this.selectedDestination = option;
            },
        }
        , components: {
            Inscription,
            Footer,
            Contact,

        },
        computed: {
            filteredDestination: function () {
                let destination = this.selectedDestination;

                if (destination === "DESTINATIONS") {
                    return this.items;
                } else {
                    return this.items.filter(function (item) {
                        return item.country === destination;
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/style";

</style>
