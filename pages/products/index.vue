<template>
    <div>
        <div class="grid grid-cols-2 gap-10">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const url = 'https://fakestoreapi.com/products'
const { data: products } = await useFetch(url)

useHead({
    title: 'KENZH Shop | Merch',
    meta: [
      { name: 'description', content: 'KENZH Shop Merch'}
    ]
  })
definePageMeta({
    layout: 'products'
})

</script>

<style scoped>

</style>
