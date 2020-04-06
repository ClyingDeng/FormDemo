<template>
  <div class="more">
    <div class="head">
      <div class="buttom download">下载模板</div>
      <div class="buttom import">导入表格</div>
    </div>
    <div class="content">
      <MoreForm></MoreForm>
    </div>
    <div class="footer">
      <div class="bottom">导出</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MoreForm from "@/components/MoreForm.vue";

export default {
  name: "more",
  components: {
    MoreForm
  }
};
</script>
