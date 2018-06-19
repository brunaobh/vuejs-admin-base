<template>
  <div class="container-fluid pt-8">

    <pageHeader :breadcrumb="$t('menu.uielements.options.progress')"></pageHeader>

    <div class="row container-content container-content--page-header">

      <div class="col-md-12 p-5">
        <div class="row">
          <div class="col-md-4">
            <el-progress :percentage="0"></el-progress>
            <el-progress :percentage="70"></el-progress>
            <el-progress :percentage="80" color="#8e71c7"></el-progress>
            <el-progress :percentage="100" status="success"></el-progress>
            <el-progress :percentage="50" status="exception"></el-progress>
          </div>
        </div>
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
      }
    },
    methods: {
    }
  }
</script>
