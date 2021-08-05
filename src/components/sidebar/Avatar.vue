<template>
  <div class="ui-container">
    <el-image class="ui-avatar" :src="list.avatar" fit="cover"></el-image>

    <span class="ui-name">您好！{{ list.name }}</span>
    <el-button type="text" @click="logout">注销</el-button>
  </div>
</template>

<script>
import { login } from "../../api/login";
export default {
  name: "Avatar",
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("login/logout");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-container {
  height: 50px;
  display: flex;
  align-items: center;
}
.ui-name {
  margin-right: 10px;
  margin-left: 10px;
  color: #757575;
  font-size: 14px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.ui-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>