<template>
    <div id="nav">
        <div class="badge-container">
            <img src="/src/assets/badgeLogo.svg" alt="badge">
        </div>
        <div class="actions">
           <div class="arrow">
                <img src="/src/assets/arrow.svg" alt="arrow-left" @click="prev">
           </div>
           <div class="arrow-right">
                <img src="/src/assets/arrow.svg" alt="arrow-right" @click="next">
           </div>
            
        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import {useRouter} from 'vue-router'


    const routes = ['Type', 'Avatar', 'Role', 'Data', 'Print' ];

    const router = useRouter()

    let index = 0;

    const prev = () => {
        if (index >= 0) {
            index -= 1
            let name = routes[index].toLowerCase();
            router.push({name: routes[index], params: {name: name}})
        }
    }
    const next = () => {
        if (index <= routes.length -1 ) {
            index += 1
            let name = routes[index].toLowerCase();
            router.push({name: routes[index], params: {name: name}}) 
        }
    }


</script>

<style lang="scss">
    #nav {
        width: 10%;
        background-color: #E54545;
        height: 100%;
        position: relative;
    }

    .badge-container {
        width: 100%;
        position: absolute;
        z-index: 200;
        transform: rotate(345deg);
        top: 35px;
        left: 60px;

    }

    .actions {
        margin-top: 300px;
    }

    .arrow-right {
        transform: rotate(180deg);
        color: grey;
        cursor: pointer;
    }
</style>