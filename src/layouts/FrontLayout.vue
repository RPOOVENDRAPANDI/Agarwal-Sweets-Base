<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: rgb(234, 243, 237)">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          style="color: rgb(154, 154, 231)"
          @click="toggleLeftDrawerOpen()"
        />
        <q-toolbar-title> </q-toolbar-title>
        <div>
          <img
            :src="metaIcon"
            class="icon-class"
            @click="openNewTab('https://www.facebook.com/')"
          />
        </div>
        &nbsp; &nbsp;
        <div>
          <img
            :src="instaIcon"
            class="icon-class"
            @click="openNewTab('https://www.instagram.com/poovendrar/')"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above bordered v-model="leftDrawerOpen">
      <q-list>
        <q-item-label header>Agarwal Sweets</q-item-label>
        <RequiredLink
          v-for="(link, index) in requiredLinkArray"
          :key="index"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <HomePage v-if="isHomePage()" />
      <FooterPage />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import RequiredLink from "src/components/RequiredLink.vue";
import HomePage from "src/pages/HomePage.vue";
import FooterPage from "src/pages/FooterPage.vue";

const linksListData = [
  {
    name: "Home",
    routeName: "home",
  },
  {
    name: "All Products",
    routeName: "all-products",
  },
  {
    name: "Sweets",
    routeName: "sweets",
  },
  {
    name: "Savouries",
    routeName: "savouries",
  },
  {
    name: "About Us",
    routeName: "about-us",
  },
  {
    name: "Blog",
    routeName: "blog",
  },
  {
    name: "Contact Us",
    routeName: "contact-us",
  },
];

const router = useRoute();

const requiredLinkArray = ref(linksListData);
const leftDrawerOpen = ref(false);
const metaIcon = ref("src/assets/images/meta_icon.png");
const instaIcon = ref("src/assets/images/instagram_icon.png");

// Computed Properties

// Methods
const toggleLeftDrawerOpen = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const isHomePage = () => {
  if (router.name === "home") {
    return true;
  }
  return false;
};

const openNewTab = (url) => {
  window.open(url);
};
</script>

<style>
.icon-class {
  height: 25px;
  width: 25px;
  margin-top: 6px;
  cursor: pointer;
}
</style>
