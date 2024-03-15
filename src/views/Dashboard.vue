<template>
  <div class=" max-w-7xl mx-auto grid grid-cols-2 gap-5">
    <div>
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
    <div>
      <Doughnut id="my-doughnut-id" :options="DoughnutOptions" :data="DoughnutData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bar, Doughnut } from 'vue-chartjs'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const chartData = {
  labels: ['January', 'February', 'March'],
  datasets: [{
    label: 'Data One',
    data: [40, 20, 12]
  }],
};
const chartOptions = {
  responsive: true,
};

const DoughnutData = {
  labels: ['January', 'February', 'March'],
  datasets: [{
    label: 'Data One',
    data: [40, 20, 12]
  }],
};
const DoughnutOptions = {
  responsive: true,
};
</script>

<style scoped></style>
