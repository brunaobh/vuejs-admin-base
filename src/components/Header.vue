<template>
  <header class="navbar navbar-expand-lg navbar-dark fixed-top bg-primary pl-5" v-loading.fullscreen.lock="isLoading" :element-loading-text="$t('message.loading')" v-if="isAuth">
    <a class="navbar-brand" href="#/">
      <img src="../../assets/img/lab.svg" width="40" height="40" alt="">
      <span class="pl-3">{{ appName }}</span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">

        <li class="nav-item nav-item--spaced dropdown" v-for="menu in menus" v-if="hasMenu && menu.name">

          <div v-if="hasPathSingleMenu(menu)">
            <a class="nav-link nav-link--centralized" :href="'?#' + menu.path">
              {{ $t(`menu.${setMenuItem(menu.name)}.title`) }}
            </a>
          </div>

          <div v-else>
            <a class="nav-link nav-link--centralized dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ $t(`menu.${setMenuItem(menu.name)}.title`) }}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" :href="'#' + submenu.path" v-for="submenu in orderBy(menu.items)">
                {{ $t(`menu.${setMenuItem(menu.name)}.options.${setMenuItem(submenu.title)}`) }}
              </a>
            </div>
          </div>
        </li>

        <!-- User menu item -->
        <li class="nav-item nav-item--spaced dropdown">
          <a class="nav-link nav-link--centralized dropdown-toggle" href="#" id="navbarDropdownUserLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="../../assets/img/icons/avatar.png" class="navbar__avatar rounded-circle">John Snow
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownUserLink">
            <a class="dropdown-item" href="#" v-on:click="handleLogout()">{{ $t('auth.logout') }}</a>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import Vue from 'vue';
  import removeAccents from 'remove-accents';
  import menuJson from '../../assets/data/menu.json';

  export default {
    data() {
      return {
        appName: "Vuejs - Admin",
        isAuth: true,
        isLoading: false,
        locale: 'en',
        menus: null
      }
    },
    computed: {
      userIsAuth() {
        this.isAuth = JSON.parse(window.localStorage.getItem('auth'));
        return this.isAuth;
      },
      hasMenu() {
        return this.menus !== null;
      }
    },
    methods: {
      hasPathSingleMenu(value) {
        return value.path !== undefined;
      },
      getMenus() {
        if (this.isAuth) {
          this.menus = menuJson;
        }
      },
      handleLogout () {
        const h = this.$createElement;

        this.$notify({
          title: this.$t('auth.logout'),
          message: h('i', { style: 'color: teal' }, this.$t('message.logout'))
        });

        this.isAuth = false;
        window.localStorage.setItem('auth', this.isAuth);
        this.$router.push({path: '/pages/login'});
      },
      orderBy(obj) {
        return _.orderBy(obj, ['title'],['asc']);
      },
      setMenuItem (string) {
        return  removeAccents(string.toLowerCase().replace(/[#-\.\s]/g,''));
      }
    },
    created() {
      this.getMenus();
      this.locale = window.localStorage.getItem('locale');
      this.$i18n.locale = this.locale ? this.locale : 'en';
    }
  }
</script>
