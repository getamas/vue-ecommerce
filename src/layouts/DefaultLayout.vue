<script setup>
import AppHeader from '@/layouts/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main>
    <div class="container">
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 60px 0;
}
</style>
