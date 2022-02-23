<template>
  <div class="footer">
    <footer class="footer-content">
      <ul class="social">
        <li>
          <a href="#" style="color: crimson"
            ><i class="fa fa-facebook"> MyLeaniconTech</i></a
          >
        </li>
        <li>
          <a href="#" style="color: crimson"
            ><i class="fa fa-twitter"> MyLeaniconTech</i></a
          >
        </li>
        <li>
          <a href="#" style="color: crimson"
            ><i class="fa fa-linkedin-square"> MyLeaniconTech</i></a
          >
        </li>
        <li>
          <a href="#" style="color: crimson"
            ><i class="fa fa-youtube"> MyLeaniconTech</i></a
          >
        </li>
      </ul>
      <div class="footer-bottom">
        <p>Contact: (+233(
          0) 546780223 / 506825542)</p>
        <p class="section">
          Copyright &copy; 2022 My Leanicon Technology App. All Rights Reserved
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
</script>
<style scoped>
* {
  background-color: black;
}
.footer {
  height: auto;
  padding-top: 40px;
  margin-top: 20px;
}
.footer-text {
  color: white;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
}
p {
  color: white;
}
.footer-content li i:hover {
 color: white;
}
.social{
 list-style: none;
 display:flex;
}
.social li {
  margin: 10px;
}
.social li i {
  font-size: 1.1rem;
}
.social a:hover i {
  color: white;
}
.footer-content h3 span {
  color: crimson;
}
.footer-bottom {
  background-color: black;
  width: 100%;
  padding: 20px 0;
  text-align: center;
}
</style>