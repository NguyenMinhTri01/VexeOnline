<template>
    <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Cập Nhập Tuyến Đường</h1>
        <form @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-8">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tên Tuyến Đường</label>
                                <input v-model="name" type="text" class="form-control" name="name" autocomplete="off" @blur="$v.name.$touch()">
                                <p v-if="$v.name.$dirty && !$v.name.required" class="alert-danger mt-2">Tên không được để trống !</p>
                                <p v-if="$v.name.$dirty && (!$v.name.minLength || !$v.name.maxLength)" class="alert-danger mt-2">Độ dài tên phải từ 3 đến 255 ký tự !</p>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Địa chỉ</label>
                                <div class="row">
                                  <div class="col-sm-6">
                                    <select v-model="fromStation" class="form-control" @blur="$v.fromStation.$touch()">
                                      <option disabled value="0" >Chọn Điểm Xuất Phát</option>
                                      <option v-for="(value, key) in stations" :key="key" v-bind:value="value._id">{{value.name}}</option>
                                    </select>
                                    <p v-if="$v.fromStation.$dirty && !$v.fromStation.isValid" class="alert-danger mt-2">Bạn chưa chọn điểm xuất phát!</p>
                                  </div>    
                                  <div class="col-sm-6">
                                    <select v-model="toStation" class="form-control" @blur="$v.toStation.$touch()">
                                      <option disabled value="0" >Chọn Điểm Kết Thúc</option>
                                      <option v-for="(value, key) in stations" :key="key" v-bind:value="value._id">{{value.name}}</option>
                                    </select>
                                    <p v-if="$v.toStation.$dirty && !$v.toStation.isValid" class="alert-danger mt-2">Bạn chưa chọn điểm kết thúc!</p>
                                  </div>                                                             
                              </div>
                            </div>                            
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Chính Sách</label>
                                <ckeditor name="policy" :editor="editor" v-model="policy" :config="editorConfig" @blur="$v.policy.$touch()"></ckeditor>
                                <p v-if="$v.policy.$dirty && !$v.policy.required" class="alert-danger mt-2">Chính sách không được để trống !</p>
                            </div>     
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Thời Gian</label>
                                <input v-model="time" type="number" class="form-control" name="time" autocomplete="off" @blur="$v.time.$touch()">
                                <p v-if="$v.time.$dirty && !$v.time.required" class="alert-danger mt-2">Thời gian không được để trống !</p>
                            </div>       
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tiêu đề SEO</label>
                                <input v-model="titleSeo" type="text" class="form-control" autocomplete="off" @blur="$v.titleSeo.$touch()">
                                <p v-if="$v.titleSeo.$dirty && !$v.titleSeo.required" class="alert-danger mt-2">Tiêu đề SEO không được để trống !</p>
                                <p v-if="$v.titleSeo.$dirty && (!$v.titleSeo.minLength || !$v.titleSeo.maxLength)" class="alert-danger mt-2">Độ dài phải từ 3 đến 65 ký tự !</p>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Mô tả SEO</label>
                                <textarea v-model="descriptionSeo" class="form-control" cols="5" rows="2" autocomplete="off" @blur="$v.descriptionSeo.$touch()"></textarea>
                                <p v-if="$v.descriptionSeo.$dirty && !$v.descriptionSeo.required" class="alert-danger mt-2">Mô tả SEO không được để trống !</p>
                                <p v-if="$v.descriptionSeo.$dirty && (!$v.descriptionSeo.minLength || !$v.descriptionSeo.maxLength)" class="alert-danger mt-2">Độ dài phải từ 3 đến 255 ký tự !</p>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Từ khóa SEO</label>
                                <textarea v-model="keywordSeo" class="form-control" cols="5" rows="2" autocomplete="off" @blur="$v.keywordSeo.$touch()"></textarea>
                                <p v-if="$v.keywordSeo.$dirty && !$v.keywordSeo.required" class="alert-danger mt-2">Từ khóa SEO không được để trống !</p>
                                <p v-if="$v.keywordSeo.$dirty && (!$v.keywordSeo.minLength || !$v.keywordSeo.maxLength)" class="alert-danger mt-2">Độ dài phải từ 3 đến 255 ký tự !</p>                                
                            </div>   
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 ">
                    <div class="card shadow mb-4">
                        <div class="card-footer text-center">
                            <router-link to="/admin/routes" type="button" class="btn btn-sm btn-warning btn-icon-split">
                              <span class="icon text-white-50">
                                <i class="fas fa-exclamation-triangle"></i>
                              </span>
                              <span class="text">Hủy Bỏ</span>                              
                            </router-link>&nbsp;
                            
                            <button type="submit" class="btn btn-sm btn-primary btn-icon-split">
                              <span class="icon text-white-50">
                                <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                                <i v-else class="fa fa-save"></i>
                              </span>
                              <span class="text">Cập Nhập</span>
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
    export default {
        name: 'app',
        data() {
            return {
              editor: ClassicEditor,
              editorConfig: {
                  // The configuration of the editor.
              },
              fromStation:"0",
              toStation:"0",
              policy : '',
              time : '',
              name: '',
              titleSeo:"",
              descriptionSeo:"",
              keywordSeo:"",
              count : 0,
            };
        },
        beforeCreate() {
            //this.$store.dispatch("fetchListStations");
            this.$store.dispatch("fetchDetailRoute", this.$route.params.id);
        },
        validations : {
          name : {
            required,
            minLength : minLength(3),
            maxLength : maxLength(255),
          },
          policy : {
            required
          },
          time : {
            required
          },
          fromStation : {
            isValid : not(value =>  value === '0')
          },
          toStation : {
            isValid : not(value =>  value === '0')
          },
          titleSeo : {
                required,
                minLength : minLength(3),
                maxLength : maxLength(65),
            },
          descriptionSeo : {
              required,
                minLength : minLength(3),
                maxLength : maxLength(255),
          },
          keywordSeo : {
                required,
                minLength : minLength(3),
                maxLength : maxLength(255),
          }
        },
        watch : {
          route(value) {
              if(value){
                this.name = value.name;
                this.fromStation = value.fromStationId;
                this.toStation = value.toStationId;
                this.policy = value.policy;
                this.time = value.time;
                this.titleSeo = value.titleSeo;
                this.descriptionSeo = value.descriptionSeo;
                this.keywordSeo = value.keywordSeo;
                if (this.count === 1){
                    this.$toast.success('Cập nhập tuyến đường thành công', {
                        position : 'bottom-right'
                    })
                }
              }
          }
        },
        computed : {
          loading() {
            return this.$store.state.routes.loading;
          },
          route() {
            return this.$store.state.routes.route
          },
          stations(){
              return this.$store.state.routes.station
          }
        },
        methods: {
            handleSubmit(event) {
              if (this.$v.$anyDirty && !this.$v.$anyError){
                const formData = {
                  name: this.name,
                  fromStationId: this.fromStation,
                  toStationId: this.toStation,
                  policy: this.policy,
                  time: this.time,
                  titleSeo: this.titleSeo,
                  descriptionSeo: this.descriptionSeo,
                  keywordSeo: this.keywordSeo
                };
                this.count = 1
                this.$store.dispatch("fetchEditRoute", {
                    _id: this.$route.params.id,
                    route: formData
                });
                event.target.reset()
              }
            },
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

</style>