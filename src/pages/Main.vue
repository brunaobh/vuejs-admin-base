<template>
  <div class="container-fluid pt-8">

    <pageHeader
      breadcrumb="Dashboard"
    >
    </pageHeader>

    <!-- Tabs content -->

    <div class="row container-content--page-header">

      <div class="col-md-4">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>YEARLY SALES</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div class="">
          <!-- 
            <chartjs-line :fill="true" :linetension="0.5"></chartjs-line>
          -->
            <chartjs-line
              :labels= "chartLine.mylabels"
              :datasets="chartLine.mydatasets"
              :option="chartLine.options">
            </chartjs-line>
          </div>
        </el-card>
      </div>

      <div class="col-md-4">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>Card name</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div>
            <chartjs-bar
              :labels="chartBar.mylabels"
              :datasets="chartBar.mydatasets"
              :option="chartBar.options">
            </chartjs-bar>
          </div>
        </el-card>
      </div>

      <div class="col-md-4">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>Card name</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div>
            <chartjs-pie  
              :labels="chartDoughnut.mylabels"
              :datasets="chartDoughnut.mydatasets"
              :option="chartDoughnut.options">
            </chartjs-pie>
          </div>
        </el-card>
      </div>

      <div class="col-md-12 mt-4">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>Card name</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import PageHeader from './../components/PageHeader.vue';
  import _ from 'lodash';

  export default {
    components: {
      PageHeader
    },
    data () {
      return {
        chartBar: {
          mylabels: ['sad', 'cvx', 'xls'],
          mydatasets:[{
            label: "Qtd de checkins",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ['54', '75', '34'],
            spanGaps: false,
          }],
          options: {
            legend: {
              display: false
            },
            responsive: true
          }
        },
        chartDoughnut: {
          mylabels: ['sad', 'cvx', 'xls'],
          mydatasets:[{
            label: "Qtd de checkins",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ['54', '75', '34'],
            spanGaps: false,
          }],
          options: {
            legend: {
              display: false
            },
            responsive: true
          }
        },
        chartLine: {
          mylabels: ['sad', 'cvx', 'xls'],
          mydatasets:[{
            label: "Qtd de checkins",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ['54', '75', '34'],
            spanGaps: false,
          }],
          options: {
            legend: {
              display: false
            },
            responsive: true
          }
        }
      }
    },
    methods: {
    }
  }
</script>
