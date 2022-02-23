<template>
    <div class="about">
    <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">About<span>Us</span></h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          libero, ut perspiciatis officia odio nostrum animi sint enim maiores
          dicta? Temporibus tempore at deserunt, placeat quod enim eum
          architecto sed! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Corporis libero, ut perspiciatis officia odio nostrum animi sint
          enim maiores dicta? Temporibus tempore at deserunt, placeat quod enim
          eum architecto sed! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          libero, ut perspiciatis officia odio nostrum animi sint enim maiores
          dicta? Temporibus tempore at deserunt, 
        </p>
      </div>
      <!-- Card for containing content of services-->
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="../assets/img/consulting.png" /></div>
          <h2>Consulting Services</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            libero, ut perspiciatis officia odio nostrum animi sint enim maiores
            dicta? Temporibus tempore at deserunt, placeat quod enim eum
            architecto sed! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis libero, ut perspiciatis officia odio nostrum animi
            sint enim maiores dicta? Temporibus tempore,<a
              href="https://google.com"
              style="color: crimson"
              >Read more</a
            >
          </p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="../assets/img/event.png" /></div>
          <h2>Events Publishing</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            libero, ut perspiciatis officia odio nostrum animi sint enim maiores
            dicta? Temporibus tempore at deserunt, placeat quod enim eum
            architecto sed! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis libero, ut perspiciatis officia odio nostrum animi
            sint enim maiores dicta? Temporibus tempore at deserunt,
            <a href="https://google.com" style="color: crimson">Read more</a>
          </p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="../assets/img/video.png" /></div>
          <h2>Videos Publishing</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            libero, ut perspiciatis officia odio nostrum animi sint enim maiores
            dicta? Temporibus tempore at deserunt, placeat quod enim eum
            architecto sed! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis libero, ut perspiciatis officia odio nostrum animi
            sint enim maiores dicta? Temporibus tempore at deserunt,
            <a href="https://google.com" style="color: crimson">Read more</a>
          </p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="../assets/img/news.png" /></div>
          <h2>Blog/News Publishing</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            libero, ut perspiciatis officia odio nostrum animi sint enim maiores
            dicta? Temporibus tempore at deserunt, placeat quod enim eum
            architecto sed! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis libero, ut perspiciatis officia odio nostrum animi
            sint enim maiores dicta? Temporibus tempore at deserunt,
            <a href="https://google.com" style="color: crimson">Read more</a>
          </p>
        </div>
      </div>
    </div>
  </section>
    </div>
   <Footer />
</template>

<script>
import Footer from "@/views/footer.vue";

export default {
  name: "App",
  components: {
    Footer,
      },
};
</script>
<style scoped>
.about{
    margin-top:100px;
    margin-bottom: 30px;
}
#services .services {
  flex-direction: column;
  max-width: 1500px;
  margin: auto;
  text-align: center;
  padding: 100px 0;
}
.section-title {
  font-size: 3rem;
  text-align: center;
  font-weight: 300;
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2rem;
}
.section-title span {
  color: crimson;
}
#services .section-title p {
  color: white;
  font-size: 1.4rem;
  margin-top: 5px;
  letter-spacing: 0.05rem;
  line-height: 2.5rem;
}
#services .section-bottom {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
}
#services .service-item {
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  border-radius: 10px;
  background-image: url();
  background-size: cover;
  margin: 10px 5%;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
#services .service-item::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: -1;
}
#services .service-item h2 {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}
#services .service-item p {
  font-size: 18px;
  color: white;
  text-align: left;
  line-height: 1.9rem;
}
</style>
