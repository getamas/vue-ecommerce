<script setup>
import { ref, computed } from 'vue'

import BaseButton from '@/components/BaseButton.vue'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/products'

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const cartStore = useCartStore()
const productStore = useProductStore()

const totalAmount = ref(null)
const minAmount = computed(() => totalAmount.value < product.minOrderAmount)
const maxAmount = computed(() => totalAmount.value > product.availableAmount)

function addToCart() {
  if (totalAmount.value < product.minOrderAmount) {
    return
  }

  const cartItem = {
    ...product,
    totalAmount: totalAmount.value,
  }

  cartStore.addCartItem(cartItem)
  productStore.setProductAvailableAmount({ ...product, totalAmount: totalAmount.value })

  totalAmount.value = 0
}
</script>

<template>
  <div class="product-list-item">
    <img :src="product.img" class="product-list-item-image" :alt="product.name" />
    <div class="product-list-item-content">
      <h3 class="product-list-item-title">
        {{ product.name }} <span>${{ product.price }}</span>
      </h3>
      <div class="product-list-item-text">
        <span>
          In Stock: {{ product.availableAmount }} <br />
          Min order amount: {{ product.minOrderAmount }}
        </span>
      </div>
      <div class="product-list-item-amount">
        <label for="amount">Order amount</label>
        <input id="amount" type="number" v-model="totalAmount" />
      </div>
      <small v-if="maxAmount" class="product-list-item-info">Order amount exceeds in stock items.</small>
      <BaseButton
        @click="addToCart"
        :disabled="maxAmount || minAmount"
        class="btn-primary btn-block"
        :class="{ disabled: maxAmount || minAmount }"
      >
        Add to cart
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-list-item {
  border-radius: 5px;
  border: 1px solid $gray-100;

  .btn {
    margin-top: 10px;
  }
}

.product-list-item-content {
  padding: 20px;
  border-top: 1px solid $gray-100;
}

.product-list-item-title {
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
}

.product-list-item-text {
  display: flex;
  justify-content: space-between;
  color: $gray-300;
  font-size: 14px;
  margin-bottom: 24px;
}

.product-list-item-amount {
  margin-bottom: 10px;

  input {
    max-width: 75px;
  }
}

.product-list-item-image {
  max-width: 100%;
  width: 100%;
  height: 300px;
  object-fit: contain;
}
</style>
