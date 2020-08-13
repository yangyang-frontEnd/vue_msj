<template>
  <div>
    <el-container>

      <Header></Header>

      <el-main>
        <div class="main">
          <!--路径对应的组件会替换在这个位置-->
          <router-view></router-view>
        </div>
      </el-main>

      <el-footer>
        <div class="footer">
          Copyright © 2019 - 2019 
        </div>
      </el-footer>
      
    </el-container>
  </div>
</template>

<script>
import Header from "./header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="stylus" scoped>


.main {
  width: 990px;
  margin: 0 auto;
}

.footer {
  text-align: center;
  height: 42px;
  line-height: 42px;
}
</style>