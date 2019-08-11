<template lang='pug'>
  .skills
    .top
        router-link(to="/about") 
            img(src="../assets/SVG/up.svg", alt="alt")
            | About
    .bottom
        
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style lang="scss">
.skills {
  flex-direction: column;
  position: relative;
  .top {
    a {
      position: absolute;
      top: 5rem;
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
