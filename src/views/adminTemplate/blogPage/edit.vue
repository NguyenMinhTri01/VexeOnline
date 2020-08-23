<template>
  <div class="container-fluid">
    <h1 class="h4 mb-2 text-gray-800">Cập Nhập Bài Viết</h1>
    <form @submit.prevent="handleSubmit(formBlog)" role="form" enctype="multipart/form-data">
      <div class="row">
        <div class="col-sm-8">
          <div class="card shadow mb-4">
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Tên bài viết</label>
                <input
                  v-model="formBlog.name"
                  type="text"
                  class="form-control"
                  name="name"
                  autocomplete="off"
                  @blur="$v.formBlog.name.$touch()"
                />
                <p
                  v-if="$v.formBlog.name.$dirty && !$v.formBlog.name.required"
                  class="alert-danger mt-2"
                >Tên không được để trống !</p>
                <p
                  v-if="$v.formBlog.name.$dirty && (!$v.formBlog.name.minLength || !$v.formBlog.name.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài tên phải từ 3 đến 255 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Mô tả</label>
                <textarea
                  v-model="formBlog.description"
                  name="description"
                  class="form-control"
                  cols="5"
                  rows="2"
                  autocomplete="off"
                  @blur="$v.formBlog.description.$touch()"
                ></textarea>
                <p
                  v-if="$v.formBlog.description.$dirty && !$v.formBlog.description.required"
                  class="alert-danger mt-2"
                >Mô tả không được để trống !</p>
                <p
                  v-if="$v.formBlog.description.$dirty && (!$v.formBlog.description.minLength || !$v.formBlog.description.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài mô tả phải từ 3 đến 255 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Nội dung</label>
                <ckeditor
                  name="content"
                  :editor="editor"
                  v-model="formBlog.content"
                  :config="editorConfig"
                  @blur="$v.formBlog.content.$touch()"
                ></ckeditor>
                <p
                  v-if="$v.formBlog.content.$dirty && !$v.formBlog.content.required"
                  class="alert-danger mt-2"
                >Nội dung không được để trống !</p>
                <p
                  v-if="$v.formBlog.content.$dirty && (!$v.formBlog.content.minLength || !$v.formBlog.content.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài nội dung phải từ 3 đến 255 ký tự !</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card shadow mb-4">
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Tiêu đề SEO</label>
                <input
                  v-model="formBlog.titleSeo"
                  type="text"
                  class="form-control"
                  name="titleSeo"
                  autocomplete="off"
                  @blur="$v.formBlog.titleSeo.$touch()"
                />
                <p
                  v-if="$v.formBlog.titleSeo.$dirty && !$v.formBlog.titleSeo.required"
                  class="alert-danger mt-2"
                >Tiêu đề SEO không được để trống !</p>
                <p
                  v-if="$v.formBlog.titleSeo.$dirty && (!$v.formBlog.titleSeo.minLength || !$v.formBlog.titleSeo.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài phải từ 3 đến 65 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Mô tả SEO</label>
                <textarea
                  v-model="formBlog.descriptionSeo"
                  name="descriptionSeo"
                  class="form-control"
                  cols="5"
                  rows="2"
                  autocomplete="off"
                  @blur="$v.formBlog.descriptionSeo.$touch()"
                ></textarea>
                <p
                  v-if="$v.formBlog.descriptionSeo.$dirty && !$v.formBlog.descriptionSeo.required"
                  class="alert-danger mt-2"
                >Mô tả SEO không được để trống !</p>
                <p
                  v-if="$v.formBlog.descriptionSeo.$dirty && (!$v.formBlog.descriptionSeo.minLength || !$v.formBlog.descriptionSeo.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài phải từ 3 đến 255 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Từ khóa SEO</label>
                <textarea
                  v-model="formBlog.keywordSeo"
                  name="keywordSeo"
                  class="form-control"
                  cols="5"
                  rows="2"
                  autocomplete="off"
                  @blur="$v.formBlog.keywordSeo.$touch()"
                ></textarea>
                <p
                  v-if="$v.formBlog.keywordSeo.$dirty && !$v.formBlog.keywordSeo.required"
                  class="alert-danger mt-2"
                >Từ khóa SEO không được để trống !</p>
                <p
                  v-if="$v.formBlog.keywordSeo.$dirty && (!$v.formBlog.keywordSeo.minLength || !$v.formBlog.keywordSeo.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài phải từ 3 đến 255 ký tự !</p>
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
                  <i v-if="loading" class="fa fa-spinner fa-spin"></i>
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
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      // editorData: '',
      editorConfig: {
        // The configuration of the editor.
      },
      formBlog: {
        name: "",
        description: "",
        titleSeo: "",
        descriptionSeo: "",
        keywordSeo: "",
        content: ""
      }
    };
  },
  validations: {
    formBlog: {
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
    }
  },
  beforeCreate() {
    this.$store.dispatch("fetchDetailBlog", this.$route.params.id);
  },
  methods: {
    handleSubmit(formBlog) {
      this.$store.dispatch("fetchEditBlog", {
        _id: this.$route.params.id,
        blog: formBlog
      });
    }
  },
  computed: {
    blog() {
      return this.$store.state.blog.data;
    },
    err() {
      return this.$store.state.blog.err;
    },
    loading() {
      return this.$store.state.blog.loading;
    }
  },
  watch: {
    blog(newValue) {
      this.formBlog = newValue;
    }
  },
  // mounted() {
  //   $(document).ready(function () {
  //     console.log(this.formBlog)
  //   });
  // },
};
</script>

<style>
</style>