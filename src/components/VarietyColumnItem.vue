<template>
  <el-table-column
    v-if="child.children && child.children.length > 0"
    :fixed="child.fixed"
    :prop="child.props"
    :label="child.label"
    :width="child.width"
    :align="child.headerAlign"
    :sortable="child.sortable"
    :class-name="child.className"
    :type="child.type"
  >
    <variety-column-item
      v-for="childItem in child.children"
      :key="childItem.props"
      :child="childItem"
    ></variety-column-item>
  </el-table-column>
  <el-table-column
    v-else
    :fixed="child.fixed"
    :prop="child.props"
    :label="child.label"
    :width="child.width"
    :align="child.headerAlign"
    :sortable="child.sortable"
    :class-name="child.className"
    :type="child.type"
  ></el-table-column>
</template>
<script>
export default {
  name: 'varietyColumnItem',
  props: {
    child: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
