<template>
  <div class="ui-container" :style="bgclass">
    <div class="ui-warpper">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="login-ruleForm"
      >
        <h2 class="title">welcome！</h2>
        <el-form-item prop="username">
          <el-input
            type="username"
            v-model.trim="ruleForm.username"
            autocomplete="off"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            size="medium"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      bgurl: require("@/assets/logo5.jpeg"),
      i: Math.ceil(Math.random() * 20),
      timerId: undefined,
      bg: undefined,
      redirect:undefined,
      ruleForm: {
        username: undefined,
        password: undefined,
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输输入密码", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    bgclass: function () {
      this.bg = require(`@/assets/logo${this.i}.jpeg`);
      return {
        backgroundImage: `url(${this.bg})`,
      };
    },
  },
  watch:{
    $route:{
      handler:function(route) {
        this.redirect = route.query && route.query.redirect
      }
    }
  },
  created() {
    this.getList();
  },
  mounted() {
    this.timerId = setInterval(() => {
      this.i = Math.ceil(Math.random() * 20);
    }, 5000);
  },
  destroyed() {
    clearInterval(this.timerId);
  },
  methods: {
    getList() {},
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // alert("submit!");
          // const { data } = await login(this.ruleForm);
          // console.log(data);
          // if (data.code == 200) {
          //    this.$message({
          //     type: 'success',
          //     message: `登录成功`
          //   });
            await this.$store.dispatch('login/login',this.ruleForm)
            console.log(this.$route)
            this.$router.push({path:this.redirect||'/home'})
          // } else {
          //   this.$message({
          //     type: 'error',
          //     message: `${data.message}`
          //   });
          // }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ui-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  .ui-warpper {
    .title {
      text-align: center;
      color: #504b4b;
    }
    .login-ruleForm {
      background: #f1f1f1db;
      border-radius: 8px;
      padding: 10px 40px;
      border-color: #92b8eb;
      border-width: 1px;
      border-style: solid;
    }
  }
}
</style>
