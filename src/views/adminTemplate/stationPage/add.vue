<template>
    <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Thêm Mới Bến Xe</h1>
        <form @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
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
                                    <select v-model="selectedProvince" class="form-control" name="province" id="">
                                      <option v-bind:value="'0'" >TP/Tỉnh</option>
                                      <option v-for="(value, key) in provinces" :key="key" v-bind:value="value.code">{{value.name_with_type}}</option>
                                    </select>
                                    <label for="" class="alert-danger mt-2">lỗi</label>
                                  </div>
                                 <div class="col-sm-4">
                                    <select v-model="selectedDistrict" class="form-control" name="distrist" id="">
                                      <option v-bind:value="'0'">Quận/Huyện</option>
                                      <option v-for="(value, key) in districts" :key="key" v-bind:value="value.code">{{value.name_with_type}}</option>
                                    </select>
                                    <label for="" class="alert-danger mt-2">lỗi</label>
                                  </div>
                                  <div class="col-sm-4">
                                    <select v-model="selectedWards" class="form-control" name="wards" id="">
                                      <option v-bind:value="'0'">Phường/Xã</option>
                                      <option v-for="(value, key) in wards" :key="key" v-bind:value="value.path_with_type">{{value.name_with_type}}</option>
                                    </select>
                                    <label for="" class="alert-danger mt-2">lỗi</label>
                                  </div>
                                  <div class="col-sm-12">
                                      <textarea v-model="street" class="form-control mt-2" placeholder="Tên Đường,Khu phố, Ấp, Thôn, Xóm..." name="street" id=""></textarea>
                                      <label for="" class="alert-danger mt-2">lỗi</label>
                                  </div>                                                                      
                              </div>
                            </div>                            
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tiêu đề SEO</label>
                                <input v-model="titleSeo" type="text" class="form-control" name="titleSeo" autocomplete="off">
                                <label for="" class="alert-danger mt-2">lỗi</label>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Mô tả SEO</label>
                                <textarea v-model="descriptionSeo" name="descriptionSeo" class="form-control" cols="5" rows="2" autocomplete="off"></textarea>
                                <label for="" class="alert-danger mt-2">lỗi</label>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Từ khóa SEO</label>
                                <textarea v-model="keywordSeo" name="keywordSeo" class="form-control" cols="5" rows="2" autocomplete="off"></textarea>
                                <label for="" class="alert-danger mt-2">lỗi</label>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                  <div class="card shadow mb-4">
                      <div class="card-body">
                        <a target="_blank" href="https://res.cloudinary.com/vexeonline/VexeOnlineMedia/imageDefault/no-image_ljozla">
                          <img class="image-preview" src="https://res.cloudinary.com/vexeonline/VexeOnlineMedia/imageDefault/no-image_ljozla" alt="Forest">
                        </a>
                        <div class="form-group mt-2">
                          <div class="custom-file">
                            <input @change="previewFile" type="file" class="custom-file-input" id="customFile">
                            <label class="custom-file-label" for="customFile">{{fileName}}</label>
                            <label for="" class="alert-danger mt-2">lỗi</label>
                          </div>
                        </div>                      
                      </div>
                  </div>
                </div>
                <div class="col-sm-12 ">
                    <div class="card shadow mb-4">
                        <div class="card-footer text-center">
                            <button type="button" class="btn btn-sm btn-warning btn-icon-split">
                              <span class="icon text-white-50">
                                <i class="fas fa-exclamation-triangle"></i>
                              </span>
                              <span class="text">Hủy Bỏ</span>                              
                            </button>&nbsp;
                            <button type="submit" class="btn btn-sm btn-primary btn-icon-split">
                              <span class="icon text-white-50">
                                <i class="fa fa-save"></i>
                              </span>
                              <span class="text">Thêm Mới</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </form>
    </div>
</template>

<script>
import { required ,minLength, maxLength, sameAs } from 'vuelidate/lib/validators';
    export default {
        name: 'app',
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
              description:"",
              titleSeo:"",
              descriptionSeo:"",
              keywordSeo:""
            };
        },
        validations : {
          name : {
            required,
            minLength : minLength(3),
            maxLength : maxLength(255),
          },
          selectedProvince : {
            defaultValue : sameAs('0')
          },
          selectedDistrict : {
            defaultValue : sameAs('0')
          },
          selectedWards : {
            defaultValue : sameAs('0')
          }
        },
        watch : {
          selectedProvince () {
            if (this.selectedProvince != '0'){
              this.province = this.provinces[`${this.selectedProvince}`].name_with_type;
              this.districts = require (`../../../assets/data/dataAddress/districts/${this.selectedProvince}.json`);
            } else {
              this.districts = {};
            }
          },

          selectedDistrict () {
            if (this.selectedDistrict != '0'){
              this.wards = require (`../../../assets/data/dataAddress/wards/${this.selectedDistrict}.json`)
            } else {
              this.wards = {};
            }            
          },
          selectedWards () {
            if (this.selectedWards != '0'){
              this.address = this.selectedWards
            } else {
              this.address = ''
            }     
          }
        },
        methods: {
            handleSubmit() {

              const fromData = {
                  name: this.name,
                  address : this.address,
                  description: this.description,
                  titleSeo: this.titleSeo,
                  descriptionSeo: this.descriptionSeo,
                  keywordSeo: this.keywordSeo
            };
            console.log(fromData)
              // this.$store.dispatch("postBlog", fromData);
            },
            previewFile (event) {
              this.fileName = event.target.files[0].name;
            },
        },
    }
</script>

<style>
.image-preview {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 300px;
  height: 200px;
}

 img.image-preview:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

</style>