<template>
  <div class="container-fluid pt-8">

    <pageHeader :breadcrumb="$t('menu.uielements.options.table')"></pageHeader>

    <div class="row container-content container-content--page-header">
      <div class="col-md-12">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="Date"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="Name"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="Address">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-12">
        <el-table
          :data="tableData2"
          height="250"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="Date"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="Name"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="Address">
          </el-table-column>
        </el-table>
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
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        tableData2: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
    }
  }
</script>
