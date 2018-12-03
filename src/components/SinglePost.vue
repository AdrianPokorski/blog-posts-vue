<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mt-5">
                <h2>{{singlePost.titlePost}}</h2>
                <p v-html="singlePost.contentPost"></p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            singlePost: null
        }
    },

    created(){
        let $this = this;
        /* eslint-disable */
        axios.get('http://localhost:3000/post/'+this.$route.params.id)
        .then(function (response) {
            $this.singlePost = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>