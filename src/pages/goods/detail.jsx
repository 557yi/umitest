import Navigation from '../navigation/navigation'
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styles from './detail.css'
import { useLocation, Link } from 'umi';
import moment from 'moment/moment';
import LoginPage from '../login/login'
import { requests } from '@/request/request';
import { useState } from 'react';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 150,
  paddingInline: 50,
  lineHeight: '40px',
  backgroundColor: 'white',
};
const contentStyle = {
  // textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '120px',
  marginTop:'100px',
  color: '#fff',
  backgroundColor: '#fff',
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
export default function Detail() {

  const location = useLocation();

  const time = moment(location.state.discountEnd, "YYYY-MM-DD").fromNow();
  console.log(location, moment(location.state.discountEnd, "YYYY-MM-DD").fromNow())
  function Seckillshow() {
    if (time.slice(0, 2) == "in") {
      return (<div className={styles.title}>
        秒杀距离活动 结束 仅剩：{time.slice(3, time.length - 1)}
      </div>)
    }
    else {
      return <div></div>
    }
  }
  function addshoppingcart() {
    requests("/shoppingcart/add", {
      method: 'get',
      params: {
        productId: location.state.id
      }

    }).then((res) => {
      if(res.code==200){
        alert("收藏成功")
      }
      console.log(res);
    }
    )
  }
  const [num, setnum] = useState(1)
  function reduce() {
    if (num > 1) {
      setnum(num - 1)
      console.log(num)
    }
  }
  function add() {
    setnum(num + 1)
    console.log(num)
  }

  const Price = () => {
    if (!(location.state.discountPrice)) {
      return <span style={{ fontSize: '20px', color: 'red' }}>{location.state.price}</span>
    } else {
      return (
        <span>
          <span style={{ fontSize: '20px', color: 'red' }}>{location.state.discountPrice}</span>
          <del style={{ fontSize: '12px' }}>{location.state.price}</del>
        </span>

      )
    }

  }

  return (
    // <Space direction="vertical" style={{ width: '100%', }}size={[0, 48]}>

    <Layout>
      <Header style={headerStyle}>
        <div>
          <LoginPage />
          <Navigation state={'2'} />
        </div>
      </Header>
      <Content style={contentStyle}>
        <div className={styles.content}>
          <img src='https://img.mall4j.com/2022/03/06e602a36a694d4ba9a1cf1fccfbe67a.jpg' alt='' className={styles.list_img}></img>
          <div className={styles.details}>
            <p className={styles.product_name}>{location.state.name}</p>
            <p className={styles.description}>{location.state.description}</p>

            <div className={styles.kill}>
              <Seckillshow />
              <div className={styles.detail}>
                价格
                <Price />
                <span style={{ paddingLeft: '240px' }}>剩余库存：{location.state.num}</span>
              </div>
            </div>

            <div>
              <span style={{ marginRight: '30px' }}>数量</span>
              <button onClick={reduce}>-</button>
              <span style={{ margin: '0 10px' }}>{num}</span>
              <button onClick={add}>+</button>
            </div>

            <div className={styles.btn}>
              <button style={{ backgroundColor: 'rgb(228, 59, 50)', color: '#fff', border: '0' }}>
                <Link to={'/step'} state={{ num: num, id: location.state.id,price:location.state.price,discountPrice:location.state.discountPrice,product_name:location.state.name}}>立即抢购</Link>
              </button>
              <button style={{ backgroundColor: 'rgb(0,0,0,0)' }} onClick={addshoppingcart}>
                收藏商品
              </button>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={footerStyle}>
        Footer
      </Footer>
    </Layout>

  );
}