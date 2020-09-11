<template>
    <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Sửa Chuyến Đi</h1>
        <form v-if="!loading" @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-8">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tuyến đường</label>
                                <select v-model="route" class="form-control" @blur="$v.route.$touch()">
                                    <option disabled value="0" >Chọn Tuyến Đường</option>
                                    <option v-for="(value, key) in routes" :key="key" v-bind:value="value._id">{{value.name}}</option>
                                </select>
                                <p v-if="$v.route.$dirty && !$v.route.isValid" class="alert-danger mt-2">Bạn chưa chọn tuyến đường!</p>
                            </div>   
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Thời gian xuất phát</label>
                                <div class="row">
                                  <div class="col-sm-3">
                                    <select v-model="hours" class="form-control" @blur="$v.hours.$touch()">
                                      <option value="-1" disabled>Giờ</option>
                                      <option v-for="n in 24" :key="n" :value="n - 1">{{n - 1}} Giờ</option>
                                    </select>
                                    <p v-if="$v.hours.$dirty && !$v.hours.isValid" class="alert-danger mt-2">Bạn chưa chọn giờ!</p>

                                  </div>
                                  <div class="col-sm-3">
                                    <select v-model="minute" class="form-control" @blur="$v.minute.$touch()">
                                      <option value="-1" disabled>Phút</option>
                                      <option v-for="n in 60" :key="n" :value="n - 1">{{n - 1}} Phút</option>
                                    </select>
                                    <p v-if="$v.minute.$dirty && !$v.minute.isValid" class="alert-danger mt-2">Bạn chưa chọn Phút!</p>
                                  </div>
                                  <div class="col-sm-6">
                                    <date-picker 
                                      :input-class="`form-control`"  
                                      :lang="lang"
                                      :placeholder="`Chọn Ngày`"
                                      :editable="false"
                                      v-model="date" 
                                      valueType="format"
                                      @blur="$v.date.$touch()"
                                      >
                                    </date-picker>
                                    <p v-if="$v.date.$dirty && !$v.date.required" class="alert-danger mt-2">Bạn chưa chọn ngày!</p>                                    
                                  </div>
                                </div>

                            </div> 
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Ghi chú</label>
                                <ckeditor name="note" :editor="editor" v-model="note" :config="editorConfig" @blur="$v.note.$touch()"></ckeditor>
                                <p v-if="$v.note.$dirty && !$v.note.required" class="alert-danger mt-2">Nội dung không được để trống !</p>
                                <p v-if="$v.note.$dirty && (!$v.note.minLength || !$v.note.maxLength)" class="alert-danger mt-2">Độ dài ghi chú phải từ 3 đến 255 ký tự !</p>
                            </div>                  
                        </div>
                    </div>
                </div>
               <div class="col-sm-4">
                   <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Nhà xe</label>
                                <select v-model="garage" class="form-control" @blur="$v.garage.$touch()">
                                    <option disabled value="0" >Chọn Nhà Xe</option>
                                    <option v-for="(value, key) in garages" :key="key" v-bind:value="value._id">{{value.name}}</option>
                                </select>
                                <p v-if="$v.garage.$dirty && !$v.garage.isValid" class="alert-danger mt-2">Bạn chưa chọn nhà xe!</p>
                            </div> 
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Loại xe</label>
                                <select v-model="vehicle" class="form-control" @blur="$v.vehicle.$touch()">
                                    <option disabled value="0" >Chọn Loại Xe</option>
                                    <option v-for="(value, key) in vehicles" :key="key" v-bind:value="value._id">{{value.name}}</option>
                                </select>
                                <p v-if="$v.vehicle.$dirty && !$v.vehicle.isValid" class="alert-danger mt-2">Bạn chưa chọn loại xe!</p>
                            </div>                                                            
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Giá</label>
                                <input v-model="price" type="number" class="form-control" name="price" autocomplete="off" @blur="$v.price.$touch()">
                                <p v-if="$v.price.$dirty && !$v.price.required" class="alert-danger mt-2">Giá không được để trống !</p>
                            </div>
                        </div>
                   </div>
               </div>
                <div class="col-sm-12 ">
                    <div class="card shadow mb-4">
                        <div class="card-footer text-center">
                            <router-link to="/admin/trips" type="button" class="btn btn-sm btn-warning btn-icon-split">
                              <span class="icon text-white-50">
                                <i class="fas fa-exclamation-triangle"></i>
                              </span>
                              <span class="text">Hủy Bỏ</span>                              
                            </router-link>&nbsp;
                            <button type="submit" class="btn btn-sm btn-primary btn-icon-split">
                              <span class="icon text-white-50">
                                <i v-if="loadingEdit" class="fa fa-spinner fa-spin"></i>
                                <i v-else class="fa fa-save"></i>
                              </span>
                              <span class="text">Lưu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </form>
    </div>
