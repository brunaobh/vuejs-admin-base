<template>
  <div class="row">
    <div class="col-sm-12 ml-sm-auto col-md-12 col-lg-12 page-header page-header--fixed">
      <div class="row">
        <div class="col-sm-12 ml-sm-auto col-md-12 breadcrumb breadcrumb--fixed">
          <p>{{ breadcrumb }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    props: {
      breadcrumb: {
        type: String,
        required: false
      }
    }
  }
</script>
