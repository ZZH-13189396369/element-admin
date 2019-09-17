import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import login from '../page/login.vue'
import home from '../page/home.vue'
import notFound from '../page/404.vue'
import sub11 from '../page/menu1/sub1.vue'
import sub12 from '../page/menu1/sub2.vue'
import sub21 from '../page/menu2/sub1.vue'
import sub22 from '../page/menu2/sub22.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    component: login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: notFound,
    name: '404',
    hidden: true
  },
  {
    path: '/menu1',
    component: home,
    name: '功能组件',
    iconCls: 'el-icon-share', //图标样式class
    children: [
      {
        path: 'sub1',
        component: sub11,
        name: '选项卡'
      },
      {
        path: 'sub2',
        component: sub12,
        name: 'form组件'
      },
			{
			  path: '404',
			  component: notFound,
			  name: '404'
			}
    ]
  },
  {
    path: '/menu2',
    component: home,
    name: '系统管理',
    iconCls: 'el-icon-setting',
    children: [
      {
        path: 'sub1',
        component: sub21,
        name: '配置管理'
      },
			{
			  path: 'sub22',
			  component: sub22,
			  name: '作者信息'
			}
    ]
  }
];
var router = new VueRouter({
    routes
})
export default router;
