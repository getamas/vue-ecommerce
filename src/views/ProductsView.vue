<script setup>
import { useFetch } from '@/composables/useFetch'
import ProductList from '@/components/ProductList.vue'

const { data: products, error, loading } = useFetch(import.meta.env.VITE_API_PRODUCTS_URL)
</script>

<template>
  <h1 class="page-title">Products</h1>
  <div v-if="loading">Loading...</div>
  <ProductList v-if="products" :products="products" />
  <div v-if="error">Error occured while fetching products, please try again.</div>
</template>
