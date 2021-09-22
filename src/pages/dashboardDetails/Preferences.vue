<template>
  <section style="padding-left: 21px">
    <h5>Select your preferences.</h5>
    <p>
      Select the Program Areas, Data Sources, Period and Coverage Levels you are
      interested in.
    </p>
    <br />
  </section>
  <div class="main">
    <section class="selector-group">
      <h5>Indicators Selection</h5>
      <Card>
        <table>
          <thead v-for="items in heading" :key="items">
            <tr style="display: inline-block">
              <th
                style="background: #f3f3f3; width: 250px"
                @click="opennav(items.parent)"
              >
                {{ items.parent }}
              </th>

              <td
                style="display: block; font-size: 9px"
                v-for="item in items.children"
                :key="item.id"
              >
                <input
                  type="checkbox"
                  name=""
                  :id="item.id"
                  :value="item.short_name"
                  @click="selectIndicator($event, items.parent, item.id)"
                />
                {{ item.short_name }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </Card>
      <br />
      <br />
      <data-source @save-dataSource="saveData" />
        <years-selection @save-year="ClickedYear" />
        <level-selection @save-level="clickedLevel" />
    </section>
    <section style="padding: 5px">
      <data-table
        :indicator="selectedIndicator"
        :dataSource="selectedDataSource"
        :level="selectedLevel"
        :years="selectedYear"
      />
    </section>
  </div>
</template>

<script>
import Card from "../../components/Card.vue";
import DataSource from "../../components/dashboardDetails/DataSourceSelection.vue";
import LevelSelection from "../../components/dashboardDetails/LevelSelection.vue";
import YearsSelection from "../../components/dashboardDetails/YearsSelection.vue";
import DataTable from "../../components/dashboardDetails/dataTable/DataTable.vue";
export default {
  components: {
    Card,
    DataSource,
    DataTable,
    LevelSelection,
    YearsSelection,
  },
  data() {
    return {
      list: true,
      getRmnchList: [],
      selectedIndicator: [],
      selectedDataSource: [],
      selectedLevel: [],
      selectedYear: [],
      obj: {},
      showList: false,
    };
  },
  computed: {
    heading() {
      return this.$store.getters["indicators/getprogramArea"];
    },
    filteredIndicators() {
      return this.$store.getters["indicators/indicators"];
    },
  },

  created() {
    this.loadIndicators();

    this.loadDataSource();
  },

  methods: {
    loadIndicators() {
      this.$store.dispatch("indicators/loadIndicators");
    },

    loadDataSource() {
      this.$store.dispatch("indicators/loadDataSource");
    },
    opennav(value) {
      this.$store.dispatch("indicators/getByProgramAreaData", value);
      this.getRmnchList = this.$store.getters["indicators/getRmnchs"];
    },

    doesProgramAreaExist(programArea) {
      return this.filteredIndicators.filter(
        (x) => x.program_area === programArea
      );
    },
    selectIndicator(e, parentValue, childId) {
      this.$store.dispatch("indicators/loadCoverageLevels", childId);
      this.$store.dispatch("indicators/loadYears", childId);
      let parentObject = this.getParentEntity(parentValue);
      console.log(childId);
      if (e.target.checked) {
        let child = {
          value: e.target.value,
          id: childId,
        };
        if (parentObject) {
          parentObject.childs.push(child);
        } else if (!parentObject) {
          parentObject = { childs: [child], parent: parentValue };
          this.selectedIndicator.push(parentObject);
        }
      } else {
        this.selectedIndicator;
        parentObject.childs = parentObject.childs.filter(
          (child) => child.id != childId
        );
        if (parentObject.childs.length == 0) {
          this.selectedIndicator = this.selectedIndicator.filter(
            (ind) => ind.parent != parentObject.parent
          );
        }
      }
      ("selectedIndicator");
      this.selectedIndicator;
    },
    saveData(data) {
      this.selectedDataSource = data;
    },
    clickedLevel(data) {
      this.selectedLevel = data;
    },
    ClickedYear(data) {
      this.selectedYear = data;
    },
    getParentEntity(parentKey) {
      if (this.selectedIndicator.length > 0) {
        let filteredList = this.selectedIndicator.filter(
          (item) => item.parent === parentKey
        );
        if (filteredList && filteredList.length > 0) {
          return filteredList[0];
        }
      }
      return null;
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  border: 1px solid rgb(156, 154, 154);
  margin: -11px 15px 0 10px;
}
.selector-group {
  border-right: 1px solid rgb(156, 154, 154);
  margin-left: 5px;
  padding-right: 5px;
  width: 248px;
  position: relative;
}
.footer[data-v-d9ddb592] {
  width: 100%;
  height: 0 !important;
  background-color: #004a61;
  display: none !important;
  justify-content: right;
  align-items: right;
  position: fixed;
  bottom: 0;
}
</style>