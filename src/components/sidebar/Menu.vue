<template>
  <div>
    <template v-for="(item, index) in navList">
      <template v-if="item.children">
        <el-submenu :index="item.url" :key="index">
          <template slot="title">
            <span>{{ item.name }}</span>
          </template>
          <Menu :navList="item.children" />
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.url" :key="index">
          <router-link style="display:block" :to="item.url">{{ item.name }}</router-link>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    navList: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

<style>
</style>