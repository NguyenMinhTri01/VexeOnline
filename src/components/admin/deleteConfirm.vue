<template>
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Delete?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Bạn có chắc chắn xóa không?</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Hủy</button>
          <button class="btn btn-primary" type="button" data-dismiss="modal" @click="handleDeleteItem">Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id","deleteFetch"],

  methods: {
    handleDeleteItem() {
      //console.log("fetchDelete"+this.deleteFetch)
      //this.$refs.cancle.click();
      this.$store.dispatch("fetchDelete"+this.deleteFetch, this.id);
    }
  }
};
</script>

<style>

</style>