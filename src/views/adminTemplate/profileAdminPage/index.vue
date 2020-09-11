<template>
  <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Cập nhập thông tin Admin</h1>
        <!-- <Loader v-if="loading"/> -->
        <form @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-8">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tên admin</label>
                                <input v-model="fullName" type="text" class="form-control" name="name" autocomplete="off">
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tên email</label>
                                <input v-model="email" type="text" class="form-control" name="name" autocomplete="off">
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Số điện thoại</label>
                                <input v-model="phone" type="text" class="form-control" name="name" autocomplete="off">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                  <div class="card shadow mb-4">
                      <div class="card-body">
                          <div class="text-center">
                            <img class="image-preview " v-if="urlImage" :src="urlImage" alt="avatar"/>
                            <img class="image-preview " v-else v-lazy="`https://res.cloudinary.com/vexeonline/`" alt="avatar">
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
export default {
    data(){
        return{
            fullName:"",
            email:"",
            phone:"",
            urlImage : null,
            errImage : null,
            count : 0,
            loadingEdit : false,
            file : null
        }
    },
    computed:{
        user(){
        return this.$store.state.auth.infoUser; 
        }
    },
    methods:{
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
    }
}
</script>

<style scoped>
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