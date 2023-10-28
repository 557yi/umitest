import { useState } from 'react';
import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from './login.css';
import { loginAPI, request, requests, requestslog } from '../../request/request'
import { Link } from 'umi';

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setUsername(values.username);
    setPassword(values.password);
 
    requestslog ('/user/login', {
      method: 'post',
      data: {
        username: values.username,
        password: values.password
      },
    })
      .then(function (res) {
        console.log(res);
        if (res.message == '成功') {
          alert('登录成功');
          setShowLogin(!showLogin);
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('username',res.data.userName)
          localStorage.setItem('addr',res.data.addr)
          localStorage.setItem("bankCard",res.data.bankCard)
        }

      })
  };

  const onFinish2 = (values) => {
    console.log('Received values of form: ', values);
    setUsername(values.username);
    setPassword(values.password);
 
    requestslog ('/user/add', {
      method: 'post',
      data: {
        username: values.username,
        password: values.password
      },
    })
      .then(function (res) {
        console.log(res);
        if (res.message == '成功') {
          alert('登录成功');
          setShowLogin(!showLogin);
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('username',res.data.userName)
          localStorage.setItem('addr',res.data.addr)
          localStorage.setItem("bankCard",res.data.bankCard)
        }

      })
  };
const loginOut=()=>{
  requests ('/user/logout', {
    method: 'get',
    
  }).then((res)=>{
    console.log(res)
    localStorage.removeItem('token')
  })
  
}
  const toggleLogin = () => {
    setShowLogin(!showLogin);

  };
  const toggleRegis = () => {
    setShowRegister(!showRegister);
  };
  const toggle = () => {
    toggleLogin()
    toggleRegis()
  }

  function LoginBox() {
    return (
      <div className={styles.login_box}>
        <Form
          name="normal_login"
          className={styles.login_form}
          onFinish={onFinish}
        >
          <span className={styles.close_button} onClick={() => { setShowLogin(!showLogin); }}>&times;</span>
          <h2>账号登录</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <button type="submit" className={styles.login_form_button}>
              Log in
            </button>
            <p style={{ display: 'inline-block', float: 'left' }}>
              <span onClick={toggle} style={{ color: 'red' }}>
                现在注册!
              </span>
            </p>
            <a className={styles.login_form_forgot} href="">
              忘记密码
            </a>
          </Form.Item>
          <div className={styles.tip}>
            登录代表同意<span>《服务条款》</span>和<span>《隐私策略》</span>
          </div>
        </Form>
      </div>
    );
  }

  function RegisterBox() {
    return (
      <div className={styles.login_box}>
        <Form
          name="normal_login"
          className={styles.login_form}
          onFinish={onFinish2}
        >
          <span className={styles.close_button} onClick={() => { setShowLogin(!showLogin); }}>&times;</span>
          <h2>账号注册</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <button type="submit" className={styles.login_form_button}>
              Sign in
            </button>
            <p style={{ display: 'inline-block', float: 'left' }}>
              <span onClick={toggle} style={{ color: 'red' }}>
                现在登录!
              </span>
            </p>

          </Form.Item>
          <div className={styles.tip}>
            注册代表同意<span>《服务条款》</span>和<span>《隐私策略》</span>
          </div>
        </Form>
      </div>
    );
  }

  return (
    <div className={styles.hd}>
      <ul style={{ display: 'flex' }}>
        <li>
          <button onClick={toggleLogin} className={styles.login_btn}>登录</button>
          {showLogin && (
            <div className={styles.overlay}>
              <LoginBox />
            </div>
          )}
          {showRegister && (
            <div className={styles.overlay}>
              <RegisterBox />
            </div>
          )}
           
        </li>
        <li>
          <button onClick={loginOut} className={styles.login_btn}>退出</button>
        </li>
        <li >
        <Link to={'/'} className={styles.login_btn}>
        商城首页
          </Link>
         
        </li>

        <li>
          <Link to={'/mycollection'} className={styles.login_btn}>
            个人中心
          </Link>

        </li>
      </ul>

    </div>
  );
}
