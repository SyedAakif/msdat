<template>
  <div style="display: block;">
    <table class="table">
      <thead>
        <tr style="wid">
          <th>Indicators</th>
          <th>Data Source</th>
        </tr>
      </thead>
      <tbody>
        <tr style="display: table; border-bottom: 1px solid gray">
          <td  v-for="ind in indicator" :key="ind">
            {{ ind }}
          </td>
          <td v-for="data in dataSource" :key="data">{{ data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["indicator", "dataSource"],
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
