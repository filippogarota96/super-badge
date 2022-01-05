<template>
    <h2 class="title-view">
        <span class="title-number">2</span>
        Choose an {{name}}
    </h2>
    
    <div class=" margin-50 flex">

        <div class="avatars-container">
            <div v-for="(avatar, index) in avatars" :key="index" class="lego-container" @click="selectAvatar(avatar, index)" :class="{ selected_avatar: isSelected === index }">
                <img :src="'/src/assets/' + avatar  + '.svg'" :alt="avatar">
            </div>
        </div>
        <div class="badge">
           <first-badge v-if="isSelected === 'FIRST'" :avatar="image" />
            <second-badge v-if="isSelected ==='SECOND'" :avatar="image" />
        </div>
    </div>
</template>

<script setup>

    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import firstBadge from '../components/firstBadge.vue'

    
    const props = defineProps(['name']);

    const avatars = ref(['lego1', 'lego2', 'lego3', 'lego4', 'lego5', 'lego6'])
    const store = useStore();
    
    const isSelected = computed(() => store.getters.getSelectedType);
    const image = computed(() => store.state.avatar)

    const selectAvatar = (avatar, i) => {
        isSelected.value === null ? isSelected.value = i : isSelected.value = i;
        store.commit('selectImage', avatar)
    }

</script>

<style lang="scss" >
    
    .avatars-container {
        width: 20%;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
    }

    .badge {
        width: 60%;
        height: 300px;
    }

    .margin-50 {
        margin: 50px;
        display: flex;
        justify-content: space-between;
    } 
    
    .lego-container {
        width: 50%;
        text-align: center;
        border-radius: 20px;
        
        img {
            width: 80%;
        }
    }

        .selected_avatar {
            background-color: lightgrey;
        }

    

    .text-align {
        text-align: center;
    }
</style>

