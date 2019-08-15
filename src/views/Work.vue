<template>
  <div class="work">
    <div class="row">
      <div class="project-box">
        <img src="../assets/2.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
      </div> 
    </div>

    <div class="row">
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
      </div>
      <div class="project-box">
        <img src="../assets/1.png" alt="" srcset="">
        <a href="https://www.behance.net/gallery/79028719/Al_Arish-Beach" target="_blank">
          Test
        </a>
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
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .project-box {
        margin: 1rem;
        width: 17%;
        position: relative;
        display: flex;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: all .3s ease-in-out;
        }
        a {
          position: absolute;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          bottom: 0;
          background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.7));
          width: 100%;
          height: 100%;
          
          text-decoration: none;
          color: #fff;
          font-size: 2rem;
          padding: 1rem
        }
        &:hover {
          img {
            transform: rotate(10deg) scale(1.2); 
          }
        }
      }
    }
  }
    
  
</style>
