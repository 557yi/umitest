

import { Layout, Space, Button, Dropdown, Radio ,Flex} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { useEffect, useState } from 'react';
import { request,requests } from '@/request/request';
import Navigation from '../navigation/navigation'
import GoodsCard from '../goods/goodsCard'
import BreadCrumb from '../breadcrumb/breadcrumb.jsx'
// import Top from './navigation/top.jsx'
import LoginPage from '../login/login'


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

export default function Hot() {
  const [categoryList, setCategoryList] = useState([])
  const[category,setCategory] = useState(0)
  const[sort,setSort] = useState(0)
  const[goodsList,setGoodsList] = useState([])
  const categoryItem = categoryList.map(item =>
    <Radio.Button value={item.id} key={item.id}>{item.categoryName}</Radio.Button>
)


 
  useEffect(() => {
    
  

      request('/product/list/product',{
        method:'get',
        params:{
          sorted:1,
          categoryId:0
        }
      }).then(function (res) {
        console.log(res);
        setGoodsList(res.data.records)
       
      })

  },[])
  // const categoryItem = categoryList.map(item =>
  //   <Radio.Button value={item.categoryName} key={item[id]}>item</Radio.Button>
  // )
  const List = goodsList.map(goodsinfo =>
    <GoodsCard key={goodsinfo.id} info={goodsinfo} />
)
  return (
    // <Space direction="vertical" style={{ width: '100%', }}size={[0, 48]}>

    <Layout>
      <Header style={headerStyle}>

        <div>
          <LoginPage />
          <Navigation state={'3'} />
        </div>
      </Header>
      <Content style={contentStyle}>
        <BreadCrumb title='热销' />

       
          {/* <CategoryItem list={categoryList} changeCategory={changeCategory} changeSort={changeSort} /> */}
          <div >
          <Flex justify='space-evenly' align='center' gap='small' wrap="wrap">
                        {/* <Space size={[70, 1]} wrap> */}
                        {List}
                        {/* </Space>     */}
                    </Flex>
            </div>
           
            

      </Content>
      <Footer style={footerStyle}>
        Footer
      </Footer>
    </Layout>

  );
}
