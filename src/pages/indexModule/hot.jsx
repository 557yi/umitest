//主页商城热销
import { Button, Flex, Segmented,Space } from 'antd';


import GoodsCard from '../goods/goodsCard'
import { useEffect, useState } from 'react'
import { request } from '@/request/request';
// import { apitest } from '../../request/request'
const title1_s={
    fontSize: "large"
} 

export default function Hot() {
    const [date, setdate] = useState([])

    useEffect(() => {
        // apitest()
        request('/product/list/product',{
            method:'get',
            params:{
              sorted:1,
              categoryId:0
            }
          }).then((res)=>{
            console.log(res)
            setdate(res.data.records)
        })
        const HotList = date.map(goodsinfo =>
            <GoodsCard key={goodsinfo.id} info={goodsinfo} />
        )
        console.log(1)
      
    }, [])
    const hotList = date.map(goodsinfo =>
        <GoodsCard key={goodsinfo.id} info={goodsinfo} />
    )
    return (
        <div>
            <div>
                <span style={title1_s}>商城热销</span>
                <span>口碑好物，无限回购</span> 
                <span>查看更多</span>
                <div>
                    <Flex justify='space-evenly' align='center' gap='small' wrap="wrap">
                    {/* <Space size={[70, 1]} wrap> */}
                        {hotList}
                        {/* </Space>     */}
                    </Flex>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
}