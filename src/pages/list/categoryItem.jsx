

import { Radio } from 'antd';
import { Select, Space } from 'antd';


export default function CategoryItem(props) {
    const { changeCategory } = props.changeCategory;
    const { changeSort } = props.changeSort;
    const categoryItem = props.list.map(item =>
        <Radio.Button value={item.id} key={item.id}>{item.categoryName}</Radio.Button>
    )
    const onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
        props.changeCategory(e.target.value)
    };
    const onChange2 = (e) => {
        console.log(`radio checked:${e.target.value}`);
        props.changeSort(e.target.value)
    };
    
    return (
        <div >
            <div>
                <span>分类</span>
                <Radio.Group onChange={onChange} defaultValue={0}>
                    <Radio.Button value={0} key={1}>全部商品</Radio.Button>
                    {categoryItem}
                </Radio.Group>
            </div>
            <div>
                <Radio.Group onChange={onChange2} defaultValue="a">
                    <Radio.Button value={0} key={0}>默认</Radio.Button>
                    <Radio.Button value={1} key={1}>按销售量降序</Radio.Button>
                    <Radio.Button value={2} key={2}>按销售量升序</Radio.Button>
                    <Radio.Button value={3} key={3}>按价格降序</Radio.Button>
                    <Radio.Button value={4} key={4}>按价格升序</Radio.Button>
                </Radio.Group>



            </div>



        </div>
    );
}
