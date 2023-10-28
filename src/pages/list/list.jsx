

import { Layout, Space, Button, Dropdown, Radio } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { useEffect, useState } from 'react';
import { request,requests } from '@/request/request';
import Navigation from '../navigation/navigation'
import GoodsCard from '../goods/goodsCard'
import BreadCrumb from '../breadcrumb/breadcrumb.jsx'
// import Top from './navigation/top.jsx'
import LoginPage from '../login/login'
import CategoryItem from './categoryItem'

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

export default function List() {
  const [categoryList, setCategoryList] = useState([])
  const[category,setCategory] = useState(0)
  const[sort,setSort] = useState(0)
  const[goodsList,setGoodsList] = useState([])
  const categoryItem = categoryList.map(item =>
    <Radio.Button value={item.id} key={item.id}>{item.categoryName}</Radio.Button>
)
const onChange = (e) => {
  // console.log(e.target.value)
 setCategory(e.target.value)
//  console.log(sort)
 console.log(`radio checked:${e.target.value}`);
 request('/product/list/product',{
  method:'get',
  params:{
    sorted:sort,
    categoryId:e.target.value
  }
}).then(function (res) {
  console.log(res);
  setGoodsList(res.data.records)
})
};
const onChange2 = (e) => {
  // console.log(e.target.value)
  setSort(e.target.value)
    // console.log(sort)


  console.log(`radio checked:${e.target.value}`);
  request('/product/list/product',{
    method:'get',
    params:{
      sorted:e.target.value,
      categoryId:category
    }


  }).then(function (res) {
    console.log(res);
    setGoodsList(res.data.records)
  })
};

 
  useEffect(() => {
    
    console.log('获取分类列表')
    request('/category/list', {
      method: 'get',
      // params: { id: 1 },
    })
      .then(function (res) {
        console.log(res);
        setCategoryList(res.data)
       
      })
      .catch(function (error) {
        console.log(error);
      });

      request('/product/list/product',{
        method:'get',
        params:{
          sorted:sort,
          categoryId:category
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
          <Navigation state={'2'} />
        </div>
      </Header>
      <Content style={contentStyle}>
        <BreadCrumb title='商品列表' />

       
          {/* <CategoryItem list={categoryList} changeCategory={changeCategory} changeSort={changeSort} /> */}
          <div >
            <div>
                <span style={{color:"black"}}>分类</span>
                <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value={0} key={1}>全部商品</Radio.Button>
                    {categoryItem}
                </Radio.Group>
            </div>
            <div>
                <Radio.Group onChange={onChange2} defaultValue="a">
                    <Radio.Button value="0" key={0}>默认</Radio.Button>
                    <Radio.Button value="1" key={1}>按销售量降序</Radio.Button>
                    <Radio.Button value="2" key={2}>按销售量升序</Radio.Button>
                    <Radio.Button value="3" key={3}>按价格降序</Radio.Button>
                    <Radio.Button value="4" key={4}>按价格升序</Radio.Button>
                </Radio.Group>



            </div>
            </div>
            <div>
              {List}
            </div>


      </Content>
      <Footer style={footerStyle}>
        Footer
      </Footer>
    </Layout>

  );
}
