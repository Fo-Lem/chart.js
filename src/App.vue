<template>
  <component :is="layout" />
</template>
<script lang="ts">
// import { updatePWA } from "@/composables/updatePWA"
import Default from '@/layouts/Default.vue';
import Empty from '@/layouts/Empty.vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    Default,
    Empty,
  },
  setup() {
    const layout = ref<string | unknown>();
    const router = useRouter();

    router.afterEach((to) => {
      if (to.meta.layout !== undefined) {
        layout.value = to.meta.layout;
      } else {
        layout.value = 'Default'; // this is default layout if route meta is not set
      }
    });

    return {
      layout,
    };
  },
});
</script>
