<template>
    <div>
        <p>Products details for {{ id }}</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            aperiam fugiat at dolor rerum facilis, vitae, consectetur debitis
            illum molestias explicabo, neque labore iure? Necessitatibus ducimus
            illum aspernatur cupiditate tenetur.
        </p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;

</script>

<style scoped></style>
