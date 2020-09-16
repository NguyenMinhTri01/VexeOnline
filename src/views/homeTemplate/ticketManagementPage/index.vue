<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <FormSearchTicket />
      </div>
      <div class="col-sm-9">
        <ResultOfTicket />
      </div>
    </div>
  </div>
</template>

<script>
import FormSearchTicket from "./formSearchTicket";
import ResultOfTicket from "./resultOfTicket";
export default {
  components : {
    FormSearchTicket,
    ResultOfTicket
  }
}
</script>

<style>

</style>