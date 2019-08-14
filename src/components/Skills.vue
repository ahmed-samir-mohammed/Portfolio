
<template>
  <div class="skills">
    <div class="top">
      <router-link to="/about">
        <img src="../assets/SVG/up.svg">
        About
      </router-link>
    </div>
    <div class="bottom">
      <div class="row">
        <img src="../assets/SVG/html5.svg">
        <img src="../assets/SVG/css.svg">
        <img src="../assets/SVG/Bootstrap.svg">
      </div>
      <div class="row">
        <img src="../assets/SVG/Photoshop.png">
        <img src="../assets/SVG/adobe-xd.svg">
        <img src="../assets/SVG/js.png">
        <img src="../assets/SVG/logo.png">
      </div>
  
      <!-- <img v-for="image in images" :key="image.length" :src="image.src" :alt="image.alt" /> -->
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Skills'
  //  data () {
  //   return {
  //     images: [
  //       { src: '../assets/SVG/html5.svg', alt: 'HTML5' },
  //       { src: '../assets/SVG/css.svg', alt: 'CSS3' },
  //       { src: '../assets/SVG/Bootstrap.svg', alt: 'Bootstrap' }
  //     ]
  //   }
  // }
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
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 5rem;
      margin: 1rem
    }
  }
}
</style>
