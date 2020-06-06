<template>
    <div class="about">
        <div class="head">
            <img src="../assets/fox.jpg">
        </div>
        <div class="motto mbt30">
            亨，小狐汔济，濡其尾，无攸利。 ———— 《易经·未济卦》
        </div>
        <div v-html="aboutBlog" class="about-blog" />
    </div>
</template>
<script>
import { find } from '../service/api'
export default {
    data() {
        return {
            aboutBlog: ''
        }
    },
    created() {
        find({
            need: ['content'],
            by: {
                title: '关于博客',
            }
        }).then(res => {
            this.aboutBlog = res.data.data[0].content
        })
    }
}
</script>
<style>
    .about {
        height: 100%;
        overflow: auto;
        /* text-align: left; */
    }
    .about .head img {
        height: 180px;
        border-radius: 50%;
        margin-top: 10px;
    }
    .about .motto {
        font-size: 27px;
    }
    .mbt30 {
        margin: 30px 0;
    }
    .about-blog p {
        text-align: left;
        text-indent: 2em;
    }
</style>