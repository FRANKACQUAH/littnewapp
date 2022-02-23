<template>
<div class="register">
  <div class="container">
      <div class="forms-container">
        <div class="signin-signup" v-if="signup">
            <form action="#" class="sign-in-form">
                <h2 class="title">Sign in</h2>
                <div class="input-feild">
                   <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <input type="text" placeholder="Username"> 
                </div>
                <div class="input-feild">
                   <i class="fa fa-unlock" aria-hidden="true"></i>
        <input type="text" placeholder="Password"> 
                </div>
                <input type="submit" class="btn solid" value="Login"/>
                <div class="btn solid" @click="toggle">Or Sign up</div>
                <p class="social-text">Or Sign in with social media</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                   <a href="#" class="social-icon">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                   <a href="#" class="social-icon">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                  <a href="#" class="social-icon">
                  <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                  </a>
                </div>
            </form>
        </div>
         <div class="signup-signup" v-else>
            <form action="#" class="sign-up-form">
                <h2 class="title">Sign up</h2>
                <div class="input-feild">
                   <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <input type="text" placeholder="Username"> 
                </div>
                 <div class="input-feild">
                   <i class="fa fa-envelope" aria-hidden="true"></i>
        <input type="email" placeholder="Email"> 
                </div>
                <div class="input-feild">
                   <i class="fa fa-unlock" aria-hidden="true"></i>
        <input type="text" placeholder="Password"> 
                </div>
                <div class="input-feild">
                   <i class="fa fa-unlock" aria-hidden="true"></i>
        <input type="text" placeholder="Confirm password"> 
                </div>
                <input type="submit" class="btn solid" value="Sign Up"/>
                <div class="btn solid" @click="toggle">Or Login</div>
                <p class="social-text">Or Sign up with social media</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                   <a href="#" class="social-icon">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                   <a href="#" class="social-icon">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                  <a href="#" class="social-icon">
                  <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                  </a>
                </div>
            </form>
        </div>
      </div>
  </div>
</div>
  
</template>
<script>
export default {
  name: "Register",
  data(){
    return {
      signup: 0,
      toggleArray: [1, 0]
    }
  },
  methods:{
    toggle(){
      this.signup = this.toggleArray[this.signup]
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap');
.register {
  margin-top: 120px;
  background-image: url(../assets/img/register.png);
  background-size: cover;
  background-repeat: no-repeat;
  height:80%;
  width:100%;
  /* margin-bottom: 100px; */
}
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
body, 
input{
  font-family:"Poppins", sans-serif;
}
.container{
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.forms-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0%;
  left:0%;
  align-items:center;
}
form{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title{
  font-size: 2.2rem;
  color:#444;
  margin-bottom: 10px;
}
.input-feild{
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}
.input-feild i{
  text-align: center;
  line-height:55px;
  color:#acacac;
  font-size: 1.5rem;
  margin-right:10px;
}
.input-feild input{
  background: none;
  outline: none;
  border:none;
  line-height:1px;
  font-weight:600px;
  font-size: 1.2rem;
  color:#333;
}
.input-feild input:placeholder-shown{
  color:#acacac;
  font-weight: 500px;
}
.btn{
  width: 150px;
  color: black;
  height: 49px;
  padding: 12px;
  border: none; 
  border-radius: 48px;;
  background-color: crimson;
  text-transform: uppercase;
  font-weight: 600px;
  margin: 10px 0;
  transition: all 0.5s;
}
.btn:hover{
 background-color: rgb(248, 35, 78);
}
.social-icon{
  padding: 10px;
  font-size: 20px;
}
.social-icon:hover{
color: crimson;
}
.social-media{
  display: flex;
  justify-content: center;
}
.btn:hover{
  color: white;
}
.signin-signup{
  position: center;
  top: 50px;
  left: 75;
  background-color: #acacac;
  border-color: white;
  border-radius: 15px;
  margin-left:100px;
  padding: 50px;
  /* transform: translate (-50%, 50%); */
  align-items:center;
}
.signup-signup{
  position: center;
  top: 50px;
  margin-left:20px;
  right: 200px;
  padding:50px;
  /* transform: translate (-50%, 50%); */
  background-color: #acacac;
  border-color: white;
  border-radius: 15px;
  opacity: 0.9px;
}
</style>