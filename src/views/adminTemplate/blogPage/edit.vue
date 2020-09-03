<template>
  <div class="container-fluid">
    <h1 class="h4 mb-2 text-gray-800">Cập Nhập Bài Viết</h1>
    <Loader v-if="loading"/>
    <form v-else @submit.prevent="handleSubmit" role="form" enctype="multipart/form-data">
      <div class="row">
        <div class="col-sm-8">
          <div class="card shadow mb-4">
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Tên bài viết</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  name="name"
                  autocomplete="off"
                  @blur="$v.name.$touch()"
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
              <div class="form-group">
                <label for="exampleInputEmail1">Mô tả</label>
                <textarea
                  v-model="description"
                  name="description"
                  class="form-control"
                  cols="5"
                  rows="2"
                  autocomplete="off"
                  @blur="$v.description.$touch()"
                ></textarea>
                <p
                  v-if="$v.description.$dirty && !$v.description.required"
                  class="alert-danger mt-2"
                >Mô tả không được để trống !</p>
                <p
                  v-if="$v.description.$dirty && (!$v.description.minLength || !$v.description.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài mô tả phải từ 3 đến 255 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Nội dung</label>
                <ckeditor
                  name="content"
                  :editor="editor"
                  v-model="content"
                  :config="editorConfig"
                  @blur="$v.content.$touch()"
                ></ckeditor>
                <p
                  v-if="$v.content.$dirty && !$v.content.required"
                  class="alert-danger mt-2"
                >Nội dung không được để trống !</p>
                <p
                  v-if="$v.content.$dirty && (!$v.content.minLength || !$v.content.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài nội dung phải từ 3 đến 255 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Tiêu đề SEO</label>
                <input
                  v-model="titleSeo"
                  type="text"
                  class="form-control"
                  name="titleSeo"
                  autocomplete="off"
                  @blur="$v.titleSeo.$touch()"
                />
                <p
                  v-if="$v.titleSeo.$dirty && !$v.titleSeo.required"
                  class="alert-danger mt-2"
                >Tiêu đề SEO không được để trống !</p>
                <p
                  v-if="$v.titleSeo.$dirty && (!$v.titleSeo.minLength || !$v.titleSeo.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài phải từ 3 đến 65 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Mô tả SEO</label>
                <textarea
                  v-model="descriptionSeo"
                  name="descriptionSeo"
                  class="form-control"
                  cols="5"
                  rows="2"
                  autocomplete="off"
                  @blur="$v.descriptionSeo.$touch()"
                ></textarea>
                <p
                  v-if="$v.descriptionSeo.$dirty && !$v.descriptionSeo.required"
                  class="alert-danger mt-2"
                >Mô tả SEO không được để trống !</p>
                <p
                  v-if="$v.descriptionSeo.$dirty && (!$v.descriptionSeo.minLength || !$v.descriptionSeo.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài phải từ 3 đến 255 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Từ khóa SEO</label>
                <textarea
                  v-model="keywordSeo"
                  name="keywordSeo"
                  class="form-control"
                  cols="5"
                  rows="2"
                  autocomplete="off"
                  @blur="$v.keywordSeo.$touch()"
                ></textarea>
                <p
                  v-if="$v.keywordSeo.$dirty && !$v.keywordSeo.required"
                  class="alert-danger mt-2"
                >Từ khóa SEO không được để trống !</p>
                <p
                  v-if="$v.keywordSeo.$dirty && (!$v.keywordSeo.minLength || !$v.keywordSeo.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài phải từ 3 đến 255 ký tự !</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
                  <div class="card shadow mb-4">
                      <div class="card-body">
                          <div class="text-center">
                            <img class="image-preview " v-if="urlImage" :src="urlImage" alt="avatar"/>
                            <img class="image-preview " v-else v-lazy="`https://res.cloudinary.com/vexeonline/${blog.avatar}`" alt="avatar">
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
        <div class="col-sm-12">
          <div class="card shadow mb-4">
            <div class="card-footer text-center">
              <router-link class="btn btn-sm btn-warning btn-icon-split" :to="`/admin/blogs`">
                <span class="icon text-white-50">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <span class="text">Hủy Bỏ</span>
              </router-link>&nbsp;
              <button
                type="submit"
                class="btn btn-sm btn-primary btn-icon-split"
                :disabled="$v.$invalid"
              >
                <span class="icon text-white-50">
                  <i v-if="loadingEdit" class="fa fa-spinner fa-spin"></i>
                  <i v-else class="fa fa-save"></i>
                </span>
                <span class="text">Cập nhập</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import Loader from '../../../components/loader'
export default {
  name: "app",
  components:{
    Loader
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
      },
      name: "",
      description: "",
      titleSeo: "",
      descriptionSeo: "",
      keywordSeo: "",
      content: "",
      fileName: "Chọn File Ảnh",
      urlImage: null,
      errImage: null,
      file: null,
      count: 0,
      tesst:"",
      loadingEdit : false,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255)
    },
    description: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255)
    },
    content: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255)
    },
    titleSeo: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(65)
    },
    descriptionSeo: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255)
    },
    keywordSeo: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255)
    }
  },
  created() {
    this.$store.dispatch("fetchDetailBlog", this.$route.params.id);
  },
  watch: {
    blog(value) {
      if (value) {
        this.name = value.name;
        this.description = value.description;
        this.content = value.content;
        this.titleSeo = value.titleSeo;
        this.descriptionSeo = value.descriptionSeo;
        this.keywordSeo = value.keywordSeo;
        this.tesst = value.avatar;
        if (this.count === 1) {
          this.loadingEdit = false
          this.$toast.success("Cập nhập bài viết thành công", {
            position: "bottom-right"
          });
          this.file = null;
          this.fileName = "Chọn File Ảnh";
        }
      }
    }
  },
  computed: {
    blog() {
      return this.$store.state.blog.blog;
    },
    err() {
      return this.$store.state.blog.err;
    },
    loading() {
      return this.$store.state.blog.loading;
    }
  },
  methods: {
    handleSubmit() {
      if (this.$v.$anyDirty && !this.$v.$anyError && !this.errImage) {
        const formData = {
          id: this.$route.params.id,
          name: this.name,
          description: this.description,
          content: this.content,
          titleSeo: this.titleSeo,
          descriptionSeo: this.descriptionSeo,
          keywordSeo: this.keywordSeo
        };
        this.count = 1;
        this.loadingEdit = true
        if (this.file) {
          let fileAvatar = new FormData();
          fileAvatar.append("avatar", this.file);
          this.$store.dispatch("fetchEditBlog", { formData, fileAvatar });
        } else {
          this.$store.dispatch("fetchEditBlog", { formData, fileAvatar: null });
        }
      } else if (!this.errImage && this.file) {
        let fileAvatar = new FormData();
        fileAvatar.append("avatar", this.file);
        const fileDataOfBlog = {
          id: this.$route.params.id,
          fileAvatar
        };
        this.$store.dispatch("uploadAvatarBlog", fileDataOfBlog);
        this.count = 1;
        this.loadingEdit = true      
      }
    },
    previewFile(event) {
      const accessTypeFile = ["image/jpeg", "image/png", "image/gif"];
      const file = event.target.files[0];
      if (accessTypeFile.find(type => type === file.type)) {
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