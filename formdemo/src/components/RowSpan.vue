<template>
  <div class="singleForm">
    <div class="form">
      <el-table
        :data="tableData"
        stripe
        border
        :span-method="objectSpanMethod"
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
      ],
      span:[],
      index:0,
    };
  },
  mounted(){
    this.getSpan(this.tableData);
  },
  methods: {
    getSpan(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.span.push(1);
          this.index = 0;
        } else {
          // 判断当前元素某一属性与上一个元素的某一属性是否相同
          if (data[i].type === data[i - 1].type) {
            this.span[this.index] += 1;
            this.span.push(0);
          } else {
            this.span.push(1);
            this.index = i;
          }
        }
      }
    },

    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.span[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    }
  }
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
