<template>
  <div>
    <div id="home-cover-wrap">
      <div class="home-head">
        <ul>
          <li @click="login">登录</li>
          <li @click="signUp" class="sign-up">注册账户</li>
        </ul>
      </div>
      <div class="home-cover-img animate-in" :style="{ backgroundImage: `url(${currentBackground})` }"></div>
      <div id="home-cover-content">
        <h1>上传与分享您的照片</h1>
        <p class="">遇见图床-高速稳定的图片上传和外链服务<br>
          全球CDN加速, 支持外链, 原图保存, 最大单张支持10 MB <br>
          请遵守中国法律法规, 禁止上传色情/黑产等违法图片.</p>
        <div class="home-buttons">
          <a class="btn btn-big green">开始上传</a>
        </div>
      </div>
      <div class="footer">
        <p>本站共托管 287,831 张图片</p>
        请遵守当地法律法规！ <a href="https://beian.miit.gov.cn/" rel="generator">鄂ICP备20006685号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      backgrounds: [
        "https://aurora-cdn.wuhobin.top/blog/f2c2d3cd6e6620c19590d4a279550c4.jpg",
        "https://aurora-cdn.wuhobin.top/blog/home-cover1.png",
        "https://aurora-cdn.wuhobin.top/blog/home-cover3.png",
        "https://aurora-cdn.wuhobin.top/blog/home-vover2.jpg",
        "https://aurora-cdn.wuhobin.top/blog/c195608eeb8fd5d7023885fce1254d2.jpg",
      ],
    };
  },
  computed: {
    currentBackground() {
      const index = this.calculateIndex();
      return this.backgrounds[index];
    },
  },
  methods: {
    calculateIndex() {
      const timestamp = new Date().getTime();
      const index = timestamp % this.backgrounds.length;
      return index;
    },
    login(){
      this.$router.push("/login");
    },
    signUp(){
      this.$router.push("/signup");
    }
  },
};
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
  opacity: 0;
  z-index: -1;
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

@-webkit-keyframes slideshow {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes slideshow {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@-webkit-keyframes slideshow--alt {
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes slideshow--alt {
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

.home-cover-img.animate-in,
.home-cover-img.animate-in--alt {
  -webkit-animation-name: slideshow;
  animation-name: slideshow;
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

#home-cover-wrap #home-cover-content {
  color: white;
  text-align: center;
}

#home-cover-content h1 {
  font-size: 3em;
  line-height: 120%;
  font-weight: 600;
}

#home-cover-content p {
  width: 790px;
  font-size: 22px;
  margin: 20px 0;
  font-weight: 100;
}

#home-cover-content .home-buttons {
  margin: 30px 0 20px;
  text-align: center;
  color: #fff;

}

.btn {
  font-family: inherit;
  font-weight: normal;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
}

.btn.green,
.btn.red,
.btn.black {
  color: #FFF;
  border: 1px solid transparent;
  background-color: #27AE61;
}

.btn.green:hover {
  background-color: #25A55C;
}

#home-cover-content .home-buttons a {
  font-size: 16px;
  text-transform: uppercase;
  line-height: 1.5;
  height: auto;
  text-align: center;
  letter-spacing: 2px;
  padding: 12px 30px;
}

.footer {
  color: #fff;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
}


.home-head {
  position: fixed;
  top: 0;
  left: 0;
  color: #FFF;
  right: 0;
  z-index: 400;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  font-size: 14px;
}


.home-head ul {
  display: flex;
  margin-right: 50px;
  align-items: center; 
}

.home-head li {
  margin-left: 20px;
  cursor: pointer;
  text-align: center;
}


li.sign-up{
  background-color: #2A80B9;
  padding: 4px 12px;
  border-radius: 2px;
}
</style>
