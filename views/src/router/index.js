// route lazy load
import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('../views/Layout')
const EditBlog = () => import('../views/EditBlog')
const Login = () => import('../views/Login')
const BlogManager = () => import('../views/BlogManager')
const MainContent = () => import('../components/MainContent')
const Default = () => import('../components/Default')
const Catalog = () => import('../components/Catalog')
const About = () => import('../components/About')

import store from '../store/index'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/pages',
      props: true,
      children: [
        {
          path:'/pages',
          components: {
            default: Default,
            catalog: Catalog
          }
        },
        {
          path:'/pages/about',
          components: {
            default: About,
            catalog: Catalog
          }
        },
        {
          path:'/pages/:parentTag/about',
          components: {
            default: About,
            catalog: Catalog
          },
          props: { default: true, catalog: true}
        },
        {
          path:'/pages/:parentTag',
          components: {
            default: Default,
            catalog: Catalog,
          },
          props: { default: true, catalog: true }
        },
        {
          path:'/pages/:parentTag/:tag/:ID',
          components: {
            default: MainContent,
            catalog: Catalog,
          },
          props: { default: true, catalog: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/manager',
      name: 'BlogManager',
      component: BlogManager,
      beforeEnter(to, from, next) {
        if(!store.state.isLogin) {
          next({path: '/login'});
        }else {
          next();
        }
      }
    },
    {
      path: '/editBlog/edit',
      name: 'editBlog',
      component: EditBlog,
      beforeEnter(to, from, next) {
        if(!store.state.isLogin) {
          next({path: '/login'});
        }else {
          next();
        }
      }
    },
    {
      path: '/editBlog/add',
      name: 'addBlog',
      component: EditBlog,
      beforeEnter(to, from, next) {
        if(!store.state.isLogin) {
          next({path: '/login'});
        }else {
          next();
        }
      }
    }
]
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router