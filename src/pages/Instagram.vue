<template>
  <div>
    <div class="text-h4 q-py-lg text-center">Instagram Analytics</div>
    <div class="q-pa-md flex flex-center">
      <div class="row justify-center q-pa-sm">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center"
        >
          <div class="text-h5 text-center">Followers</div>
          <q-circular-progress
            show-value
            class="text-white q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.2"
            color="orange"
            center-color="grey-8"
            track-color="transparent"
          >
            <q-icon name="far fa-heart" class="q-mr-sm"/>
            {{ value }}
          </q-circular-progress>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center">
          <div class="text-h5 text-center">Story Reach</div>
          <q-circular-progress
            show-value
            class="text-white q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.2"
            color="orange"
            center-color="grey-8"
            track-color="transparent"
          >
            <q-icon name="fas fa-sort-amount-up-alt" class="q-mr-sm"/>
            {{ value }}
          </q-circular-progress>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center">
          <div class="text-h5 text-center">Engagment</div>
          <q-circular-progress
            show-value
            class="text-white q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.2"
            color="orange"
            center-color="grey-8"
            track-color="transparent"
          >
            <q-icon name="fas fa-mouse"  class="q-mr-sm"/>
            {{ value }}
          </q-circular-progress>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center">
          <div class="text-h5 text-center">Account reach</div>
          <q-circular-progress
            show-value
            class="text-white q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.2"
            color="orange"
            center-color="grey-8"
            track-color="transparent"
          >
            <q-icon name="fas fa-check-double" class="q-mr-sm" />
            {{ value }}
          </q-circular-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instagram",
  data() {
    return {
      value: 73
    };
  }
};
</script>

<style lang="scss" scoped></style>
