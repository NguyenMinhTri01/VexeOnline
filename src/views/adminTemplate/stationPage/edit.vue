<template>
    <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Chỉnh Sửa Bến Xe</h1>
        <Loader v-if="loading"/>
        <form v-else @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-8">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tên Bến Xe</label>
                                <input v-model="name" type="text" class="form-control" name="name" autocomplete="off" @blur="$v.name.$touch()">
                                <p v-if="$v.name.$dirty && !$v.name.required" class="alert-danger mt-2">Tên không được để trống !</p>
                                <p v-if="$v.name.$dirty && (!$v.name.minLength || !$v.name.maxLength)" class="alert-danger mt-2">Độ dài tên phải từ 3 đến 255 ký tự !</p>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Địa chỉ</label>
                                <div class="row">
                                  <div class="col-sm-4">
                                    <select v-model="selectedProvince" class="form-control" @blur="$v.selectedProvince.$touch()">
                                      <option disabled value="0" >Chọn TP/Tỉnh</option>
                                      <option v-for="(value, key) in provinces" :key="key" v-bind:value="value.code">{{value.name_with_type}}</option>
                                    </select>
                                    <p v-if="$v.selectedProvince.$dirty && !$v.selectedProvince.isValid" class="alert-danger mt-2">Bạn chưa chọn TP/Tỉnh!</p>
                                  </div>
                                 <div class="col-sm-4">
                                    <select v-model="selectedDistrict" class="form-control" @blur="$v.selectedDistrict.$touch()">
                                      <option disabled value="0" >Chọn Quận/Huyện</option>
                                      <option v-for="(value, key) in districts" :key="key" v-bind:value="value.code">{{value.name_with_type}}</option>
                                    </select>
                                    <p v-if="$v.selectedDistrict.$dirty && !$v.selectedDistrict.isValid" class="alert-danger mt-2">Bạn chưa chọn Quận/Huyện!</p>
                                  </div>
                                  <div class="col-sm-4">
                                    <select v-model="selectedWards" class="form-control" @blur="$v.selectedWards.$touch()">
                                      <option disabled value="0" >Chọn Phường/Xã</option>
                                      <option v-for="(value, key) in wards" :key="key" v-bind:value="value.path_with_type">{{value.name_with_type}}</option>
                                    </select>
                                    <p v-if="$v.selectedWards.$dirty && !$v.selectedWards.isValid" class="alert-danger mt-2">Bạn chưa chọn Phường/Xã!</p>
                                  </div>
                                  <div class="col-sm-12">
                                      <textarea 
                                        v-model="street" 
                                        class="form-control mt-2" 
                                        placeholder="Tên Đường,Khu phố, Ấp, Thôn, Xóm..." 
                                        @blur="$v.street.$touch()">
                                      </textarea>
                                      <p v-if="$v.street.$dirty && !$v.street.required" class="alert-danger mt-2">không được để trống !</p>
                                      <p v-if="$v.street.$dirty && (!$v.street.minLength || !$v.street.maxLength)" class="alert-danger mt-2">Độ dài phải từ 3 đến 255 ký tự !</p>
                                  </div>                                                                      
                              </div>
                            </div>                            
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
                <div class="col-sm-4">
                  <div class="card shadow mb-4">
                      <div class="card-body">
                          <div class="text-center">
                            <img class="image-preview " v-if="urlImage" :src="urlImage" alt="avatar"/>
                            <img class="image-preview " v-else v-lazy="`https://res.cloudinary.com/vexeonline/${station.avatar}`" alt="avatar">
                          </div>
                        <div class="form-group mt-2">
                          <div class="custom-file">
                            <input @change="previewFile" type="file" class="custom-file-input" id="customFile">
                            <label class="custom-file-label" for="customFile">{{fileName}}</label>
                            <p v-if="errImage" class="alert-danger mt-2">{{errImage}}</p>
                          </div>
                        </div>                      
                      </div>
                  </div>
                </div>
                <div class="col-sm-12 ">
                    <div class="card shadow mb-4">
                        <div class="card-footer text-center">
                            <router-link to="/admin/stations" type="button" class="btn btn-sm btn-warning btn-icon-split">
                              <span class="icon text-white-50">
                                <i class="fas fa-exclamation-triangle"></i>
                              </span>
                              <span class="text">Hủy Bỏ</span>                              
                            </router-link>&nbsp;
                            <button type="submit" class="btn btn-sm btn-primary btn-icon-split">
                              <span class="icon text-white-50">
                                <i v-if="loadingEdit" class="fa fa-spinner fa-spin"></i>
                                <i v-else class="fa fa-save" ></i>
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
import Loader from '../../../components/loader'
    export default {
        name: 'editStation',
        components : {
          Loader
        },
        data() {
            return {
              provinces : require('../../../assets/data/dataAddress/provinces'),
              districts : {},
              wards : {},
              selectedProvince: '0',
              selectedDistrict : '0',
              selectedWards : '0',
              street: '',
              fileName : "Chọn File Ảnh" ,
              address : '',
              province : '',
              name: null,
              titleSeo:"",
              descriptionSeo:"",
              keywordSeo:"",
              urlImage : null,
              errImage : null,
              arrAddress : null,
              count : 0,
              loadingEdit : false,
              file : null
            };
        },
        created () {
          this.$store.dispatch("fetchDetailStation", this.$route.params.id);
        },
        validations : {
          name : {
            required,
            minLength : minLength(3),
            maxLength : maxLength(255),
          },
          selectedProvince : {
            isValid : not(value =>  value === '0')
          },
          selectedDistrict : {
            isValid : not(value =>  value === '0')
          },
          selectedWards : {
            isValid : not(value =>  value === '0')
          },
          street : {
            required,
            minLength : minLength(3),
            maxLength : maxLength(255),
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
          selectedProvince () {
            if (this.selectedProvince != '0'){
              this.province = this.provinces[`${this.selectedProvince}`].name_with_type;
              this.districts = require (`../../../assets/data/dataAddress/districts/${this.selectedProvince}.json`);
              this.selectedDistrict = '0';
              for (const district in this.districts) {
                if (this.districts[district].name_with_type === this.arrAddress[2]) {
                  this.selectedDistrict = `${district}`
                }
              }
            } else {
              this.districts = {};
              this.selectedDistrict = '0'
            }
          },

          selectedDistrict () {
            if (this.selectedDistrict != '0'){
              this.wards = require (`../../../assets/data/dataAddress/wards/${this.selectedDistrict}.json`);
              this.selectedWards = '0'
              for (const ward in this.wards) {
                if (this.wards[ward].name_with_type === this.arrAddress[1]) {
                  this.selectedWards = this.wards[ward].path_with_type
                }
              }              
            } else {
              this.wards = {};
              this.selectedWards = '0'
            }            
          },
          station(value) {
            if(value){
              this.arrAddress = value.address.split(", ")
              for (const province in this.provinces) {
                if (this.provinces[province].name_with_type === this.arrAddress[3]) {
                  this.selectedProvince = `${province}`
                }
              }
              this.name = value.name;
              this.titleSeo = value.titleSeo;
              this.descriptionSeo = value.descriptionSeo;
              this.keywordSeo = value.keywordSeo;
              this.street = this.arrAddress[0];
              if (this.count === 1) {
                this.loadingEdit = false
                this.$toast.success('Cập nhật bến xe thành công', {
                  position : 'bottom-right'
                })
                this.file = null
                this.fileName = "Chọn File Ảnh"
              }
            }
          }
        },
        computed : {
          loading() {
            return this.$store.state.stations.loading;
          },
          station() {
            return this.$store.state.stations.station;
          }
        },
        methods: {
            handleSubmit() {
              if (this.$v.$anyDirty && !this.$v.$anyError && !this.errImage){
                const formData = {
                  id : this.$route.params.id,
                  name: this.name,
                  address : `${this.street}, ${this.selectedWards}`,
                  province : this.provinces[`${this.selectedProvince}`].name_with_type,
                  titleSeo: this.titleSeo,
                  descriptionSeo: this.descriptionSeo,
                  keywordSeo: this.keywordSeo
                  };
                  this.count = 1
                  this.loadingEdit = true
                  if(this.file) {
                    let fileAvatar = new FormData ();
                    fileAvatar.append('avatar', this.file)
                    this.$store.dispatch("putStation", {formData, fileAvatar});
                  } else {
                    this.$store.dispatch("putStation", {formData, fileAvatar : null});
                  }                   
              } else if (!this.errImage && this.file) {
                let fileAvatar = new FormData ();
                fileAvatar.append('avatar', this.file)
                const fileDataOfStation = {
                  id : this.$route.params.id,
                  fileAvatar
                } 
                this.$store.dispatch("uploadAvatarStation", fileDataOfStation);
                this.count = 1
                this.loadingEdit = true               
              }
            },
            previewFile (event) {
              const accessTypeFile = ["image/jpeg", "image/png", "image/gif"]
              const file = event.target.files[0]
              if (accessTypeFile.find(type => type === file.type)){
                if (file.size > 2*1024*1024) {
                  this.errImage = "kích thước file ảnh tối đa 2MB!"
                  this.fileName = "Chọn File Ảnh"
                  this.urlImage = null;
                } else {
                  this.file = file
                  this.fileName = file.name;
                  this.errImage = null;
                  this.urlImage = URL.createObjectURL(file);
                }

              } else {
                this.errImage = "File ảnh không hợp lệ"
                this.fileName = "Chọn File Ảnh"
                this.urlImage = null;
              }

            }
        },

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