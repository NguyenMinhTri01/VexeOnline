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
  },
  data() {
    return {
     header: {
        title: "Quản lý vé - VeXe Online",
        description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online"
      }
    };
  },
  created() {
    this.$store.dispatch("setHeader", this.header);
  },
}
</script>

<style>

</style>