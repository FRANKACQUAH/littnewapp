# littnewapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
#   l i t t n e w a p p 
 
 
******This App is a simple News and Content Publishing App Project for work*******

It is meant to help users access news content, publish news conent of any form all on one platform. 
This App will have features like Sign in/Sign up page, a dashbord and a publishing page to display all news content from the database. 
I will use laravel framework (P.H.P) for the backend and Vue.js for the front end including all components and libraries. 

 /*Auto body styling*/
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
 /*Button anchor decoration*/
a{
  text-decoration:none;
}
 /*Hero container styling*/
.container{
  min-height:100vh;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
 /*Hero Styling*/
}
#hero{
  background-size:cover;
  background-position:top center;
  position: relative;
  /*Will change background image for a better display*/
  background-image:url(./assets/img/nana.jpg)
  /*#hero::after (color-overlay) Not Working*/
  }
#hero::after {       
background-color:black;
position:absolute;
left:0;
top:0;
height:100%;
width:100%;
}
#hero h1{
display:block;
width:fit-content;
font-size:4rem;
position:relative;
/*Text transition animation update*/
color:transparent;
animation:text_reveal .5s ease forwards;
animation-delay: .3s;
}
/*Timing functionality on text*/
#hero h1:nth-child(1){
animation-delay:1s;
}
#hero h1:nth-child(2){
animation-delay:2s;
}
#hero h1:nth-child(3){
animation-delay:2s;
animation:text_reveal_name .5s ease forwards;
}
/*Span delay effect*/
#hero h1 span:nth-child(1){
animation-delay:.5s;
}
#hero h1 span:nth-child(2){
animation-delay:1.5s;
}
#hero h1 span:nth-child(3){
animation-delay:2s;
}
/*Alignning text display*/
#hero .hero{
max-width: 1200PX;
margin:0 auto;
padding:0 50px;
justify-content:flex-start;
}
 /*Using the button class of "cta" to style  button*/
#hero .cta {
display:inline-block;
color:wheat;
padding:20px 30px;
background-color: transparent;
border:2px solid crimson;
text-transform: uppercase;
letter-spacing:1rem;
margin-top:30px;
transition:.3s ease;
transition-property:background, color;
}
#hero .cta:hover{
color:white;
background-color: crimson;
/*Transition styling*/
}
#hero h1 span{
position:absolute;
top:0;
left:0;
height:100%;
width:0;
background-color: crimson;
animation:text_reveal_box 1s ease;
animation-delay:1s;
}
/*Keyframes for text reveal box size*/
@keyframes text_reveal_box{
 50%{
 width:100%;
 left:0;
 }
 100%{
 width:0;
 left:100%;
 }
}
/*For controlling text colour*/
@keyframes text_reveal{
 100%{
 color:white;
 }
}
/*Changed last text color and weight*/
@keyframes text_reveal_name{
 100%{
 color:crimson;
 font-weight:500px;
 }
} /*End of hero styling*/
/*Services styling*/
#services .services{
flex-direction:column;
max-width:1500px;
margin:auto;
text-align:center;
padding:100px 0;
}
.section-title{
  font-size:3rem;
  text-align:center;
  font-weight:300;
  color:black;
  margin-bottom:10px;
  text-transform:uppercase;
  letter-spacing:2rem;
}
.section-title span{
color:crimson;
}
#services .section-title p{
  color:white;
  font-size:1.4rem;
  margin-top:5px;
  letter-spacing:.05rem;
  line-height:2.5rem;
}
#services .section-bottom{
  display:flex;
  text-align:center;
  justify-content: center;
  flex-wrap:wrap;
} 
#services .service-item{
  flex-basis: 70%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  padding:30px;
  border-radius:10px;
  background-image:url(./assets/img/code.jpg);
  background-size:cover;
  margin:10px 5%;
  position:relative;
   z-index:1;
   overflow:hidden;
}
#services .service-item::after{
  content:'';
  position:absolute;
  left:0;
  top: 0;
  height:100%;
  width:100%;
  background-color: black;
  opacity:.4;
  z-index:-1;
}
#services .service-item h2{
  font-size:2rem;
  text-transform:uppercase;
  font-weight:bold;
  color:white;
}
#services .service-item p{
  font-size:18px;
  color:white;
  text-align:left;
  line-height:1.9rem;
}
p{
  font-size:18px;
  color:black;
  margin:10px;
  text-align:center;
  line-height:1.9rem;
}

/*styling the project section*/
#projects .project{
  flex-direction:column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;

}
/*End of styling the project section*/
/*Styling for published projects*/
.card{
background-color:rgb(26, 24, 24);
color:white;
margin-top:0 auto;
margin:10px;
padding:5px;
text-align:center;
text-transform:uppercase;
border-radius:2rem;
}
.card-img-top{
border-radius:2rem;
}
.card-text{
color:white;
text-transform:lowercase;
font-size:14px;
}
.card-title{
 font-size:15px;
}
/*Copntact section styling*/
#contact .contact{
flex-direction: column;
max-width:1200px;
margin:0 auto;
}
#contact .contact-items{
width: 500px;
}
#contact .contact-item{
align-items:center;
text-align:center;
width: 80%;
border-radius:10px;
margin:30px;
padding:30px;
justify-content:center;
display:flex;
box-shadow: 0px 0px 18px 0px #0000002c;
flex-direction:column;
transition: .3s ease box-shadow;
}
#contact .contact-item:hover{
box-shadow: 0px 0px 15px 0px #0000002c;
}
#contact .icon{
width:70px;
height:70px;
margin:0 auto;
margin-bottom:10px;
margin-top:10px;
}
#contact .contact-info h1{
 font-size:2.5rem;
 font-weight:500;
 margin-bottom:5px;
}
#contact .contact-info h2{
 font-size:1.5rem;
 font-weight:500;
 margin-bottom:5px;
 line-height:2rem;
font-weight:500;
}
#footer{
 height:0 auto;
}
.footer-text{
 color:white;
}
/*End of contact section styling*/
/*Footer styling*/
/*End of styling*/
#app {
/*General app style. This can be deleted since we have already styled the body of the project*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top:0;
}