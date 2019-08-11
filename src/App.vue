<template lang="pug">
  #app
    // Navbar
    .nav
      .nav-left
        .logo
          router-link(to='/')
            img(src="./assets/icon.png", alt="alt")
      .nav-right
        router-link(to="/") Home
        router-link(to="/about") About
        router-link(to="/work") Work
        router-link(to="/contact") Contact 
    // Social
    .social
      ul.social-list
        li.social-item 
          a(href="https://www.facebook.com/ahmed.azam.102")
            img(src="./assets/SVG/facebook.svg", alt="alt")
        li.social-item 
          a(href="https://www.behance.net/ahmed-samir-mohammed")
            img(src="./assets/SVG/behance.svg", alt="alt")
        li.social-item 
          a(href="https://www.instagram.com/a7med_samier/")
            img(src="./assets/SVG/instagram.svg", alt="alt")
        li.social-item 
          a(href="https://www.linkedin.com/in/ahmed-samir-61150a155/")
            img(src="./assets/SVG/linkedin.svg", alt="alt")

    .container 
    <transition name="slide-fade">
      router-view
    </transition>
      
</template>


<style lang="scss">

@import './sass/main';

</style>
