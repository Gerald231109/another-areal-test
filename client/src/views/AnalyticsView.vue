<template>
  <div class="analytics">
    <nav-component></nav-component>
    <div class="analytics__body">
      <data-pickers-component></data-pickers-component>
      <analytics-component></analytics-component>
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent";
import AnalyticsComponent from "@/components/AnalyticsComponent";
import DataPickersComponent from "@/components/DataPickersComponent";
export default {
  name: "AnalyticsView",
  components: { DataPickersComponent, AnalyticsComponent, NavComponent },
};
</script>

<style scoped></style>
