<template>
  <div class="h-[90vh] w-[1350px] mx-auto" v-if="!isPreView">
    <div class="py-10">
      <h1 class="text-2xl font-bold text-prim"><span class="text-gray">Hi</span> {{ uName }}</h1>
    </div>
    <div class="px-11 py-11 bg-white rounded-md w-[59%] shadow-md">
      <div>
        <h3 class="text-2xl text-gray font-medium mb-2">Meeting</h3>
        <p class="text-sm rounded-md font-medium text-gray text-left">Create a meeting, invite participants, and interact
          through screen sharing and audio/video conferencing.</p>
      </div>
      <div class="py-3 flex justify-end mt-2">
        <!-- <router-link to="/meeting"> -->
        <button @click="send"
          class="signup flex items-center gap-1 justify-center w-36 py-2 text-base rounded-full font-medium border bg-prim text-white transition-all hover:bg-prim-dark active:bg-prim">
          <span>Meet Now </span>
          <img src="../assets/img/users.png" alt="" class="h-5 w-5" />
        </button>
        <!-- </router-link> -->

      </div>
    </div>
  </div>
  <div class="" v-else>
    <meeting :uid="uid" :uName="uName"/>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Meeting from './Meeting.vue';

export default {
  components: { Meeting },
  data() {
    return {
      uName: null,
      uid: null,
      isPreView: false
    };
  },
  async mounted() {
    console.log('log');
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.

        this.uName = user.displayName;
        this.uid = user.uid
      } else {
        // No user is signed in.
      }
    });
  },
  methods: {
    send() {
      // this.$router.push("meeting");
      this.isPreView = true
    }
  }
};
</script>

<style></style>
