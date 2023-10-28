import { Layout, List } from 'antd';
const { Header, Footer, Content } = Layout;
import LoginPage from '../login/login.jsx'
import Navigation from '../navigation/navigation.jsx'
import { Link } from 'umi';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 105,
  paddingInline: 50,
  lineHeight: '40px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  margin: '0 auto',
  display: 'flex',
  width: 1000,
  minHeight: 500,
  color: '#000',
  backgroundColor: '#ede2e2',
};

const left = {
  textAlign: 'center',
  width: 200,
  minHeight: 500,
  backgroundColor: "#fff",
  color: 'gray',
  fontSize: '12px',
  lineHeight: '26px',
  marginRight: 20
}
const right = {
  width: 780,
  minHeight: 500,
  backgroundColor: '#fff',
}
const order = {
  margin: '22px auto',
  width: 750,
  minHeight: 450,
  border: '2px solid rgb(189, 191, 193)',
}

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export default function MyFootprint() {

  const footprintData = [
    {
      id: 10001,
      url: 'https://img.mall4j.com/2023/09/400c086e3b4f4f859b53b764f3645639.png',
      name: 'BOSE 工具箱 小号',
      detail: '小号 456',
      Price: '￥95',
    },
    {
      id: 10002,
      url: 'https://img.mall4j.com/2023/08/91d44ee19c574843ba9be27baa39c82a.jpg',
      name: '连衣裙',
      detail: '50kg M',
      Price: '￥100.01',
    },
  ];

  const FootprintList = (props) => {
    return (
      <>
        <ul>
          <li style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.1)', width: 750, padding: 10, marginRight: 0 }}>
            <div style={{ display: 'flex', flex: 2 }}>
              <div>
                <img src={props.info.url} style={{ width: 60, height: 60, marginRight: 16 }}></img>
              </div>
              <div>
                <p style={{ fontSize: 12, height: 30 }}>{props.info.name}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
              <p>{props.info.Price}</p>
              <p>查看商品</p>
            </div>
          </li>
        </ul>
      </>
    )
  }

  const footprintList = footprintData.map(listinfo =>
    <FootprintList key={listinfo.id} info={listinfo} />
  )
  return (
    <Layout>
      <Header style={headerStyle}>
        <div>
          <LoginPage />
          <Navigation state={'1'} />
        </div>
      </Header>
      <Content style={contentStyle}>
        <div style={left}>
          <h3 style={{ color: '#000' }}>个人中心</h3>
          <p><Link to={'/myorder'} style={{ color: 'gray' }}>我的订单</Link></p>
          <p><Link to={'/mycollection'} style={{ color: 'gray' }}>我的收藏</Link></p>
          <p><Link to={'/myfootprint'} style={{ color: 'gray' }}>我的足迹</Link></p>
        </div>
        <div style={right}>
          <div style={order}>
            <p style={{ fontSize: 12, lineHeight: 2.5, backgroundColor: 'rgba(0,0,0,0.05)', borderBottom: '1px solid rgb(189, 191, 193)', paddingLeft: 8 }}>
              我的足迹
            </p>
            {footprintList}
          </div>
        </div>
      </Content>
      <Footer style={footerStyle}>
        Footer
      </Footer>
    </Layout>

  );
}