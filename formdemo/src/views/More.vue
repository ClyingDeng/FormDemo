<template>
  <div class="more">
    <!-- <div class="head">
       <div class="buttom ">导入表格</div> 
    </div>-->
    <div class="content">
      <MoreForm 0></MoreForm>
    </div>
    <div class="footer">
      <div class="buttom" @click="exportExcel">导出</div>
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    exportExcel() {
      console.log("导出");
      const list = [];
      let _this = this;
      this.allExcelData.forEach(item => {
        list.push({
          tHeader: ["类型", "姓名", "日期", "地址"],
          filterVal: ["type", "name", "date", "address"],
          tableDatas: item.formList,
          sheetName: item.formName
        });
      });
      // console.log(list);
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/vendor/Export2Excel2");
        //  ---require 括号里面是相对路径其实是引用  Export2Excel.js

        let tHeader = [];
        let dataArr = [];
        let sheetnames = [];
        for (var i in list) {
          tHeader.push(list[i].tHeader);
          dataArr.push(_this.formatJson(list[i].filterVal, list[i].tableDatas));
          sheetnames.push(list[i].sheetName);
        }

        export_json_to_excel({
          header: tHeader,
          data: dataArr,
          sheetname: sheetnames,
          filename: "派出所值班明细表" + this.getDay(0)
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    //获取哪天的日期，当天 day = 0;昨天 day = -1;明天 day = 1;
    getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate;
    },
    doHandleMonth(month) {
      var m = month;
      if (month.toString().length == 1) {
        m = "0" + month;
      }
      return m;
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
