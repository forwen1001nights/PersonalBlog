<template>
    <div class="edit_container">
      <h1>文章编辑</h1>
      <div class="head">
        <div class="title-input">
          <el-input v-model="title" placeholder="请输入文章标题" />
        </div>
        <div class="tag-input">
          <el-input v-model="tag" placeholder="请输入文章标签" />
        </div>
        <div class="parent-tag-sel">
          <el-dropdown>
            <el-button type="default">
              {{parentTagName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="chooseParentTag(item.name, item.value)" v-for="item in pTagList" :key="item.value">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <mavon-editor @change="setContent" />
      <el-button @click="onSubmit">提交</el-button>
    </div>
</template>
<script>

import moment from 'moment';
import { addBlog, find, editBlog } from '../service/api';
import { pTagList } from '../../config/blog'
export default {
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.fillEditData(to.query.blogID)
      })
    },
    data() {
        return {
            pTagList,
            content: '',
            editorOption: {},
            title: '',
            tag: '',
            parentTagName: '请选择栏目',
            parentTag: '',
            editBlogID: null,
            ifEdit: false
        }
    },
    methods: {
        chooseParentTag(name, value) {
          this.parentTagName = name;
          this.parentTag = value;
        },
        setContent(value, render) {
          this.content = render;
        },
        
        async onSubmit() {
          const router = this.$router;
          if(this.editBlogID && this.ifEdit) {
            const result = await editBlog({
              condition: {
                by: {
                  id: this.editBlogID
                }
              },
              data: {
                title: this.title,
                tag: this.tag,
                content: this.content,
                parentTag: this.parentTag
              }
            })
            if(result.data.status === 200) {
              alert('修改成功');
              router.push('/manager');
            }else {
              alert('修改失败');
              this.fillEditData(this.editBlogID);
            }
          }else {
            const result = await addBlog({
              blog: {
                title: this.title,
                tag: this.tag,
                content: this.content,
                parentTag: this.parentTag,
                ctime: moment().format("YYYY-MM-DD")
              }
            })
            if(result.data.status === 200) {
              alert('添加成功');
              router.push('/manager');
            }else {
              alert('添加失败')
            }
          }
        },
        async fillEditData(blogID) {
          this.editBlogID = blogID;
          this.ifEdit = true;
          const result = await find({
            need: ['title', 'tag', 'parentTag', 'content'],
            by: {
              id: blogID
            }
          });
          if(this.ifEdit && this.editBlogID) {
            this.setEditInfo(result);
          }
        },
        setEditInfo(res) {
          const data = res.data.data[0];
          this.editInfo = data;
          this.title = data.title;
          this.tag = data.tag;
          this.parentTag = data.parentTag;
          this.content = data.content;
        }
    },
    computed: {
        // editor() {
        //     return this.$refs.myQuillEditor.quill;
        // },
    }
}
</script>
<style scoped>
/* .head .parent-tag-sel {
  display: flex;
  align-items: center;
} */
.el-dropdown {
  vertical-align: middle;
}
.el-dropdown .el-button {
  position: static;
  vertical-align: middle;
  margin: 5px 0;
}
/* .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
} */
.edit_container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.el-button {
  margin-top: 10px;
  position: absolute;
  right: 10px;
}
.el-input {
  width: 200px;
  margin-right: 10px;
}
.head {
  display: flex;
}
/* .head .title-input {
  height: 70px;
}
.head .tag-input {
  height: 70px;
}
.head .tag-input .parent-tag-sel {
  height: 70px;
  width: 100px;
  position: relative;
} */
</style>