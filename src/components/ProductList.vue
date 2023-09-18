<script setup>
import ProductListItem from '@/components/ProductListItem.vue'

const { products } = defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="product-list">
    <ProductListItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 30px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 10px;
    row-gap: 20px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 20px;
    row-gap: 30px;
  }
}
</style>
