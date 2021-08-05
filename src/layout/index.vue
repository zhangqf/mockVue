<template>
  <div class="ui-container">
    <div class="ui-sidebar">
      <el-scrollbar wrapClass="ui-scrollBar">
        <el-menu
          :default-active="activeIndex"
          background-color="#304156"
          class="el-menu-demo"
          text-color="#fff"
          @select="handleSelect"
        >
          <template v-for="(item, index) in navList">
            <template v-if="item.children">
              <el-submenu :index="item.url" :key="index">
                <template slot="title">
                  <span>{{ item.name }}</span>
                </template>
                <template v-for="(items, index) in item.children">
                  <el-menu-item :index="items.url" :key="index">
                    <template slot="title">
                      <router-link :to="items.url">{{
                        items.name
                      }}</router-link>
                    </template>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>

            <template v-else>
              <el-menu-item :index="item.url" :key="index">
                <router-link :to="item.url">{{ item.name }}</router-link>
              </el-menu-item>
            </template>
          </template>

          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="ui-content">
      <div class="ui-content-header">
        <div class="ui-header">
          <el-breadcrumb  separator="/" >
          <!-- <transition-group name="breadcrumb"> -->
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index" >{{item.meta.title}}</el-breadcrumb-item>
          <!-- </transition-group> -->
          </el-breadcrumb>
        </div>
        <avatar :list="login" class="ui-avatar" />
      </div>
      <div class="ui-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "@/components/sidebar/Avatar.vue";
import path from "path";
import { mapState } from "vuex";
export default {
  components: {
    avatar,
  },
  data() {
    return {
      activeIndex: "/index",
      breadList: [],
      navList: [
        {
          name: "index",
          url: "/index",
        },
        {
          name: "dash",
          url: "/dash",
        },
        {
          name: "nav",
          url: "/nav",
        },
        {
          name: "group",
          url: "/page/a",
          children: [
            {
              name: "itmeA",
              url: "/page/a",
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
  watch: {
    $route(route) {
      this.getBreadcrumb();
    },
  },
  created(){
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      console.log(this.$route.matched);
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];
      if(!this.isDashBoard(first)){
          matched = [{path:"/",meta:{title:'首页'}}].concat(matched);
      }
      this.breadList = matched.filter((item) => item.meta && item.meta.title);
      console.log(this.breadList);
    },
    isDashBoard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim() === "首页";
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    resolvePath(routePath) {
      if (this.isExternal(routePath)) {
        return routePath;
      }
      if (this.isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    },
  },
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
    .ui-content-header {
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: crimson 1px dashed;
      .ui-avatar {
        flex: 3;
      }
      .ui-header {
        flex: 21;
        height: 50px;
        display: flex;
        align-items: center;
        margin-left: 10px;
      }
    }
  }
}
// .app-breadcrumb.el-breadcrumb {
//   display: inline-block;
//   font-size: 14px;
//   line-height: 50px;
//   margin-left: 8px;

//   .no-redirect {
//     color: #97a8be;
//     cursor: text;
//   }
// }
</style>>
