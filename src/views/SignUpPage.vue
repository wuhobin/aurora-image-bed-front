<template>
  <div>
    <div id="home-cover-wrap">
      <div class="home-cover-img"></div>
      <div class="login-box">
        <h1>注册账户</h1>
        <div class="content-section">已经有账户了? <a>登录</a> 现在。你也可以<a> 重新激活帐户. </a> 或者 <a @click="goToHome">回到首页</a>.</div>
        <form action="" method="post">
          <input v-model="email" type="text" name="" placeholder="Email地址">
          <input v-model="username" type="text" name="" placeholder="用户名">
          <input v-model="password" type="password" name="" placeholder="密码">
        </form>
        <el-button type="primary" size="mini" @click="register">注册账户</el-button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "SignUpPage",
  data() {
    return {
      email: "",
      username: "",
      password: ""
    }
  },
  methods: {
    goToHome() {
      this.$router.push("/")
    },
    register() {
      if (this.email === '' || this.username === '' || this.password === '') {
        this.$notify.error({
          title: '表单校验失败',
          message: '请输入必填项'
        });
        return
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.$notify.error({
          title: '表单校验失败',
          message: '请输入正确的邮箱地址'
        });
        return
      }
      this.$http.UserRegister({ email: this.email.trim(), username: this.username.trim(), password: this.password.trim() }).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$router.push({
            path: '/awaiting-confirmation',
            query: {
              email: this.email.trim()
            }
          });
        } else {
          this.$notify.error({
            title: '注册失败',
            message: res.msg
          });
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
#home-cover-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

#home-cover-wrap::after {
  content: "";
  z-index: 1;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.1)),
      to(rgba(0, 0, 0, 0)));
  background: -webkit-linear-gradient(top,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%);
  background: -o-linear-gradient(top,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%);
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%);
}

#home-cover-wrap .home-cover-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: block;
  opacity: 1;
  z-index: -1;
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: url(https://imgse.com/content/images/system/home_cover_1601010270144_8921bc.jpg);
}

.login-box {
  min-width: 270px;
  max-width: 310px;
  width: calc(100vw - 40px);
  text-align: center;
  position: relative;
  margin: 20px;
  padding: 20px;
  color: #333;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 3px;
}


.login-box h1 {
  font-size: 22px;
  margin: 20px 0 30px 0;
  font-weight: normal;
}

.login-box .content-section {
  margin-bottom: 20px;
}

.login-box .content-section a {
  color: #00A7DA;
}

.login-box .content-section a:hover {
  text-decoration: underline;
}

input {
  outline: 0;
  padding: 10px 0;
  width: 100%;
  border-radius: 0;
  border-color: #ebebeb;
  background: transparent;
  box-shadow: none;

  color: #333;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;

  display: inline-block;

}

input:focus {
  border-color: #3498db;
}

/* 兼容不同浏览器的写法 */
input::placeholder {
  color: #999;
}

.el-button {
  margin-top: 20px;
}
</style>