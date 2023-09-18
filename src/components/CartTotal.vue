<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>

<template>
  <div class="cart-total">
    <span class="cart-total-title">Subtotal</span>
    <strong class="cart-total-price">${{ cart.totalPrice }}</strong>
  </div>
</template>

<style lang="scss" scoped>
.cart-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  border-top: 1px solid $gray-100;
}

.cart-total-price,
.cart-total-title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
</style>
