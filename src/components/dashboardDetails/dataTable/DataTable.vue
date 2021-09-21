<template>
  <div>
    <table class="" style="width: 1000px; margin-bottom: 300px">
      <thead>
        <tr style="">
          <th>Indicators</th>
          <th>Data Source</th>
          <th>Levels</th>
          <th>Years</th>
        </tr>
      </thead>
      <tbody v-for="ind in indicator" :key="ind">
        <tr style="">
          <td
            colspan="4"
            style="background-color: #cee4e9; padding: 4px; font-size: 10px;
    font-weight: bold;"
          >
            {{ ind.parent }}
          </td>
        </tr>
        <tr style="" v-for="child in ind.childs" :key="child.id">
          <td style="border-bottom: 1px solid gray">
            {{ child.value }}
          </td>
          <td style="border-bottom: 1px solid gray">
            <div v-for="data in dataSource" :key="data">{{ data }}</div>
          </td>
          <td style="border-bottom: 1px solid gray">
            <div>{{ child.levelObj.data_level }}</div>
          </td>
          <td
            v-for="year in child.years.years"
            :key="year"
            style="border-bottom: 1px solid gray; display: inline-block"
          >
            <div>
              <div>{{ year }}</div>
            </div>
          </td>
        </tr>
        <tr style=""></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["indicator", "dataSource"],

  // data() {
  //   return {
  //     levelData: [],
  //   };
  // },
  //     computed: {
  //       indicatorsLevels(){
  //           return this.levelData.filter()
  //       }

  //     },
  // //   watch: {
  // //     abc() {
  // //       if (this.levelData) {
  // //         const data = this.$store.getters["indicators/indicatorsLevels"];
  // //         ('asd');
  // //       }
  // //     },
  // //   },
  //   mounted() {
  //     this.levelsManagement()
  //   },
  //   methods: {
  //     levelsManagement() {
  //       this.levelData = this.$store.getters["indicators/indicatorsLevels"];
  //     },
  //   },
};
</script>

<style scoped>
</style>
