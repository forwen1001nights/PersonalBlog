<template>
    <div id="catalog">
        <div class="target">
            <div>2022毕业目标:</div>
            <div>落叶无声江自流</div>
        </div>
        <div class="catalogs">
            <div class="searchBar" :class="{'hideSearch':ifHideSearch}">
                <el-input placeholder="请输入关键字搜索"
                    v-model="searchKey"
                >
                    <el-button slot="append" icon="el-icon-search" @click="searchByKey"></el-button>
                </el-input>
            </div>
            <ul>
                <li v-for="(item, index) in catalog" :key="index"><router-link :to="'/pages/'+item.parentTag+'/'+item.tag+'/'+item.id">{{item.title}}</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { find } from '../service/api'
export default {
    props: ['parentTag'],
    data() {
        return {
            catalog: [],
            ifHideSearch: true,
            searchKey: ''
        }
    },
    watch: {
        parentTag: {
            async handler() {
                if (this.parentTag === 'search') {
                    this.catalog = [];
                    this.ifHideSearch = false;
                }else {
                    this.ifHideSearch = true;
                    const results = await find({
                        need: ['title','tag','id','parentTag'],
                        by: {
                            parentTag: this.parentTag
                        }
                    });
                    this.setCatalog(results);
                }
            },
            immediate: true
        }
    },
    methods: {
        setCatalog(response) {
            this.catalog = response.data.data
        },
        async searchByKey() {
            const results = await find({
                need: ['title','tag','ID','parentTag'],
                by: {
                    title: {
                        value: this.searchKey,
                        isFuzzy: true
                    }
                }
            });
           this.setCatalog(results);
        },
    },
}
</script>
<style scoped>
    #catalog {
        height: 100%;
        overflow-y: auto;
    }
    .target {
        height: 96px;
        width: 100%;
        font-size: 20px;
        font-weight: 800;
        padding-top: 15px;
        box-sizing: border-box;
        font-family: 'STXihei';
    }
    .catalogs>ul>li {
        padding: 5px 2px;
        font-size: 14px;
        text-align: left;
    }
    .catalogs>ul>li a:hover {
        text-decoration: underline;
    }
    .hideSearch {
        display: none;
    }
</style>