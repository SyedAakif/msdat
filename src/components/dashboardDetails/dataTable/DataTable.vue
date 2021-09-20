<template>
  <div style="display: block;">
    <table class="table">
      <thead>
        <tr style="width: 150px; display: flex; justify-content: space-between">
          <th>Indicators</th>
          <th >Data Source</th>
        </tr>
      </thead>
      <tbody>
        <tr style="display: table; ">
          <td style="display: block" v-for="ind in indicator" :key="ind">
            <th style="background-color: #CEE4E9; padding-right: 86px;">{{ind.parent}}</th>
            <tr style="border-bottom: 1px solid gray" v-for="child in ind.child" :key="child">{{child}}
            </tr>
          </td>
          </tr>
          <td>
          <div style="display: block " v-for="data in dataSource" :key="data">{{ data }}</div>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["indicator", "dataSource"],

  data() {
    return {
      DataforTable: [],
    };
  },

};
</script>

<style scoped>
table td {
  width: 15px;
}
.table {
  margin: auto;
  padding: 10px;
  top: 80px;
  border: 1px solid gray;
}
</style>
