<template>
  <div class="singleForm">
    <div class="form">
      <el-table
        v-loading="loading"
        :data="list"
        stripe
        border
        :header-cell-style="{'background-color':'#ccc','color':'#333'}"
        style="width: 100%"
      >
        <el-table-column prop="type" label="类型" min-width="30%"></el-table-column>
        <el-table-column prop="name" label="姓名" min-width="30%"></el-table-column>
        <el-table-column prop="date" :formatter="dateFormat" label="日期" min-width="30%"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "singleForm",
  props: {
    list: Array
  },
  mounted() {
    console.log("asasas", this.list);
  },
  data() {
    return {
      loading: false
    };
  },
  watch: {
    list(val) {
      // console.log("变啊变！", val);
      if (val.length > 0) {
        this.loading = false;
      } else {
        this.loading = true;
      }
    }
  },
  methods: {
    dateFormat(row, column) {
      var date = row[column.property];
      if (date === undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD");
    }
  }
};
</script>

<style lang="scss" scoped>
.singleForm {
  width: 100%;
  height: 100%;
  .form {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
