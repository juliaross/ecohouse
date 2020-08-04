<template>
  <button class="btn-border">{{ text }}</button>
</template>

<script>
  export default {
    name: 'btnBorder',
    props: {
      text: String
    }
  }
</script>

<style scoped lang="scss">
  .btn-border {
    width: 215px;
    height: 50px;
    color: #009688;
    text-transform: uppercase;
    font-size: 0.875rem;
    border: 2px solid #009688;
    background-color: #fff;
    transition: all 0.2s ease;
    @media (max-width: 480px) {
      width: 160px;
      height: 40px;
    }
    &:hover {
      background-color: #009688;
      color: #fff;
    }
  }
</style>
