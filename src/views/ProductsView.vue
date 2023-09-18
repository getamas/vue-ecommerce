<script setup>
import ProductList from '@/components/ProductList.vue'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()

productStore.fetchProducts()
</script>

<template>
  <h1 class="page-title">Products</h1>
  <div v-if="productStore.loading && !productStore.products.length">Loading...</div>
  <ProductList v-if="productStore.products" :products="productStore.products" />
  <div v-if="productStore.error">Error occured while fetching products, please try again.</div>
</template>
