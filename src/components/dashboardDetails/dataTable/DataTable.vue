<template>
  <div style="display: block;">
    <table class="table">
      <thead>
        <tr style="wid">
          <th>Indicators</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="display: table; border-bottom: 1px solid gray" v-for="ind in indicator" :key="ind">{{ ind }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props: ['indicator']
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