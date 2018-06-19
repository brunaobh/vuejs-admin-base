<template>
  <div class="container-fluid pt-8">

    <pageHeader :breadcrumb="$t('menu.uielements.options.dialog')"></pageHeader>

    <div class="row container-content container-content--page-header">

      <div class="col-md-12 p-5">

        <el-button type="primary" @click="openDialog" icon="el-icon-document">{{ $t('general.button.openDialog') }}</el-button>
        <el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="date" label="Date" width="150"></el-table-column>
            <el-table-column property="name" label="Name" width="200"></el-table-column>
            <el-table-column property="address" label="Address"></el-table-column>
          </el-table>
        </el-dialog>

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
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false
      }
    },
    methods: {
      openDialog: function () {
        this.dialogTableVisible = true;
      }
    }
  }
</script>
