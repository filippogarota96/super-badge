<template>
    <h2 class="title-view">
        <span class="title-number">1</span>
        Choose a type
    </h2>

    <div class="badges">
        <first-badge text="text-default" background="bg-color-default" shadow="shadow-default"/>

        <second-badge />
        
    </div>
</template>

<script setup>
    import firstBadge from '../components/firstBadge.vue'
    import secondBadge from '../components/secondBadge.vue'
    import {ref} from 'vue'
    const props = defineProps(['name']);
</script>

<style lang="scss">
    .badges {
        width: 90%;
        margin: 50px ;
        display: flex;
        justify-content: space-between;
    }

    .card {
        border-radius: 20px;
        box-shadow: 1px 1px 3px 2px lightgray;
        display: flex;
        flex-wrap: wrap;
    }
    //first badge

    // .background-selected {
    //     background-color: lightgrey;
    // }
    // .first-card {
    //     width: 500px;
    //     height: 300px;
        

    //     .first-picture-container {
    //         width: 150px ;
    //         height: 150px;
    //         border: 1px solid grey;
    //         border-radius: 20px;
    //         margin-right: 40px;
    //     }

    //     .badge-role {
    //         width: 100%;
    //         height: 60px;
    //         padding-left: 30px;
    //         margin-bottom: 30px;
    //         position: relative;
            
    //         .role-info {
    //             color: #ffff;
    //         }

    //         .role-picture {
    //             width: 70px;
    //             height: 70px;
    //             background-color: #ECECED;
    //             border-radius: 50%;
    //             position: absolute;
    //             top: -30px;
    //             right: 30px;
    //         }


    //     }
    // }


    .flex {
        display: flex;
        flex-wrap: wrap;
    }

    .padding {
        padding:30px
    }

    .mt-2 {
        margin-top: 20px;
    }


    
    
</style>