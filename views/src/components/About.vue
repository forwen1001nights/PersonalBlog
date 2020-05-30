<template>
    <div class="about">
        <div class="head">
            <img src="../assets/fox.jpg">
        </div>
        <div class="motto mbt30">
            亨，小狐汔济，濡其尾，无攸利。 ———— 《易经·未济卦》
        </div>
        <div class="about_blog mbt30">
            <h2>关于博客</h2>
            <p>
                编程就像无袜穿鞋，时间久了难免脚汗涔涔，脱了这双鞋又不知怎行路，这一切一切不过是苦乐自己而已。怎样也好，至少在
                往前走。何其幸运，世界上有一些难得可贵的东西，解决问题办法总比困难多；热爱分享好人总比坏人多。
            </p>
        </div>
        <div class="about_self mbt30">
            <h2>关于作者</h2>
            <p>
                一个畏惧天道的无神论者，喜欢读书，尤其热爱拉美文学。喜欢足球、冰球还有拳击，野心不大，希望在今后的时间里
                多进步一些，靠近达成一些既定的目标，同时感受创造一些美好的事物。
            </p>
        </div>
        <div class="about_now mbt30">
            <h2>谈谈现在</h2>
            <p>
                某国内二本大二学生，全栈工程师，熟悉web开发、微信小程序等技术。希望通过这个博客在成长的同时更成长，在成长的同时
                也能帮助他人成长，尚无职业履历。
            </p>
        </div>
        <div class="links">
            <h2>欢迎关注</h2>
            欢迎关注我的<a href=""><b>GitHub</b></a>
        </div>
        <footer></footer>
    </div>
</template>
<style scoped>
    .about {
        height: 100%;
        /* overflow: -moz-scrollbars-vertical; */
        overflow: auto;
    }
    .head img {
        height: 180px;
        border-radius: 50%;
        margin-top: 10px;
    }
    .motto {
        font-size: 27px;
    }
    .mbt30 {
        margin: 30px 0;
    }
    p {
        font-size: 18px;
        text-align: left;
        text-indent: 2em;
        line-height: 35px;
    }
</style>