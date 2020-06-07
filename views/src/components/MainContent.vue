<template>
    <div class="blogContainer">
        <div class="nav-header">
            <div class="menu-cata">
                <i class="open-cata el-icon el-icon-s-unfold" @click="changeShow"></i>
            </div>
            <div>
                <h1 class="title">{{ blogInfo.title }}</h1>
            </div>
            <div class="xs-cata" :class="{open: ifshow}">
                <Pulldown :show="ifshow" :changeShow="changeShow" :list="pulldownList" />
            </div>
        </div>
        <div class="ctime">
            <span>{{ blogInfo.ctime }}</span>
            <span>tag: {{blogInfo.tag}}</span>
        </div>
        <div class="content">
            <div ref="mdContent" v-highlight class="markdown-body" v-html="blogInfo.content"></div>
        </div>
    </div>
</template>
<script>
import hljs from 'hljs';
import { find } from '../service/api'
import { pTagList } from '../../config/blog'
import Pulldown from '../components/Pulldown'
export default {
    components: {
        Pulldown
    },
    props: ['ID'],
    created() {
        const pulldownList = [...pTagList];
        pulldownList.forEach(async ele => {
            const results = await find({
                need: ['title','tag','id','parentTag'],
                by: {
                    parentTag: ele.value
                }
            });
            ele.children = results.data.data;
        })
        this.pulldownList = pulldownList;
    },
    directives: {
        highlight: {
            bind(el) {
                let codes = el.querySelectorAll('pre code');
                codes.forEach(codeBlock => {
                    hljs.highlightBlock(codeBlock);
                });
            }
        }
    },
    data () {
        return {
            blogInfo: {},
            ifshow: false,
            pulldownList: []
        }
    },
    watch: {
        ID: {
            async handler() {
                const results = await find({
                    need: ['content','title','ctime','tag'],
                    by: {
                        id: this.ID
                    }
                });
                this.setBlogInfo(results);
            },
            immediate: true
        }
    },
    methods: {
        setBlogInfo (res) {
            let blogInfo = res.data.data[0];
            const ctime = blogInfo.ctime.split('-');
            const newCtime = ctime[0] + '年' + ctime[1]+ '月' + ctime[2] + '日';
            blogInfo.ctime = newCtime;
            this.blogInfo = blogInfo;
        },
        changeShow() {
            this.ifshow = !this.ifshow;
        }
    }
}
</script>
<style scoped>
    .nav-header {
        position: relative;
        box-sizing: border-box;
    }
    .nav-header .menu-cata {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 25px;
        border-radius: 3px;
        font-weight: 300;
        display: none;
    }
    @media (max-width: 768px){
        .nav-header .menu-cata {
            display: block;
        }
    }
    .xs-cata {
        box-sizing: border-box;
        position: absolute;
        top: 100%;
        display: none;
    }
    .xs-cata.open {
        display: block;
        width: 100%;
        background-color: #f8f8f8;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-height: 200px;
        overflow-y: auto;
    }
    .blogContainer {
        padding: 10px 20px 0 20px;
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
    }
    .title {
        font-size: 25px;
        width: 290px;
        margin: 0 auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .ctime {
        margin-bottom: 5px;
    }
    .ctime>span {
        margin: 10px;
    }
    .content {
        text-align: left;
        word-break: break-all;
    }
</style>