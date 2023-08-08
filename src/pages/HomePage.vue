<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      infinite
      :autoplay="autoplaySlide"
      @mouseover="autoplaySlide = false"
      @mouseleave="autoplaySlide = true"
      v-model="topSlide"
      height="500px"
    >
      <q-carousel-slide
        name="first"
        img-src="https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?s=2048x2048&w=is&k=20&c=uzOWdv7qttAzXCmfANSW7VNYeGKb2e8v6dZyDkWpHZk="
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Ghee Sweets</div>
          <div class="text-subtitle1">
            <q-btn
              label="Shop Now"
              style="color: white; background-color: rgb(221, 161, 161)"
            />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://media.istockphoto.com/id/523041362/photo/indian-sweets.jpg?s=2048x2048&w=is&k=20&c=_Gw5dECHee-WiRoPk5Xzwcsh8rU7B3uL1UaUQfZfiV8="
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Dairy Sweets</div>
          <div class="text-subtitle1">
            <q-btn
              label="Shop Now"
              style="color: white; background-color: rgb(221, 161, 161)"
            />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.pixabay.com/photo/2014/12/22/12/30/sweets-577228_1280.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Cashew Sweets</div>
          <div class="text-subtitle1">
            <q-btn
              label="Shop Now"
              style="color: white; background-color: rgb(221, 161, 161)"
            />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourth">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/ORMbqJH1fEg"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="q-mt-sm">
      <q-img :src="patternOneUrlStart" />
    </div>

    <div class="container">
      <div class="container-item-1">
        <h2 class="about-heading-class">About Agarwhal Bhavan Sweets</h2>
        <p class="q-ml-lg about-text-class">
          This is a shop was started by Santhosh Agarwal in Hosur. Later stages,
          we diversified into multiple brances accross Housr and in Bangalore.
        </p>
        <p class="q-ml-lg about-text-class">
          The vision is to give high quality sweets and snacks to people who
          trust and visits us.
        </p>
      </div>
      <div class="container-item-2 q-ml-md">
        <q-img
          :src="founderUrl"
          style="height: 220px; width: 200px; margin-top: 35px"
        />
      </div>
    </div>

    <div>
      <q-img :src="patternOneUrlEnd" />
    </div>

    <div class="our-range-class">
      <p class="text-center heading-text-class">Our Products</p>
      <div class="q-mt-sm" style="margin-left: 100px; margin-right: 100px">
        <q-carousel
          v-model="thirdSlide"
          transition-prev="slide-right"
          transition-next="slide-left"
          arrows
          animated
          infinite
          :autoplay="autoplaySlide"
          @mouseover="autoplaySlide = false"
          @mouseleave="autoplaySlide = true"
          control-color="amber"
          height="390px"
          style="background-color: transparent"
        >
          <q-carousel-slide name="first" class="column no-wrap">
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <div
                v-for="(image, index) in secondRowImageArrayOne"
                class="image-container"
                :style="{ backgroundImage: 'url(' + image.source + ')' }"
                :key="index"
              >
                <p class="text-overlay">{{ image.name }}</p>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" class="column no-wrap">
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <div
                v-for="(image, index) in secondRowImageArrayTwo"
                class="image-container"
                :style="{ backgroundImage: 'url(' + image.source + ')' }"
                :key="index"
              >
                <p class="text-overlay">{{ image.name }}</p>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <div class="bottom-pattern-one-url-end-class"></div>

    <div class="corporate-orders-class">
      <div class="corporate-orders-container">
        <div class="container-item-1">
          <p class="corporate-orders-heading-text">Industries Orders</p>
          <h2 class="corporate-orders-content-text-one">
            Industries Bulk Orders for all festivals
          </h2>
          <p class="corporate-orders-content-text-two">
            We are supplying for many industries around Housr and Bangalore. We
            also maintain a good relationship with our clients
          </p>
          <q-btn
            label="Contact"
            style="margin-top: 10px; background-color: #0073bb; color: white"
            @click="redirectToContactPage()"
          />
        </div>
        <div class="corporate-offer-logo-class" style="margin-left: 50px">
          <p>Sweets</p>
          <span>Order</span>
        </div>
      </div>
    </div>

    <div class="bottom-pattern-one-url-end-class"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const topSlide = ref("first");
const secondSlide = ref("first");
const thirdSlide = ref("first");
const autoplaySlide = ref(true);
const founderUrl = ref(
  "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQAJJE7aVa1WRAcBLjq8SB3Semenl3TsliJlMTTOu8ZzZAN84f9zN62WHEuP59cPTyPHWax-QX6day8vfg"
);
const patternOneUrlStart = ref("src/assets/images/pattern-start-deco1.png");
const patternOneUrlEnd = ref("src/assets/images/pattern-end-deco1.png");

