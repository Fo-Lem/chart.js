<template>
  <div class="max-w-7xl mx-auto gap-5">
    <apexchart width="100%" height="380" type="bar" :series="dataBar" :options="options"></apexchart>
    <apexchart width="100%" height="380" type="line" :series="dataBar" :options="options"></apexchart>
    <apexchart width="100%" height="380" type="boxPlot" :series="dataBoxPlot" :options="options"></apexchart>
  </div>
</template>

<script setup lang="ts">
const dataBar = [
  {
    name: 'Набор данных 1',
    data: [44, 55, 41, 64, 22, 43, 21, 12],
  },
  {
    name: 'Набор данных 2',
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

const dataBoxPlot = [{
  data: [{
    x: "category 1",
    y: [40, 51.98, 56.29, 59.59, 63.85]
  },
  {
    x: "category 2",
    y: [43.66, 44.99, 51.35, 52.95, 59.42]
  }]
}]

const options = {
  xaxis: {
    categories: [
      'Korea',
      'Canada',
      'Poland',
      'Italy',
      'France',
      'Japan',
      'China',
    ],
  },
  legend: {
    position: 'right',
    verticalAlign: 'top',
    containerMargin: {
      left: 35,
      right: 60,
    },
  },
};
</script>

<style scoped></style>
