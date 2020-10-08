<template>
    <div>
          <q-card class="my-card">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        basic
      >
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
    </div>
</template>

<script>
    export default {
        name: 'Cards',
        data(){
            return {
                lorem: 'Nesto pise'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>