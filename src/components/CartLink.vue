<script setup>
import { RouterLink } from 'vue-router'

import { useCartStore } from '@/stores/cart'
import CartIcon from '@/components/CartIcon.vue'

const cart = useCartStore()
</script>

<template>
  <RouterLink active-class="active" class="cart" to="/cart">
    <CartIcon />
    <span class="cart-amount">{{ cart.totalItems }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.cart {
  display: flex;
  align-items: center;
  height: 65px;
  text-decoration: none;

  &.active {
    :deep(svg) {
      stroke: $blue;
    }
  }

  &:not(.active):hover {
    :deep(svg) {
      stroke: $gray-400;
    }
  }
}

.cart-amount {
  font-weight: 500;
  padding-left: 8px;
  color: $gray-400;
}
</style>
