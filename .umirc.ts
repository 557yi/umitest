import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    {
      path:"/list",component:"@/pages/list/list.jsx"
    }
    // {
    //   path:'/regist',
    //   component:'@/regist/regist'
    // }
  ],
  npmClient: 'npm',
});
