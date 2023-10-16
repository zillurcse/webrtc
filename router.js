import Vue from "vue";
import VueRouter from "vue-router";
import headcec from "./src/views/Header-section.vue";
import login from "./src/views/Log-In.vue";
import signup from "./src/views/Sign-Up.vue";
import rooms from "./src/views/Rooms-view.vue";
// import meeting from "./src/views/Meeting.vue";

// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: headcec,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: login,
      props: true,
    },
    {
      path: "/signup",
      name: "signup",
      component: signup,
      props: true,
    },
    {
      path: "/rooms",
      name: "rooms",
      component: rooms,
      meta: { requiresAuth: true },
      props: true,
    },
    // {
    //   path: "/meeting",
    //   name: "meeting",
    //   component: meeting,
    //   meta: { requiresAuth: true },
    //   props: true,
    // },
  ],
});


router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;
