<template>
    <h5 style="margin-top:2px">Data Source Selection</h5>
  <Card>
    <table>
      <thead v-for="items in heading" :key="items">
        <tr style="display: inline-block">
          <th style="background: #e2e2e2; width: 188px">
            {{ items.parent }}
          </th>
          <td
            style="display: block"
            v-for="item in items.children"
            :key="item.id"
          >
            <input type="checkbox" name="" :id="item.id" />
            <small>{{ item.datasource }}</small>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </Card>
</template>

<script>
import Card from '../Card.vue'
export default {
    components: {
    Card,
  },
  computed: {
      heading() {
      return this.$store.getters["indicators/getDataSource"];
    },
    dataSource() {
        return this.$store.getters["indicators/dataSource"]
    }
  }
}
</script>

<style>

</style>