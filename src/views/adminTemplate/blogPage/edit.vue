<template>
    <div class="container-fluid">
        <h1 class="h4 mb-2 text-gray-800">Cập Nhập Bài Viết</h1>
        <form @submit.prevent="handleSubmit" role="form" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-8">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tên bài viết</label>
                                <input v-model="name" type="text" class="form-control" name="name" autocomplete="off">
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Mô tả</label>
                                <textarea v-model="description" name="description" class="form-control" cols="5" rows="2" autocomplete="off"></textarea>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Nội dung</label>
                                <ckeditor name="content" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="col-sm-4">
                <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Tiêu đề SEO</label>
                                <input v-model="titleSeo" type="text" class="form-control" name="titleSeo" autocomplete="off">
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Mô tả SEO</label>
                                <textarea v-model="descriptionSeo" name="descriptionSeo" class="form-control" cols="5" rows="2" autocomplete="off"></textarea>
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Từ khóa SEO</label>
                                <textarea v-model="keywordSeo" name="keywordSeo" class="form-control" cols="5" rows="2" autocomplete="off"></textarea>
                                <p>{{blog.keywordSeo}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 ">
                    <div class="card shadow mb-4">
                        <div class="card-footer text-center">
                            <button type="submit" class="btn btn-warning"><i class="fa fa-save"></i> Hủy bỏ </button>&nbsp;
                            <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i> Thêm mới </button>
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
                editorData: '',
                editorConfig: {
                    // The configuration of the editor.
                },
                name:this.blog.name,//ví dụ nè
                description:'',
               // content:"",
                titleSeo:'',
                descriptionSeo:'',
                keywordSeo:''
            };
        },
        created() {
          this.$store.dispatch("fetchDetailBlog", this.$route.params.id);// cái này phải làm sao mà có dữ liệu rồi mới bỏ vào data
          console.log(this.$store.state.blog.data)// push code lên đi đê xem thử
        },

        computed:{
          blog(){// blog này là sao vậy //tương tự như ông thầy đí
            return this.$store.state.blog.data
          }
        }
    }
</script>

<style>

</style>