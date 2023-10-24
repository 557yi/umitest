//主页商城热销
import { Button, Flex, Segmented,Space } from 'antd';


import GoodsCard from '../goods/goodsCard'
import { useEffect, useState } from 'react'
// import { apitest } from '../../request/request'
const title1_s={
    fontSize: "large"
} 

export default function Hot() {
    const [date, setdate] = useState([])

    useEffect(() => {
        // apitest()
        console.log(1)
        setdate([
            {
                "id": 1715999147853676546,
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
                "id": 1715947853645676546,
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
            }, {
                "id": 1715999153645676546,
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
                "id": 1715953645676546,
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
                "id": 171599945676546,
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
                "id": 17159991645676546,
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