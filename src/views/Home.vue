<template>
  <div class="home">
    <section class="screen main-screen">
    <div class="screen_text">
      <transition name="fade-in-left" appear>
        <div class="text-wrap">
          <h1 class="title">America's great lake house rentals</h1>
          <div class="description">
            <p>Lovely houses with private dock & firepit in great location!
              Escape to the scenic shoreline of Lake Pend Oreille when you
              book this lovely lakefront cabin! Featuring lustrous wood accents,
              an updated full kitchen, and a spacious deck, guests will have
              all the comforts of home in a quiet and secluded setting.
              Savor your morning coffee down at the private dock then
              spend your day hiking, boating, or pulling fish out of
              the lake. Later, put a little char on today's catch with
              the gas grill then stoke up a fire in the firepit and
              spend the evening stargazing with the kids. Whatever you
              do, your vacation will be filled with stunning views
              and amazing activities.</p>
          </div>
          <location></location>
          <btnBorder text="learn more"></btnBorder>
        </div>
      </transition>
    </div>
    <div class="screen_img">
      <transition name="scale" appear>
        <img src="@/assets/images/main.png" alt="">
      </transition>
    </div>
  </section>
  </div>
</template>

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

<style lang="scss">

.screen {
  display: flex;
  height: calc(100vh - 120px);
  overflow: hidden;
  align-items: center;
  @media (max-width: 1350px) {
    height: calc(100vh - 100px);
  }
  @media (max-width: 1024px) {
    display: block;
    height: auto;
  }
  &_text {
    width: 50%;
    padding-left: 80px;
    padding-right: 180px;
    @media (max-width: 1350px) {
      padding-right: 60px;
      padding-left: 20px;
    }
    @media (max-width: 1024px) {
      width: 100%;
      margin-bottom: 40px;
    }
    @media (max-width: 480px) {
      padding-right: 20px;
    }
  }
  &_img {
    width: 50%;
    height: 100%;
    overflow: hidden;
    @media (max-width: 1024px) {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 30px;
  @media (max-width: 1600px) {
    font-size: 3rem;
  }
  @media (max-width: 1350px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
}
.description {
  color: #757575;
  font-size: 0.875rem;
  line-height: 155%;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
}
.text-wrap {
  padding-left: 20px;
  @media (max-width: 480px) {
    padding-left: 10px;
  }
}



</style>
