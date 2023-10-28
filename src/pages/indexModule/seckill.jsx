import { Button, Flex, Segmented } from 'antd';

import GoodsCard from '../goods/goodsCard'
import { useEffect, useState } from 'react'
import { request, requests } from '../../request/request'

export default function Seckill() {
    const [date, setdate] = useState([])

    useEffect(() => {
        // apitest()
        request('/product/list/discount',
            {
                method: 'get',
                params: {
                    page: 1,
                    pageSize: 18
                }
            }).then((res)=>{
                console.log(res)
                setdate(res.data.records)
            })
        console.log(1)
        
    }, [])
    const seckillList = date.map(goodsinfo =>
        <GoodsCard key={goodsinfo.id} info={goodsinfo} />
    )
    return (
        <div>
            <div>
                <span>秒杀专区</span>
                <span>精选商品限时秒杀</span>
                <span>查看更多</span>
                <div>

                    <Flex justify='space-evenly' align='center' gap='small' wrap="wrap">
                        {/* <Space size={[70, 1]} wrap> */}
                        {seckillList}
                        {/* </Space>     */}
                    </Flex>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}