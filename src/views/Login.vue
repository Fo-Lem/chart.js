<template>
  <div class="flex flex-col gap-5 p-5 max-w-md w-full">
    <div>
      <h1 class="text-h4 text-center">Арсенал +</h1>
    </div>
    <div class="p-5 border border-color shadow-1 flex flex-col gap-8">
      <h4 class="text-h5 text-center">Вход</h4>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="email" type="email" label="Ваш Email *" lazy-rules :rules="[
        (val) => (val && val.length > 0) || 'Введите ваш Email',
        (val) => (val && z.string().email().safeParse(val).success) || 'Не корректный Email',
      ]" />

        <q-input filled type="password" v-model="password" label="Ваш пароль *" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Введите ваш пароль']" />
        <div>
          <q-btn label="Войти" type="submit" color="primary" />
          <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { z } from 'zod';

const email = ref<string>();
const password = ref<string>();
const router = useRouter();
const onSubmit = () => {
  if (email.value && password.value) {
    localStorage.setItem('email', email.value);
    router.push('/');
  }
};

const onReset = () => {
  email.value = '';
  password.value = '';
};
</script>

<style scoped></style>
