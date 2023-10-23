<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const url = 'https://fakestoreapi.com/products'
const { data: products } = await useFetch(url)

definePageMeta({
    layout: 'products'
})

</script>

<style scoped>

</style>
