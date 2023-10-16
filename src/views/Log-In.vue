<template>
  <div class="w-[1350px] mx-auto py-9 h-[90vh]">
    <div class="flex items-center gap-32 h-full">
      <div class="bg-white rounded-md py-5 md:py-10 lg:py-16 px-7 md:px-16 w-full lg:w-5/12">
        <div class="font-medium text-left text-2xl lg:text-3xl text-prim">Get startted</div>
        <div class="flex md:text-lg text-base items-center mb-10 mt-2">
          <div class="mr-1 text-base font-light">New user?</div>
          <router-link to="/signup">
            <button
              class="text-lg font-semibold text-dh-red-400 hover:text-dh-green-900 duration-300 cursor-pointer">Create an
              account</button>
          </router-link>
        </div>
        <form>
          <div class="mb-7">
            <div class="flex flex-col justify-center gap-1">
              <div class="bg-[#F2F3F4] px-3.5 rounded-xl w-full" :class="isEmail ? 'error' : ''">
                <input name="email" placeholder="Email" v-model="email" type="text"
                  class="bg-[#F2F3F4] w-full px-2 py-3.5 outline-none" value="" />
              </div>
              <p v-if="isEmail" class="text-error text-left">Invalid email!</p>
            </div>
          </div>
          <div class="mb-10">
            <div class="flex flex-col justify-center gap-1">
              <div class="flex items-center px-3.5 bg-[#F2F3F4] rounded-xl" :class="isPassword ? 'error' : ''">
                <input name="password" placeholder="Password" :type="[show_password ? 'text' : 'password']"
                  v-model="password" class="bg-[#F2F3F4] w-full px-2 py-3.5 outline-none" value="" />
                <div class="cursor-pointer flex items-center pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#A0A0A0" class="w-6 h-6" @click.prevent="show_password = !show_password"
                    v-if="!show_password">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#A0A0A0" class="w-6 h-6" @click.prevent="show_password = !show_password" v-if="show_password">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </div>
              </div>
              <p v-if="isPassword" class="text-error text-left">wrong-password!</p>
            </div>
            <transition name="fade">
              <div v-if="error">
                {{ error }}
              </div>
            </transition>
          </div>
          <button type="submit" @click.prevent="LogIn"
            class="signup flex items-center gap-2 h-[46px] justify-center w-full py-2 text-base rounded-full font-medium border bg-prim text-white transition-all hover:bg-prim-dark active:bg-prim">
            <div v-if="!lodding" class="flex gap-2">
              <div class="px-2 inline-block">wait...</div>
              <img src="../assets/img/spinar.svg" alt="" class="w-7 h-7" />
            </div>
            <div v-else class="px-2 inline-block">LogIn</div>
          </button>
        </form>
      </div>
      <div class="w-6/12 flex justify-center items-center">
        <img src="../assets/img/signup.png" alt="" class="animate-bounce" style="animation-duration: 3s" />
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: null,
      password: null,
      displayName: null,
      lodding: true,
      show_password: false,
      isEmail: false,
      isPassword: false,
      error: null,
    };
  },
  methods: {
    LogIn() {
      this.lodding = false;
      // this.$toast("I'm a toast!");

      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          console.log(userCredential);

          this.$router.push("rooms");
          this.$toast("successfully login");
          this.lodding = true;
          this.isEmail = false;
          this.isPassword = false;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // auth/missing-email
          if (errorCode == "auth/invalid-email" || errorCode == "auth/missing-email") {
            this.$toast.error("wrong-password");
            this.isEmail = true;
          }
          if (errorCode == "auth/wrong-password") {
            this.$toast.error("wrong-password");
            this.isPassword = true;
          }
          if (errorCode === 'auth/user-not-found') {

            this.$toast.error("EMAIL_NOT_FOUND");
            this.$router.push("signup");

          }
          // console.log(errorMessage,'errorMessage');
          this.error = errorMessage;
          // this.$toast.error('somthing wrong')
          this.lodding = true;
        });
    },
  },
};
</script>

<style>
.error {
  border: 1px solid #dd0f0fed;
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
</style>
