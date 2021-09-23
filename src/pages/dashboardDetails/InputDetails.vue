<template>
  <div class="container">
    <h4>Welcome {{ userDetails }}</h4>
    <details-form @save-data="saveData">
      <h3>Select dashboard data</h3>
      <p>
        Go through our database and select the data that is relevent to your
        dashboard.
      </p>
      <p>
        Select your indicators, your preferred data source, the years and the
        coverage area(National or subnational).
      </p>
    </details-form>
  </div>
  <!-- <h2>Abc</h2>
  <p>{{ userDetails }}</p> -->
</template>

<script>
import DetailsForm from "../../components/dashboardDetails/DetailsForm.vue";
export default {
  components: {
    DetailsForm,
  },
  computed: {
    userDetails() {
      return this.$store.getters["user"];
    },
  },
  methods: {
    saveData(data) {
      this.$router.push("/prefrences");
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 36px;
}

</style>