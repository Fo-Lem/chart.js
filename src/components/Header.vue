<template>
  <q-header reveal elevated class="bg-primary text-white q-px-lg">
    <q-toolbar class="max-w-screen-2xl mx-auto">
      <q-toolbar-title>
        <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar> -->
        Арсенал +
      </q-toolbar-title>
      <q-space />
      <q-tabs class="gt-xs" v-bind:model-value="curentRoute" shrink>
        <q-route-tab
          to="/dashboard"
          label="Главная"
          @click="$emit('change-route', 't_0')"
        />
        <q-route-tab
          to="/about"
          label="О проекте"
          @click="$emit('change-route', 't_1')"
        />
      </q-tabs>
      <q-btn-dropdown
        class="h-10 w-10"
        flat
        no-icon-animation
        dropdown-icon="account_circle"
        @click="$emit('toggle-user-info')"
      >
        <div class="row no-wrap q-pa-md">
          <div class="column flex gap-2">
            <span class="text-gray-500">Email</span>
            <div class="text-subtitle1">{{ email }}</div>
            <!-- <span class=" text-gray-500">Имя</span>
            <div class="text-subtitle1">John Doe</div> -->
            <q-btn
              @click="logout"
              class="w-full"
              color="primary"
              label="Выйти"
              size="md"
              v-close-popup
            />
          </div>
        </div>
      </q-btn-dropdown>
      <q-btn
        class="lt-sm h-10 w-10"
        dense
        flat
        round
        icon="menu"
        @click="$emit('toggle-right-drawer')"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const email = localStorage.getItem('email');

const logout = () => {
  localStorage.clear();
  router.push('/login');
};

defineProps({
  curentRoute: {
    type: String,
    default: '',
  },
});

defineEmits(['toggle-right-drawer', 'toggle-user-info', 'change-route']);
</script>

<style scoped></style>
