import { Button, Flex, Segmented } from 'antd';

import GoodsCard from '../goods/goodsCard'
import { useEffect, useState } from 'react'
// import { apitest } from '../../request/request'

export default function Seckill() {
    const [date, setdate] = useState([])

    useEffect(() => {
        // apitest()
        console.log(1)
        setdate([
            {
                "id": 1715994509676546,
                "name": "98年老玉",
                "priority": null,
                "category": 1715966890162003969,
                "status": null,
                "imgurl": "https://img.mall4j.com/2022/04/e8d59c78d94d41f7a195cca74fafad3c.jpg",
                "description": "越带越温润，最合适不过",
                "price": 1999.00,
                "num": 12,
                "sold": 3,
                "discountPrice": 199.90,
                "createdAt": "2023-10-21T23:50:53.000+00:00",
                "deletedAt": null,
                "updatedAt": "2023-10-21T23:50:53.000+00:00",
                "discountBegin": "2023-10-22",
                "discountEnd": "2023-12-22"
            },
            {
                "id": 17159945676546,
                "name": "98年老玉",
                "priority": null,
                "category": 1715966890162003969,
                "status": null,
                "imgurl": "https://img.mall4j.com/2022/04/e8d59c78d94d41f7a195cca74fafad3c.jpg",
                "description": "越带越温润，最合适不过",
                "price": 1999.00,
                "num": 12,
                "sold": 3,
                "discountPrice": 199.90,
                "createdAt": "2023-10-21T23:50:53.000+00:00",
                "deletedAt": null,
                "updatedAt": "2023-10-21T23:50:53.000+00:00",
                "discountBegin": "2023-10-22",
                "discountEnd": "2023-12-22"
            },
        ])
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