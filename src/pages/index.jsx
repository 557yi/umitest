//主页

import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Navigation from './navigation/navigation.jsx'
import Carousels from './carousel/carousel.jsx';
import Seckill from './indexModule/seckill.jsx'
import Hot from './indexModule/hot.jsx'


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
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


export default function HomePage() {
  return (
    // <Space direction="vertical" style={{ width: '100%', }}size={[0, 48]}>

    <Layout>
      <Header style={headerStyle}>
        <div>
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
