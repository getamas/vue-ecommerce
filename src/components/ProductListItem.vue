<script setup>
import { ref, computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const quantity = ref(0)
const availableAmount = ref(product.availableAmount)
const minAmount = computed(() => quantity.value < product.minOrderAmount)
const maxAmount = computed(() => quantity.value > availableAmount.value)

function addToCart() {
  if (quantity.value < product.minOrderAmount) {
    return
  }

  availableAmount.value = availableAmount.value - quantity.value
}
</script>

<template>
  <div class="product-list-item">
    <img :src="product.img" class="product-list-item-image" :alt="product.name" />
    <div class="product-list-item-content">
      <h3 class="product-list-item-title">
        {{ product.name }} <span>${{ product.price }}</span>
      </h3>
      <p class="product-list-item-text">
        <span>
          In Stock: {{ availableAmount }} <br />
          Min order amount: {{ product.minOrderAmount }}
        </span>
        <input class="product-list-item-amount" type="number" v-model="quantity" />
      </p>
      <small v-if="maxAmount" class="product-list-item-info">In stock amount excedeed.</small>
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
  max-width: 60px;
}

.product-list-item-image {
  max-width: 100%;
  width: 100%;
  height: 300px;
  object-fit: contain;
}
</style>
