<template>
  <div class="ui-container">
    <div class="ui-sidebar">侧边栏</div>
    <div class="ui-content">
      <div class="ui-header">内容头</div>
      <div class="ui-main">
          <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.ui-container{
    width: 100%;
    height: 100%;
    display: flex;
    .ui-sidebar{
        width: 300px;
        height: 100%;
        background: #55c282;
    }
    .ui-content{
        flex:1;
        .ui-header{
            height: 80px;
            background: cornflowerblue;
        }
    }
}
</style>>
