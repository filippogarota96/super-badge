<template>
    <div class="card first-card" :class="shadow" @click="selectThis">
            <div class="padding flex">
            
                <div class="first-picture-container" :class="border">

                </div>
                <div class="datas" :class="text">
                    <div class="name-surname">
                        <p>Nome Cognome</p>
                        <p>Pinco Pallo</p>
                    </div>
                    <div class="address mt-2">
                        <p>Sede</p>
                        <p>Via dei Pinco Pallo</p>
                    </div>
                </div>
            </div>
            <div class="badge-role" :class="background">
                <div class="role-info">
                    <p>Ruolo</p>
                    <p>Junior hero</p>
                </div>
                <div class="role-picture" :class="role">

                </div>
            </div>
        </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    const props = defineProps(['text', 'background', 'shadow', 'name', 'address', 'border', 'role']);
    const emits = defineEmits(['select']);

    const store = useStore();

    const isSelected = 'FIRST'
    
    const selectThis = () => emits('select', isSelected );


</script>


<style lang="scss" scoped>

    .card {
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
    }

   

    .card p {
        margin: 0;
    }

    .background-selected {
        background-color: lightgrey;
    }
    .first-card {
        width: 500px;
        height: 300px;
        

        .first-picture-container {
            width: 150px ;
            height: 150px;
            border-radius: 20px;
            margin-right: 40px;
        }

        .badge-role {
            width: 100%;
            height: 60px;
            padding-left: 30px;
            margin-bottom: 30px;
            position: relative;
            
            .role-info {
                color: #ffff;
            }

            .role-picture {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                position: absolute;
                top: -30px;
                right: 30px;
            }


        }

    }

    .name-surname p:last-child, 
    .address p:last-child, 
    .badge-role p:last-child {
        font-weight: bold;
        font-size: 1.2rem;
    }
    
    .text-default {
        color: #AEAEAE
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

    .bg-role-default {
        background-color: #F4F4F4;
    }

    .bg-role-selected {
        background-color: #D9D9DB;
    }

    .bg-color-selected {
        background-color: #C8C6CB;
    }

    .selected-border {
        border: solid 1px #C8C6CB;
    }

    .shadow-selected {
        box-shadow: 1px 1px 3px 2px lightgray;
    }



</style>