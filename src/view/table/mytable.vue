<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 50]"
      :page-size="100"
      layout="prev, pager, next, jumper,sizes,total"
      :total="10"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getTableList } from "@/api/login";
export default {
  name: "mytable",
  data() {
    return {
      tableData: [],
      currentPage4: 4,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const ret = await getTableList();
      console.log(ret);
      this.tableData = ret.data;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style>
</style>