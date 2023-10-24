<template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio veritatis voluptates, est obcaecati libero, cumque distinctio laborum cupiditate quae sint aspernatur harum ea, nihil consectetur aliquid amet rem. Cum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio veritatis voluptates, est obcaecati libero, cumque distinctio laborum cupiditate quae sint aspernatur harum ea, nihil consectetur aliquid amet rem. Cum?</p>
        <!-- <p class="font-bold">{{ data.message }}</p>
        <p class="font-bold">{{ data.msg2 }}</p>
        <p class="font-bold">{{ data.currencyapi }}</p> -->
        <p class="font-bold">{{ data }}</p>
    </div>
</template>

<script setup>
useHead({
    title: 'KENZH Shop',
})

// const { data } = useFetch('/api/trollface?name=troll', {
//     method: 'post',
//     body: { age: 30 }
// })

const { data } = useFetch('/api/currency/EUR')
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>
