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

    <!-- Open Model -->
    <div class="mb-1">
      <b-button @click="$bvModal.show('modal-scoped')">
        <img src="./assets/SVG/chat.svg">
      </b-button>
    </div>

    <!-- Model -->
    <b-modal id="modal-scoped">
      <template slot="modal-header" slot-scope="{ close }">
        <h5>Contact Me</h5>
        <b-button size="sm" variant="outline-danger" @click="close()">
          <img src="./assets/SVG/close.svg">
        </b-button>
      </template>

      <template>
        <ul class="list-unstyled">
          <li>
            <a href="https://www.instagram.com/a7med_samier/" target="_blank" rel="noopener noreferrer">
              <img src="./assets/SVG/instagram.svg"> /a7med_samier
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ahmed-samir-61150a155/" target="_blank" rel="noopener noreferrer">
              <img src="./assets/SVG/linkedin.svg"> /ahmed-samir-61150a155
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/ahmed-samir-mohammed" target="_blank" rel="noopener noreferrer">
              <img src="./assets/SVG/behance.svg"> /ahmed-samir-mohammed
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ahmed.azam.102" target="_blank" rel="noopener noreferrer">
              <img src="./assets/SVG/facebook.svg"> /ahmed.azam.102
            </a>
          </li>
          <li>
            <a href="mailto:samierahmed37@gmail.com">
              <img src="./assets/SVG/email.svg"> samierahmed37@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+00201000775376">
              <img src="./assets/SVG/whatsapp.svg"> 002/01000775376
            </a>
          </li>
        </ul>

      </template>
    </b-modal>

    <b-container>
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>


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
    padding: 1rem 2rem;
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
      @media (max-width: 991.99px) {
        img {
          width: 3rem !important
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
      @media (max-width: 991.99px) {
        a {
          font-size: 1rem;
          margin: .5rem;
        }
      }
    }
  }
  .container {
    grid-area: router-view;
    color: #fff;
    height: 90vh;    
  }
  .mb-1 {
    position: absolute;
    right: 2%;
    bottom: 3%;
    margin-bottom: 0;
    button {
      padding: .5rem;
      border-radius: 50%;
      background: #fff;
      border: 0;
      box-shadow: 0px 19px 50px 0 #000;
      img {
        width: 2.3rem;
      }
    }
  }
  @media (max-width: 991.99px) {
    .mb-1 {
      right: 3%;
      bottom: 2%;
    }
  }
}

</style>
