<template>
  <div class="form-search-ticket">
    <form @submit.prevent="handleSubmit" class="form-group">
      <h5 class="text-ticket mb-3">Nhập Thông Tin Vé</h5>
      <input v-model="code" type="text" class="form-control mb-3" placeholder="Mã Vé" />
      <input v-model="phone" type="text" class="form-control mb-3" placeholder="SDT" />
      <button class="btn-check-ticket form-control" type="submit">Kiểm tra vé</button>

    </form>
    <div class="div-note">
      <p class="note-title">
        Lưu ý:
      </p>
      <p class="note-content">
        <span>Trường hợp bạn không thể hủy vé qua mạng hoặc muốn đổi sang vé khác vui lòng liên hệ VeXe Online qua số điện thoại 0123 456 789.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code : 'VmCwMT',
      phone : '0387282390'
    }
  },

  methods : {
    handleSubmit () {
      if (this.code && this.phone){
        const input = {
          code : this.code,
          phone : this.phone
        }
        this.$store.dispatch("fetchDetailTicketByCode",input);
      }
    }
  }
};
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ccc;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #ccc;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #ccc;
}

.form-search-ticket {
  margin: 20px 0 10px 0;
}
.text-ticket {
  color: #3f84b1;
  font-weight: bold;
}
.form-control {
  font-size: 0.85rem;
  color: #555;
}
.form-control:focus {
  border-color: #3f84b1;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.btn-check-ticket {
  background-color: #3f84b1;
  color: white;
  font-weight: bold;
}
.btn-check-ticket:hover {
  background-color: #4295cc;
}
.div-note {
  background: #f5f4f4;
  padding: 15px;
  margin-top: 30px;
  box-sizing: border-box;
  cursor: default;

}
.note-title {
  margin: 0 0 10px;
  text-decoration: inherit;
  vertical-align: inherit;
}
.note-content {
  font-size: 0.85rem;
}
</style>