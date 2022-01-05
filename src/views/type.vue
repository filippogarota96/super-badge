<template>
    <h2 class="title-view">
        <span class="title-number">1</span>
        Choose a type
    </h2>

    <div class="badges">
        <first-badge 
            :text="firstCard.text"
            :background="firstCard.background" 
            :shadow="firstCard.shadow"
            :border="firstCard.border"
            :role="firstCard.role"
            @select="selectType"
        />

        <second-badge
            :border="secondCard.border"
            :background="secondCard.background" 
            :shadow="secondCard.shadow"
            :role="secondCard.role"
            @select="selectType"
         />
        
    </div>
</template>

<script setup>

    import firstBadge from '../components/firstBadge.vue'
    import secondBadge from '../components/secondBadge.vue'
    import { useStore } from 'vuex'

    import { ref, reactive, computed} from 'vue'

    const props = defineProps(['name']);

    const store = useStore();

    const firstCard = computed(() =>  store.getters.getFirstCardStyle);
    const secondCard = computed(() => store.getters.getSecondCardStyle )


    

    const selectType = (selectedType) => { 
        store.commit('selectBadge', selectedType);

        if (store.getters.getSelectedType === 'FIRST') {
            store.commit('getSelectedFirstCardStyle')
        } 

        if (store.getters.getSelectedType === "SECOND") {
           store.commit('getSelectedSecondCardStyle');
        }
     }
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