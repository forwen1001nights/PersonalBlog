<template>
  <div class="login">
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    <el-button @click="onLogin">登陆</el-button>
  </div>
</template>
<script>
import { login } from '../service/api'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapMutations(['setCurUser', 'loginIn']),
    async onLogin() {
        const router = this.$router
        const data = {
            username: this.username,
            password: this.password
        }
        const result = await login(data);
        if(result.data.status === 'success') {
          this.loginIn();
          this.setCurUser(this.username);
          router.push({path: '/manager', query: { username: this.username}});
        }else {
          alert('用户名或密码错误');
        }
    }
  }
};
</script>

<style>
.login {
  width: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
.el-input {
  margin: 5px 0;
}
</style>