<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div v-if="this.$route.params.message" class="alert alert-success" role="alert">
                    {{this.$route.params.message}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <h1>home Page</h1>
            </div>
        </div>
        <div class="row">
			<div class="col-12">
				<div class="posts my-5" v-for="post in posts" :key="post.id">
					<h3>{{ post.titlePost }}</h3>
					<p>{{ post.descriptionPost }}</p>
                    <router-link :to="{name: 'singlePost', params:{id:post.id}}" class="btn btn-primary" >Czytaj więcej</router-link>
				</div>
			</div>
		</div>
    </div>

</template>

<script>
import axios from 'axios';

/* eslint-disable */

export default {

    created(){
        let $this = this;
        
        axios.get('http://localhost:3000/posts')
        .then(function (response) {
            $this.posts = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    data(){
        return {
            posts: '',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>