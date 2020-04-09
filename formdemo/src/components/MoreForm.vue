<template>
  <div class="moreForm">
    <div class="form" v-for="(item,index) in list" :key="index">
      <p>{{item.formName}}</p>
      <el-table
        :data="item.formList"
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
  name: "moreForm",
  props: {
    list: Array
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.moreForm {
  // width: 100%;
  height: 100%;

  .form {
    width: 80%;

    margin: 0 auto;
  }
}
</style>
