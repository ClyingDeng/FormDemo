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
        <el-table-column prop="date" :formatter="dateFormat" c label="日期" min-width="30%"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
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
      console.log("变啊变！", val);
      if (val.length > 0) {
        this.loading = false;
      } else {
        this.loading = true;
      }
    }
  },
  methods: {
    dateFormat(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1);
      time.setYear(time.getFullYear() - 70);
      const year = time.getFullYear() + "";
      const month = time.getMonth() + 1 + "";
      const date = time.getDate() - 1 + "";
      if (format && format.length === 1) {
        return year + format + month + format + date;
      }
      return (
        year +
        (month < 10 ? "0" + month : month) +
        (date < 10 ? "0" + date : date)
      );
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
