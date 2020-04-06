<template>
  <div class="single">
    <div class="home_content">
      <div class="head">
        <div class="buttom">
          <a href="/resource/template.xlsx" target="模板.xlsx">下载模板</a>
        </div>
        <div class="buttom" @click="importExcel">导入表格</div>
      </div>
      <div class="content">
        <SingleForm></SingleForm>
      </div>
      <div class="footer">
        <div class="buttom" @click="ExportExcel">导出</div>
      </div>
    </div>
  </div>
</template>

<script>

import SingleForm from "@/components/SingleForm.vue";
export default {
  name: "single",
  components: {
    SingleForm
  },
  methods: {
    //导入表格
    importExcel() {
      console.log("导入表格！");
    },
    //导出表格
    ExportExcel() {
      console.log("导出表格！");
    }
  }
};
</script>
<style lang="scss" scoped>
// $head:70px;
.buttom {
  cursor: pointer;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  margin: 0 20px;
  background-color: #fefefe;
  border: 1px solid #eeeeee;
  transition: all 1s linear;
  a {
    color: #333;
    text-decoration: none;
  }
}
.buttom:hover {
  background-color: rgba($color: #409eff, $alpha: 0.8);
  color: #f1f1f1;
  a:hover {
    color: #f1f1f1;
  }
}
.single {
  width: 100%;
  height: 100%;
  .home_content {
    height: 100%;
    .head {
      height: 40px;
      padding: 10px 0;
      display: flex;
      justify-content: flex-end;
    }

    .content {
      height: calc(100% - 140px);
    }

    .footer {
      height: 40px;
      margin: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
