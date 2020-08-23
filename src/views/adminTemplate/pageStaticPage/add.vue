<template>
    <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Thêm Mới Trang Tĩnh</h1>
        <form @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-8">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tiêu đề</label>
                                <input v-model="name" type="text" class="form-control" name="name" autocomplete="off" @blur="$v.name.$touch()">
                                <p v-if="$v.name.$dirty && !$v.name.required" class="alert-danger mt-2">Tên không được để trống !</p>
                                <p v-if="$v.name.$dirty && (!$v.name.minLength || !$v.name.maxLength)" class="alert-danger mt-2">Độ dài tên phải từ 3 đến 255 ký tự !</p>
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
                <div class="col-sm-12 ">
                    <div class="card shadow mb-4">
                        <div class="card-footer text-center">
                            <!-- <button type="submit" class="btn btn-warning"><i class="fa fa-save"></i> Hủy bỏ </button> -->
                            <router-link class="btn btn-sm btn-warning btn-icon-split" :to="`/admin/pagestatics`">
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
                content:""
            };
        },
        validations:{
            name : {
                required,
                minLength : minLength(3),
                maxLength : maxLength(255),
            },
            content : {
                required,
                minLength : minLength(3),
                maxLength : maxLength(255),
            }
        },
        methods: {
            handleSubmit() {
            const fromData = {
                name: this.name,
                content: this.content
            };
                this.$store.dispatch("fetchCreatePageStatic", fromData);
            }
        },
        watch:{
            pagestatic(value) {
                if (value){
                    this.$toast.success('Thêm trang tĩnh thành công', {
                        position : 'bottom-right'
                    })
                }
          }
        },
        computed:{
            pagestatic() {
                return this.$store.state.pageStatic.pagestatic
            },
            loading() {
                return this.$store.state.pageStatic.loading;
            }
        }
    }
</script>

<style>

</style>