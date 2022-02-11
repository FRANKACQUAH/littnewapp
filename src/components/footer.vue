<template>
<div class="footer">
 <!-- Begining of footer -->
<footer class="footer-content">
<h3 class="footer-section" style="color:white">My Leanicon Technology <span>News App</span></h3>
<ul class="social">
<li><a href="#" style="color:crimson"><i class="fa fa-facebook"> MyLeaniconTech </i></a></li>
<li><a href="#" style="color:crimson"><i class="fa fa-twitter"> MyLeaniconTech </i></a></li>
<li><a href="#" style="color:crimson"><i class="fa fa-linkedin-square"> MyLeaniconTech </i></a></li>
<li><a href="#" style="color:crimson"><i class="fa fa-youtube"> MyLeaniconTech </i></a></li>
</ul>
<div class="footer-bottom">
<p>Contact:(+233(0) 546780223 / 506825542</p>
<p class="section">Copyright &copy;2022 My Leanicon Technolgy App. All Rights Reserved</p>
</div>
</footer>
    <!--End of Footer -->
</div>
</template>
<script>
/*This founction should not be cleared.It can only be modified to call another element*/
  export default {
  name: 'Footer'
   
  }
</script>
<style scoped>
footer{
 background:rgb(26, 24, 24);
 height:auto;
 width:100%;
 padding-top:40px;
 margin-top:20px;
}
.footer-content{
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 text-align:center;
}
.footer-content p{
 color:white;
}
.social{
list-style:none;
display:flex;
margin:20px;
align-items:center;
justify-content:center;
margin: 1rem 0 3rem 0;
color:white;
}
.social li{
 margin:10px;
}
.social li i{
 font-size:1.1rem;
}
.social a:hover i{
 color:white;
}
.footer-content h3 span{
 color:crimson;
}
.footer-bottom{
  background-color:black;
  width:100%;
  padding:20px 0;
  text-align:center;
}

</style>
