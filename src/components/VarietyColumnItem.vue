<template>
  <template v-for="child in list">
    <el-table-column
      :key="item.props"
      :fixed="item.fixed"
      :prop="item.props"
      :label="item.label"
      :width="item.width"
      :align="item.headerAlign"
      :sortable="item.sortable"
      :class-name="item.className"
      :type="item.type"
    >
      <!-- <template v-if="child.children && child.children.length > 0">
        <variety-column-item :list="child.children"></variety-column-item>
      </template> -->
    </el-table-column>
  </template>
</template>
<script>
export default {
  name: 'varietyColumnItem',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
