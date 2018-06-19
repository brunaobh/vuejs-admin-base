<template>
  <div class="container-fluid pt-8">

    <pageHeader :breadcrumb="$t('menu.uielements.options.tabs')"></pageHeader>

    <div class="row container-content container-content--page-header">
      <div class="col-md-12 p-5">
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>

        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="User">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae eros mi. Nam tristique in risus a posuere. Ut vel eros sed orci placerat interdum. Phasellus non sapien leo. Sed vel purus ac quam hendrerit suscipit eu ut quam. Nunc ultrices convallis pellentesque. Morbi et augue justo. Nam ultricies orci quis metus accumsan, placerat tempor mi aliquam. Nullam dignissim et arcu id volutpat. Quisque ullamcorper eu mauris ut iaculis. Cras pellentesque nec eros eu pretium. Curabitur auctor finibus nunc eget rutrum. Suspendisse mollis quam quam, at iaculis dui volutpat ac. Phasellus quis sapien convallis erat cursus commodo vitae sit amet leo.
            </p>

            <p>
              Donec dignissim nulla et velit lobortis cursus. Ut et tincidunt ipsum, eu condimentum felis. Suspendisse potenti. Nullam fermentum massa ut tortor ullamcorper sagittis. Vestibulum vel ante orci. Quisque in mauris eget risus consequat mollis. Proin vitae pellentesque tortor. Etiam vestibulum urna vitae ligula efficitur, eu pretium nunc porta. Suspendisse sed ultrices felis. Maecenas egestas nulla quis diam porttitor viverra. Pellentesque elementum lorem at hendrerit porttitor. Aenean at dictum ligula. Aenean tristique nec tortor at commodo. Praesent accumsan sapien id convallis rhoncus.
            </p>
          </el-tab-pane>
          <el-tab-pane label="Config">
            <p>
              Suspendisse tristique ex vel orci pellentesque ullamcorper. Proin consequat posuere est eget tristique. Sed et ex tortor. Quisque maximus vitae dolor eget pellentesque. Curabitur lobortis mi mollis quam consequat aliquam. Phasellus quis elit quis mi finibus laoreet. Nunc mollis congue nisl ac porttitor. Suspendisse potenti. Vestibulum commodo, justo eget sagittis pulvinar, tellus leo sollicitudin enim, in malesuada leo mauris facilisis est. In laoreet sem est, gravida vulputate velit tincidunt sed. Sed varius enim quis diam scelerisque, eget venenatis lorem congue.
            </p>

            <p>
              Nulla et mauris elit. Sed in urna aliquet, bibendum nunc non, porttitor orci. Vestibulum hendrerit non elit eget euismod. Aliquam erat volutpat. Phasellus scelerisque lacinia eros. Nullam suscipit ac ligula non placerat. Aliquam eu nisi rutrum, bibendum risus at, vehicula dolor. Fusce ac erat vitae magna vestibulum rhoncus id fringilla leo. In luctus viverra purus a ullamcorper. Vivamus nec nulla rutrum sem pulvinar tristique nec ac sapien. Ut at orci sed quam semper dictum. Morbi efficitur enim vitae ante condimentum, eget viverra dui consectetur. Phasellus quis massa turpis.
            </p>
          </el-tab-pane>
          <el-tab-pane label="Role">
            <p>
              Aliquam ut lectus in orci tincidunt aliquet quis sed ex. Pellentesque non vestibulum leo. Etiam pulvinar odio ac nibh posuere, eget tempus lorem hendrerit. Etiam felis eros, suscipit id imperdiet vitae, laoreet et dolor. Donec at est quam. Morbi at magna ultrices, aliquet ex eget, vestibulum mi. Maecenas vehicula tellus eget malesuada suscipit.
            </p>

            <p>
              Integer lectus justo, pellentesque sed dignissim varius, malesuada quis nunc. Quisque ultricies, felis nec pretium porttitor, diam nisl ultrices ipsum, at malesuada ligula diam ac eros. Fusce egestas arcu ac est feugiat blandit. Integer vitae purus in elit iaculis elementum. Proin blandit faucibus commodo. Suspendisse potenti. Vestibulum metus magna, rhoncus sed elementum ac, dapibus sed lorem. Vivamus vulputate elit quis ante pretium, vitae congue sapien tempor. Vestibulum dictum elit sit amet lorem maximus porta. Morbi aliquet lacus sit amet diam porttitor interdum. Ut porta, libero eget rutrum interdum, mauris tellus malesuada massa, quis volutpat mi leo nec leo.
            </p>
          </el-tab-pane>
          <el-tab-pane label="Task">
            <p>
              Nullam eu nulla lacus. Integer eu lectus neque. Nullam porta turpis vitae lorem lobortis, vel ornare magna consectetur. Cras ex orci, luctus eget velit non, aliquam dictum orci. Ut gravida nec massa in vulputate. Suspendisse commodo ipsum et sapien mollis mollis. Curabitur venenatis blandit orci ut vehicula. Fusce faucibus vitae metus pulvinar fringilla.
            </p>

            <p>
              Vestibulum a ullamcorper lectus. Quisque pulvinar ante ac leo cursus pulvinar. In et consequat tellus, vitae condimentum ipsum. Fusce suscipit, sem elementum ultricies porta, lacus turpis consectetur mauris, eu aliquet turpis neque id lacus. In hac habitasse platea dictumst. Sed at consectetur urna. Pellentesque posuere neque eu nibh pharetra semper eu a metus. Curabitur vulputate convallis neque. Fusce in commodo lacus, sed imperdiet ex. Pellentesque luctus mattis tellus, sed semper orci fringilla non.
            </p>
          </el-tab-pane>
        </el-tabs>
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
        tabPosition: 'top'
      }
    },
    methods: {
    }
  }
</script>
