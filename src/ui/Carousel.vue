<template>
  <div class="container-fluid pt-8">

    <pageHeader :breadcrumb="$t('menu.uielements.options.carousel')"></pageHeader>

    <div class="row container-content container-content--page-header">

      <div class="col-md-12 p-5">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
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
