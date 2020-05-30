<template>
    <div  class="pull-down" v-show="show">
        <ul class="pull-down-list">
            <li class="pull-down-item" :class="{ 'show-children': showIndexArr.indexOf(index) >= 0 }" v-for="(item, index) in list" :key="item.name" @click="showChildren(index)">
                <div class="pull-down-bar">
                    <div v-if="item.children">
                        {{item.name}}
                    </div>
                    <div v-else class="isTitle" @click="jumpToAtc">
                        <router-link :to="'/pages/' + item.parentTag +'/'+ item.tag +'/'+item.id">{{ item.title }}</router-link>
                    </div>
                    <i v-show="item.children" class="el-icon el-icon-caret-right"></i>
                </div>
                <pulldown-list :list="item.children" v-if="item.children" :changeShow="changeShow" :show="showIndexArr.indexOf(index) >= 0" />
            </li>
        </ul>
    </div>
    
</template>
<script>
export default {
    name: "PulldownList",
    data() {
        return {
            showIndexArr: []
        }
    },
    props: {
        changeShow: {
            type: Function
        },
        list: {
            type: Array,
            default: function() {
                return [{
                    name: 111,
                    children: [
                        {
                            parentTag: 'front-end',
                            id: 1,
                            name: 333,
                            tag: 'vue'
                        }
                    ]
                },{
                    name: 222,
                    children: [
                        {
                            id: 1,
                            name: 444,
                            tag: 'vue'
                        }
                    ]
                }]
            }
        },
        show: {
            type: Boolean,
            default: false
        },
        parentName: {
            type: String,
            default: ''
        }
    },
    methods: {
        showChildren (index) {
            const idx = this.showIndexArr.indexOf(index);
            if(idx < 0) {
                this.showIndexArr.push(index);
            }else {
                this.$delete(this.showIndexArr, idx)
            }
        },
        jumpToAtc() {
            this.changeShow();
        }
    }
}
</script>
<style scoped>
    .pull-down {
        padding: 0 10px;
    }
    li.pull-down-item {
        position: relative;
        list-style: none;
        line-height: 30px;
    }
    li.pull-down-item .pull-down-bar {
        display: flex;
        justify-content: space-between;
    }
    .pull-down-bar .isTitle {
        cursor: pointer;
        text-decoration: underline;
    }
    li .el-icon {
        line-height: 30px;
    }
    li.pull-down-item.show-children .el-icon-caret-right {
        transform: rotate(90deg);
    }
</style>