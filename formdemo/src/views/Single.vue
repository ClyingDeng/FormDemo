<template>
  <div class="single">
    <div class="home_content">
      <div class="head">
        <div class="buttom">
          <a href="/resource/template.xlsx" target="模板.xlsx">下载模板</a>
        </div>
        <input
          class="input-file"
          type="file"
          @change="exportData"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
        <div class="buttom" @click="importExcel">导入表格</div>
      </div>
      <div class="content">
        <SingleForm :list="allExcelData"></SingleForm>
      </div>
      <div class="footer">
        <div class="buttom" @click="ExportExcel">导出</div>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx";
import SingleForm from "@/components/SingleForm.vue";
export default {
  name: "single",
  components: {
    SingleForm
  },
  data() {
    return {
      allExcelData: [], //接收excel数据
      fileName: "" //上传的文件名
    };
  },
  methods: {
    //导入表格
    importExcel() {
      document.querySelector(".input-file").click();
      console.log("导入表格！");
    },
    exportData(event) {
      if (!event.currentTarget.files.length) {
        return;
      }
      const that = this;
      that.allExcelData = [];
      // 拿取文件对象
      let f = event.currentTarget.files[0];
      this.fileName = f.name;
      console.log("上传的文件名", this.fileName);
      //这里已经拿到了excel的file文件，若是项目需求，可直接$emit丢出文件
      that.$emit("getMyExcelData", f);
      // 用FileReader来读取
      let reader = new FileReader();
      // 重写FileReader上的readAsBinaryString方法
      FileReader.prototype.readAsBinaryString = function(f) {
        let binary = "";
        let wb; // 读取完成的数据
        let outdata; // 你需要的数据
        let reader = new FileReader();
        reader.onload = function() {
          // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
          let bytes = new Uint8Array(reader.result);
          let length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          // 接下来就是xlsx
          wb = XLSX.read(binary, {
            type: "binary"
          });
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
          // 导出格式为json，{表头：[]，表数据：[]}
          // that.$emit("getResult", outdata);
          // that.allExcelData = outdata;
          //处理数据
          console.log('outdata',outdata);
          that.allExcelData = that.handleData(outdata);
        };
        reader.readAsArrayBuffer(f);
      };
      reader.readAsBinaryString(f);
    },
    handleData(data) {
      for (let item in data) {
        for (let key in data[item]) {
          console.log(key);
          if (key == "类型") {
            data[item]["type"] = data[item][key];
          } else if (key == "日期") {
            data[item]["date"] = data[item][key];
          } else if (key == "姓名") {
            data[item]["name"] = data[item][key];
          } else if (key == "地址") {
            data[item]["address"] = data[item][key];
          }
        }
      }
      return data;
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
      .input-file {
        display: none;
      }
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
