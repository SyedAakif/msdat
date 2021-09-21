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
            style="display: block; font-size: 9px;"
            v-for="item in items.children"
            :key="item.id"
          >
            <input
              type="checkbox"
              name=""
              :id="item.value"
              :value="item.datasource"
              v-model="selecteddataSource"
              @click="selectSource($event)"
            />
            {{ item.datasource }}
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
import Card from "../Card.vue";
export default {
  emits: ['save-dataSource'],
  components: {
    Card,
  },
  data() {
    return {
      selectedDataSource: [],
    };
  },
  computed: {
    heading() {
      return this.$store.getters["indicators/getDataSource"];
    },
    dataSource() {
      return this.$store.getters["indicators/dataSource"];
    },
  },
  methods: {
    selectSource(e) {
      if(e.target.checked){
      this.selectedDataSource.push(e.target.value);
      }else{
        var indexOfItemToRemove = this.selectedDataSource.indexOf(e.target.value);
        if(indexOfItemToRemove !=-1){
          this.selectedDataSource.splice(indexOfItemToRemove,1);
        }
     
      }
      this.$emit('save-dataSource', this.selectedDataSource)
    },
  },
};
</script>

<style></style>
