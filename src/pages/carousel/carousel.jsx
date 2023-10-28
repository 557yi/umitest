//轮播图组件
import { useEffect, useState } from 'react'
import { request } from '@/request/request';
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
    display:'block',
    width:'1400px',
    height:"560px"
}
export default function Carousels() {
    const [imgSrc, setImgSrc] = useState([])

    useEffect(() => {
        // apitest()
        console.log('轮播加载')
       request('/product/list/pic',{
        method:'get'
       }).then((res)=>{
        console.log(res)
        let arr = []
        res.data.map((item)=>{
            arr.push(item.imgurl)
        })
        console.log(arr)
        setImgSrc(arr)
       })
       
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
                <div style={contentStyle}><img style={imgStyle} src={imgSrc[1]} ></img></div>
            </div>
            <div>
                <div style={contentStyle}><img style={imgStyle} src={imgSrc[2]} ></img></div>
            </div>
            <div>
                <div style={contentStyle}><img style={imgStyle} src={imgSrc[3]} ></img></div>
            </div>
            
        </Carousel>

    );
}