</template>

<script>
import { required ,minLength, maxLength, not } from 'vuelidate/lib/validators';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/vi';
    export default {
        name: 'app',
        data() {
            return {
              editor: ClassicEditor,
              editorConfig: {
                // The configuration of the editor.
              },
              route: '0',
              garage : '0',
              vehicle : '0',
              note : '',
              price:"",
              date : "",
              hours : "-1",
              minute : "-1",
              startTime:"",
              lang: {
                formatLocale: {
                  firstDayOfWeek: 1,
                },
                monthBeforeYear: false,
              },
              count : 0,
              loadingEdit : false,
            };
        },
        created(){
            this.$store.dispatch("fetchDetailTrip", this.$route.params.id)
            this.$store.dispatch("fetchListRoutes");
            this.$store.dispatch("fetchListGarages");
            this.$store.dispatch("fetchListVehicles");
        },
        components : {
          DatePicker
        },
        validations : {
          note : {
            required,
            minLength : minLength(3),
            maxLength : maxLength(255),
          },
          route : {
            isValid : not(value =>  value === '0')
          },
          garage : {
            isValid : not(value =>  value === '0')
          },
          vehicle : {
            isValid : not(value =>  value === '0')
          },
          hours : {
            isValid : not(value =>  value === '-1')
          },
          minute : {
            isValid : not(value =>  value === '-1')
          },
          date : {
            required
          },
          price : {
            required,
          }
        },
        watch : {
          trip(value) {
            if (value ){
              this.route = value.routeId
              this.garage = value.garageId
              this.vehicle = value.vehicleId
              this.note = value.note
              this.price = value.price
              const startTime = new Date(value.startTime)
              const month = ((startTime.getMonth() + 1) > 9) ? (startTime.getMonth() + 1) : `0${startTime.getMonth() + 1}`
              const date = (startTime.getDate() > 9) ? startTime.getDate() : `0${startTime.getDate()}`
              this.date = `${startTime.getFullYear()}-${month}-${date}`
              this.hours = startTime.getHours()
              this.minute = startTime.getMinutes()
              if (this.count === 1) {
                this.loadingEdit = false,
                this.$toast.success('Sửa chuyến xe thành công', {
                position : 'bottom-right'
                })
              }
            }
          },
        },

        computed : {
          loading() {
            return this.$store.state.trip.loading;
          },
          trip() {
            return this.$store.state.trip.trip
          },
          routes(){
              return this.$store.state.routes.data
          },
          vehicles(){
              return this.$store.state.vehicle.data
          },
          garages(){
              return this.$store.state.garage.data
          }
        },

        methods: {
            handleSubmit(event) {
              if (this.$v.$anyDirty && !this.$v.$anyError){
                const arrDate = this.date.split("-");
                const startTime = new Date(arrDate[0] , arrDate[1] - 1, arrDate[2], this.hours, this.minute)
                const formData = {
                  id : this.$route.params.id,
                  garageId: this.garage,
                  routeId: this.route,
                  vehicleId: this.vehicle,
                  startTime,
                  price: this.price,
                  note: this.note
                };
                this.count = 1,
                this.loadingEdit = true,
                this.$store.dispatch("putTrip", formData);
                event.target.reset()
              }
            }
        }
    }
</script>

<style>
.image-preview {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 300px;
  max-width: 300px;
  min-width: 300px;
  height: 200px;
}

 img.image-preview:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

.mx-datepicker {
    position: relative;
    display: block;
    width: 100%;
}

</style>