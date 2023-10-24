//轮播图组件
import { useEffect, useState } from 'react'

import { Carousel } from 'antd';
const contentStyle = {
    height: '560px',
    color: '#fff',
    lineHeight: '560px',
    textAlign: 'center',
    background: '#364d79',
     display:''
};
const imgStyle={
    display:'block'
}
export default function Carousels() {
    const [imgSrc, setImgSrc] = useState([])

    useEffect(() => {
        // apitest()
        console.log('轮播加载')
        setImgSrc(
            ['https://ts1.cn.mm.bing.net/th/id/R-C.087a93f3063fda738347528819cfdb0e?rik=gXnqrex7wjbJyg&riu=http%3a%2f%2fpic22.nipic.com%2f20120731%2f10633269_111328287124_2.jpg&ehk=zN6NW0jvkruKS5UrV4q8LBZRmiDWJlnan7260gPfWlc%3d&risl=&pid=ImgRaw&r=0',
                'https://ts1.cn.mm.bing.net/th/id/R-C.087a93f3063fda738347528819cfdb0e?rik=gXnqrex7wjbJyg&riu=http%3a%2f%2fpic22.nipic.com%2f20120731%2f10633269_111328287124_2.jpg&ehk=zN6NW0jvkruKS5UrV4q8LBZRmiDWJlnan7260gPfWlc%3d&risl=&pid=ImgRaw&r=0',
            ])
    }, []
    )
    return (
        // <Carousel autoplay>
        //     <div>
        //         <img style={contentStyle} src={imgSrc[0]} ></img>
        //     </div>
        <Carousel autoplay>
            <div>
                <div style={contentStyle}><img style={imgStyle} src={imgSrc[0]} ></img></div>
            </div>
            <div>
                <div style={contentStyle}><img style={imgStyle} src={imgSrc[0]} ></img></div>
            </div>
            <div>
                <div style={contentStyle}><img style={imgStyle} src={imgSrc[0]} ></img></div>
            </div>
            <div>
                <div style={contentStyle}><img style={imgStyle} src={imgSrc[0]} ></img></div>
            </div>
        </Carousel>

    );
}