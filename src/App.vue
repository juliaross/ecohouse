<template>
  <div id="app">
  <header class="header">
    <div class="header_wrap">
        <router-link to="/" class="nav_link"><img src="@/assets/images/logo.svg" alt=""></router-link>
      <nav class="nav" id="nav">
        <router-link to="/red" class="nav_link">Red</router-link>
        <!-- <router-link to="/blue" class="nav_link">Blue</router-link> -->
        <router-link to="/yellow" class="nav_link">Yellow</router-link>
        <router-link to="/green" class="nav_link">Green</router-link>
      </nav>
     </div>
  </header>

  <router-view :key="$route.fullPath"/>

</div>
</template>

<script type="text/javascript">

// import gsap from 'gsap';
//
//   export default {
//     mounted(){
//       let Title = document.querySelector('.title');
//       let tl = gsap.timeline();
//       tl.fromTo(Title, 1, {x:-100},{x:0})
//     }
//   }

</script>

<style lang="scss">

.fade-in-left-enter-active {
  transition: all 0.6s;
  transform: translateX(0px);
}
.fade-in-left-enter, .fade-in-left-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
.fade-enter-active {
  transition: all 0.6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.scale-enter-active {
  transition: all 0.6s;
  transform: scale(1);
}
.scale-enter, .scale-leave-to {
  opacity: 0;
  transform: scale(1.2);
}


  * {
    outline: none;
    box-sizing: border-box;
    }
  *::before, *::after {
    box-sizing: border-box;
    }
  html {
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  body {
	background-color: #fff;
	font-family: 'Open Sans', sans-serif;
	margin: 0;
	min-height: 100vh;
	scroll-behavior: smooth;
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	color: #212121;
	overflow: hidden;
}
.main-inner {
	flex-grow: 1;
}
ul[class], ol[class] {
	list-style: none;
	padding: 0;
	margin: 0;
}
h1[class], h2[class], h3[class], h4[class], h5[class] {
	margin-top: 0;
}
.uppercase {
	text-transform: uppercase;
}
img {
	max-width: 100%;
	display: block;
}
input, button, textarea, select {
	font: inherit;
}

.container {
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
}

.header {
  &_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding-left: 80px;
    padding-right: 80px;
    @media (max-width: 1350px) {
      padding-left: 20px;
      padding-right: 20px;
      height: 100px;
    }
    @media (max-width: 480px) {
      height: 60px;
      margin-bottom: 30px;
    }
  }
}

.nav  {
  display: flex;
  // width: 430px;
  width: 360px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1350px) {
    width: 360px;
  }
  @media (max-width: 480px) {
    width: 200px;
  }
  &_link {
    // font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    color: #212121;
    opacity: 0.7;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    transform-origin: center;
  }
}
.nav_link.router-link-active {
  opacity: 1;
  font-size: 1.25rem;
}
</style>
