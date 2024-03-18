<template>
  <q-layout view="hhh lpr fFf">
    <q-page-container class="h-screen flex content-center justify-center">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<style></style>
