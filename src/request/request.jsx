import { extend } from "umi-request";

const request = extend({
  prefix: "http://192.168.43.226:8082",
  // prefix: "http://172.20.10.3:8082",
  timeout: 1000,
  headers: {
    // "Content-Type": "multipart/form-data"
    "Access-Control-Allow-Origin":"*",
    // 'token':localStorage.getItem('token')s
  },
  params: {
    // token: "xxx" // 所有请求默认带上 token 参数
  },
  errorHandler: function(error) {
    /* 异常处理 */
  }
});
const requests = extend({   //
  // prefix: "http://172.20.10.3:8081",
  prefix: "http://192.168.43.226:8081",
  
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin":"*",
    'token':localStorage.getItem('token'),
  
  },
  params: {
    // token: "xxx" // 所有请求默认带上 token 参数
  },
  errorHandler: function(error) {
    /* 异常处理 */
  }
});
const request3 = extend({
  // prefix: "http://172.20.10.3:8083",
  prefix: "http://192.168.43.226:8083",
  timeout: 1000,
  headers: {
    // "Content-Type": "multipart/form-data"
    "Access-Control-Allow-Origin":"*",
    "token":localStorage.getItem("token")
  },
  params: {
    // token: "xxx" // 所有请求默认带上 token 参数
  },
  errorHandler: function(error) {
    /* 异常处理 */
  }
});

const requestslog = extend({   //
  // prefix: "http://172.20.10.3:8081",
  prefix: "http://192.168.43.226:8081",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin":"*",
    // 'token':localStorage.getItem('token'),
  
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
function loginAPI(username,keywords){
  request('/user/login', {
    method: 'post',
    data: {
      username:username,
      password:keywords
    },
  })
    .then(function(response) {
      console.log(response);
      // {

      //   "code": 200,
      
      //   "message": "成功",
      
      //   "data": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwMDEzZGQzYTg0MGI0Y2QzOTcyM2YyNDk5OGZlM2I0MyIsInN1YiI6ImFkbWluIiwiaXNzIjoic2ciLCJpYXQiOjE2OTgwNzY4NTQsImV4cCI6MTY5ODA4MDQ1NH0.Qm59rIvDmaY3DgYfaxkA6vO2ex6hC0MoEDU8vlosMME",
      
      //   "ok": **true**
      
      // }
    })
}
export {request,requests, apitest,loginAPI ,requestslog,request3}