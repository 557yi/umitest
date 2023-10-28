import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    {
      path: "/list", component: "@/pages/list/list.jsx"
    },
    {
      path: "/detail", component: "@/pages/goods/detail.jsx"
    },
    { path: "/mycollection", component: "@/pages/personal/mycollection.jsx" },
    { path: "/myorder", component: "@/pages/personal/myorder.jsx" },
    { path: "/myfootprint", component: "@/pages/personal/myfootprint.jsx" },
    {path: "/radio", component: "@/pages/step/radiobutton.jsx"},
    { path: "/step", component: "@/pages/step/step.jsx" },
    {path:"/hot",component:"@/pages/hot/hot.jsx"},
    {path:"/seckill",component:"@/pages/seckill/seckill.jsx"}
    // {
    //   path:'/regist',
    //   component:'@/regist/regist'
    // }
  ],
  npmClient: 'npm',
});
