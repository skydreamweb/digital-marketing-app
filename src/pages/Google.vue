<template>
  <div>
    <div class="text-h4 q-py-lg text-center">Google Analytics</div>
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
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">
                  Referral traffic
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <canvas id="horizontal-bar-chart"></canvas>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Pages</div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <canvas id="bubble-chart"></canvas>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Traffic source</div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <canvas id="radar-chart"></canvas>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import labels from "chartjs-plugin-labels";
export default {
  name: "Google",
  data() {
    return {};
  },
  mounted() {
    this.createPie("pie-chart");
    this.createHorizontal("horizontal-bar-chart");
    this.createBubble("bubble-chart");
    this.createRadar("radar-chart");
  },
  methods: {
    createPie(chartId) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["New Users", "Users"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2"],
              data: [484, 733]
            }
          ]
        },
        options: {
          plugins: {
            labels: [
              {
                render: "label",
                position: "outside",
                fontColor: "#000"
              },
              {
                render: "value",
                fontColor: "#fff"
              }
            ]
          },
          title: {
            display: true,
            fontSize: 16,
            text: "Users vs. New Users in past 24 hours"
          }
        }
      });
      return myChart;
    },
    createHorizontal(chartId) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
          labels: ["Facebook", "Newsletters", "Instagram", "Paid", "Others"],
          datasets: [
            {
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: [75, 67, 34, 23, 33]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            fontSize: 16,
            text:
              "Visits that came to your site from sources outside of its search engine."
          }
        }
      });
      return myChart;
    },
    createBubble(chartId) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
          labels: 'TSF',
          datasets: [
            {
              label: ['/home'],
              backgroundColor: 'rgba(255,221,50,0.2)',
              borderColor: 'rgba(255,221,50,1)',
              data: [{
                x: 21269017,
                y: 5.245,
                r: 15
              }]
            }, {
              label: ['/blog'],
              backgroundColor: 'rgba(60,186,159,0.2)',
              borderColor: 'rgba(60,186,159,1)',
              data: [{
                x: 258702,
                y: 7.526,
                r: 10
              }]
            }, {
              label: ['/shop'],
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderColor: '#000',
              data: [{
                x: 3979083,
                y: 6.994,
                r: 15
              }]
            }, {
              label: ['/collection'],
              backgroundColor: 'rgba(193,46,12,0.2)',
              borderColor: 'rgba(193,46,12,1)',
              data: [{
                x: 4931877,
                y: 5.921,
                r: 15
              }]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Most visited pages in past 24 hours'
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'How many seconds'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'How many visits'
              }
            }]
          }
        }
      })
      return myChart
    },
    createRadar(chartId) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
          labels: ["Facebook", "Newsletters", "Instagram", "Paid", "Others"],
          datasets: [
            {
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: [75, 67, 34, 23, 33]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            fontSize: 16,
            text:
              "Visits that came to your site from sources outside of its search engine."
          }
        }
      });
      return myChart;
    },
    
  }
};
</script>

<style></style>

<style lang="scss" scoped></style>
