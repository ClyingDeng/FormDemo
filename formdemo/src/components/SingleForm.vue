<template>
  <div class="singleForm">
    <div class="form">
      <el-table
        :data="tableData"
        stripe
        border
        :header-cell-style="{'background-color':'#ccc','color':'#333'}"
        style="width: 100%"
      >
        <el-table-column prop="type" label="类型" min-width="30%"></el-table-column>
        <el-table-column prop="name" label="姓名" min-width="30%"></el-table-column>
        <el-table-column prop="date" label="日期" min-width="30%"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleForm",
  data() {
    return {
      tableData: [
        {
          type: "劳动组1",
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1778 弄"
        },
        {
          type: "劳动组1",
          date: "2016-05-04",
          name: "李四",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          type: "劳动组1",
          date: "2016-05-02",
          name: "王五",
          address: "上海市普陀区金沙江路 1348 弄"
        },
        {
          type: "劳动组2",
          date: "2016-05-01",
          name: "赵二",
          address: "上海市普陀区金沙江路 13 弄"
        },
        {
          type: "劳动组2",
          date: "2016-05-01",
          name: "王六",
          address: "上海市普陀区金沙江路 111 弄"
        },
        {
          type: "劳动组1",
          date: "2016-05-03",
          name: "张三",
          address: "上海市普陀区金沙江路 112 弄"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.singleForm {
  width: 100%;
  height: 100%;
  // background-color: #ff0;
  .form {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
