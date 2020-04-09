<template>
  <div class="more">
    <!-- <div class="head">
       <div class="buttom ">导入表格</div> 
    </div> -->
    <div class="content">
      <MoreForm :list="allExcelData"></MoreForm>
    </div>
    <div class="footer">
      <div class="buttom">导出</div>
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
  },
  data() {
    return {
      allExcelData: [
        {
          formName: "表一",
          formList: [
            {
              type: "劳动组",
              name: "lili",
              date: "2019/5/6",
              address: "苏州市苏州工业园区星湖街188号"
            },
            {
              type: "劳动组1",
              name: "Nancy",
              date: "2019/5/11",
              address: "苏州市苏州工业园区星湖街188号"
            },
            {
              type: "劳动组2",
              name: "Jack",
              date: "2019/5/16",
              address: "苏州市苏州工业园区星湖街188号"
            },
            {
              type: "劳动组3",
              name: "Rose",
              date: "2019/5/12",
              address: "苏州市苏州工业园区星湖街188号"
            }
          ]
        },
        {
          formName: "表二",
          formList: [
            {
              type: "劳动组4",
              name: "lili",
              date: "2019/5/6",
              address: "苏州市苏州工业园区星湖街188号"
            },
            {
              type: "劳动组5",
              name: "Nancy",
              date: "2019/5/11",
              address: "苏州市苏州工业园区星湖街188号"
            },
            {
              type: "劳动组6",
              name: "Jack",
              date: "2019/5/16",
              address: "苏州市苏州工业园区星湖街188号"
            },
            {
              type: "劳动组7",
              name: "Rose",
              date: "2019/5/12",
              address: "苏州市苏州工业园区星湖街188号"
            }
          ]
        }
      ] //接收excel数据
    };
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
.more {
  width: 100%;
  height: 100%;
  .head {
    height: 40px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
  }

  .content {
    height: calc(100% - 140px);
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
  }

  .footer {
    height: 40px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
