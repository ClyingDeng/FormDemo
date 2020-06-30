<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/" exact>表格合并操作</router-link>
      </li>
      <li>
        <router-link to="/single" exact>单表格操作</router-link>
      </li>
      <li>
        <router-link to="/more" exact>多表格操作</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "headnav",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#nav {
  height: 100%;
  background-color: #409eff;
  text-align: center;
}
ul {
  margin: 0;
  list-style: none;
  line-height: 70px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #444444;
}
</style>
