<script setup>
import CartItem from '@/components/CartItem.vue'
import CartTotal from '@/components/CartTotal.vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>

<template>
  <div class="cart">
    <h1 class="page-title">Cart</h1>
    <CartItem v-for="item in cart.cartItems" :key="item.id" :item="item" />
    <CartTotal />
  </div>
</template>

<style lang="scss" scoped>
.cart {
  max-width: 670px;
  margin: 0 auto;

  .page-title {
    text-align: center;
    margin-bottom: 48px;
  }
}
</style>
