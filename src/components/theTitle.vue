<template>
    <h2 class="title-view">
        <span class="title-number">{{number}}</span>
        Choose a {{name}}
    </h2>
</template>

<script setup>

    const props = defineProps(['number', 'name' ]);
</script>

<style lang="scss">

</style>