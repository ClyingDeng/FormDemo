<template>
  <div class="rowspan">
    <div class="home_content">
      <div class="head"></div>
      <div class="content">
        <RowSpan></RowSpan>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RowSpan from "@/components/RowSpan.vue";

export default {
  name: "rowspan",
  components: {
    RowSpan
  },
  mounted() {
    // this.sum(0.7, 1, 2, 3, 4);
  },
  methods: {
    // sum(discount, ...goods) {
    //   let total = goods.reduce((a, b) => a + b);
    //   console.log(goods, total * discount);
    // }
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
}
.buttom:hover {
  background-color: rgba($color: #409eff, $alpha: 0.8);
  color: #f1f1f1;
}
.rowspan {
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
