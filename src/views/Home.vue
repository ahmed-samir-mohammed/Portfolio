<template>
  <div class="home">
    <div class="home-info text-center text-lg-left">
      <h1>Ahmed Samir</h1> 
      <h2>UX/UI Designer</h2> 
      <div class="links text-center text-lg-left">
        <router-link to="/work">My Work</router-link>
        <a href="https://drive.google.com/open?id=1nikUMkHOTT0-USTdoDR4TMUcaD5It3Hc" download target='_blank'>Download CV</a>
      </div>
    </div>
    <img alt="Vue logo" src="../assets/photo.png" class="d-none d-lg-flex">
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from '@/components/Home.vue'

export default {
  name: 'home'
}
</script>

<style lang="scss">
  .home {
    justify-content: space-evenly;
      .home-info {
        margin-bottom: 5rem;
        h1 {
          font-size: 4rem;
          font-weight: normal;
          letter-spacing: 3px;
          margin-bottom: 1rem;
          margin: 0
        }

        h2 {
          font-size: 2rem;
          font-weight: normal;
          margin-top: 0
        }

        .links {
          display: flex;
          a {
            text-decoration: none;
            padding: .5rem;
            margin-top: 2rem;
            display: block;
            width: 120px;
            text-align: center;
            border-radius: 50px;
            &:first-of-type {
              background-color: #fff;
              color: #000
            }
            &:last-of-type {
              background: none;
              color: #fff;
              border: 1px solid #fff;
              margin-left: 2rem;
              transition: all .3s;
              &:hover {
                color: #000;
                background-color: #fff
              }
            }
          }
        }
        @media (max-width: 991.99px) {
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem
          }
          h2 {
            font-size: 1.5rem;
          }
          .links {
            display: flex;
            align-items: center;
            justify-content: center;
            a {
              font-size: .8rem;
            }
          }
        }
      }

      img {
        width: 25rem;
        margin-bottom: 5rem
      }
      @media  (max-width: 1199px) {
        img {
          width: 18rem;
        }
      }
  }  
</style>


