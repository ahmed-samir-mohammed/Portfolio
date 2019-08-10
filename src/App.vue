<template lang="pug">
  #app
    #nav
      .nav-left
        .logo
          router-link(to='/')
            img(src="./assets/logo.png", alt="alt")
      .nav-right
        router-link(to="/") Home | 
        router-link(to="/about") About | 
        router-link(to="/work") Work | 
        router-link(to="/contact") Contact 
    router-view
</template>

<style lang="scss">

@import './sass/main';

#app {
  font-family: 'Cairo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/Home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  height: 100vh;
}

#nav {
  padding: 0rem;
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
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        border-bottom: 1px solid #ccc
      }
    }

  }
}
</style>
