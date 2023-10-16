import Vue from "vue";
import App from "./App.vue";
// import firebase from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./assets/styles/tailwind.css";
import "./assets/styles/style.css";
import router from "../router.js";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
Vue.use(Toast)

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA8f38eYBra0AeEEdhbtQuwleGivCVMLd8",
  authDomain: "meetease-3a288.firebaseapp.com",
  projectId: "meetease-3a288",
  storageBucket: "meetease-3a288.appspot.com",
  messagingSenderId: "270557109224",
  appId: "1:270557109224:web:522bf815fbe98e28e5e25d",
};
firebase.initializeApp(firebaseConfig);

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
let app;

firebase.auth().onAuthStateChanged(function () {
  if (!app) {
    new Vue({
      router,

      render: (h) => h(App),
    }).$mount("#app");
  }
});