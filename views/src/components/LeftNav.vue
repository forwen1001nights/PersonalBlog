<template>
    <div id="left_nav">
        <div class="head">
            <img class="head_img" src="../assets/fox.jpg"  @click="toHome">
        </div>
        <div class="nav_list">
            <ul>
                <!-- <li @click="changeActive('front-end')" :class="[parentTag=='front-end'?'active':'']"><i class="el-icon-help"></i>前端</li>
                <li @click="changeActive('after-end')" :class="[parentTag=='after-end'?'active':'']"><i class="el-icon-data-analysis"></i>后端</li>
                <li @click="changeActive('life')" :class="[parentTag=='life'?'active':'']"><i class="el-icon-magic-stick"></i>乐活</li>
                <li @click="changeActive('others')" :class="[parentTag=='others'?'active':'']"><i class="el-icon-monitor"></i>杂项</li>
                <li @click="changeActive('sketch')" :class="[parentTag=='sketch'?'active':'']"><i class="el-icon-reading"></i>随笔</li>
                <li @click="changeActive('search')" :class="[parentTag=='search'?'active':'']"><i class="el-icon-search"></i>搜索</li> -->

                <li v-for="item in pTagList" :key="item.value" @click="changeActive(item.value)" :class="[parentTag==item.value ? 'active' : '']"><i :class="item.iconClass"></i>{{item.name}}</li>
            </ul>
        </div>
        <Contact />
    </div>
</template>
<script>
import Contact from './Contact'
import { pTagList } from '../../config/blog'
export default {
    components: {
        Contact
    },
    props: ['parentTag'],
    data() {
        return {
            pTagList
        }
    },
    watch: {
        parentTag() {
            this.changeActive(this.parentTag);
        }
    },
    methods: {
        changeActive(parentTag) {
            const curPath = this.$route.path;
            let pathArr = curPath.split('/');
            if(pathArr.length == 2 && pathArr[1] == 'pages') {
                pathArr.push(parentTag);
            }else {
                if(pathArr[2] == 'about') {
                    pathArr.splice(2,0,parentTag)
                }else {
                    pathArr[2] = parentTag
                }
            }
            const pathTo = pathArr.join('/');
            this.$router.push(pathTo);
        },
        toHome () {
            this.$router.push('/pages')
        }
    }
}
</script>
<style scoped>
    .head_img {
        height: 90px;
        right: 90px;
        margin: 0;
        cursor: pointer;
        border-radius: 50%;
        margin-top: 7px;
    }
    .nav_list > ul {
        margin: 0;
        padding: 0 20px 0 0;
        display: flex;
        flex-direction: column;
    }
    .nav_list>ul>li {
        list-style: none;
        padding: 6px;
        cursor: pointer;
        font-size: 17px;
    }
    .nav_list>ul>li i {
        margin-right: 15px;
    }
    /* .nav_list>ul>li:first-of-type {
        border: 1px solid #ccc;
    } */
    .nav_list>ul>li.active {
        background-color: #99a9bf;
        color: #fff;
    }
    .nav_list>ul>li:hover {
        background-color: #99a9bf;
        color: #fff;
    }
</style>