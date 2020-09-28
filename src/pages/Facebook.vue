<template>
  <div>
    <div class="text-h4 q-py-lg text-center">Facebook Analytics</div>
    <div class="q-pa-md flex flex-center">
      <div class="row justify-center q-pa-sm">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center">
          <div class="text-h5 text-center">Page Likes</div>
          <q-circular-progress
            show-value
            class="text-red q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.25"
            color="blue"
            track-color="grey-3"
          >
            <q-icon name="thumb_up" class="q-mr-xs" />
            {{ value }}
          </q-circular-progress>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center">
          <div class="text-h5 text-center">Page Views</div>
          <q-circular-progress
            show-value
            class="text-red q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.25"
            color="green"
            track-color="grey-3"
          >
            <q-icon name="visibility" class="q-mr-xs" />
            {{ value }}
          </q-circular-progress>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center">
          <div class="text-h5 text-center">Post Reach</div>
          <q-circular-progress
            show-value
            class="text-red q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.25"
            color="pink"
            track-color="grey-3"
          >
            <q-icon name="done_all" class="q-mr-xs" />
            {{ value }}
          </q-circular-progress>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm text-center">
          <div class="text-h5 text-center">Post engagement</div>
          <q-circular-progress
            show-value
            class="text-red q-ma-md"
            :value="value"
            size="12rem"
            :thickness="0.25"
            color="brown"
            track-color="grey-3"
          >
            <q-icon name="mouse" class="q-mr-xs" />
            {{ value }}
          </q-circular-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Facebook",
  data() {
    return {
      value: 73
    };
  }
};
</script>

<style lang="scss" scoped></style>