const secondRowImageArrayOne = ref([
  {
    source:
      "https://www.shutterstock.com/shutterstock/photos/725230546/display_1500/stock-photo-stock-photo-of-indian-sweets-served-in-silver-or-wooden-plate-variety-of-peda-burfi-laddu-in-725230546.jpg",
    name: "All Sweets",
  },
  {
    source:
      "https://thumbs.dreamstime.com/z/indian-sweets-mithai-7710344.jpg?w=768",
    name: "Ghee Sweets",
  },
  {
    source:
      "https://thumbs.dreamstime.com/z/indian-sweets-almond-plate-64250674.jpg?w=992",
    name: "Karupatti Sweets",
  },
  {
    source:
      "https://thumbs.dreamstime.com/z/pile-indian-sweets-motichoor-laddu-laddoo-71498478.jpg?w=992",
    name: "Laddu",
  },
  // {
  //   source:
  //     "https://www.shutterstock.com/image-photo/gulab-jamun-indian-pakistani-sweet-600w-2130427166.jpg",
  //   name: "Gulab Jamun",
  // },
  // {
  //   source:
  //     "https://www.shutterstock.com/image-photo/besan-burfi-mohanthal-roasted-barfi-600w-2192226217.jpg",
  //   name: "Mysore Paak",
  // },
]);

const secondRowImageArrayTwo = ref([
  {
    source:
      "https://t3.ftcdn.net/jpg/01/43/88/54/240_F_143885449_DeYKoqgNDsy2CHG2JmJYKEORCPstfPji.jpg",
    name: "Moorukku",
  },
  {
    source:
      "https://t4.ftcdn.net/jpg/01/43/13/11/240_F_143131146_c6YsQkSin7jzhNpcw1JdyPjokeJ4QiAt.jpg",
    name: "Mixture",
  },
  {
    source:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2019/09/thattai-recipe.jpg",
    name: "Thattai",
  },
  {
    source:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2011/10/IMG_7292.jpg",
    name: "Kaara Chevu",
  },
  // {
  //   source:
  //     "https://thumbs.dreamstime.com/z/spicy-indian-snack-kara-boondi-delicious-very-easy-to-make-60858041.jpg?w=992",
  //   name: "Kaara Boondhi",
  // },
  // {
  //   source:
  //     "https://3.bp.blogspot.com/-i3oynvQnoL0/TqamZwyOdPI/AAAAAAAABqc/bb3tsdVgt8I/s1600/vada.jpg",
  //   name: "Ribbon Pakkavada",
  // },
]);

// methods
const redirectToContactPage = () => {
  router.push({
    name: "contact-us",
  });
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.image-container
  position: relative
  width: 400px
  height: 350px
  background-size: cover
  background-position: center
  border-radius: 10px
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
  transition: transform 0.3s ease

.image-container::before
  content: ''
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.4)

.text-overlay
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  font-size: 26px
  color: white
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4)
  text-align: center
  font-family: 'Arial', sans-serif

.image-container:hover
  transform: scale(1.1)

.heading-text-class
  font-size: 45px
  color: #363636
  font-family: 'Merriweather', serif
  font-weight: 700

.about-heading-class
  font-size: 45px
  color: #363636
  font-family: 'Merriweather', serif
  margin-left: 23px
  font-weight: 700

.about-text-class
  font-size: 15px
  font-family: 'Merriweather', serif
  font-weight: 500
  text-align: left

.container
  display: flex
  justify-content: center
  align-content: center
  flex-wrap: wrap

.our-range-class
  background-image: url("src/assets/images/bg-image-yellow.jpg")
  height: 100%
  position: relative
  padding-top: 100px
  padding-bottom: 100px

.bottom-pattern-one-url-end-class
  position: relative
  width: 100%
  background-image: url('src/assets/images/pattern-end-deco1.png')
  transform: translateX(-50%)
  height: 50px
  bottom: 0px
  left:50%
  top:-24px

.corporate-orders-class
  background-image: url("src/assets/images/background-offer-img.jpg")
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover

.corporate-orders-container
  height: 500px
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap

.corporate-orders-heading-text
  font-size: 15px
  font-family: 'Open Sans', sans-serif
  font-weight: 600
  text-align: left
  color: #ffffff
  margin-top: -9px
  display: inline-block

.corporate-orders-content-text-one
  font-size: 45px
  color: #ffffff
  margin-top: 10px
  margin-bottom: 30px
  font-family: 'Merriweather', serif
  font-weight: 700

.corporate-orders-content-text-two
  font-size: 15px
  color: #ffffff
  margin-bottom: 15px
  font-family: 'Open Sans', sans-serif
  font-weight: 550

.corporate-offer-logo-class
  color: #ffffff
  border-radius: 50%
  width: 220px
  height: 220px
  display: inline-block
  text-align: center
  line-height: 175px
  background: linear-gradient(to right, #dac079 0%, #f1d486 100%)
  z-index: 1
  font-size: 35px
  position: relative

.corporate-offer-logo-class p
  font-size: 57px
  font-weight: 700

.corporate-offer-logo-class span
  font-size: 40px
  position: absolute
  top: 57px
  left: 0
  right: 0
  font-weight: 600

.corporate-offer-logo-class::after
  position: absolute
  content: ""
  top: 0
  left: 0
  right: 0
  bottom: 0
  border: 2px dashed #ffc000
  border-radius: 50%
  z-index: 1
  margin: -10px
  transition: 0.5s
  animation: rotation 50s infinite linear

@media screen and (max-width: 600px)
  .text-overlay
      font-size: 6vw

@media screen and (max-width: 1200px)
  .text-overlay
      font-size: 3vw

@media screen and (max-width: 400px)
  .text-overlay
      font-size: 1vw
</style>
