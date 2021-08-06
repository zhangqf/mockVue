<template>
  <div class="ui-container">
    <div class="ui-sidebar">
      <el-scrollbar wrapClass="ui-scrollBar">
        <el-menu
          :default-active="activeIndex"
          background-color="#304156"
          class="el-menu-demo"
          text-color="#fff"
        >
          <Menu :navList="navList" /> </el-menu
      ></el-scrollbar>
    </div>
    <div class="ui-content">
      <div class="ui-content-header">
        <div class="ui-header">
          <!-- <el-breadcrumb  separator="/" > -->
          <!-- <transition-group name="breadcrumb"> -->
          <Breadcrumb />
          <!-- </transition-group> -->
          <!-- </el-breadcrumb> -->
        </div>
        <Avatar :list="login" class="ui-avatar" />
      </div>
      <div class="ui-main">
        <transition  name="trans">
          <router-view />
        </transition >
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/sidebar/Avatar.vue";
import Menu from "@/components/sidebar/Menu.vue";
import Breadcrumb from "@/components/sidebar/Breadcrumb.vue";

import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Breadcrumb,
  },
  data() {
    return {
      activeIndex: "/index",
      breadList: [],
      navList: [
        {
          name: "首页",
          url: "/index",
        },
        {
          name: "表单",
          url: "/dash",
        },
        {
          name: "表格",
          url: "/nav",
        },
        {
          name: "group",
          url: "/page/a",
          children: [
            {
              name: "itmeA",
              url: "/page/a",
              children:[
               {
                name:"abc",
                url:"/page/a/abc"
               },
               {
                  name:"dbc",
                  url:"/page/a/dbc"
               }
              ]
            },
            {
              name: "itemB",
              url: "/page/b",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(["login"]),
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.ui-container {
  width: 100%;
  height: 100%;
  display: flex;
  .ui-sidebar {
    width: 210px;
    height: 100%;
    background: #304156;
  }
  .ui-content {
    flex: 1;
    // width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    .ui-content-header {
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: #c3c3c3 1px dashed;
      .ui-avatar {
        flex: 3;
        width: 300px;
      }
      .ui-header {
        flex: 21;
        height: 50px;
        display: flex;
        align-items: center;
        margin-left: 10px;
      }
    }
    .ui-main{
      padding: 20px;
      flex: 1;
      overflow-y:scroll;
    }
  }
}
.trans-enter-active{
  
  // transform: translateX(-130px);
  transition: all .6s  cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.trans-leave-active{
  
  
}
.trans-enter{
transform: translateX(130px);
opacity: 0;
}
.trans-leave-to{

}
</style>
