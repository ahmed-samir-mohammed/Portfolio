<template lang='pug'>
  .about
    .top
      h1 Ahmed Samir
      h2 UX/UI Designer
      p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    .bottom
      router-link(to="/skills") Skills
        img(src="../assets/SVG/down.svg", alt="alt")
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Skills.vue'

export default {
  name: 'about'
}
</script>

<style lang="scss">
.about {
  flex-direction: column;
  position: relative;
  .top {
    text-align: center;
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
      margin: 1rem auto;
      width: 60%;
    }
  }
  .bottom {
    a {
      position: absolute;
      bottom: 5rem;
      left: 49%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
      img {
        width: 1.5rem
      }
    }
  }
}
</style>