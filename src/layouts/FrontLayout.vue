<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawerOpen()"
        />
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
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import RequiredLink from "src/components/RequiredLink.vue";
import HomePage from "src/pages/HomePage.vue";

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

const requiredLinkArray = ref(linksListData);
const leftDrawerOpen = ref(false);
const router = useRoute();

const toggleLeftDrawerOpen = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const isHomePage = () => {
  if (router.name === "home") {
    return true;
  }
  return false;
};
</script>
