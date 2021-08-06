<template>
  <div>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in breadList" :key="item.path"
          >{{ item.meta.title }}</el-breadcrumb-item
        >
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import path from "path";
export default {
  name: "Breadcrumb",

  data(){
      return{
          breadList:[]
      }
  },
  watch: {
    $route(route) {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      console.log(this.$route.matched);
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];
      if (!this.isDashBoard(first)) {
        matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
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
  },
};
</script>

<style lang="scss">
.breadcrumb-enter,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(120px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.4s ease;
}
</style>