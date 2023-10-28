
import React, { useEffect, useState } from 'react';
import { Button, message, Input, Radio } from 'antd';
import { RightOutlined, FileDoneOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './step.css'; // 导入自定义的 CSS 文件
import Radiobutton from './radiobutton'
import { Layout, Space } from 'antd';
import Navigation from '../navigation/navigation.jsx'
import LoginPage from '../login/login'
import { Cascader } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { useLocation, Link } from 'umi';
import { request3 } from '@/request/request';
import moment from 'moment';
// import { Input } from 'antd';
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 105,
  paddingInline: 50,
  lineHeight: '40px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#ede2e2',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
    ],
  },
];




const Step = () => {


  const [current, setCurrent] = useState(0);
  const [date, setDate] = useState('')
  const [text, setText] = useState(localStorage.getItem('addr'));
  const [inputvalue, setinputvalue] = useState('');//note
  const[orderinfo,setorderinfo] = useState({})
  const [orderprice,setorderprice] = useState(0)
  const onChange = (_, selectedOptions) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
    // localStorage.setItem('addr',)
  };
  const location = useLocation();
  function inputchange(e) {
    setinputvalue(e.target.value)
    console.log(inputvalue)
  }
  function Priceshow() {
    if (location.state.discountPrice >= 1) {
      return <div> 商品价格：{location.state.num*location.state.discountPrice}</div>
    }
    else {<div> 商品价格：{location.state.num*location.state.price}</div> }
  }
  const steps = [

    {
      title: 'step 02.',
      content: (

        <div style={{ marginLeft: 5 }}>
          <h3>收货地址</h3>
          {
            <span>
              {text}
              &nbsp;
              <Cascader options={options} onChange={onChange}>
                <a>Change city</a>
              </Cascader>
            </span>
          }
          <div className="content-divider" />
          <h3>支付方式</h3>
          <Radiobutton />
          <div className="content-divider" />
          <h3>积分抵扣</h3>
          <Radio optionType="button">使用积分抵扣</Radio>
          <div className="content-divider" />
          <h3>订单备注</h3>
          <Input placeholder="请输入备注 " onChange={inputchange.bind(this)} defaultValue={inputvalue} />
        </div>

      ),
      icon: <RightOutlined />,
      description: '确认订单信息',
    },
    {
      title: 'step 03.',
      content: (
        <div style={{ marginLeft: 5 }}>
          <h3>订单内容</h3>

          商品名：{location.state.product_name}
          商品数量：{location.state.num}
          <Priceshow/>

          <div className="content-divider" />
          <h3>支付方式</h3>
          <Radiobutton />
          <div className="content-divider" />
          <h3>个人信息</h3>
          <div>收获地址：{localStorage.getItem("addr")}</div>
          <div className="content-divider" />
          <h3>确认订单</h3>
        </div>
      ),

      icon: <RightOutlined />,
      description: '支付完成订单',
    },
  ];
  useEffect(() => {
    if(location.state.discountPrice!=''){
setorderprice(location.state.num*location.state.discountPrice)
    }else{
      setorderprice(location.state.num*location.state.price)
    }
    console.log(location)
    setText(localStorage.getItem('addr'))
  }, [])
  const next = () => {
    setCurrent(current + 1);
    setDate(moment().format('lll'))

    request3('/order/add', {
      method: "post",
      data: {
        productId: location.state.id,
        orderNum: location.state.num,
        price: orderprice,
        // discountPrice: location.state.discountPrice,
        addr: text,
        userName: localStorage.getItem('username'),
        note: inputvalue,
        productName: location.state.product_name
      }
    }).then((res) => {
      console.log(res)
      setorderinfo(res.data)
    })
  };
const confirm = () =>{
  request3('/order/pay', {
    method: "post",
    data: {
      productId: location.state.id,
      num: location.state.num,
      price: orderprice,
      orderToken:orderinfo.orderToken,
      bankCard:localStorage.getItem("bankCard"),
      orderNo:orderinfo.orderNo
    }
}).then((res)=>{
console.log(res)
})
}
  const prev = () => {
    setCurrent(current - 1);
  };

  const handleStepClick = (index) => {
    setCurrent(index);
  };


  const contentsStyle = {
    lineHeight: '1.5',
    textAlign: 'left',
    marginTop: 16,

  };



  return (

    // <Space direction="vertical" style={{ width: '100%', }}size={[0, 48]}>

    <Layout>
      <Header style={headerStyle}>

        <div>
          <LoginPage />
          <Navigation state={'1'} />
        </div>
      </Header>
      <Content style={contentStyle}>
        <>
          <div className="step-container">
            <div className="icon">
              {/* 在此处放置你的图标元素 */}
              <FileDoneOutlined />
              <div className='icon-text'>提交订单</div>
            </div>

            <div className="step-bar">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`step-item ${current === index ? 'active' : ''}`}
                  onClick={() => handleStepClick(index)}
                >
                  <div className={`step-icon-wrapper ${current === index ? 'active' : ''}`}>
                    <div className="step-icon">{step.icon}</div>
                  </div>
                  <div className={`step-title ${current === index ? 'active' : ''}`} onClick={() => handleStepClick(index)}>
                    {step.title}
                  </div>
                  <div className={`step-description ${current === index ? 'active' : ''}`} onClick={() => handleStepClick(index)}>
                    {step.description}
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* 添加分隔线 */}
          <div className="step-divider" />
          <div style={contentsStyle}>
            {steps[current].content}
          </div>

          <div className='step-content' style={{ marginTop: 24 }}>
           
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                提交订单
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={confirm}>
                确认支付
              </Button>
            )}

          </div>
        </>
      </Content>
      <Footer style={footerStyle}>
        Footer
      </Footer>
    </Layout>



  );
};

export default Step;
