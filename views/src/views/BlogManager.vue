<template>
    <div class="manager">
        <header>
            <h2>博客管理页面</h2>
            <div class="extra">
                <span class="user-info">欢迎您, {{currentUser}}</span>
                <span class="login-out" @click="loginOut">退出登陆</span>
            </div>
        </header>
        <el-table
        :data="tableData"
        border
        stripe
        style="width: 80%">
            <el-table-column
                prop="id"
                label="博客编号"
                width="80">
            </el-table-column>
            <el-table-column
                prop="title"
                label="博客标题">
            </el-table-column>
            <el-table-column
                prop="ctime"
                label="创建时间">
            </el-table-column>
            <el-table-column
                prop="tag"
                label="标签"
                width="80">
            </el-table-column>
            <el-table-column
                width="90"
                label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="editBlog(scope.row)">编辑</el-button>
                    <el-button type="text" size="small" @click="deleteBlog(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button class="add" @click="pageToAdd">+ 新增博客</el-button>
    </div>
</template>
<script>
import { find, deleteBlog } from '../service/api'
import { mapState } from 'vuex'
export default {
    async created() {
        const results = await find({
            need: ['id','title','ctime','tag'],
        });
        this.setTableData(results);
    },
    inject: ['reload'],
    data() {
        return {
            tableData: []
        }
    },
    computed: {
        ...mapState(['isLogin', 'currentUser'])
    },
    methods: {
        setTableData(res) {
            let dataArr = res.data.data;
            this.tableData = dataArr;
        },
        pageToAdd() {
            this.$router.push('/editBlog/add')
        },
        loginOut() {
            this.$router.push({
                path: '/'
            })
        },
        editBlog(row) {
            this.$router.push({
                path: '/editBlog/edit',
                query: {
                    blogID: row.id
                }
            })
        },
        async deleteBlog(row) {
            const result = await deleteBlog({
                condition: {
                    by: {
                        id: row.id
                    }
                }
            });
            if(result.data.status === 200) {
                alert('删除成功');
                this.reload();
            }else {
                alert('删除失败')
            }
        }
    }
}
</script>>
<style scoped>
    header {
        position: relative;
        display: flex;
        justify-content: center;
    }
    header .extra {
        position: absolute;
        top: 10px;
        right: 30px;
    }
    header .extra .login-out {
        margin-left: 10px;
        color: #aaa;    
        cursor: pointer;    
        font-size: 14px;
    }
    header .extra .login-out:hover {
        text-decoration: underline;
        color: #409eff;
    }
    .el-table {
        margin: 0 auto;
    }
    .add {
        margin-top: 20px;
    }
</style>