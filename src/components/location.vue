<template>
  <div class="location">
    Idaho <span>></span> Hauser Lake
  </div>
</template>


<!-- <script>
  export default {
    name: 'location',
    props: {
      text: String
    }
  }
</script> -->

<style lang="scss">
  .location {
    color: #212121;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    @media (max-width: 1350px) {
      margin-bottom: 20px;
    }
    &:before {
      content: '';
      width: 14px;
      height: 20px;
      background-image: url(../assets/images/sprite.svg#pin);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      display: block;
      margin-right: 11px;
    }
    span {
      color: #607D8B;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>
