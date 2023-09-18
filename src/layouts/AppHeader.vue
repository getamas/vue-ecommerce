<script setup>
import { RouterLink } from 'vue-router'
import CartLink from '@/components/CartLink.vue'
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Vue Ecommerce</RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink active-class="active" class="nav-link" to="/products">Products</RouterLink>
        </li>
        <li>
          <CartLink />
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: $white;
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 9998;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.navbar-nav {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
}

.navbar-brand {
  font-size: 18px;
  text-decoration: none;
  color: $gray-400;
}

.nav-item {
  &:not(:last-child) {
    margin-right: 32px;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  color: $gray-400;
  text-decoration: none;
  height: 63px;

  &.active {
    color: $blue;
    border-bottom: 2px solid $blue;
    font-weight: 500;
  }
}
</style>
