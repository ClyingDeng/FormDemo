<template>
  <el-table-column
    :fixed="child.fixed"
    :prop="child.props"
    :label="child.label"
    :width="child.width"
    :align="child.headerAlign"
    :sortable="child.sortable"
    :class-name="child.className"
    :type="child.type"
  >
    <template v-if="child.children && child.children.length > 0">
      <variety-column-item
        v-for="childItem in child.children"
        :key="childItem.props"
        :child="childItem"
      ></variety-column-item>
    </template>
  </el-table-column>
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
