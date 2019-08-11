<template lang="pug">
  .home
    .home-info
      h1 Ahmed Samir
      h2 UX/UI Designer
      .links
        a(href="https://drive.google.com/open?id=1nikUMkHOTT0-USTdoDR4TMUcaD5It3Hc", download, target='_blank') Download CV
        router-link(to="/work") My Work
    img(alt="Vue logo", src="../assets/photo.png")

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
      h1 {
        font-size: 4rem;
        font-weight: normal;
        letter-spacing: 3px;
        margin: 0
      }

      h2 {
        font-size: 2rem;
        font-weight: normal;
        margin: -.5rem 0;
      }

      p {
        font-size: 1.5rem;
        width: 60%
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
    }

    img {
      width: 25rem
    }
  }  
</style>


