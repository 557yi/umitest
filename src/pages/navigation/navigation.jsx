import { Menu, Input } from 'antd';
const { Search } = Input;
import React, { useState } from 'react';
import { Link } from 'umi';

const serach = {
  marginRight: '50px',
  width: 400,
}
const SearchStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 8,
  margin: '0 auto',
  width: 1600,
  height: 50,
  backgroundColor: 'white',
}
const buttonStyle = {
  marginTop: 2,
  marginLeft: 5,
  width: 120,
  height: 30,
  color: '#fff',
  backgroundColor: '#0077ff',
  border: 0,
}
const MenuStyle = {
  display: 'block',
  width: 420,
  margin: '2px auto',
  // paddingLeft: '50px',
  textAlign: 'center',
  color: 'white ',
};
const items = [
  {
    label: (
      <Link to="/">首页</Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link to="/list">
        商品
      </Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link to="/hot">
        热销
      </Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link to="/seckill">
        限时折扣
      </Link>
    ),
    key: '4',
  },
];

export default function Navigation(props) {
  const [current, setCurrent] = useState(props.state);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <div style={SearchStyle}>
        <Search
          placeholder="输入商品名"
          enterButton="搜索"
          onSearch={onSearch}
          style={serach}
        />
        <Link to="/myorder"><button style={buttonStyle}> 购物车<span></span></button></Link>
        
        <br></br>
        <div style={MenuStyle}>
         
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      </div>
      
    </>


  );

}