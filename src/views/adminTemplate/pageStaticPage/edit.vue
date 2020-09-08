<template>
  <div class="container-fluid">
    <h1 class="h4 mb-2 text-gray-800">Cập Nhập Trang Tĩnh</h1>
    <form @submit.prevent="handleSubmit(formPageStatic)" role="form" enctype="multipart/form-data">
      <div class="row">
        <div class="col-sm-8">
          <div class="card shadow mb-4">
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Tiêu đề</label>
                <input
                  v-model="formPageStatic.name"
                  type="text"
                  class="form-control"
                  name="name"
                  autocomplete="off"
                  @blur="$v.formPageStatic.name.$touch()"
                />
                <p
                  v-if="$v.formPageStatic.name.$dirty && !$v.formPageStatic.name.required"
                  class="alert-danger mt-2"
                >Tên không được để trống !</p>
                <p
                  v-if="$v.formPageStatic.name.$dirty && (!$v.formPageStatic.name.minLength || !$v.formPageStatic.name.maxLength)"
                  class="alert-danger mt-2"
                >Độ dài tên phải từ 3 đến 255 ký tự !</p>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Nội dung</label>
                <ckeditor
                  name="content"
                  :editor="editor"
                  v-model="formPageStatic.content"
                  :config="editorConfig"
                  @blur="$v.formPageStatic.content.$touch()"
                ></ckeditor>
                <p
                  v-if="$v.formPageStatic.content.$dirty && !$v.formPageStatic.content.required"
                  class="alert-danger mt-2"
                >Nội dung không được để trống !</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="card shadow mb-4">
            <div class="card-footer text-center">
              <router-link class="btn btn-sm btn-warning btn-icon-split" :to="`/admin/pagestatics`">
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
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;
export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
      },
      formPageStatic: {
        name: "",
        content: "",
        count: 0
      }
    };
  },
  validations: {
    formPageStatic: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(255)
      },
      content: {
        required
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch("fetchDetailPageStatic", this.$route.params.id);
  },
  methods: {
    handleSubmit(formPageStatic) {
      this.count = 1;
      this.$store.dispatch("fetchEditPageStatic", {
        _id: this.$route.params.id,
        pagestatic: formPageStatic
      });
    }
  },
  computed: {
    pagestatic() {
      return this.$store.state.pageStatic.pagestatic;
    },
    err() {
      return this.$store.state.pageStatic.err;
    },
    loading() {
      return this.$store.state.pageStatic.loading;
    }
  },
  watch: {
    pagestatic(newValue) {
      this.formPageStatic=newValue;
      if (this.count === 1) {
          this.$toast.success("Cập nhập trang tĩnh thành công", {
            position: "bottom-right"
          });
        }
    }
  }
};
</script>

<style>
</style>