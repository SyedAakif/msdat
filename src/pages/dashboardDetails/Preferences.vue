<template>
  <div class="">
    <h5>Maternal and Immunization Tracker Dashboard</h5>
    <p>
      This dashboard is to track the state maternal health and immunization of
      under 5 children across national and subnational levels. This dashboard is
      owned by the Federal Body of Maternal and Child health, Nigeria.
    </p>
  </div>
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
                style="display: block"
                v-for="item in items.children"
                :key="item.id"
              >
                <input
                  type="checkbox"
                  name=""
                  :id="item.id"
                  :value="item.short_name"
                  @click="selectIndicator($event, items.parent,item.id)"
                />
                <small>{{ item.short_name }}</small>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </Card>
      <data-source @save-dataSource="saveData" />
    </section>
    <section>
      <data-table
        :indicator="selectedIndicator"
        :dataSource="selectedDataSource"
      />
    </section>
  </div>
</template>

<script>
import Card from "../../components/Card.vue";
import DataSource from "../../components/dashboardDetails/DataSourceSelection.vue";
import DataTable from "../../components/dashboardDetails/dataTable/DataTable.vue";
export default {
  components: {
    Card,
    DataSource,
    DataTable,
  },
  data() {
    return {
      list: true,
      getRmnchList: [],
      selectedIndicator: [],
      selectedDataSource: [],
      obj: {},
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

  // mounted() {
  //     this.indicatorsList()
  // },

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
      // console.log("Data ", this.getRmnchList);
    },

    doesProgramAreaExist(programArea) {
      return this.filteredIndicators.filter(
        (x) => x.program_area === programArea
      );
    },
    selectIndicator(e, parentValue,childId) {
      let parentObject = this.getParentEntity(parentValue);
      if (e.target.checked) {
        debugger;
            let child = {
            value:e.target.value,
            id:childId
          }
        if(parentObject){
      
          parentObject.childs.push(child);
        }else if(!parentObject){
          parentObject = { childs: [child], parent: parentValue };
          this.selectedIndicator.push(parentObject);
        
        }
        // if (this.selectedIndicator.length > 0) {
        //   this.selectedIndicator.map((x) => {
        //     if (x.parent == parentValue) {
        //       x.child.push(e.target.value);
        //     }
        //   });
        // } else { 
        //   this.obj = { child: [e.target.value], parent: parentValue };
        //   this.selectedIndicator.push(this.obj);
        // }

        // console.log(this.selectedIndicator);
      } else {
        debugger;
        console.log(this.selectedIndicator);
        parentObject.childs = parentObject.childs.filter(child=>child.id!=childId);
        if(parentObject.childs.length == 0){
          this.selectedIndicator = this.selectedIndicator.filter(ind=>ind.parent!=parentObject.parent)
        }
        // var indexOfItemToRemove = this.selectedIndicator
        //   .map((indicator) => indicator.child.map(i => i.value))
        //   .indexOf(e.target.value);
        // // var indexToRemove = indexOfItemToRemove.map(e => e.child ).indexOf(e.target.value);
        // if (indexOfItemToRemove != -1) {
        //   this.selectedIndicator.splice(indexOfItemToRemove, 1);
        // }
      }
    },
    saveData(data) {
      this.selectedDataSource = data;
    },
     getParentEntity(parentKey){
       debugger;
       if(this.selectedIndicator.length>0){
         let filteredList =  this.selectedIndicator.filter(item=>item.parent === parentKey);
         if(filteredList && filteredList.length>0){
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