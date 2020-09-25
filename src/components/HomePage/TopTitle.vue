<template>
  <div class="topDiv">
    <div class="q-pa-md q-gutter-sm">
      <div class="text-center text-white q-pt-lg">
        <div class="q-select">Digital Marketing Tools For Professionals</div>
        <div class="q-select q-pt-md">Unlimited Projects & Data For Only $99/mo.</div>
      </div>
    </div>
    <div class="text-center q-mt-lg">
      <div class="text-h5 q-mb-lg">How we can we help you today?</div>
      <div  class="flex flex-center">
      <div class="q-select">I am </div> <q-select class="text-h5 q-ml-lg fixed-width" v-model="model" :options="options" /> <q-btn color="secondary" icon-right="send" class="q-ml-lg"  label="GO" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopTitle",
    data () {
    return {
      model: "please select",
      options: [
        'an influencer','a buisness owner', 'a famous person', 'an idiot', 'an IT expert', 'just looking'
      ]
    }
  }
  
};
</script>

<style lang="scss" scoped>
.fixed-width {
  width: 250px;
}
.q-select {
  font-size: 1.5rem;
}
 @media only screen and (max-width: 768px) {
   .fixed-width {
    width: 150px;
}
.q-select {
  font-size: 1rem;
}
 }

.topDiv {
  height: 40vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.text-h3,
.text-h4 {
  text-shadow: 2px 2px black;
}
</style>
