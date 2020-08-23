<template>
    <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Thêm Mới Bài Viết</h1>
        <form @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-8">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tên bài viết</label>
                                <input v-model="name" type="text" class="form-control" name="name" autocomplete="off" @blur="$v.name.$touch()">
                                <p v-if="$v.name.$dirty && !$v.name.required" class="alert-danger mt-2">Tên không được để trống !</p>
                                <p v-if="$v.name.$dirty && (!$v.name.minLength || !$v.name.maxLength)" class="alert-danger mt-2">Độ dài tên phải từ 3 đến 255 ký tự !</p>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Mô tả</label>
                                <textarea v-model="description" name="description" class="form-control" cols="5" rows="2" autocomplete="off" @blur="$v.description.$touch()"></textarea>
                                <p v-if="$v.description.$dirty && !$v.description.required" class="alert-danger mt-2">Mô tả không được để trống !</p>
                                <p v-if="$v.description.$dirty && (!$v.description.minLength || !$v.description.maxLength)" class="alert-danger mt-2">Độ dài mô tả phải từ 3 đến 255 ký tự !</p>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Nội dung</label>
                                <ckeditor name="content" :editor="editor" v-model="content" :config="editorConfig" @blur="$v.content.$touch()"></ckeditor>
                                <p v-if="$v.content.$dirty && !$v.content.required" class="alert-danger mt-2">Nội dung không được để trống !</p>
                                <p v-if="$v.content.$dirty && (!$v.content.minLength || !$v.content.maxLength)" class="alert-danger mt-2">Độ dài nội dung phải từ 3 đến 255 ký tự !</p>
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
                            <!-- <button type="submit" class="btn btn-warning"><i class="fa fa-save"></i> Hủy bỏ </button> -->
                            <router-link class="btn btn-sm btn-warning btn-icon-split" :to="`/admin/blogs`">
                                <span class="icon text-white-50">
                                <i class="fas fa-exclamation-triangle"></i>
                              </span>
                              <span class="text">Hủy Bỏ</span>   
                            </router-link>&nbsp;
                            <button type="submit" class="btn btn-sm btn-primary btn-icon-split" :disabled="$v.$invalid">
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
import { required ,minLength, maxLength } from 'vuelidate/lib/validators';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the editor.
                },
                name:"",
                description:"",
                content:"",
                titleSeo:"",
                descriptionSeo:"",
                keywordSeo:""
            };
        },
        validations:{
            name : {
                required,
                minLength : minLength(3),
                maxLength : maxLength(255),
            },
            description : {
                required,
                minLength : minLength(3),
                maxLength : maxLength(255),
            },
            content : {
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
        methods: {
            handleSubmit() {
            const fromData = {
                name: this.name,
                description: this.description,
                content: this.content,
                titleSeo: this.titleSeo,
                descriptionSeo: this.descriptionSeo,
                keywordSeo: this.keywordSeo
            };
                this.$store.dispatch("fetchCreateBlog", fromData);
            }
        },
        watch:{
            blog(value) {
                if (value){
                    this.$toast.success('Thêm bài viết thành công', {
                        position : 'bottom-right'
                    })
                }
          }
        },
        computed:{
            blog() {
                return this.$store.state.blog.blog
            },
            loading() {
                return this.$store.state.blog.loading;
            }
        }
    }
</script>

<style>

</style>