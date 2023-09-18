<script setup></script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  font-size: 14px;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 5px;
  background-color: $gray-100;
  outline: none;
  border: 0;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    background-color: darken($gray-100, 10%);
  }

  &.btn-primary {
    color: $white;
    background-color: $blue;

    &:hover {
      background-color: darken($blue, 10%);
    }
  }

  &.disabled {
    color: $white;
    background-color: $gray-200;
    opacity: 0.75;
    cursor: default;

    &:hover {
      background-color: $gray-200;
    }
  }
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
