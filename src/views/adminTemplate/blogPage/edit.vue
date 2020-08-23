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
                />
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
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Nội dung</label>
                <ckeditor
                  name="content"
                  :editor="editor"
                  v-model="formBlog.content"
                  :config="editorConfig"
                ></ckeditor>
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
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Mô tả SEO</label>
                <textarea
                  v-model="formBlog.descriptionSeo"
                  name="descriptionSeo" class="form-control" cols="5" rows="2"  autocomplete="off"></textarea>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Từ khóa SEO</label>
                <textarea
                  v-model="formBlog.keywordSeo"
                  name="keywordSeo" class="form-control"  cols="5" rows="2" autocomplete="off"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="card shadow mb-4">
            <div class="card-footer text-center">
              <button type="submit" class="btn btn-warning">
                <i class="fa fa-save"></i> Hủy bỏ
              </button>&nbsp;
              <button type="submit" class="btn btn-primary">
                <i class="fa fa-save"></i> Cập nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
               // editorData: '',
                editorConfig: {
                    // The configuration of the editor.
                },
                
                formBlog:{
                  name: "",
                  description: "",
                  titleSeo: "",
                  descriptionSeo: "",
                  keywordSeo: "",
                  content: '',
                }
            };
        },
        beforeCreate () {
            this.$store.dispatch("fetchDetailBlog", this.$route.params.id);
        },
        methods: {
            handleSubmit(formBlog) {
               // console.log(this.$route.params.id)
                this.$store.dispatch("fetchEditBlog",{
                  _id: this.$route.params.id,
                  blog: formBlog
                });
               
            }
        },
        computed:{
          blog(){
            return this.$store.state.blog.data
          },
          err() {
            return this.$store.state.blog.err;
          },
        },
        watch: {
          blog(newValue) {
            this.formBlog = newValue;
          }
        }
    }
</script>

<style>
</style>