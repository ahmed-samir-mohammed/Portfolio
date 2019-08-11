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
          a(href="https://www.facebook.com/ahmed.azam.102" target='_blank')
            img(src="./assets/SVG/facebook.svg", alt="alt")
        li.social-item 
          a(href="https://www.behance.net/ahmed-samir-mohammed" target='_blank')
            img(src="./assets/SVG/behance.svg", alt="alt")
        li.social-item 
          a(href="https://www.instagram.com/a7med_samier/" target='_blank')
            img(src="./assets/SVG/instagram.svg", alt="alt")
        li.social-item 
          a(href="https://www.linkedin.com/in/ahmed-samir-61150a155/" target='_blank')
            img(src="./assets/SVG/linkedin.svg", alt="alt")

    .container 
      <transition name="slide-fade">
        router-view
      </transition>
      
</template>


<style lang="scss">

@import './sass/main';


#app {
  background-color: rgba($color: #000000, $alpha: .7);
  display: grid;
  grid-template-columns: 4% auto;
  grid-template-rows: 8vh auto;
  grid-template-areas: 
    'navbar navbar'
    'social router-view'
}

.nav {
  grid-area: navbar;
  padding: .5rem 1rem;
  font-weight: normal;
  background-color: rgba($color: #000000, $alpha: .5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-left {
    .logo {
      img {
        width: 4rem
      }
    }
  }
  .nav-right {
    a {
      text-decoration: none;
      margin: .5rem 1rem;
      color: #fff;
      font-size: 1.2rem;
      &.router-link-exact-active {
        border-bottom: 1px solid #ccc
      }
    }
  }
}

.social-list {
  background-color: rgba($color: #000000, $alpha: .5);
  grid-area: social;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 95vh;
  .social-item {
    &:first-of-type {
      img {
        width: 1.2rem
      }
    }
    img {
      width: 1.5rem;
      margin-bottom: 3rem;
    }
  } 
}

.container {
  grid-area: router-view;
  color: #fff;
  width: 90%;
  height: 100vh;
  margin: auto
}

</style>
