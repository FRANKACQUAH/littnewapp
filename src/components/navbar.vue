<template>
  <div id="header">
    <div class="header1">
      <div class="navbar">
        <div class="brand">
          <a href="#hero"
            ><h1>Lean Icon<span> Logo</span></h1></a
          >
        </div>
        <div class="nav-list">
          <div class="humburger" @click="showHam" style="background-color:rgb(31, 30, 30, 0.24);">
            <div class="bar"></div>
          </div>
          <ul class="hamburger-inactive">
            <li><a href="#" data-after="Home">Home</a></li>
            <li><a href="#" data-after="Services">Services</a></li>
            <li><a href="#" key="" data-after="Projects">Projects</a></li>
            <li><a href="#" data-after="About us">About us</a></li>
            <li><a href="#" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*This founction should not be cleared.It can only be modified to call another element*/
export default {
  name: "Navbar",
  methods: {
    showHam() {
      const humburger = document.querySelector(".hamburger-inactive");
      const mobile_menu = document.querySelector("header, navbar, nav-list ul");
      const header = document.querySelector("header.container");
      humburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
      header.classList.toggle("active");
    },
  },
};
</script>
<style scoped>
/* header styling*/
.brand h1 span {
  color:black;
}
.brand h1 {
  color: white;
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#header {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
}
#header .header {
  min-height: 8vh;
  background-color: rgb(31, 30, 30, 0.24);
}
#header .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  height: 100%;
  padding:0 10px;
  background-color:crimson;
}
#header .nav-list ul {
  list-style: none;
  position: absolute;
  background-color: rgb(31, 30, 30);
  width: 100vw;
  height: 100vh;
  left: 100%;
  top: 0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow-x: hidden;
}
#header .nav-list ul.active {
  left: 0;
}
#header .nav-list ul a {
  font-size: 2.5rem;
  font-weight: 500px;
  letter-spacing: 0.2rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  display: block;
}
#header .nav-list ul a::after {
  content: attr(data-after);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: rgb(240, 248, 255, 0.021);
  font-size: 8rem;
  letter-spacing: 50px;
  z-index: -1;
  transition: 0.3s ease letter-spacing;
}
#header .nav-list ul li:hover a::after {
  transform: translate(-50%, -50%) scale(1);
  letter-spacing: initial;
}
/* humburger styling*/
#header .humburger {
  z-index: 100;
  width: 60px;
  height: 60px;
  display: inline-block;
  border: 3px solid white;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scale(0.8);
  margin-right: 20px;
}
#header .humburger.active .bar ::before,
#header .humburger.active .bar ::after {
  top: 0;
  bottom: 0;
}
#header .humburger .bar {
  height: 2px;
  width: 30px;
  position: relative;
  background-color: white;
  z-index: -1;
}
#header .humburger .bar::after,
#header .humburger .bar::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 80%;
  left: 0;
  background-color: white;
  transition: 0.3s ease;
  transition-property: top, bottom;
}
#header .humburger .bar::after {
  top: 8px;
}
#header .humburger .bar::before {
  bottom: 8px;
}
</style>
