<template>
  <div>
    <div class="text-h4 q-py-lg text-center">Google Analytics</div>
    <div class="row justify-center q-pa-lg">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Website visit</div>
              </div>
            </div>
          </q-card-section>
          <q-card-section style="width:100%; height: 50vh;">
            <canvas id="pie-chart"></canvas>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
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
          <q-card-section style="width:100%; height: 50vh;">
            <canvas id="horizontal-bar-chart"></canvas>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Bounce rate</div>
              </div>
            </div>
          </q-card-section>
          <q-card-section style="width:100%; height: 50vh;">
            <canvas id="pies-chart"></canvas>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
        <q-card class="bg-white full-width">
          <q-card-section class="bg-blue-grey-8">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-white text-center">Traffic source</div>
              </div>
            </div>
          </q-card-section>
          <q-card-section style="width:100%; height: 50vh;">
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
    this.createPies("pies-chart");
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
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            labels: [
              {
                render: "label",
                position: "outside",
                fontSize: 20,
                fontColor: "#000"
              },
              {
                render: "value",
                fontColor: "#fff",
                fontSize: 26
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
          responsive: true,
          maintainAspectRatio: false,
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
    createPies(chartId) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Bounce rate",
              percent: 58,
              backgroundColor: ["#5283ff"]
            }
          ]
        },
        plugins: [
          {
            beforeInit: chart => {
              const dataset = chart.data.datasets[0];
              chart.data.labels = [dataset.label];
              dataset.data = [dataset.percent, 100 - dataset.percent];
            }
          },
          {
            beforeDraw: chart => {
              var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
              ctx.restore();
              var fontSize = (height / 150).toFixed(2);
              ctx.font = fontSize + "em sans-serif";
              ctx.fillStyle = "#9b9b9b";
              ctx.textBaseline = "middle";
              var text = chart.data.datasets[0].percent + "%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
              ctx.fillText(text, textX, textY);
              ctx.save();
            }
          }
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 45,
          rotation: Math.PI / 2,
          plugins: {
            labels: false
          }, 
          datalabels: {
            display: false
          },
          legend: {
            display: false
          },
          tooltips: {
            filter: tooltipItem => tooltipItem.index == 0
          }
        }
      });
      return myChart;
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
          responsive: true,
          maintainAspectRatio: false,
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
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  height: 500px !important;
}
</style>
