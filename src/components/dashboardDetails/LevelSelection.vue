<template>
  <h5 style="margin-top: 2px">Level Selection</h5>
  <Card>
    <table>
      <thead v-for="(level, index) in levels" :key="index">
        <tr>
          <td style="display: inline; font-size: 9px">
            <input
              type="checkbox"
              :id="index"
              :value="level"
              v-model="selectedLocation"
              @click="selectLevel($event)"
            />
            {{ level }}
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
  emits: ["save-level"],
  components: {
    Card,
  },
  data() {
    return {
      selectedLocation: [],
    };
  },
  computed: {
    levels() {
      return this.$store.getters["indicators/indicatorsLevels"];
    },
  },
  methods: {
    selectLevel(e) {
      if (e.target.checked) {
        this.selectedLocation.push(e.target.value);
      } else {
        var indexOfItemToRemove = this.selectedLocation.indexOf(e.target.value);
        if (indexOfItemToRemove != -1) {
          this.selectedLocation.splice(indexOfItemToRemove, 1);
        }
      }
      this.$emit("save-level", this.selectedLocation);
    },
  },
};
</script>

<style></style>
