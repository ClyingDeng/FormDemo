<template>
  <div class="variety">
    <div class="content">
      <div class="table">
        <p>基础表格</p>
        <variety-form :tHeads="tHeads" :tableData="tableData"></variety-form>
      </div>
      <div class="table">
        <p>带状态表格</p>
        <variety-form
          :tHeads="tHeads"
          :tableData="tableData"
          :tableRowClassName="tableRowClassName"
        ></variety-form>
      </div>
      <div class="table">
        <p>固定表头</p>
        <variety-form :tHeads="tHeads" :tableData="tableData" :height="height"></variety-form>
      </div>
      <div class="table">
        <p>固定列 + 排序</p>
        <variety-form :tHeads="tHeads1" :tableData="tableData1"></variety-form>
      </div>
      <div class="table">
        <p>不同数据标签表格</p>
        <variety-form :tHeads="tHeads2" :tableData="tableData2"></variety-form>
      </div>
      <div class="table">
        <p>自定义操作列体</p>
        <variety-form :tHeads="tHeads3" :tableData="tableData3">
          <template v-slot:operate="{ scope }">
            <el-button @click="handleEdit(scope.$index, scope.row)">
              编辑
            </el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </variety-form>
      </div>
      <div class="table">
        <p>自定义表头表体</p>
        <variety-form :tHeads="tHeads4" :tableData="tableData3">
          <template v-slot:customizeHeader>
            自定义头部（搜索、按钮、文本均可）
          </template>
          <template v-slot:customizeBody="{ customizeBody }">
            自定义体:{{ customizeBody.row.address }}
          </template>
        </variety-form>
      </div>
      <div class="table">
        <p>选择行</p>
        <variety-form
          ref="multiple"
          :refs="refs"
          :tHeads="tHeads5"
          :tableData="tableData3"
        ></variety-form>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">
            切换第二、第三行的选中状态
          </el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
      <div class="table">
        <p>多级表头</p>
        <variety-form :refs="refs" :tHeads="tHeads6" :tableData="tableData4"></variety-form>
      </div>
      <div class="table">
        <p>表尾合计行</p>
        <variety-form
          :tHeads="tHeads7"
          :tableData="tableData5"
          :summaryMethod="getSummaries"
          showSummary
          :height="height"
        ></variety-form>
      </div>
    </div>
  </div>
</template>

