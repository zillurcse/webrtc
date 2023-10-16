<template>
  <div id="app" class="overflow-hidden">
    <div class="">
      <navbar :currentUser="currentUser" />
      <div class="bg-[#e8e8e8]">
        <transition name="fade">
          <router-view :currentUser="currentUser" />
        </transition>

        <!-- <router-view v-slot="{ Component }">
          <component :is="Component" :currentUser="currentUser" />
        </router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, signOut } from "firebase/auth";
import navbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    navbar,
  },
  data() {
    return {
      currentUser: null,
    
    };
  },

  mounted() {
    this.currentUser = firebase.auth().currentUser;
  },
  methods: {
    logOut() {
      console.log('logout');
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.replace("login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

.router-link-exact-active {
  color: #15a493 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in;
  transform: scale(1);

}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.4s ease-in-out;

}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}</style>
