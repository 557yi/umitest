


import { Breadcrumb } from 'antd';


export default function BreadCrumb(props) {
    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: 'Home',
                    },
                    
                    {
                        title:props.title,
                    },
                ]}
            />

        </div>
    );
}
