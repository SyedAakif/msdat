<template>
  <h5 style="margin-top: 2px">Period Selection</h5>
  <!-- <p>Select availaible Years under each source.</p> -->
  <br>
  <Card>
    <table>
      <thead v-for="(year, index) in years" :key="index">
        <tr style="display: inline-block;">
          <td style=" font-size: 9px">
            <input
              type="checkbox"
              :id="index"
              :value="year"
              v-model="selectedYear"
              @click="selectYear($event)"
            />
            {{ year }}
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </Card>
</template>

<script>
import Card from "../Card.vue";
export default {
  emits: ["save-year"],
  components: {
    Card,
  },
  data() {
    return {
      selectedYear: [],
    };
  },
  computed: {
    years() {
      return this.$store.getters["indicators/indicatorsYear"];
    },
  },
  methods: {
    selectYear(e) {
      if (e.target.checked) {
        this.selectedYear.push(e.target.value);
      } else {
        var indexOfItemToRemove = this.selectedYear.indexOf(e.target.value);
        if (indexOfItemToRemove != -1) {
          this.selectedYear.splice(indexOfItemToRemove, 1);
        }
      }
      this.$emit("save-year", this.selectedYear);
    },
  },
};
</script>

<style></style>
