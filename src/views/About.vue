<template>
  <div class="about">
    <div class="top">
      <h1>Ahmed Samir</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
    <div class="bottom">
      <router-link to="/skills">
        Skills
        <img src="../assets/SVG/down.svg" alt="alt">
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

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
    margin-bottom: 8rem;
    h1 {
      font-size: 4rem;
      font-weight: normal;
      letter-spacing: 3px;
      margin: 1rem;
    }
    p {
      font-size: 1.5rem;
      margin: 0 auto 1rem ;
      width: 60%;
    }
    @media (max-width: 991.99px) {
      h1 {
        font-size: 3rem;
        
      }
      p {
        font-size: 1.2rem;
        margin: 1rem auto 1rem;
        width: 80%;
      }
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
        width: 1.5rem;
        margin-top: .5rem;
      }
    }
  }
  @media (max-width: 991.99px) {
    .bottom {
      a {
        left: 45%;
        font-size: 1rem;
        img {
          width: 1.2rem;
          margin-top: .5rem;
        }
      }
    }
  }
}
</style>