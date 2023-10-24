import { extend } from "umi-request";

const request = extend({
  prefix: "https://v.api.aa1.cn/api ",
  suffix: ".json",
  timeout: 1000,
  headers: {
    "Content-Type": "multipart/form-data"
  },
  params: {
    // token: "xxx" // 所有请求默认带上 token 参数
  },
  errorHandler: function(error) {
    /* 异常处理 */
  }
});

function apitest(){
    request
    .get("/api-wenan-anwei/index.php?type=json")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
export {apitest}