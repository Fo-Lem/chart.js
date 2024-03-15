<template>
  <q-header reveal elevated class="bg-primary text-white q-px-lg ">
    <q-toolbar class="max-w-screen-2xl mx-auto">
      <q-toolbar-title>
        <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar> -->
        Арсенал +
      </q-toolbar-title>
      <q-space />
      <q-tabs class="gt-xs" v-bind:model-value="curentRoute" shrink>
        <q-route-tab to="/dashboard" label="Главная" @click="$emit('change-route', 't_0')" />
        <q-route-tab to="/about" label="О проекте" @click="$emit('change-route', 't_1')" />
      </q-tabs>

      <q-btn class="lt-sm" dense flat round icon="menu" @click="$emit('toggle-right-drawer')" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  curentRoute: {
    type: String,
    default: '',
  },
});

defineEmits(['toggle-right-drawer', 'change-route']);
</script>

<style scoped></style>
