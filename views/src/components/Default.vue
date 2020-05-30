<template>
    <div class="default-content">
        <div class="newsContainer">
            <dl>
                <dt class="title">最新文章</dt>
                <dd v-for="(item,index) in catalog" :key="index"><router-link :to="'/pages/' + item.parentTag+'/'+ item.tag +'/'+item.id">{{ item.title }}</router-link></dd>
            </dl>
        </div>
    </div>
</template>

<script>
import { find } from '../service/api'
export default {
    async created() {
        const results = await find({
            need: ['title', 'tag', 'id', 'parentTag']
        });
        this.getCatalog(results);        
    },
    data() {
        return {
            catalog: null
        }
    },
    methods: {
        getCatalog(res) {
            const data = res.data.data;
            this.catalog = data;
        }
    }
}
</script>

<style scoped>
    .default-content {
        height: 100%;
        width: 100%;
        overflow: auto;
    }
    dl {
        margin: 0;
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
    }
    dt.title {
        background-color: #ddd;
        border-bottom: 1px solid #aaa;
        border-radius: 5px 5px 0 0 ;
        padding: 5px 0;
    }
    dd {
        padding: 5px;
        border-bottom: 1px solid #aaa;
        border-left: 1px solid #aaa;
        border-right: 1px solid #aaa;
        margin: 0;
    }
    dd a:hover {
        text-decoration: underline;
    }
    dd:last-of-type {
        border-radius: 0 0 5px 5px;
    }
</style>>