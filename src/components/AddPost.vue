<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mt-5">
                <div>
                    <label for="title">Tytuł Posta</label>
                    <input type="text" class="form-control title" v-model="title">
                </div>
                <div class="my-5">
                    <label for="description">Zajawka</label>
                    <textarea  class="form-control description" v-model="description"> </textarea>
                </div>
                <wysiwyg v-model="content" />
                <button @click.prevent="save" type="submit" class="btn btn-primary mt-4">Dodaj Post</button>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import router from '../router'

export default {
    data(){
        return{
            content: '',
            title: '',
            description: ''
        }
    },
    methods: {
        save: function(){
            /* eslint-disable */
            axios.post('http://localhost:3000/post/',{
                titlePost: this.title,
	            descriptionPost: this.description,
	            contentPost: this.content  
            })
            .then(function () {
                router.push({ name: 'home', params: {message: 'Post dodany poprawnie'} })
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css";

</style>