<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="logo">
          <img src="./assets/icon.png" alt="alt">
        </router-link>
      </div>
      <div class="nav-right">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Work</router-link>
      </div>
    </nav>
    <div class="container">
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>


<style lang="scss">

@import './sass/main';


#app {
  background-color: rgba($color: #000000, $alpha: .7);
  display: grid;
  grid-template-rows: 10vh auto;
  grid-template-areas: 
    'navbar'
    'router-view';
  .nav {
    grid-area: navbar;
    padding: 3rem 2rem;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-left {
      .logo {
        display: flex;
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
  .container {
    grid-area: router-view;
    color: #fff;
    width: 100%;
    height: 90vh;
    margin: 0 auto;
  }
}

</style>
