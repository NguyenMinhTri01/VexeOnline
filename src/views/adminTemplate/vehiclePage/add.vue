<template>
  <div class="container-fluid">
    <h1 class="h4 mb-2 text-gray-800">Thêm Xe</h1>
    <form @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
      <div class="row">
        <div class="col-sm-8">
          <div class="card shadow mb-4">
            <div class="card-body">
              <div class="form-group">
                <div class="row">
                  <div class="col-sm-8">
                    <label for="exampleInputEmail1">Tên loại xe</label>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control"
                      name="name"
                      autocomplete="off"
                      @blur="$v.name.$touch()"
                      placeholder="Tên loại xe"
                    />
                    <p
                      v-if="$v.name.$dirty && !$v.name.required"
                      class="alert-danger mt-2"
                    >Tên không được để trống !</p>
                    <p
                      v-if="$v.name.$dirty && (!$v.name.minLength || !$v.name.maxLength)"
                      class="alert-danger mt-2"
                    >Độ dài tên phải từ 3 đến 255 ký tự !</p>
                  </div>
                  <div class="col-sm-4">
                    <label for="exampleInputEmail1">Số lượng chỗ ngồi</label>
                    <input
                      type="number"
                      class="form-control"
                      autocomplete="off"
                      v-model="numberOfSeats"
                      @blur="$v.numberOfSeats.$touch()"
                      placeholder="Số lượng chỗ ngồi"
                    />
                    <p
                      v-if="$v.numberOfSeats.$dirty && !$v.numberOfSeats.required"
                      class="alert-danger mt-2"
                    >Số lượng chỗ ngồi không được để trống !</p> 
                    <p
                      v-if="$v.numberOfSeats.$dirty && !$v.numberOfSeats.between"
                      class="alert-danger mt-2"
                    >Số lượng chỗ ngồi phải từ 4 đến 60 chỗ !</p>                                        
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Các tiện ích trên xe (nếu có)</label>
                <textarea v-model="utilities" class="form-control" name="utilities" id cols="10" rows="3" @blur="$v.utilities.$touch()" placeholder="Tiện ích"></textarea>
                <p
                  v-if="$v.utilities.$dirty && (!$v.utilities.minLength || !$v.utilities.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài văn bản phải từ 3 đến 1000 ký tự !</p>                
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Album ảnh</label>
                <vue-dropzone 
                ref="myVueDropzone" 
                id="dropzone" 
                :options="dropzoneOptions"
                @vdropzone-removed-file="removeFile($event)"
                @vdropzone-success="successUpload"
                ></vue-dropzone>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card shadow mb-4">
            <div class="card-body">
              <img class="image-preview" v-if="urlImage" :src="urlImage" alt="avatar" />
              <img
                class="image-preview"
                v-else
                src="https://res.cloudinary.com/vexeonline/VexeOnlineMedia/imageDefault/no-image_ljozla"
                alt="avatar"
              />
              <div class="form-group mt-2">
                <div class="custom-file">
                  <input
                    @change="previewFile"
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                  <label class="custom-file-label" for="customFile">{{fileName}}</label>
                  <p v-if="errImage" class="alert-danger mt-2">{{errImage}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="card shadow mb-4">
            <div class="card-footer text-center">
              <router-link
                to="/admin/stations"
                type="button"
                class="btn btn-sm btn-warning btn-icon-split"
              >
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
import { required, minLength, maxLength, between } from "vuelidate/lib/validators";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "addStation",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      fileName: "Chọn File Ảnh",
      name: "",
      numberOfSeats : "0",
      utilities : "",
      urlImage: null,
      errImage: null,
      file: null,
      listImages : [],
      dropzoneOptions: {
        url: ()=> {
          const infoUser = this.$store.state.auth.infoUser
          return `http://localhost:5000/api/vehicles/upload-images/${infoUser._id}`
        },
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        maxFilesize: 2,
        acceptedFiles : "image/*",
        headers: { 
          'Authorization': 'authorizationHeader',
          'Cache-Control': null,
          'X-Requested-With': null,
          'token' : this.$store.state.auth.token
          },
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>Thêm Ảnh",
        maxFiles : 6,
        paramName : "fileImage",
      },
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255),
    },
    numberOfSeats : {
      required,
      between : between(4, 60)
    },
    utilities : {
      minLength: minLength(3),
      maxLength: maxLength(1000)
    }
  },
  watch: {
    vehicle(value) {
      this.$refs.myVueDropzone.removeAllFiles();
      if (value) {
        this.listImages = [];
        this.$toast.success("Thêm xe thành công", {
          position: "bottom-right",
        });
      }
    },
  },
  computed: {
    loading() {
      return this.$store.state.vehicle.loading;
    },
    vehicle() {
      return this.$store.state.vehicle.vehicle;
    },
    userInfo () {
      return this.$store.state.auth.infoUser;
    }
  },
  methods: {
    handleSubmit(event) {
      if (this.$v.$anyDirty && !this.$v.$anyError && !this.errImage) {
        const formData = {
          name: this.name,
          numberOfSeats : this.numberOfSeats,
          utilities : this.utilities,
          listImages : this.listImages
        };
        if (this.file) {
          let fileAvatar = new FormData();
          fileAvatar.append("avatar", this.file);
          this.$store.dispatch("postVehicle", { formData, fileAvatar });
        } else {
          this.$store.dispatch("postVehicle", { formData, fileAvatar: null });
        }
        event.target.reset();
      }
    },
    previewFile(event) {
      const accessTypeFile = ["image/jpeg", "image/png", "image/gif"];
      const file = event.target.files[0];
      if (accessTypeFile.find((type) => type === file.type)) {
        if (file.size > 2 * 1024 * 1024) {
          this.errImage = "kích thước file ảnh tối đa 2MB!";
          this.fileName = "Chọn File Ảnh";
          this.urlImage = null;
        } else {
          this.file = file;
          this.fileName = file.name;
          this.errImage = null;
          this.urlImage = URL.createObjectURL(file);
        }
      } else {
        this.errImage = "File ảnh không hợp lệ";
        this.fileName = "Chọn File Ảnh";
        this.urlImage = null;
      }
    },
    removeFile () {
      // console.log(file)
    },
    successUpload(file, res){
      this.listImages.push(res.fileName)
    }
  },
};
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