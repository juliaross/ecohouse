<template>
  <section class="screen main-screen">
    <div class="screen_text">
      <transition name="fade-in-left" appear>
        <div class="text-wrap">
          <h1 class="title">Red house</h1>
          <div class="description">
            <p>Lovely houses with private dock & firepit in great location!
              Escape to the scenic shoreline of Lake Pend Oreille when you
              book this lovely lakefront cabin! Featuring lustrous wood</p>
          </div>
          <location></location>
          <btnBorder text="learn more"></btnBorder>
        </div>
      </transition>
    </div>
      <div class="screen_img">
        <transition name="scale" appear>
          <img src="@/assets/images/house-red.jpg" alt="">
        </transition>
      </div>
  </section>
</template>

<style lang="scss">

</style>

<script type="text/javascript">
  import btnBorder from '@/components/btnBorder.vue'
  import location from '@/components/location.vue'

  export default {
   name: 'Home',
   components: {
     btnBorder,
     location
   }
 }
</script>
