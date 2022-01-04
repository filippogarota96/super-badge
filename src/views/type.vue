<template>
    <h2 class="title-view">
        <span class="title-number">1</span>
        Choose a type
    </h2>

    <div class="badges">
        <div class="card first-card">
            <div class="padding flex">
                <div class="first-picture-container">

                </div>
                <div class="name-surname">
                    <p>Nome Cognome</p>
                    <p>Pinco Pallo</p>
                </div>
                <div class="adress">
                    <p>Sede</p>
                    <p>Via dei Pinco Pallo</p>
                </div>
            </div>
            <div class="role">

            </div>
        </div>

        <div class="card second-card">
            <div class="second-picture-container">

            </div>
        </div>
    </div>
</template>

<script setup>
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

    .first-card {
        width: 500px;
        height: 300px;
        

        .first-picture-container {
            width: 150px ;
            height: 150px;
            border: 1px solid grey;
            border-radius: 20px;
            margin-right: 40px;
        }

        .role {
            width: 100%;
            background: lightgray;
        }
    }

    .second-card {
        width: 350px;
        height: 500px;

        .second-picture-container {
            width: 330px ;
            height: 150px;
            border: 1px solid grey;
            border-radius: 20px;
            margin:  30px auto
        }
        
    }

    .card p {
        margin: 0;
    }

    .name-surname {

    }
    
</style>