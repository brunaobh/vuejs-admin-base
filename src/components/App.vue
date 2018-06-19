<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderComponent from './Header.vue'

  export default {
    components: {
      HeaderComponent
    },
    created() {
      window.localStorage.setItem('locale', 'en');
      window.localStorage.setItem('auth', true);
    }
  }
</script>
