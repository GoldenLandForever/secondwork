import { createRouter, createWebHistory } from 'vue-router'
import pkIndexView from '../views/pk/pkIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import UserbotIndexView from '../views/user/bot/UserbotIndexView'
import NotFound from '../views/error/NotFound'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView'
import store from '../store/index'


const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk",
    meta:{
      requestAuth:true,
    }
  },
  {
    path:"/pk",
    component:pkIndexView,
    name:"pk_index",
    meta:{
      requestAuth:true,
    }
  },
  {
    path:"/record",
    component:RecordIndexView,
    name:"record_index",
    meta:{
      requestAuth:true,
    }
  },
  {
    path:"/ranklist",
    component:RanklistIndexView,
    name:"ranklist_index",
    meta:{
      requestAuth:true,
    }
  },
  {
    path:"/user/bot",
    component:UserbotIndexView,
    name:"user_bot_index",
    meta:{
      requestAuth:true,
    }
  },
  {
    path:"/user/account/login",
    component:UserAccountLoginView,
    name:"user_account_login",
    meta:{
      requestAuth:false,
    }
  },
  {
    path:"/user/account/register",
    component:UserAccountRegisterView,
    name:"user_account_register",
    meta:{
      requestAuth:false,
    }
  },
  {
    path:"/404",
    component:NotFound,
    name:"404",
    meta:{
      requestAuth:false,
    }
  },
  {
    path:"/:catchAll(.*)",
    redirect:"/404"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.requestAuth && !store.state.user.is_login){
    next({name:"user_account_login"});
  }else{
    next();
  }
})
export default router
