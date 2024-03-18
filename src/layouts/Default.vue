<template>
  <q-layout view="hHh lpr fff">
    <Header
      @change-route="currentRoute = $event"
      @toggle-right-drawer="toggleRightDrawer"
    />

    <q-drawer overlay v-model="rightDrawerOpen" side="right" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <q-item
            clickable
            :active="currentRoute === 't_0'"
            v-ripple
            @click="
              () => {
                currentRoute = 't_0';
                rightDrawerOpen = false;
                $router.push('/dashboard');
              }
            "
          >
            <q-item-section>
              <q-item-label>Главная</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            :active="currentRoute === 't_1'"
            v-ripple
            @click="
              () => {
                currentRoute = 't_1';
                rightDrawerOpen = false;
                $router.push('/about');
              }
            "
          >
            <q-item-section>
              <q-item-label>О проекте</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="max-w-screen-2xl mx-auto">
      <div class="p-8">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </q-page-container>

    <Footer />
  </q-layout>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref } from 'vue';
const rightDrawerOpen = ref(false);
const currentRoute = ref('');
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>
