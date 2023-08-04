<template>
  <div class="q-pa-md">
    <q-carousel arrows animated v-model="slide" height="500px">
      <q-carousel-slide
        name="first"
        img-src="https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?s=2048x2048&w=is&k=20&c=uzOWdv7qttAzXCmfANSW7VNYeGKb2e8v6dZyDkWpHZk="
      >
        <!-- <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div> -->
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://media.istockphoto.com/id/523041362/photo/indian-sweets.jpg?s=2048x2048&w=is&k=20&c=_Gw5dECHee-WiRoPk5Xzwcsh8rU7B3uL1UaUQfZfiV8="
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.pixabay.com/photo/2014/12/22/12/30/sweets-577228_1280.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide name="fourth">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/RVLNBVK8auM"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("first"),
    };
  },
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
