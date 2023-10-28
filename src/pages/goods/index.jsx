//主页

import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Navigation from './navigation/navigation.jsx'
import Carousels from './carousel/carousel.jsx';
import Seckill from './indexModule/seckill.jsx'
import Hot from './indexModule/hot.jsx'
// import Top from './navigation/top.jsx'
import LoginPage from './login/login.jsx'
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 150,
  paddingInline: 50,
  lineHeight: '40px',
  backgroundColor: 'white',
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


export default function HomePage() {
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
        <Carousels />
        <Seckill />
        <Hot />
      </Content>
      <Footer style={footerStyle}>
        Footer
      </Footer>
    </Layout>

  );
}
