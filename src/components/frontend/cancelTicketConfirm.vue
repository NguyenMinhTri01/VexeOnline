<template>
  <div class="modal fade" id="cancelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Sẵn sàng hủy vé?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Bạn có chắc chắn muốn hủy vé này không?</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Không</button>
          <button class="btn btn-primary" type="button" data-dismiss="modal" @click="confirmCancel">Vẫn Hủy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirmCancel() {
      this.$emit("eventConfirmCancel")
    }
  }
};
</script>

<style>

</style>