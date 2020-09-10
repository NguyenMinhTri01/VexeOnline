<template>
    <button class="seat btn" :class="{'active':statusClass,'seatBook':seat.TrangThai}" @click="handleSeatSelect" :disabled="seat.TrangThai">
        {{seat.SoGhe}}
    </button>
</template>

<script>


export default {
  props:[
    "seat",
    "unSeatSelect"
  ],
  data() {
    return {
      statusClass: false
    };
  },
  methods:{
    handleSeatSelect(){
      this.statusClass=!this.statusClass;
      const obj = {
        status: this.statusClass,
        seat: this.seat
      };
      this.$emit("eventOrder",obj)
    }
  },
  watch:{
    unSeatSelect(){
      if(this.unSeatSelect.SoGhe === this.seat.SoGhe){
        this.statusClass=false;
      }
    }
  }
};
</script>

<style>

.seat {
  margin: 3px;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  background: gray;
  border-radius: 5px;
  color: #fff;
}
.active {
  background: greenyellow;
}
.seatBook{
  background: red;
  cursor: no-drop;
}
</style>