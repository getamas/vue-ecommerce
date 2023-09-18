<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<style lang="scss">
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  color: $dark;
}

.container {
  max-width: 1140px;
  margin: 0 12px;

  @media (min-width: 1280px) {
    margin: 0 auto;
  }
}

.page-title {
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
  margin: 60px 0 40px;
  color: $dark;
}

input {
  border: 1px solid $gray-100;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  color: $dark;
  box-shadow: none;
  outline: 0;
}
</style>
