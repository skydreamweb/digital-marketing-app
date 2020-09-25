<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      infinite
      control-color="white"
      navigation
      padding
      arrows
      class="bg-custom text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="touch_app" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="trending_up" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="bar_chart" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: "style",
      lorem:
        "Samo jedan klik i sve na tacni. Najbolja aplikacija nema sta dalje da gledate i trazite, kupi kupi kupi danas i ustedi mnogo para a mozda i ne."
    };
  }
};
</script>
<style lang="scss">
.bg-custom {
  margin-top: 50px;
  height: 40vh;
  background-color: #55d795;
  background: linear-gradient(135deg, #63c986 20%, #6eb5f3 80%);
}
</style>
