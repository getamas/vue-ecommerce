<script setup>
import { computed } from 'vue'

const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const totalPrice = computed(() => item.price * item.totalAmount)
</script>

<template>
  <div class="cart-item">
    <img class="cart-item-image" :src="item.img" :alt="item.name" />
    <div class="cart-item-content">
      <div>
        <h3 class="cart-item-name">{{ item.name }}</h3>
        <span class="cart-item-amount">Order amount: {{ item.totalAmount }}</span>
      </div>
      <div>
        <span class="cart-item-price">${{ totalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  border-top: 1px solid $gray-100;
  padding: 20px 0;
}

.cart-item-image {
  width: 128px;
  height: 128px;
  object-fit: contain;
}

.cart-item-content {
  margin-left: 24px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

.cart-item-name {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.cart-item-price {
  font-weight: 500;
}

.cart-item-amount {
  display: block;
  margin-top: 5px;
  font-size: 14px;
}
</style>
