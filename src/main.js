import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "@/utils/main.css"

createApp(App).use(router).mount('#app')

// router.beforeEach((to, from, next) => {
//     if (to.matched.some ((record)=> record.meta.reqireslogin)){
//         if (!Store.getters.loggedIn){     
//             next({name: "login"});
//         } else{
//             next();
//             setTimeout(() =>{
//                 window.scrollTo(0,0);
//             }, 100);
//             }
//         }else{
//             next();
//         }
//     });
// new Vue ({
//         router,
//         render:(h) => h (App),
// }).$mount ("#app");
