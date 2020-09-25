<template>
  <div class="row justify-center q-pa-lg">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <q-card class="bg-white full-width">
        <q-card-section class="bg-blue-grey-8">
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6 text-white text-center">Website visit</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <canvas id="pie-chart"></canvas>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Google",
  data() {
    return {};
  },
  mounted() {
    this.createChart("pie-chart");
  },
  methods: {
    createChart(chartId) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            "New Users",
            "Users",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
              ],
              data: [484, 733]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Users vs. New Users in past 24 hours"
          }
        }
      });
      return myChart;
    }
  }
};
</script>

<style></style>

<style lang="scss" scoped></style>
