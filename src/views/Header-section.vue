<template>
    <div class="h-[90vh] flex items-center w-[1350px] mx-auto">
      <div class="flex items-center gap-7">
        <div class="w-3/6 flex flex-col gap-y-5">
          <h1 class="text-7xl font-bold capitalize text-gray text-left leading-[1.1]">online meeting platforms</h1>
          <span class="text-base rounded-md font-medium text-gray text-left">Ease to meet evrywhere.connenct anywhere any time</span>
          <div>
            <router-link v-if="!currentUser" to="/signup">
              <button class="signup flex items-center gap-1 justify-center w-48 py-2 text-base rounded-full font-medium border bg-prim text-white transition-all hover:bg-prim-dark active:bg-prim">
                <span>Get started now </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </button>
            </router-link>
  
            <router-link v-else to="/rooms">
              <button class="signup flex items-center gap-1 justify-center w-48 py-2 text-base rounded-full font-medium border bg-prim text-white transition-all hover:bg-prim-dark active:bg-prim">
                <span> Join a meeting </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </button>
            </router-link>
          </div>
        </div>
        <div class="w-3/6">
          <img src="../assets/img/video.png" alt="" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentUser: [String, Object],
    },
  };
  </script>
  
  <style></style>