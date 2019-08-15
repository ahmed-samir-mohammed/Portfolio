<template>
  <div class="work">
    <div class="row">
      <div class="project-box">
        <img src="../assets/2.png" alt="" srcset="">
        <transition name="slide-fade">
          <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach">
            Test
          </a>
        </transition>
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
      </div>
    </div>
    <div class="row">
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
      </div>
    </div>
    <div class="row">
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
      </div>
    </div>
    <div class="row">
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work'
}
</script>

<style lang="scss">
  .work {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .project-box {
        margin: 1rem;
        width: 40%;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
        a {
          position: absolute;
          left: 0;
          bottom: -500px;
          background-color: rgba($color: #000000, $alpha: .5);
          width: 100%;
          height: 100%;
          transition: all .3s;
          text-decoration: none
        }
        &:hover {
          a {
            top: 0;
          }
        }
      }
    }
  }
    
  
</style>