<script>
import VarietyForm from '@/components/VarietyForm'
export default {
  name: 'variety',
  components: {
    VarietyForm,
  },
  data() {
    return {
      tHeads: [
        {
          label: '日期',
          props: 'date',
          width: '200',
          sortable: false,
          align: 'center',
        },
        {
          label: '姓名',
          props: 'name',
          width: '200',
          sortable: false,
          align: 'center',
        },
        {
          label: '年龄',
          props: 'age',
          width: '200',
          sortable: false,
          align: 'left',
        },
        {
          label: '地址',
          props: 'address',
          width: '400',
          sortable: false,
          align: 'left',
        },
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          age: 22,
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-04-04',
          name: '王小虎',
          age: 12,
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-06',
          name: '王小二',
          age: 14,
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          age: 42,
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2017-05-06',
          name: '王小二',
          age: 19,
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2019-05-03',
          name: '王小虎',
          age: 37,
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      headerStyle: { backgroundColor: '#ccc', color: '#333' },
      tableRowClassName({ rowIndex }) {
        // 函数
        if (rowIndex % 3 === 1) {
          return 'warning-row'
        } else if (rowIndex % 3 === 2) {
          return 'success-row'
        }
        return ''
      },
      height: '250',
      refs: 'multipleTable',
      tHeads1: [
        {
          label: '姓名',
          props: 'name',
          width: '200',
          sortable: false,
          align: 'center',
          fixed: true,
        },
        {
          label: '年龄',
          props: 'age',
          width: '400',
          sortable: true,
          align: 'left',
          fixed: false,
        },
        {
          label: '日期',
          props: 'date',
          width: '400',
          sortable: false,
          align: 'center',
          fixed: false,
        },
        {
          label: '地址',
          props: 'address',
          width: '700',
          sortable: false,
          align: 'left',
          fixed: false,
        },
      ],
      tableData1: [
        {
          date: '2016-05-02',
          name: '王小虎',
          age: 22,
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-04-04',
          name: '王小虎',
          age: 12,
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-06',
          name: '王小二',
          age: 14,
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          age: 42,
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tHeads2: [
        {
          label: '日期',
          props: 'date',
          width: '200',
          sortable: false,
          align: 'center',
          className: 'stripa', // 列样式
        },
        {
          label: '姓名',
          props: 'name',
          width: '100',
          sortable: false,
          align: 'center',
        },
        {
          label: '年龄',
          props: 'age',
          width: '100',
          sortable: false,
          align: 'left',
          className: 'stripb',
        },
        {
          label: '地址',
          props: 'address',
          width: '400',
          sortable: false,
          align: 'left',
        },
        {
          label: '标签',
          props: 'tagName',
          width: '200',
          sortable: false,
          align: 'center',
        },
      ],
      tableData2: [
        {
          date: '2016-05-02',
          name: '王小虎',
          age: 22,
          address: '上海市普陀区金沙江路 1518 弄',
          tagColor: 'danger',
          tagName: '极差',
        },
        {
          date: '2016-04-04',
          name: '王小虎',
          age: 12,
          address: '上海市普陀区金沙江路 1517 弄',
          tagColor: 'warning',
          tagName: '及格',
        },
        {
          date: '2016-05-06',
          name: '王小二',
          age: 14,
          address: '上海市普陀区金沙江路 1519 弄',
          tagColor: 'success',
          tagName: '优秀',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          age: 42,
          address: '上海市普陀区金沙江路 1516 弄',
          tagColor: 'primary',
          tagName: '良好',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          age: 42,
          address: '上海市普陀区金沙江路 1516 弄',
          tagColor: 'info',
          tagName: '一般',
        },
      ],
      tHeads3: [
        {
          label: '日期',
          props: 'date',
          width: '200',
          sortable: false,
          align: 'center',
        },
        {
          label: '姓名',
          props: 'name',
          width: '100',
          sortable: false,
          align: 'center',
        },
        {
          label: '年龄',
          props: 'age',
          width: '100',
          sortable: false,
          align: 'left',
        },
        {
          label: '地址',
          props: 'address',
          width: '400',
          sortable: false,
          align: 'left',
        },
        {
          label: '标签',
          props: 'tagName',
          width: '100',
          sortable: false,
          align: 'center',
        },
        {
          label: '操作',
          props: 'operate',
          width: '100',
          sortable: false,
          align: 'center',
        },
      ],
      tableData3: [
        {
          date: '2016-05-02',
          name: '王小虎',
          age: 22,
          address: '上海市普陀区金沙江路 1518 弄',
          tagColor: 'danger',
          tagName: '极差',
        },
        {
          date: '2016-04-04',
          name: '王小虎',
          age: 12,
          address: '上海市普陀区金沙江路 1517 弄',
          tagColor: 'warning',
          tagName: '及格',
        },
        {
          date: '2016-05-06',
          name: '王小二',
          age: 14,
          address: '上海市普陀区金沙江路 1519 弄',
          tagColor: 'success',
          tagName: '优秀',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          age: 42,
          address: '上海市普陀区金沙江路 1516 弄',
          tagColor: 'primary',
          tagName: '良好',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          age: 42,
          address: '上海市普陀区金沙江路 1516 弄',
          tagColor: 'info',
          tagName: '一般',
        },
      ],
      tHeads4: [
        {
          label: '日期',
          props: 'date',
          width: '200',
          sortable: false,
          align: 'center',
          className: 'stripa', // 列样式
        },
        {
          label: '姓名',
          props: 'name',
          width: '100',
          sortable: false,
          align: 'center',
        },
        {
          label: '年龄',
          props: 'age',
          width: '100',
          sortable: false,
          align: 'left',
          className: 'stripb',
        },
        {
          label: '自定义',
          props: 'customize',
          width: '400',
          sortable: false,
          align: 'center',
        },
      ],
      tHeads5: [
        { type: 'selection' },
        {
          label: '日期',
          props: 'date',
          width: '200',
          sortable: false,
          align: 'center',
          className: 'stripa', // 列样式
        },
        {
          label: '姓名',
          props: 'name',
          width: '100',
          sortable: false,
          align: 'center',
        },
        {
          label: '年龄',
          props: 'age',
          width: '100',
          sortable: false,
          align: 'left',
          className: 'stripb',
        },
        {
          label: '自定义',
          props: 'customize',
          width: '400',
          sortable: false,
          align: 'center',
        },
      ],
      tHeads6: [
        {
          label: '日期',
          props: 'date',
          width: '200',
          sortable: false,
          align: 'center',
        },
        {
          label: '配送信息',
          //  props: 'msg',
          children: [
            {
              label: '姓名',
              props: 'name',
              width: '200',
              sortable: false,
              align: 'center',
            },
            {
              label: '地址',
              sortable: false,
              align: 'left',
              children: [
                {
                  label: '省份',
                  props: 'province',
                  width: '150',
                },
                {
                  label: '市区',
                  props: 'city',
                  width: '200',
                },
                {
                  label: '详细地址',
                  props: 'address',
                  width: '300',
                },
              ],
            },
          ],
        },
      ],
      tableData4: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
      tHeads7: [
        {
          label: 'ID',
          props: 'id',
          width: '200',
          sortable: false,
          align: 'center',
        },
        {
          label: '姓名',
          props: 'name',
          width: '200',
          sortable: false,
          align: 'center',
        },
        {
          label: '数值1',
          props: 'amount1',
          width: '200',
          sortable: false,
          align: 'left',
        },
        {
          label: '数值2',
          props: 'amount2',
          width: '200',
          sortable: false,
          align: 'center',
        },
        {
          label: '数值3',
          props: 'amount3',
          width: '200',
          sortable: false,
          align: 'center',
        },
      ],
      tableData5: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    toggleSelection(rows) {
      console.log(rows)
      let ref = this.$refs['multiple'].$refs
      if (rows) {
        rows.forEach(row => {
          console.log(this.$refs['multiple'].$refs)
          ref.multipleTable.toggleRowSelection(row)
        })
      } else {
        ref.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    },
  },
}
</script>
<style lang="scss" scoped>
.variety {
  .content {
    width: 1000px;
    margin: 0 auto;
  }
  .table {
    margin-top: 20px;
  }
}
</style>
