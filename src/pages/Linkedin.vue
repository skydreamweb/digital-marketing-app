<template>
  <div>
    <div class="text-h4 q-py-lg text-center">Linkedin Analytics</div>
    <div class="row justify-center q-pa-lg">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Page likes</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section style="width:100%; height: 50vh;" class="">
            <div class="absolute-center">
              <div class="q-gutter-y-md column">
                <q-rating
                  v-model="ratingModel"
                  size="3em"
                  color="blue-5"
                  icon="thumb_up"
                  icon-selected="thumb_up"
                  readonly
                />
              </div>
              <div class="q-gutter-y-md column text-center q-mt-sm">
                <h2>6</h2>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Page views</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section style="width:100%; height: 50vh;" class="">
            <div class="absolute-center">
              <div class="q-gutter-y-md column">
                <q-rating
                  v-model="ratingModel"
                  size="3em"
                  color="blue-5"
                  icon="visibility"
                  icon-selected="visibility"
                  readonly
                />
              </div>
              <div class="q-gutter-y-md column text-center q-mt-sm">
                <h2>6</h2>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
         <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Total followers</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section style="width:100%; height: 50vh;" class="">
            <div class="absolute-center">
              <div class="q-gutter-y-md column">
                <q-rating
                  v-model="ratingModel"
                  size="3em"
                  color="blue-5"
                  icon="follow_the_signs"
                  icon-selected="follow_the_signs"
                  readonly
                />
              </div>
              <div class="q-gutter-y-md column text-center q-mt-sm">
                <h2>6</h2>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
         <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Total Reactions</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section style="width:100%; height: 50vh;" class="">
            <div class="absolute-center">
              <div class="q-gutter-y-md column">
                <q-rating
                  v-model="ratingModel"
                  size="3em"
                  color="blue-5"
                  icon="speaker_notes"
                  icon-selected="speaker_notes"
                  readonly
                />
              </div>
              <div class="q-gutter-y-md column text-center q-mt-sm">
                <h2>6</h2>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Linkedin",
  data() {
    return {
      ratingModel: 3
    };
  }
};
</script>

<style lang="scss" scoped></style>
