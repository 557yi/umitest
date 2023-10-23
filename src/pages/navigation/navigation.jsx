
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'umi';
// import { Flex} from 'antd';
const MenuStyle = {
    textAlign: 'center',
    color: 	'#000000',
};
const items = [
    {
        label: (
            <Link to="/">首页</Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link to="/list">
                商品
            </Link>
        ),
        key: '2',
    },
    {
        label: (
            <Link to="/">
                新品
            </Link>
        ),
        key: '3',
    },
    {
        label: (
            <Link to="/">
                限时折扣
            </Link>
        ),
        key: '4',
    },
];

export default function Navigation(props) {
    const [current, setCurrent] = useState(props.state);
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (

        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={MenuStyle} />


    );

}
