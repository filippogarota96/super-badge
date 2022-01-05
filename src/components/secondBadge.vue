<template>
    <div class="card second-card" :class="shadow">
            <div class="second-picture-container text" :class="border">

            </div>

            <div class="data" :class="background">
                <div class="name">
                    <p>Nome Cognome</p>
                    <p>Pinco Pallo</p>
                </div>
                <div class="address">
                    <p>Sede</p>
                    <p>Via piana</p>
                </div>
                <div class="role">
                    <p>Ruolo</p>
                    <p>Junior hero</p>
                </div>
                <div class="role-picture" :class="role">

                </div>
            </div>
    </div>
</template>

<script setup>

    const props = defineProps(['background', 'border', 'shadow', 'name', 'address', 'role',])

    const emits = defineEmits(['select'])

    const isSelected = 'SECOND'

    const selectThis = () => emits('select', isSelected)
</script>


<style lang="scss">
     
     .second-card {
        width: 350px;
        height: 500px;
        overflow: hidden;

        .second-picture-container {
            width: 330px ;
            height: 150px;
            align-items: center;
            border-radius: 20px;
            margin:  30px;
        }

        .data {
            width: 100%;
            height: 58%;
            padding: 0 30px;
            color: #fff;
            position: relative;
        }

        .name {
            margin-top: 30px;
        }

        .address {
            margin-top: 20px;
            margin-bottom: 50px;
        }

        .role-picture {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            right: 30px;
            bottom: 30px;
        }
        
    }

    .name p:last-child, 
    .address p:last-child, 
    .role p:last-child {
        font-weight: bold;
        font-size: 1.2rem;
    }
    .card p {
        margin: 0;
    }

    .bg-role-default {
        background-color: #F4F4F4;
    }

    .bg-role-selected {
        background-color: #D9D9DB;
    }

    .bg-color-default {
        background: #E3E2E5;
    }

    .default-border {
        border: 1px solid #C3C3C3;
    }

    .shadow-default {
        box-shadow: 1px 1px 3px 2px rgba(0,0,0,0.1);
    }
</style>