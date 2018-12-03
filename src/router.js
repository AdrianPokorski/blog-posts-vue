import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import AddPost from './components/AddPost.vue'
import SinglePost from './components/SinglePost.vue'
import AdminPage from './components/AdminPage.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        }, 
        {
            path: '/:id',
            name: 'singlePost',
            component: SinglePost,
        },
        {
            path: '/admin',
            name: 'adminpage',
            component: AdminPage,
        },
        {
            path: '/admin/addpost',
            name: 'addpost',
            component: AddPost,
        }
    ]
});