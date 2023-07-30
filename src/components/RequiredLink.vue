<template>
  <q-item clickable @click="getLinkPage(routeName)">
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["name", "routeName"]);
const router = useRouter();

const getLinkPage = (routeName) => {
  router.push({
    name: routeName,
  });
};
</script>
