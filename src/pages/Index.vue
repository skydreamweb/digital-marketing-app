<template>
  <q-page>
    <TopTitle></TopTitle>
    <Carousel></Carousel>
  </q-page>
</template>

<script>
import Carousel from '../components/HomePage/carousel'
import TopTitle from '../components/HomePage/TopTitle'
export default {
  name: 'PageIndex',
  components: {
    TopTitle,
    Carousel
  }
}
</script>
