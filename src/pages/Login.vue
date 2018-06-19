<script>

  import Vue from 'vue';

  export default {
    methods: {
      login() {
        window.localStorage.setItem('auth', true);
        this.$router.go({path: '/'});
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<template>
  <div class="container-fluid background--gray-800 full-height">

    <!-- Left container -->
    <div class="row">
      <div class="col-12 mt-6 ">

        <!-- message -->
        <p class="login-bg__welcome-message">{{ $t('auth.welcome') }}</p>

        <!-- Login -->
        <div class="login-bg__container">
          <p class="login-bg__info-message">{{ $t('auth.google') }}</p>
          <div class="login-bg__button-container" @click="login">
            <span class="login-bg__button-label">
              {{ $t('auth.login') }}
            </span>
          </div>
        </div>
      </div>
  </div>
</div>
</template>
