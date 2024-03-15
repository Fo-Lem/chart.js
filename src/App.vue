<template>
  <component :is="layout" />
</template>
<script setup lang="ts">
import Default from '@/layouts/Default.vue';
import type { DefineComponent } from 'vue';
import { markRaw } from 'vue';
import { useRouter } from 'vue-router';

const layout = markRaw<DefineComponent<{}, {}, any>>(Default);
const router = useRouter();

router.afterEach((to) => {
  if (to.meta.layout !== undefined) {
    layout.value = to.meta.layout;
  } else {
    layout.value = Default;
  }
});
</script>
